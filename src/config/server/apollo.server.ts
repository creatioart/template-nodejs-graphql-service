import {Server} from 'http';
import {Logger} from '@creatioart-js/express-logging';
import {EnvironmentType, ErrorHelper, ErrorStatus} from '@creatioart-js/express-core';
import {CoreServiceLocator} from '../../locator/core.service.locator.js';
import {ApolloServer} from '@apollo/server';
import {ErrorCode, InternalError} from '@creatioart-js/express-error';
import {ErrorResponse} from '@creatioart-js/express-error-handler';
import {formatErrorHandler} from '@creatioart-js/graphql-error';
import {cacheControlDisabledPlugin, drainHttpServerPlugin, inlineTraceDisabledPlugin, landingServerPagePlugin,
        serverLoggerResponsePlugin, subscriptionServerStartPlugin} from '@creatioart-js/graphql-core';
import {AppModules} from '../../modules/index.js';
import {Disposable} from 'graphql-ws';
import {applyMiddleware} from 'graphql-middleware';
import {apolloGraphQLAuthorization} from '../security/apolloGraphQLAuthorization.js';
import {AllowedHeadersConfig} from '@creatioart-js/express-security';

/**
 * Start Apollo Server
 * @param httpServer HTTP Server
 * @param apolloSubscriptionCleanup Subscription Server Cleanup
 * @returns Apollo Server
 */
export async function startApolloServer(httpServer: Server, apolloSubscriptionCleanup: Disposable)
                                        : Promise<ApolloServer> {
  try {
    const APP_ENV: any = process.env['APP_ENV'] ?? '';
    Logger().info(`Start Apollo Server. Environments: ${APP_ENV}`);

    const apolloExecutor = AppModules.createApolloExecutor();
    const apolloSchema = applyMiddleware(AppModules.schema, ...[apolloGraphQLAuthorization]);

    const apolloServer = new ApolloServer({
      gateway: {
        async load() {
            return {executor: apolloExecutor};
        },
        onSchemaLoadOrUpdate(callback: any) {
          callback({apiSchema: apolloSchema} as any);
            return () => {};
          },
          async stop() {},
        },
      formatError: formatErrorHandler,
      introspection: APP_ENV !== EnvironmentType.prod,
      csrfPrevention: {
        requestHeaders: AllowedHeadersConfig
      },
      plugins: [
        drainHttpServerPlugin(httpServer),
        landingServerPagePlugin(APP_ENV),
        subscriptionServerStartPlugin(apolloSubscriptionCleanup),
        serverLoggerResponsePlugin,
        inlineTraceDisabledPlugin(),
        cacheControlDisabledPlugin()
      ],
    });

    // Start Apollo Server
    await apolloServer.start();
    Logger().info('Apollo Server Completed');

    return apolloServer;
  } catch (err) {
    if (err instanceof ErrorResponse) {
      throw err;
    }

    Logger().error(ErrorHelper.toErrorString(err, 'Unknown'));
    throw new ErrorResponse(new InternalError(ErrorStatus.INTERNAL_SERVER_ERROR,
      CoreServiceLocator.LocaleService().translate('fail_start_apollo'),
      ErrorCode.INTERNAL_SERVER_ERROR_BASE
    ));
  }
}

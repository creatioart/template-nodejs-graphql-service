import {Server} from 'http';
import {Logger} from '@creatioart-js/express-logging';
import {ErrorHelper, ErrorStatus} from '@creatioart-js/express-core';
import {ErrorCode, InternalError} from '@creatioart-js/express-error';
import {ErrorResponse} from '@creatioart-js/express-error-handler';
import {WebSocketServer} from 'ws';
import {useServer} from 'graphql-ws/use/ws';
import {CoreServiceLocator} from '../../locator/core.service.locator.js';
import {Disposable} from 'graphql-ws';
import {AppModules} from '../../modules/index.js';

/**
 * Start Apollo Subscription
 * @param httpServer HTTP Server
 * @returns Subscription Server Cleanup
 */
export async function startApolloSubscription(httpServer: Server): Promise<Disposable> {
  try {
    Logger().info('Start Apollo Subscription');
    const apolloSchema = AppModules.schema;

    // Creating the WebSocket server
    const subscriptionServer = new WebSocketServer({
      server: httpServer,
      path: '/',
    });

    // WebSocketServer start listening.
    const subscriptionServerCleanup = useServer({schema: apolloSchema}, subscriptionServer);


    Logger().info('Apollo Subscription Completed');

    return subscriptionServerCleanup;
  } catch (err) {
    if (err instanceof ErrorResponse) {
      throw err;
    }

    Logger().error(ErrorHelper.toErrorString(err, 'Unknown'));
    throw new ErrorResponse(new InternalError(ErrorStatus.INTERNAL_SERVER_ERROR,
      CoreServiceLocator.LocaleService().translate('fail_start_apollo_subscription'),
      ErrorCode.INTERNAL_SERVER_ERROR_BASE
    ));
  }
}

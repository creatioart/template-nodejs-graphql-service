import 'reflect-metadata';

import cors from 'cors';
import {exit} from 'process';
import * as http from 'http';
import express from 'express';
import compression from 'compression';
import * as appConainer from './config/container/index.js';
import * as apolloServer from './config/server/apollo.server.js';
import * as apolloSubscription from './config/server/apollo.subscription.js';
import {Logger} from '@creatioart-js/express-logging';
import {EnvironmentType, ErrorHelper} from '@creatioart-js/express-core';
import {SecurityDirectiveType, crossOriginResourcePolicy, createExpressJsonMiddleware,
        createExpressUrlencodedMiddleware} from '@creatioart-js/express-security';
import {registerUploadExpressMiddleware, setGraphQLAppSecurity} from '@creatioart-js/graphql-core';
import {registerApolloGraphQLExpressMiddleware} from '@creatioart-js/graphql-core';
import * as httpApplication from './http/index.js';
import {initializeContext} from './config/context/apollo.context.js';


let app = express();

// Use Express App Security
app = setGraphQLAppSecurity(app,
  [
    EnvironmentType.local,
    EnvironmentType.dev,
    EnvironmentType.test,
    EnvironmentType.prod
  ],
  [
    SecurityDirectiveType.CROSS_ORIGIN_RESOURCE,
    SecurityDirectiveType.CONTENT_SECURITY_POLICY,
    SecurityDirectiveType.X_FRAME_POLICY,
    SecurityDirectiveType.X_POWERED_BY_POLICY,
    SecurityDirectiveType.NO_CACHE_POLICY,
    SecurityDirectiveType.PERMISSIONS_POLICY,
    SecurityDirectiveType.STRICT_TRANSPORT_POLICY,
    SecurityDirectiveType.X_CONTENT_TYPE_POLICY,
  ]
);

// Use to compress response bodies for all request.
app.use(compression());

// Support json bodies & Set the body size limit to 32 megabyte
app.use(createExpressJsonMiddleware());

// Support encoded bodies & Set the body size limit to 32 megabyte
app.use(createExpressUrlencodedMiddleware());

// trust proxy to one of the values listed in the following table
app.enable('trust proxy');

process.on('SIGTERM', function () {
  Logger().info(`Server received SIGTERM, exiting gracefully`);
  exit(0);
});

// Register Application Routers
httpApplication.registerApplicationRouters(app);

// Use to upload files
app.use('/', registerUploadExpressMiddleware());

/**
 * Create HTTP Server
 */
const httpServer = http.createServer(app);

(async () => {
  // Register the Container
  await appConainer.initializeApp();

  // Apollo Configuration here.
  const apolloSubscriptionCleanup = await apolloSubscription.startApolloSubscription(httpServer);
  const apolloServerIntance = await apolloServer.startApolloServer(httpServer, apolloSubscriptionCleanup);

  // Mount Apollo middleware here.
  app.use('/', cors(crossOriginResourcePolicy()), createExpressJsonMiddleware(32),
          registerApolloGraphQLExpressMiddleware(apolloServerIntance, initializeContext));

  /**
   * Start the server app.
   * Listen to the App specified port, or 4000 otherwise
   */
  const PORT = process.env['PORT'] ?? 4000;
  httpServer.listen(PORT, () => {
    Logger().info(`Server listening at http://localhost:${PORT} ...`);
  });
})().catch((e) => Logger().error(ErrorHelper.toErrorString(e, 'Unknown')));

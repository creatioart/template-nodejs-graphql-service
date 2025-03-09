import {ErrorStatus, TraceHelper} from '@creatioart-js/express-core';
import {Logger} from '@creatioart-js/express-logging';
import {Application, Request, Response} from 'express';

/**
 * Register Health Router
 * @param app Express
 * @returns None
 */
export function registerHealthRouter(app: Application) {
  /**
   * Mount Express Router
   */
  app.post('/health', async (request: Request, response: Response) => {
    const traceId = TraceHelper.getEventTraceIdentifier(request);
    Logger().info(`Health. Trace: ${traceId}`);

    response.status(ErrorStatus.OK).send('UP');
  });
}

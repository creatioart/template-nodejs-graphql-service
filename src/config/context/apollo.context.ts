import {Request} from 'express';
import {TraceHelper} from '@creatioart-js/express-core';
import {ContextModel} from '@creatioart-js/graphql-core';

/**
 * Initialize Context
 * @param request Request
 * @returns Context
 */
export async function initializeContext(request: Request): Promise<ContextModel> {
  const context = ContextModel.build();

  // Set Trace Identifier
  context.traceId = TraceHelper.getHTTPTraceIdentifier(request);

  // Set Client IP
  context.clientIP = (request.ip !== undefined && request.ip !== null && request.ip !== '')
                        ? request.ip
                        : '::1';

  // Set Authorization Token
  const authorizationHeader = request.headers !== undefined && request.headers !== null &&
                              request.headers.authorization !== undefined && request.headers.authorization !== null
                                ? request.headers.authorization
                                : undefined;
  context.authorizationToken = authorizationHeader !== undefined && authorizationHeader.includes('Bearer') === true
                                  ? authorizationHeader.replace('Bearer ', '')
                                  : '';

  // Set Identity Account
  context.identityAccount = undefined;

  return context;
}

import {ErrorStatus} from '@creatioart-js/express-core';
import {CoreServiceLocator} from '../../locator/core.service.locator.js';
import {EntityError, ErrorCode} from '@creatioart-js/express-error';
import {ErrorResponse} from '@creatioart-js/express-error-handler';

/**
 * Verify context authorization
 * @param resolve Request resolve
 * @param root Request root
 * @param args Request args
 * @param context Request context
 * @param info Request info
 * @returns Request execution
 */
export const apolloGraphQLAuthorization = async (resolve: any, root: any, args: any, context: any, info: any) => {
  // Check for userAccount in context object
  if (context.authorizationToken !== undefined && context.authorizationToken !== null &&
      context.authorizationToken !== '') {
    return await resolve(root, args, context, info);
  }

  throw new ErrorResponse(new EntityError(ErrorStatus.UNAUTHORIZED,
    CoreServiceLocator.LocaleService().translate('unauthorized'),
    ErrorCode.UNAUTHORIZED_BASE, 'Authorization', undefined
  ));
};

import {Logger} from '@creatioart-js/express-logging';
import {CoreModule} from '../../generated.types/module.types.js';
import {ContextModel} from '@creatioart-js/graphql-core';

type EmptyResolver = CoreModule.QueryResolvers['_'];

/**
 * Empty Query Resolver
 */
export const emptyQueryResolver: EmptyResolver = async (_: any, __: any, context: ContextModel) => {
  Logger().info(`Query [Empty] received at: ${new Date().toISOString()}. Trace: ${context.traceId}`);

  return 'EMPTY';
};

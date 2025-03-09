import {Logger} from '@creatioart-js/express-logging';
import {CoreModule} from '../../generated.types/module.types.js';
import {ContextModel} from '@creatioart-js/graphql-core';

type EmptyResolver = CoreModule.MutationResolvers['_'];

/**
 * Empty Mutation Resolver
 */
export const emptyMutationResolver: EmptyResolver = async (_: any, __: any, context: ContextModel) => {
  Logger().info(`Mutation [Empty] received at: ${new Date().toISOString()}. Trace: ${context.traceId}`);

  return 'EMPTY';
};

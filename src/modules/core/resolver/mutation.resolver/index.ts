import {CoreModule} from '../../generated.types/module.types.js';
import {emptyMutationResolver} from './empty.resolver.js';

/**
 * Mutation Resolvers
 */
export const mutationResolvers: CoreModule.MutationResolvers = {
  _: emptyMutationResolver
};

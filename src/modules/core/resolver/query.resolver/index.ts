import {CoreModule} from '../../generated.types/module.types.js';
import {emptyQueryResolver} from './empty.resolver.js';

/**
 * Query Resolvers
 */
export const queryResolvers: CoreModule.QueryResolvers = {
  _: emptyQueryResolver
};

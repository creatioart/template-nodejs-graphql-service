import {TemplateModule} from '../generated.types/module.types.js';
import {queryResolvers} from './query.resolver/index.js';
import {mutationResolvers} from './mutation.resolver/index.js';
import {entityFiledResolvers} from './entity.filed.resolver/index.js';

/**
 * Order Module Resolvers
 */
export const resolvers: TemplateModule.Resolvers = {
  // Query Entrypoint
  Query: queryResolvers,

  // Mutation Entrypoint
  Mutation: mutationResolvers,

  // Subscription Entrypoint

  // Entities
  Template: entityFiledResolvers.templateResolvers

  // Problems

  // Scalars
};

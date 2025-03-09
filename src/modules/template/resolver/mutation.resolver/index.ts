import {TemplateModule} from '../../generated.types/module.types.js';
import {templateCreateMutationResolver} from './template.create.resolver.js';
import {templateUpdateMutationResolver} from './template.update.resolver.js';
import {templateDeleteMutationResolver} from './template.delete.resolver.js';

/**
 * Mutation Resolvers
 */
export const mutationResolvers: TemplateModule.MutationResolvers = {
  templateCreate: templateCreateMutationResolver,
  templateUpdate: templateUpdateMutationResolver,
  templateDelete: templateDeleteMutationResolver
};

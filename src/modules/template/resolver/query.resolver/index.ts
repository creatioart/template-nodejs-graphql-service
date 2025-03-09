import {TemplateModule} from '../../generated.types/module.types.js';
import {templatesQueryResolver} from './templates.resolver.js';

/**
 * Query Resolvers
 */
export const queryResolvers: TemplateModule.QueryResolvers = {
  templates: templatesQueryResolver
};

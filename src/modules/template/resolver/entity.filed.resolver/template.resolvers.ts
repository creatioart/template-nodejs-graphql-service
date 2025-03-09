import {TemplateResolvers} from '../../../../generated.types/graphql.js';

/**
 * Template Resolvers
 */
export const templateResolvers: TemplateResolvers = {
  /**
   * Id Field
   */
  id: (template) => {
    return template.id;
  },

  /**
   * Name Field
   */
  name: (template) => {
    return template.name;
  },

  /**
   * Type Field
   */
  description: (template) => {
    return template.description;
  }
};

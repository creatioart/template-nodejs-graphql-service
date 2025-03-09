import {ValidationProblemResolvers} from '../../../../generated.types/graphql.js';

/**
 * Validation Problem Resolvers
 */
export const validationProblemResolvers: ValidationProblemResolvers = {
  /**
   * Status Field
   */
  status: (validationProblem) => {
    return validationProblem.status;
  },

  /**
   * Message Field
   */
  message: (validationProblem) => {
    return validationProblem.message;
  },

  /**
   * Code Field
   */
  code: (validationProblem) => {
    return validationProblem.code;
  },

  /**
   * Entity Type Name Field
   */
  entityTypeName: (validationProblem) => {
    return validationProblem.entityTypeName;
  },

  /**
   * Validation Field
   */
  validation: (validationProblem) => {
    return validationProblem.validation;
  },
};

import {BadRequestProblemResolvers} from '../../../../generated.types/graphql.js';

/**
 * Bad Request Problem Resolvers
 */
export const badRequestProblemResolvers: BadRequestProblemResolvers = {
  /**
   * Status Field
   */
  status: (badRequestProblem) => {
    return badRequestProblem.status;
  },

  /**
   * Message Field
   */
  message: (badRequestProblem) => {
    return badRequestProblem.message;
  },

  /**
   * Code Field
   */
  code: (badRequestProblem) => {
    return badRequestProblem.code;
  },

  /**
   * Entity Type Name Field
   */
  entityTypeName: (badRequestProblem) => {
    return badRequestProblem.entityTypeName;
  },
};

import {NotNoundProblemResolvers} from '../../../../generated.types/graphql.js';

/**
 * Not Nound Problem Resolvers
 */
export const notNoundProblemResolvers: NotNoundProblemResolvers = {
  /**
   * Status Field
   */
  status: (notNoundProblem) => {
    return notNoundProblem.status;
  },

  /**
   * Message Field
   */
  message: (notNoundProblem) => {
    return notNoundProblem.message;
  },

  /**
   * Code Field
   */
  code: (notNoundProblem) => {
    return notNoundProblem.code;
  },

  /**
   * Entity Type Name Field
   */
  entityTypeName: (notNoundProblem) => {
    return notNoundProblem.entityTypeName;
  },
};

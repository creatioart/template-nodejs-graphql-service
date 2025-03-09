import {InternalServiceProblemResolvers} from '../../../../generated.types/graphql.js';

/**
 * Internal Service Problem Resolvers
 */
export const internalServiceProblemResolvers: InternalServiceProblemResolvers = {
  /**
   * Status Field
   */
  status: (internalServiceProblem) => {
    return internalServiceProblem.status;
  },

  /**
   * Message Field
   */
  message: (internalServiceProblem) => {
    return internalServiceProblem.message;
  },

  /**
   * Code Field
   */
  code: (internalServiceProblem) => {
    return internalServiceProblem.code;
  }
};

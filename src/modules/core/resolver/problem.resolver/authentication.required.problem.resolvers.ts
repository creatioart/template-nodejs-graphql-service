import {AuthenticationRequiredProblemResolvers} from '../../../../generated.types/graphql.js';

/**
 * Authentication Required Problem Resolvers
 */
export const authenticationRequiredProblemResolvers: AuthenticationRequiredProblemResolvers = {
  /**
   * Status Field
   */
  status: (authenticationRequiredProblem) => {
    return authenticationRequiredProblem.status;
  },

  /**
   * Message Field
   */
  message: (authenticationRequiredProblem) => {
    return authenticationRequiredProblem.message;
  },

  /**
   * Code Field
   */
  code: (authenticationRequiredProblem) => {
    return authenticationRequiredProblem.code;
  },
};

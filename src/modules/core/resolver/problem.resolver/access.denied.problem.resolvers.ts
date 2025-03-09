import {AccessDeniedProblemResolvers} from '../../../../generated.types/graphql.js';

/**
 * Access Denied Problem Resolvers
 */
export const accessDeniedProblemResolvers: AccessDeniedProblemResolvers = {
  /**
   * Status Field
   */
  status: (accessDeniedProblem) => {
    return accessDeniedProblem.status;
  },

  /**
   * Message Field
   */
  message: (accessDeniedProblem) => {
    return accessDeniedProblem.message;
  },

  /**
   * Code Field
   */
  code: (accessDeniedProblem) => {
    return accessDeniedProblem.code;
  },

  /**
   * Entity Type Name Field
   */
  entityTypeName: (accessDeniedProblem) => {
    return accessDeniedProblem.entityTypeName;
  },
};

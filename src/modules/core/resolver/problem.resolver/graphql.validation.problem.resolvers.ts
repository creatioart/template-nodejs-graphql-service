import {GraphqlValidationProblemResolvers} from '../../../../generated.types/graphql.js';

/**
 * Graphql Validation Problem Resolvers
 */
export const graphqlValidationProblemResolvers: GraphqlValidationProblemResolvers = {
  /**
   * Status Field
   */
  status: (graphqlValidationProblem) => {
    return graphqlValidationProblem.status;
  },

  /**
   * Message Field
   */
  message: (graphqlValidationProblem) => {
    return graphqlValidationProblem.message;
  },

  /**
   * Code Field
   */
  code: (graphqlValidationProblem) => {
    return graphqlValidationProblem.code;
  }
};

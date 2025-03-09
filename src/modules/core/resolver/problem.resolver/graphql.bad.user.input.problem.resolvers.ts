import {GraphqlBadUserInputProblemResolvers} from '../../../../generated.types/graphql.js';

/**
 * Graphql Bad User Input Problem Resolvers
 */
export const graphqlBadUserInputProblemResolvers: GraphqlBadUserInputProblemResolvers = {
  /**
   * Status Field
   */
  status: (graphqlBadUserInputProblem) => {
    return graphqlBadUserInputProblem.status;
  },

  /**
   * Message Field
   */
  message: (graphqlBadUserInputProblem) => {
    return graphqlBadUserInputProblem.message;
  },

  /**
   * Code Field
   */
  code: (graphqlBadUserInputProblem) => {
    return graphqlBadUserInputProblem.code;
  }
};

import {GraphqlParseProblemResolvers} from '../../../../generated.types/graphql.js';

/**
 * Graphql Parse Problem Resolvers
 */
export const graphqlParseProblemResolvers: GraphqlParseProblemResolvers = {
  /**
   * Status Field
   */
  status: (graphqlParseProblem) => {
    return graphqlParseProblem.status;
  },

  /**
   * Message Field
   */
  message: (graphqlParseProblem) => {
    return graphqlParseProblem.message;
  },

  /**
   * Code Field
   */
  code: (graphqlParseProblem) => {
    return graphqlParseProblem.code;
  }
};

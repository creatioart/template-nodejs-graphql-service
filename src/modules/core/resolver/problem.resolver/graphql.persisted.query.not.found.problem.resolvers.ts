import {GraphqlPersistedQueryNotFoundProblemResolvers} from '../../../../generated.types/graphql.js';

/**
 * Graphql Persisted Query Not Found Problem Resolvers
 */
export const graphqlPersistedQueryNotFoundProblemResolvers: GraphqlPersistedQueryNotFoundProblemResolvers = {
  /**
   * Status Field
   */
  status: (graphqlPersistedQueryNotFoundProblem) => {
    return graphqlPersistedQueryNotFoundProblem.status;
  },

  /**
   * Message Field
   */
  message: (graphqlPersistedQueryNotFoundProblem) => {
    return graphqlPersistedQueryNotFoundProblem.message;
  },

  /**
   * Code Field
   */
  code: (graphqlPersistedQueryNotFoundProblem) => {
    return graphqlPersistedQueryNotFoundProblem.code;
  }
};

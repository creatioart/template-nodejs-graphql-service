import {GraphqlPersistedQueryNotSupportedProblemResolvers} from '../../../../generated.types/graphql.js';

/**
 * Graphql Persisted Query Not Supported Problem Resolvers
 */
export const graphqlPersistedQueryNotSupportedProblemResolvers: GraphqlPersistedQueryNotSupportedProblemResolvers = {
  /**
   * Status Field
   */
  status: (graphqlPersistedQueryNotSupportedProblem) => {
    return graphqlPersistedQueryNotSupportedProblem.status;
  },

  /**
   * Message Field
   */
  message: (graphqlPersistedQueryNotSupportedProblem) => {
    return graphqlPersistedQueryNotSupportedProblem.message;
  },

  /**
   * Code Field
   */
  code: (graphqlPersistedQueryNotSupportedProblem) => {
    return graphqlPersistedQueryNotSupportedProblem.code;
  }
};

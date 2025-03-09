import {GraphqlOperationResolutionFailureProblemResolvers} from '../../../../generated.types/graphql.js';

/**
 * Graphql Operation Resolution Failure Problem Resolvers
 */
export const graphqlOperationResolutionFailureProblemResolvers: GraphqlOperationResolutionFailureProblemResolvers = {
  /**
   * Status Field
   */
  status: (graphqlOperationResolutionFailureProblem) => {
    return graphqlOperationResolutionFailureProblem.status;
  },

  /**
   * Message Field
   */
  message: (graphqlOperationResolutionFailureProblem) => {
    return graphqlOperationResolutionFailureProblem.message;
  },

  /**
   * Code Field
   */
  code: (graphqlOperationResolutionFailureProblem) => {
    return graphqlOperationResolutionFailureProblem.code;
  }
};

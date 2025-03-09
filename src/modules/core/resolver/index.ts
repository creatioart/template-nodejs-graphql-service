import {GraphQLDateTime, GraphQLTimestamp} from 'graphql-scalars';
import {CoreModule} from '../generated.types/module.types.js';
import {problemFieldResolvers} from './problem.resolver/index.js';
import {queryResolvers} from './query.resolver/index.js';
import {mutationResolvers} from './mutation.resolver/index.js';
import {subscriptionResolvers} from './subscription.resolver/index.js';
import {entityFiledResolvers} from './entity.filed.resolver/index.js';
import {scalarResolver} from './scalar.resolver/index.js';

/**
 * Core Module Resolvers
 */
export const resolvers: CoreModule.Resolvers = {
  // Query Entrypoint
  Query: queryResolvers,

  // Mutation Entrypoint
  Mutation: mutationResolvers,

  // Subscription Entrypoint
  Subscription: subscriptionResolvers,

  // Entities
  ValidationError: entityFiledResolvers.validationErrorResolvers,

  // Problems
  BadRequestProblem: problemFieldResolvers.badRequestProblemResolvers,
  AuthenticationRequiredProblem: problemFieldResolvers.authenticationRequiredProblemResolvers,
  AccessDeniedProblem: problemFieldResolvers.accessDeniedProblemResolvers,
  NotNoundProblem: problemFieldResolvers.notNoundProblemResolvers,
  ValidationProblem: problemFieldResolvers.validationProblemResolvers,
  InternalServiceProblem: problemFieldResolvers.internalServiceProblemResolvers,
  GraphqlParseProblem: problemFieldResolvers.graphqlParseProblemResolvers,
  GraphqlValidationProblem: problemFieldResolvers.graphqlValidationProblemResolvers,
  GraphqlBadUserInputProblem: problemFieldResolvers.graphqlBadUserInputProblemResolvers,
  GraphqlPersistedQueryNotFoundProblem: problemFieldResolvers.graphqlPersistedQueryNotFoundProblemResolvers,
  GraphqlPersistedQueryNotSupportedProblem: problemFieldResolvers.graphqlPersistedQueryNotSupportedProblemResolvers,
  GraphqlOperationResolutionFailureProblem: problemFieldResolvers.graphqlOperationResolutionFailureProblemResolvers,

  // Scalars
  Timestamp: GraphQLTimestamp,
  Object: scalarResolver.object,
  Date: GraphQLDateTime
};

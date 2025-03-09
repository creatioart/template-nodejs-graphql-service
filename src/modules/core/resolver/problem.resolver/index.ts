import {badRequestProblemResolvers} from './bad.request.problem.resolvers.js';
import {authenticationRequiredProblemResolvers} from './authentication.required.problem.resolvers.js';
import {accessDeniedProblemResolvers} from './access.denied.problem.resolvers.js';
import {notNoundProblemResolvers} from './not.nound.problem.resolvers.js';
import {validationProblemResolvers} from './validation.problem.resolvers.js';
import {internalServiceProblemResolvers} from './internal.service.problem.resolvers.js';
import {graphqlParseProblemResolvers} from './graphql.parse.problem.resolvers.js';
import {graphqlValidationProblemResolvers} from './graphql.validation.problem.resolvers.js';
import {graphqlBadUserInputProblemResolvers} from './graphql.bad.user.input.problem.resolvers.js';
import {graphqlPersistedQueryNotFoundProblemResolvers} from './graphql.persisted.query.not.found.problem.resolvers.js';
import {graphqlPersistedQueryNotSupportedProblemResolvers} from './graphql.persisted.query.not.supported.problem.resolvers.js';
import {graphqlOperationResolutionFailureProblemResolvers} from './graphql.operation.resolution.failure.problem.resolvers.js';

/**
 * Problem Field Resolvers
 */
export const problemFieldResolvers = {
  badRequestProblemResolvers,
  authenticationRequiredProblemResolvers,
  accessDeniedProblemResolvers,
  notNoundProblemResolvers,
  validationProblemResolvers,
  internalServiceProblemResolvers,
  graphqlParseProblemResolvers,
  graphqlValidationProblemResolvers,
  graphqlBadUserInputProblemResolvers,
  graphqlPersistedQueryNotFoundProblemResolvers,
  graphqlPersistedQueryNotSupportedProblemResolvers,
  graphqlOperationResolutionFailureProblemResolvers
};

import * as Types from '../../../generated.types/graphql.js';
import * as gm from 'graphql-modules';
export namespace CoreModule {
  interface DefinedFields {
    Query: '_';
    Mutation: '_';
    Subscription: '_';
    ValidationError: 'attribute' | 'message';
    BadRequestProblem: 'status' | 'code' | 'message' | 'entityTypeName';
    AuthenticationRequiredProblem: 'status' | 'code' | 'message';
    AccessDeniedProblem: 'status' | 'code' | 'message' | 'entityTypeName';
    NotNoundProblem: 'status' | 'code' | 'message' | 'entityTypeName';
    ValidationProblem: 'status' | 'code' | 'message' | 'entityTypeName' | 'validation';
    InternalServiceProblem: 'status' | 'code' | 'message';
    GraphqlParseProblem: 'status' | 'code' | 'message';
    GraphqlValidationProblem: 'status' | 'code' | 'message';
    GraphqlBadUserInputProblem: 'status' | 'code' | 'message';
    GraphqlPersistedQueryNotFoundProblem: 'status' | 'code' | 'message';
    GraphqlPersistedQueryNotSupportedProblem: 'status' | 'code' | 'message';
    GraphqlOperationResolutionFailureProblem: 'status' | 'code' | 'message';
    BaseProblem: 'status' | 'message';
  }

  interface DefinedEnumValues {
    ConditionalType: 'AND' | 'OR';
    OperatorType:
      | 'EQUAL'
      | 'NOT_EQUAL'
      | 'LESS_THAN'
      | 'LESS_THAN_OR_EQUAL'
      | 'GREATER_THAN'
      | 'GREATER_THAN_OR_EQUAL'
      | 'IN'
      | 'NOT_IN'
      | 'ARRAY_CONTAINS'
      | 'ARRAY_CONTAINS_ANY';
    SortType: 'ASCENDING' | 'DESCENDING';
    ErrorStatusType:
      | 'BAD_REQUEST'
      | 'UNAUTHORIZED'
      | 'FORBIDDEN'
      | 'NOT_FOUND'
      | 'EXPECTATION_FAILED'
      | 'UNPROCESSABLE_ENTITY'
      | 'INTERNAL_SERVER_ERROR';
    ErrorCodeType:
      | 'BAD_REQUEST_BASE'
      | 'BAD_REQUEST_UNIQUE_ENTITY_RULE'
      | 'BAD_REQUEST_HARD_CODE_BUSINESS_RULE'
      | 'BAD_REQUEST_LOST_RESOURCE'
      | 'BAD_REQUEST_CLOUD_PROCESSING_ERROR'
      | 'BAD_REQUEST_DEPENDENCY_DELETE_ERROR'
      | 'BAD_REQUEST_PROCESSED_WITH_WARNING'
      | 'UNAUTHORIZED_BASE'
      | 'FORBIDDEN_BASE'
      | 'FORBIDDEN_PLAN_ASSETS_ACCESS'
      | 'NOT_FOUND_BASE'
      | 'UNPROCESSABLE_ENTITY_BASE'
      | 'INTERNAL_SERVER_ERROR_BASE'
      | 'INTERNAL_SERVER_ERROR_API_SERVER'
      | 'INTERNAL_SERVER_ERROR_CLOUD_PROCESS'
      | 'INTERNAL_SERVER_ERROR_EXTERNAL_SERVER';
  }

  interface DefinedInputFields {
    SearchOption: 'filters' | 'order' | 'page' | 'pageCount';
    Filter: 'conditional' | 'property' | 'operator' | 'value';
    Order: 'property' | 'sort';
  }

  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type Subscription = Pick<Types.Subscription, DefinedFields['Subscription']>;
  export type ValidationError = Pick<Types.ValidationError, DefinedFields['ValidationError']>;
  export type SearchOption = Pick<Types.SearchOption, DefinedInputFields['SearchOption']>;
  export type Filter = Pick<Types.Filter, DefinedInputFields['Filter']>;
  export type Order = Pick<Types.Order, DefinedInputFields['Order']>;
  export type ConditionalType = DefinedEnumValues['ConditionalType'];
  export type OperatorType = DefinedEnumValues['OperatorType'];
  export type SortType = DefinedEnumValues['SortType'];
  export type ErrorStatusType = DefinedEnumValues['ErrorStatusType'];
  export type ErrorCodeType = DefinedEnumValues['ErrorCodeType'];
  export type BaseProblem = Pick<Types.BaseProblem, DefinedFields['BaseProblem']>;
  export type BadRequestProblem = Pick<Types.BadRequestProblem, DefinedFields['BadRequestProblem']>;
  export type AuthenticationRequiredProblem = Pick<
    Types.AuthenticationRequiredProblem,
    DefinedFields['AuthenticationRequiredProblem']
  >;
  export type AccessDeniedProblem = Pick<Types.AccessDeniedProblem, DefinedFields['AccessDeniedProblem']>;
  export type NotNoundProblem = Pick<Types.NotNoundProblem, DefinedFields['NotNoundProblem']>;
  export type ValidationProblem = Pick<Types.ValidationProblem, DefinedFields['ValidationProblem']>;
  export type InternalServiceProblem = Pick<Types.InternalServiceProblem, DefinedFields['InternalServiceProblem']>;
  export type GraphqlParseProblem = Pick<Types.GraphqlParseProblem, DefinedFields['GraphqlParseProblem']>;
  export type GraphqlValidationProblem = Pick<
    Types.GraphqlValidationProblem,
    DefinedFields['GraphqlValidationProblem']
  >;
  export type GraphqlBadUserInputProblem = Pick<
    Types.GraphqlBadUserInputProblem,
    DefinedFields['GraphqlBadUserInputProblem']
  >;
  export type GraphqlPersistedQueryNotFoundProblem = Pick<
    Types.GraphqlPersistedQueryNotFoundProblem,
    DefinedFields['GraphqlPersistedQueryNotFoundProblem']
  >;
  export type GraphqlPersistedQueryNotSupportedProblem = Pick<
    Types.GraphqlPersistedQueryNotSupportedProblem,
    DefinedFields['GraphqlPersistedQueryNotSupportedProblem']
  >;
  export type GraphqlOperationResolutionFailureProblem = Pick<
    Types.GraphqlOperationResolutionFailureProblem,
    DefinedFields['GraphqlOperationResolutionFailureProblem']
  >;

  export type Scalars = Pick<Types.Scalars, 'Timestamp' | 'Object' | 'Date'>;
  export type TimestampScalarConfig = Types.TimestampScalarConfig;
  export type ObjectScalarConfig = Types.ObjectScalarConfig;
  export type DateScalarConfig = Types.DateScalarConfig;

  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type SubscriptionResolvers = Pick<Types.SubscriptionResolvers, DefinedFields['Subscription']>;
  export type ValidationErrorResolvers = Pick<
    Types.ValidationErrorResolvers,
    DefinedFields['ValidationError'] | '__isTypeOf'
  >;
  export type BadRequestProblemResolvers = Pick<
    Types.BadRequestProblemResolvers,
    DefinedFields['BadRequestProblem'] | '__isTypeOf'
  >;
  export type AuthenticationRequiredProblemResolvers = Pick<
    Types.AuthenticationRequiredProblemResolvers,
    DefinedFields['AuthenticationRequiredProblem'] | '__isTypeOf'
  >;
  export type AccessDeniedProblemResolvers = Pick<
    Types.AccessDeniedProblemResolvers,
    DefinedFields['AccessDeniedProblem'] | '__isTypeOf'
  >;
  export type NotNoundProblemResolvers = Pick<
    Types.NotNoundProblemResolvers,
    DefinedFields['NotNoundProblem'] | '__isTypeOf'
  >;
  export type ValidationProblemResolvers = Pick<
    Types.ValidationProblemResolvers,
    DefinedFields['ValidationProblem'] | '__isTypeOf'
  >;
  export type InternalServiceProblemResolvers = Pick<
    Types.InternalServiceProblemResolvers,
    DefinedFields['InternalServiceProblem'] | '__isTypeOf'
  >;
  export type GraphqlParseProblemResolvers = Pick<
    Types.GraphqlParseProblemResolvers,
    DefinedFields['GraphqlParseProblem'] | '__isTypeOf'
  >;
  export type GraphqlValidationProblemResolvers = Pick<
    Types.GraphqlValidationProblemResolvers,
    DefinedFields['GraphqlValidationProblem'] | '__isTypeOf'
  >;
  export type GraphqlBadUserInputProblemResolvers = Pick<
    Types.GraphqlBadUserInputProblemResolvers,
    DefinedFields['GraphqlBadUserInputProblem'] | '__isTypeOf'
  >;
  export type GraphqlPersistedQueryNotFoundProblemResolvers = Pick<
    Types.GraphqlPersistedQueryNotFoundProblemResolvers,
    DefinedFields['GraphqlPersistedQueryNotFoundProblem'] | '__isTypeOf'
  >;
  export type GraphqlPersistedQueryNotSupportedProblemResolvers = Pick<
    Types.GraphqlPersistedQueryNotSupportedProblemResolvers,
    DefinedFields['GraphqlPersistedQueryNotSupportedProblem'] | '__isTypeOf'
  >;
  export type GraphqlOperationResolutionFailureProblemResolvers = Pick<
    Types.GraphqlOperationResolutionFailureProblemResolvers,
    DefinedFields['GraphqlOperationResolutionFailureProblem'] | '__isTypeOf'
  >;
  export type BaseProblemResolvers = Pick<Types.BaseProblemResolvers, DefinedFields['BaseProblem']>;

  export interface Resolvers {
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
    Subscription?: SubscriptionResolvers;
    ValidationError?: ValidationErrorResolvers;
    BadRequestProblem?: BadRequestProblemResolvers;
    AuthenticationRequiredProblem?: AuthenticationRequiredProblemResolvers;
    AccessDeniedProblem?: AccessDeniedProblemResolvers;
    NotNoundProblem?: NotNoundProblemResolvers;
    ValidationProblem?: ValidationProblemResolvers;
    InternalServiceProblem?: InternalServiceProblemResolvers;
    GraphqlParseProblem?: GraphqlParseProblemResolvers;
    GraphqlValidationProblem?: GraphqlValidationProblemResolvers;
    GraphqlBadUserInputProblem?: GraphqlBadUserInputProblemResolvers;
    GraphqlPersistedQueryNotFoundProblem?: GraphqlPersistedQueryNotFoundProblemResolvers;
    GraphqlPersistedQueryNotSupportedProblem?: GraphqlPersistedQueryNotSupportedProblemResolvers;
    GraphqlOperationResolutionFailureProblem?: GraphqlOperationResolutionFailureProblemResolvers;
    Timestamp?: Types.Resolvers['Timestamp'];
    Object?: Types.Resolvers['Object'];
    Date?: Types.Resolvers['Date'];
  }

  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      _?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      _?: gm.Middleware[];
    };
    Subscription?: {
      '*'?: gm.Middleware[];
      _?: gm.Middleware[];
    };
    ValidationError?: {
      '*'?: gm.Middleware[];
      attribute?: gm.Middleware[];
      message?: gm.Middleware[];
    };
    BadRequestProblem?: {
      '*'?: gm.Middleware[];
      status?: gm.Middleware[];
      code?: gm.Middleware[];
      message?: gm.Middleware[];
      entityTypeName?: gm.Middleware[];
    };
    AuthenticationRequiredProblem?: {
      '*'?: gm.Middleware[];
      status?: gm.Middleware[];
      code?: gm.Middleware[];
      message?: gm.Middleware[];
    };
    AccessDeniedProblem?: {
      '*'?: gm.Middleware[];
      status?: gm.Middleware[];
      code?: gm.Middleware[];
      message?: gm.Middleware[];
      entityTypeName?: gm.Middleware[];
    };
    NotNoundProblem?: {
      '*'?: gm.Middleware[];
      status?: gm.Middleware[];
      code?: gm.Middleware[];
      message?: gm.Middleware[];
      entityTypeName?: gm.Middleware[];
    };
    ValidationProblem?: {
      '*'?: gm.Middleware[];
      status?: gm.Middleware[];
      code?: gm.Middleware[];
      message?: gm.Middleware[];
      entityTypeName?: gm.Middleware[];
      validation?: gm.Middleware[];
    };
    InternalServiceProblem?: {
      '*'?: gm.Middleware[];
      status?: gm.Middleware[];
      code?: gm.Middleware[];
      message?: gm.Middleware[];
    };
    GraphqlParseProblem?: {
      '*'?: gm.Middleware[];
      status?: gm.Middleware[];
      code?: gm.Middleware[];
      message?: gm.Middleware[];
    };
    GraphqlValidationProblem?: {
      '*'?: gm.Middleware[];
      status?: gm.Middleware[];
      code?: gm.Middleware[];
      message?: gm.Middleware[];
    };
    GraphqlBadUserInputProblem?: {
      '*'?: gm.Middleware[];
      status?: gm.Middleware[];
      code?: gm.Middleware[];
      message?: gm.Middleware[];
    };
    GraphqlPersistedQueryNotFoundProblem?: {
      '*'?: gm.Middleware[];
      status?: gm.Middleware[];
      code?: gm.Middleware[];
      message?: gm.Middleware[];
    };
    GraphqlPersistedQueryNotSupportedProblem?: {
      '*'?: gm.Middleware[];
      status?: gm.Middleware[];
      code?: gm.Middleware[];
      message?: gm.Middleware[];
    };
    GraphqlOperationResolutionFailureProblem?: {
      '*'?: gm.Middleware[];
      status?: gm.Middleware[];
      code?: gm.Middleware[];
      message?: gm.Middleware[];
    };
  }
}

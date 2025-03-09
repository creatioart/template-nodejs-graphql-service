import {ConditionalType} from '@creatioart-js/express-core';
import {OperatorType} from '@creatioart-js/express-core';
import {SortType} from '@creatioart-js/express-core';
import {ErrorStatusType} from '@creatioart-js/graphql-error';
import {ErrorCodeType} from '@creatioart-js/graphql-error';
import {GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig} from 'graphql';
import {ValidationErrorModel} from '@creatioart-js/graphql-error';
import {TemplateModel} from '../modules/template/model/template.model.js';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]?: Maybe<T[SubKey]>};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]: Maybe<T[SubKey]>};
export type MakeEmpty<T extends {[key: string]: unknown}, K extends keyof T> = {[_ in K]?: never};
export type Incremental<T> = T | {[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type EnumResolverSignature<T, AllowedValues = any> = {[key in keyof T]?: AllowedValues};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {[P in K]-?: NonNullable<T[P]>};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: {input: string; output: string};
  String: {input: string; output: string};
  Boolean: {input: boolean; output: boolean};
  Int: {input: number; output: number};
  Float: {input: number; output: number};
  Date: {input: any; output: any};
  Object: {input: any; output: any};
  Timestamp: {input: any; output: any};
};

export type AccessDeniedProblem = BaseProblem & {
  __typename: 'AccessDeniedProblem';
  code: ErrorCodeType;
  entityTypeName: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  status: ErrorStatusType;
};

export type AuthenticationRequiredProblem = BaseProblem & {
  __typename: 'AuthenticationRequiredProblem';
  code: ErrorCodeType;
  message: Scalars['String']['output'];
  status: ErrorStatusType;
};

export type BadRequestProblem = BaseProblem & {
  __typename: 'BadRequestProblem';
  code: ErrorCodeType;
  entityTypeName: Scalars['String']['output'];
  message: Scalars['String']['output'];
  status: ErrorStatusType;
};

export type BaseProblem = {
  message: Scalars['String']['output'];
  status: ErrorStatusType;
};

export {ConditionalType};

export {ErrorCodeType};

export {ErrorStatusType};

export type Filter = {
  conditional: ConditionalType;
  operator: OperatorType;
  property: Scalars['String']['input'];
  value: Scalars['Object']['input'];
};

export type GraphqlBadUserInputProblem = BaseProblem & {
  __typename: 'GraphqlBadUserInputProblem';
  code: ErrorCodeType;
  message: Scalars['String']['output'];
  status: ErrorStatusType;
};

export type GraphqlOperationResolutionFailureProblem = BaseProblem & {
  __typename: 'GraphqlOperationResolutionFailureProblem';
  code: ErrorCodeType;
  message: Scalars['String']['output'];
  status: ErrorStatusType;
};

export type GraphqlParseProblem = BaseProblem & {
  __typename: 'GraphqlParseProblem';
  code: ErrorCodeType;
  message: Scalars['String']['output'];
  status: ErrorStatusType;
};

export type GraphqlPersistedQueryNotFoundProblem = BaseProblem & {
  __typename: 'GraphqlPersistedQueryNotFoundProblem';
  code: ErrorCodeType;
  message: Scalars['String']['output'];
  status: ErrorStatusType;
};

export type GraphqlPersistedQueryNotSupportedProblem = BaseProblem & {
  __typename: 'GraphqlPersistedQueryNotSupportedProblem';
  code: ErrorCodeType;
  message: Scalars['String']['output'];
  status: ErrorStatusType;
};

export type GraphqlValidationProblem = BaseProblem & {
  __typename: 'GraphqlValidationProblem';
  code: ErrorCodeType;
  message: Scalars['String']['output'];
  status: ErrorStatusType;
};

export type InternalServiceProblem = BaseProblem & {
  __typename: 'InternalServiceProblem';
  code: ErrorCodeType;
  message: Scalars['String']['output'];
  status: ErrorStatusType;
};

export type Mutation = {
  __typename: 'Mutation';
  _: Maybe<Scalars['String']['output']>;
  templateCreate: Maybe<TemplateCreatePayload>;
  templateDelete: Maybe<TemplateDeletePayload>;
  templateUpdate: Maybe<TemplateUpdatePayload>;
};

export type MutationTemplateCreateArgs = {
  input: TemplateCreateInput;
};

export type MutationTemplateDeleteArgs = {
  input: TemplateDeleteInput;
};

export type MutationTemplateUpdateArgs = {
  input: TemplateUpdateInput;
};

export type NotNoundProblem = BaseProblem & {
  __typename: 'NotNoundProblem';
  code: ErrorCodeType;
  entityTypeName: Scalars['String']['output'];
  message: Scalars['String']['output'];
  status: ErrorStatusType;
};

export {OperatorType};

export type Order = {
  property: Scalars['String']['input'];
  sort: SortType;
};

export type Query = {
  __typename: 'Query';
  _: Maybe<Scalars['String']['output']>;
  templates: Maybe<TemplatePayload>;
};

export type QueryTemplatesArgs = {
  input: InputMaybe<TemplateInput>;
};

export type SearchOption = {
  filters: InputMaybe<Array<Filter>>;
  order: InputMaybe<Order>;
  page: InputMaybe<Scalars['Int']['input']>;
  pageCount: InputMaybe<Scalars['Int']['input']>;
};

export {SortType};

export type Subscription = {
  __typename: 'Subscription';
  _: Maybe<Scalars['String']['output']>;
  templateSubscribed: Maybe<TemplateSubscriptionResult>;
};

export type Template = {
  __typename: 'Template';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type TemplateCreateInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type TemplateCreatePayload = {
  __typename: 'TemplateCreatePayload';
  template: Maybe<Template>;
};

export type TemplateDeleteInput = {
  id: Scalars['ID']['input'];
};

export type TemplateDeletePayload = {
  __typename: 'TemplateDeletePayload';
  template: Maybe<Template>;
};

export type TemplateInput = {
  searchOption: InputMaybe<SearchOption>;
};

export type TemplatePayload = {
  __typename: 'TemplatePayload';
  count: Scalars['Int']['output'];
  templates: Maybe<Array<Template>>;
};

export type TemplateSubscriptionResult = {
  __typename: 'TemplateSubscriptionResult';
  count: Scalars['Int']['output'];
  templates: Maybe<Array<Template>>;
};

export type TemplateUpdateInput = {
  description: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type TemplateUpdatePayload = {
  __typename: 'TemplateUpdatePayload';
  template: Maybe<Template>;
};

export type ValidationError = {
  __typename: 'ValidationError';
  attribute: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type ValidationProblem = BaseProblem & {
  __typename: 'ValidationProblem';
  code: ErrorCodeType;
  entityTypeName: Scalars['String']['output'];
  message: Scalars['String']['output'];
  status: ErrorStatusType;
  validation: Maybe<Array<Maybe<ValidationError>>>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{[key in TKey]: TResult}, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, {[key in TKey]: TResult}, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  BaseProblem:
    | AccessDeniedProblem
    | AuthenticationRequiredProblem
    | BadRequestProblem
    | GraphqlBadUserInputProblem
    | GraphqlOperationResolutionFailureProblem
    | GraphqlParseProblem
    | GraphqlPersistedQueryNotFoundProblem
    | GraphqlPersistedQueryNotSupportedProblem
    | GraphqlValidationProblem
    | InternalServiceProblem
    | NotNoundProblem
    | (Omit<ValidationProblem, 'validation'> & {validation: Maybe<Array<Maybe<_RefType['ValidationError']>>>});
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccessDeniedProblem: ResolverTypeWrapper<AccessDeniedProblem>;
  AuthenticationRequiredProblem: ResolverTypeWrapper<AuthenticationRequiredProblem>;
  BadRequestProblem: ResolverTypeWrapper<BadRequestProblem>;
  BaseProblem: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['BaseProblem']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ConditionalType: ConditionalType;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  ErrorCodeType: ErrorCodeType;
  ErrorStatusType: ErrorStatusType;
  Filter: Filter;
  GraphqlBadUserInputProblem: ResolverTypeWrapper<GraphqlBadUserInputProblem>;
  GraphqlOperationResolutionFailureProblem: ResolverTypeWrapper<GraphqlOperationResolutionFailureProblem>;
  GraphqlParseProblem: ResolverTypeWrapper<GraphqlParseProblem>;
  GraphqlPersistedQueryNotFoundProblem: ResolverTypeWrapper<GraphqlPersistedQueryNotFoundProblem>;
  GraphqlPersistedQueryNotSupportedProblem: ResolverTypeWrapper<GraphqlPersistedQueryNotSupportedProblem>;
  GraphqlValidationProblem: ResolverTypeWrapper<GraphqlValidationProblem>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  InternalServiceProblem: ResolverTypeWrapper<InternalServiceProblem>;
  Mutation: ResolverTypeWrapper<{}>;
  NotNoundProblem: ResolverTypeWrapper<NotNoundProblem>;
  Object: ResolverTypeWrapper<Scalars['Object']['output']>;
  OperatorType: OperatorType;
  Order: Order;
  Query: ResolverTypeWrapper<{}>;
  SearchOption: SearchOption;
  SortType: SortType;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  Template: ResolverTypeWrapper<TemplateModel>;
  TemplateCreateInput: TemplateCreateInput;
  TemplateCreatePayload: ResolverTypeWrapper<
    Omit<TemplateCreatePayload, 'template'> & {template: Maybe<ResolversTypes['Template']>}
  >;
  TemplateDeleteInput: TemplateDeleteInput;
  TemplateDeletePayload: ResolverTypeWrapper<
    Omit<TemplateDeletePayload, 'template'> & {template: Maybe<ResolversTypes['Template']>}
  >;
  TemplateInput: TemplateInput;
  TemplatePayload: ResolverTypeWrapper<
    Omit<TemplatePayload, 'templates'> & {templates: Maybe<Array<ResolversTypes['Template']>>}
  >;
  TemplateSubscriptionResult: ResolverTypeWrapper<
    Omit<TemplateSubscriptionResult, 'templates'> & {templates: Maybe<Array<ResolversTypes['Template']>>}
  >;
  TemplateUpdateInput: TemplateUpdateInput;
  TemplateUpdatePayload: ResolverTypeWrapper<
    Omit<TemplateUpdatePayload, 'template'> & {template: Maybe<ResolversTypes['Template']>}
  >;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']['output']>;
  ValidationError: ResolverTypeWrapper<ValidationErrorModel>;
  ValidationProblem: ResolverTypeWrapper<
    Omit<ValidationProblem, 'validation'> & {validation: Maybe<Array<Maybe<ResolversTypes['ValidationError']>>>}
  >;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccessDeniedProblem: AccessDeniedProblem;
  AuthenticationRequiredProblem: AuthenticationRequiredProblem;
  BadRequestProblem: BadRequestProblem;
  BaseProblem: ResolversInterfaceTypes<ResolversParentTypes>['BaseProblem'];
  Boolean: Scalars['Boolean']['output'];
  Date: Scalars['Date']['output'];
  Filter: Filter;
  GraphqlBadUserInputProblem: GraphqlBadUserInputProblem;
  GraphqlOperationResolutionFailureProblem: GraphqlOperationResolutionFailureProblem;
  GraphqlParseProblem: GraphqlParseProblem;
  GraphqlPersistedQueryNotFoundProblem: GraphqlPersistedQueryNotFoundProblem;
  GraphqlPersistedQueryNotSupportedProblem: GraphqlPersistedQueryNotSupportedProblem;
  GraphqlValidationProblem: GraphqlValidationProblem;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  InternalServiceProblem: InternalServiceProblem;
  Mutation: {};
  NotNoundProblem: NotNoundProblem;
  Object: Scalars['Object']['output'];
  Order: Order;
  Query: {};
  SearchOption: SearchOption;
  String: Scalars['String']['output'];
  Subscription: {};
  Template: TemplateModel;
  TemplateCreateInput: TemplateCreateInput;
  TemplateCreatePayload: Omit<TemplateCreatePayload, 'template'> & {template: Maybe<ResolversParentTypes['Template']>};
  TemplateDeleteInput: TemplateDeleteInput;
  TemplateDeletePayload: Omit<TemplateDeletePayload, 'template'> & {template: Maybe<ResolversParentTypes['Template']>};
  TemplateInput: TemplateInput;
  TemplatePayload: Omit<TemplatePayload, 'templates'> & {templates: Maybe<Array<ResolversParentTypes['Template']>>};
  TemplateSubscriptionResult: Omit<TemplateSubscriptionResult, 'templates'> & {
    templates: Maybe<Array<ResolversParentTypes['Template']>>;
  };
  TemplateUpdateInput: TemplateUpdateInput;
  TemplateUpdatePayload: Omit<TemplateUpdatePayload, 'template'> & {template: Maybe<ResolversParentTypes['Template']>};
  Timestamp: Scalars['Timestamp']['output'];
  ValidationError: ValidationErrorModel;
  ValidationProblem: Omit<ValidationProblem, 'validation'> & {
    validation: Maybe<Array<Maybe<ResolversParentTypes['ValidationError']>>>;
  };
};

export type AccessDeniedProblemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AccessDeniedProblem'] = ResolversParentTypes['AccessDeniedProblem'],
> = {
  code: Resolver<ResolversTypes['ErrorCodeType'], ParentType, ContextType>;
  entityTypeName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status: Resolver<ResolversTypes['ErrorStatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthenticationRequiredProblemResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['AuthenticationRequiredProblem'] = ResolversParentTypes['AuthenticationRequiredProblem'],
> = {
  code: Resolver<ResolversTypes['ErrorCodeType'], ParentType, ContextType>;
  message: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status: Resolver<ResolversTypes['ErrorStatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BadRequestProblemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BadRequestProblem'] = ResolversParentTypes['BadRequestProblem'],
> = {
  code: Resolver<ResolversTypes['ErrorCodeType'], ParentType, ContextType>;
  entityTypeName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status: Resolver<ResolversTypes['ErrorStatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BaseProblemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseProblem'] = ResolversParentTypes['BaseProblem'],
> = {
  __resolveType?: TypeResolveFn<
    | 'AccessDeniedProblem'
    | 'AuthenticationRequiredProblem'
    | 'BadRequestProblem'
    | 'GraphqlBadUserInputProblem'
    | 'GraphqlOperationResolutionFailureProblem'
    | 'GraphqlParseProblem'
    | 'GraphqlPersistedQueryNotFoundProblem'
    | 'GraphqlPersistedQueryNotSupportedProblem'
    | 'GraphqlValidationProblem'
    | 'InternalServiceProblem'
    | 'NotNoundProblem'
    | 'ValidationProblem',
    ParentType,
    ContextType
  >;
  message: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status: Resolver<ResolversTypes['ErrorStatusType'], ParentType, ContextType>;
};

export type ConditionalTypeResolvers = EnumResolverSignature<{AND: any; OR: any}, ResolversTypes['ConditionalType']>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type ErrorCodeTypeResolvers = EnumResolverSignature<
  {
    BAD_REQUEST_BASE: any;
    BAD_REQUEST_CLOUD_PROCESSING_ERROR: any;
    BAD_REQUEST_DEPENDENCY_DELETE_ERROR: any;
    BAD_REQUEST_HARD_CODE_BUSINESS_RULE: any;
    BAD_REQUEST_LOST_RESOURCE: any;
    BAD_REQUEST_PROCESSED_WITH_WARNING: any;
    BAD_REQUEST_UNIQUE_ENTITY_RULE: any;
    FORBIDDEN_BASE: any;
    FORBIDDEN_PLAN_ASSETS_ACCESS: any;
    INTERNAL_SERVER_ERROR_API_SERVER: any;
    INTERNAL_SERVER_ERROR_BASE: any;
    INTERNAL_SERVER_ERROR_CLOUD_PROCESS: any;
    INTERNAL_SERVER_ERROR_EXTERNAL_SERVER: any;
    NOT_FOUND_BASE: any;
    UNAUTHORIZED_BASE: any;
    UNPROCESSABLE_ENTITY_BASE: any;
  },
  ResolversTypes['ErrorCodeType']
>;

export type ErrorStatusTypeResolvers = EnumResolverSignature<
  {
    BAD_REQUEST: any;
    EXPECTATION_FAILED: any;
    FORBIDDEN: any;
    INTERNAL_SERVER_ERROR: any;
    NOT_FOUND: any;
    UNAUTHORIZED: any;
    UNPROCESSABLE_ENTITY: any;
  },
  ResolversTypes['ErrorStatusType']
>;

export type GraphqlBadUserInputProblemResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['GraphqlBadUserInputProblem'] = ResolversParentTypes['GraphqlBadUserInputProblem'],
> = {
  code: Resolver<ResolversTypes['ErrorCodeType'], ParentType, ContextType>;
  message: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status: Resolver<ResolversTypes['ErrorStatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphqlOperationResolutionFailureProblemResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['GraphqlOperationResolutionFailureProblem'] = ResolversParentTypes['GraphqlOperationResolutionFailureProblem'],
> = {
  code: Resolver<ResolversTypes['ErrorCodeType'], ParentType, ContextType>;
  message: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status: Resolver<ResolversTypes['ErrorStatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphqlParseProblemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GraphqlParseProblem'] = ResolversParentTypes['GraphqlParseProblem'],
> = {
  code: Resolver<ResolversTypes['ErrorCodeType'], ParentType, ContextType>;
  message: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status: Resolver<ResolversTypes['ErrorStatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphqlPersistedQueryNotFoundProblemResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['GraphqlPersistedQueryNotFoundProblem'] = ResolversParentTypes['GraphqlPersistedQueryNotFoundProblem'],
> = {
  code: Resolver<ResolversTypes['ErrorCodeType'], ParentType, ContextType>;
  message: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status: Resolver<ResolversTypes['ErrorStatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphqlPersistedQueryNotSupportedProblemResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['GraphqlPersistedQueryNotSupportedProblem'] = ResolversParentTypes['GraphqlPersistedQueryNotSupportedProblem'],
> = {
  code: Resolver<ResolversTypes['ErrorCodeType'], ParentType, ContextType>;
  message: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status: Resolver<ResolversTypes['ErrorStatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphqlValidationProblemResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['GraphqlValidationProblem'] = ResolversParentTypes['GraphqlValidationProblem'],
> = {
  code: Resolver<ResolversTypes['ErrorCodeType'], ParentType, ContextType>;
  message: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status: Resolver<ResolversTypes['ErrorStatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InternalServiceProblemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['InternalServiceProblem'] = ResolversParentTypes['InternalServiceProblem'],
> = {
  code: Resolver<ResolversTypes['ErrorCodeType'], ParentType, ContextType>;
  message: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status: Resolver<ResolversTypes['ErrorStatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  _: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templateCreate: Resolver<
    Maybe<ResolversTypes['TemplateCreatePayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationTemplateCreateArgs, 'input'>
  >;
  templateDelete: Resolver<
    Maybe<ResolversTypes['TemplateDeletePayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationTemplateDeleteArgs, 'input'>
  >;
  templateUpdate: Resolver<
    Maybe<ResolversTypes['TemplateUpdatePayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationTemplateUpdateArgs, 'input'>
  >;
};

export type NotNoundProblemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['NotNoundProblem'] = ResolversParentTypes['NotNoundProblem'],
> = {
  code: Resolver<ResolversTypes['ErrorCodeType'], ParentType, ContextType>;
  entityTypeName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status: Resolver<ResolversTypes['ErrorStatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Object'], any> {
  name: 'Object';
}

export type OperatorTypeResolvers = EnumResolverSignature<
  {
    ARRAY_CONTAINS: any;
    ARRAY_CONTAINS_ANY: any;
    EQUAL: any;
    GREATER_THAN: any;
    GREATER_THAN_OR_EQUAL: any;
    IN: any;
    LESS_THAN: any;
    LESS_THAN_OR_EQUAL: any;
    NOT_EQUAL: any;
    NOT_IN: any;
  },
  ResolversTypes['OperatorType']
>;

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  _: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templates: Resolver<Maybe<ResolversTypes['TemplatePayload']>, ParentType, ContextType, QueryTemplatesArgs>;
};

export type SortTypeResolvers = EnumResolverSignature<{ASCENDING: any; DESCENDING: any}, ResolversTypes['SortType']>;

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription'],
> = {
  _: SubscriptionResolver<Maybe<ResolversTypes['String']>, '_', ParentType, ContextType>;
  templateSubscribed: SubscriptionResolver<
    Maybe<ResolversTypes['TemplateSubscriptionResult']>,
    'templateSubscribed',
    ParentType,
    ContextType
  >;
};

export type TemplateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Template'] = ResolversParentTypes['Template'],
> = {
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateCreatePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TemplateCreatePayload'] = ResolversParentTypes['TemplateCreatePayload'],
> = {
  template: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateDeletePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TemplateDeletePayload'] = ResolversParentTypes['TemplateDeletePayload'],
> = {
  template: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplatePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TemplatePayload'] = ResolversParentTypes['TemplatePayload'],
> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  templates: Resolver<Maybe<Array<ResolversTypes['Template']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateSubscriptionResultResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['TemplateSubscriptionResult'] = ResolversParentTypes['TemplateSubscriptionResult'],
> = {
  count: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  templates: Resolver<Maybe<Array<ResolversTypes['Template']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateUpdatePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TemplateUpdatePayload'] = ResolversParentTypes['TemplateUpdatePayload'],
> = {
  template: Resolver<Maybe<ResolversTypes['Template']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type ValidationErrorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ValidationError'] = ResolversParentTypes['ValidationError'],
> = {
  attribute: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValidationProblemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ValidationProblem'] = ResolversParentTypes['ValidationProblem'],
> = {
  code: Resolver<ResolversTypes['ErrorCodeType'], ParentType, ContextType>;
  entityTypeName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status: Resolver<ResolversTypes['ErrorStatusType'], ParentType, ContextType>;
  validation: Resolver<Maybe<Array<Maybe<ResolversTypes['ValidationError']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AccessDeniedProblem: AccessDeniedProblemResolvers<ContextType>;
  AuthenticationRequiredProblem: AuthenticationRequiredProblemResolvers<ContextType>;
  BadRequestProblem: BadRequestProblemResolvers<ContextType>;
  BaseProblem: BaseProblemResolvers<ContextType>;
  ConditionalType: ConditionalTypeResolvers;
  Date: GraphQLScalarType;
  ErrorCodeType: ErrorCodeTypeResolvers;
  ErrorStatusType: ErrorStatusTypeResolvers;
  GraphqlBadUserInputProblem: GraphqlBadUserInputProblemResolvers<ContextType>;
  GraphqlOperationResolutionFailureProblem: GraphqlOperationResolutionFailureProblemResolvers<ContextType>;
  GraphqlParseProblem: GraphqlParseProblemResolvers<ContextType>;
  GraphqlPersistedQueryNotFoundProblem: GraphqlPersistedQueryNotFoundProblemResolvers<ContextType>;
  GraphqlPersistedQueryNotSupportedProblem: GraphqlPersistedQueryNotSupportedProblemResolvers<ContextType>;
  GraphqlValidationProblem: GraphqlValidationProblemResolvers<ContextType>;
  InternalServiceProblem: InternalServiceProblemResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
  NotNoundProblem: NotNoundProblemResolvers<ContextType>;
  Object: GraphQLScalarType;
  OperatorType: OperatorTypeResolvers;
  Query: QueryResolvers<ContextType>;
  SortType: SortTypeResolvers;
  Subscription: SubscriptionResolvers<ContextType>;
  Template: TemplateResolvers<ContextType>;
  TemplateCreatePayload: TemplateCreatePayloadResolvers<ContextType>;
  TemplateDeletePayload: TemplateDeletePayloadResolvers<ContextType>;
  TemplatePayload: TemplatePayloadResolvers<ContextType>;
  TemplateSubscriptionResult: TemplateSubscriptionResultResolvers<ContextType>;
  TemplateUpdatePayload: TemplateUpdatePayloadResolvers<ContextType>;
  Timestamp: GraphQLScalarType;
  ValidationError: ValidationErrorResolvers<ContextType>;
  ValidationProblem: ValidationProblemResolvers<ContextType>;
};

export type Date = Scalars['Date'];
export type Object = Scalars['Object'];
export type Timestamp = Scalars['Timestamp'];

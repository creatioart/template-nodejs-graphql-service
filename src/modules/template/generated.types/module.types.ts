import * as Types from '../../../generated.types/graphql.js';
import * as gm from 'graphql-modules';
export namespace TemplateModule {
  interface DefinedFields {
    Query: 'templates';
    Mutation: 'templateCreate' | 'templateUpdate' | 'templateDelete';
    Subscription: 'templateSubscribed';
    Template: 'id' | 'name' | 'description';
    TemplatePayload: 'count' | 'templates';
    TemplateCreatePayload: 'template';
    TemplateUpdatePayload: 'template';
    TemplateDeletePayload: 'template';
    TemplateSubscriptionResult: 'count' | 'templates';
  }

  interface DefinedInputFields {
    TemplateInput: 'searchOption';
    TemplateCreateInput: 'name' | 'description';
    TemplateUpdateInput: 'id' | 'name' | 'description';
    TemplateDeleteInput: 'id';
  }

  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type TemplatePayload = Pick<Types.TemplatePayload, DefinedFields['TemplatePayload']>;
  export type TemplateInput = Pick<Types.TemplateInput, DefinedInputFields['TemplateInput']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type TemplateCreatePayload = Pick<Types.TemplateCreatePayload, DefinedFields['TemplateCreatePayload']>;
  export type TemplateCreateInput = Pick<Types.TemplateCreateInput, DefinedInputFields['TemplateCreateInput']>;
  export type TemplateUpdatePayload = Pick<Types.TemplateUpdatePayload, DefinedFields['TemplateUpdatePayload']>;
  export type TemplateUpdateInput = Pick<Types.TemplateUpdateInput, DefinedInputFields['TemplateUpdateInput']>;
  export type TemplateDeletePayload = Pick<Types.TemplateDeletePayload, DefinedFields['TemplateDeletePayload']>;
  export type TemplateDeleteInput = Pick<Types.TemplateDeleteInput, DefinedInputFields['TemplateDeleteInput']>;
  export type Subscription = Pick<Types.Subscription, DefinedFields['Subscription']>;
  export type TemplateSubscriptionResult = Pick<
    Types.TemplateSubscriptionResult,
    DefinedFields['TemplateSubscriptionResult']
  >;
  export type Template = Pick<Types.Template, DefinedFields['Template']>;
  export type SearchOption = Types.SearchOption;

  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type SubscriptionResolvers = Pick<Types.SubscriptionResolvers, DefinedFields['Subscription']>;
  export type TemplateResolvers = Pick<Types.TemplateResolvers, DefinedFields['Template']>;
  export type TemplatePayloadResolvers = Pick<Types.TemplatePayloadResolvers, DefinedFields['TemplatePayload']>;
  export type TemplateCreatePayloadResolvers = Pick<
    Types.TemplateCreatePayloadResolvers,
    DefinedFields['TemplateCreatePayload']
  >;
  export type TemplateUpdatePayloadResolvers = Pick<
    Types.TemplateUpdatePayloadResolvers,
    DefinedFields['TemplateUpdatePayload']
  >;
  export type TemplateDeletePayloadResolvers = Pick<
    Types.TemplateDeletePayloadResolvers,
    DefinedFields['TemplateDeletePayload']
  >;
  export type TemplateSubscriptionResultResolvers = Pick<
    Types.TemplateSubscriptionResultResolvers,
    DefinedFields['TemplateSubscriptionResult']
  >;

  export interface Resolvers {
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
    Subscription?: SubscriptionResolvers;
    Template?: TemplateResolvers;
    TemplatePayload?: TemplatePayloadResolvers;
    TemplateCreatePayload?: TemplateCreatePayloadResolvers;
    TemplateUpdatePayload?: TemplateUpdatePayloadResolvers;
    TemplateDeletePayload?: TemplateDeletePayloadResolvers;
    TemplateSubscriptionResult?: TemplateSubscriptionResultResolvers;
  }

  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      templates?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      templateCreate?: gm.Middleware[];
      templateUpdate?: gm.Middleware[];
      templateDelete?: gm.Middleware[];
    };
    Subscription?: {
      '*'?: gm.Middleware[];
      templateSubscribed?: gm.Middleware[];
    };
    Template?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      name?: gm.Middleware[];
      description?: gm.Middleware[];
    };
    TemplatePayload?: {
      '*'?: gm.Middleware[];
      count?: gm.Middleware[];
      templates?: gm.Middleware[];
    };
    TemplateCreatePayload?: {
      '*'?: gm.Middleware[];
      template?: gm.Middleware[];
    };
    TemplateUpdatePayload?: {
      '*'?: gm.Middleware[];
      template?: gm.Middleware[];
    };
    TemplateDeletePayload?: {
      '*'?: gm.Middleware[];
      template?: gm.Middleware[];
    };
    TemplateSubscriptionResult?: {
      '*'?: gm.Middleware[];
      count?: gm.Middleware[];
      templates?: gm.Middleware[];
    };
  }
}

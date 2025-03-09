import {Logger} from '@creatioart-js/express-logging';
import {TemplateModule} from '../../generated.types/module.types.js';
import {ContextModel} from '@creatioart-js/graphql-core';
import {Template} from '../../entity/template.js';
import {ServiceLocator} from '../../../../locator/service.locator.js';
import {TemplateModel} from '../../model/template.model.js';

type MutationResolver = TemplateModule.MutationResolvers['templateCreate'];

/**
 * Template Create Mutation Resolver
 */
export const templateCreateMutationResolver: MutationResolver = async (_, args, context: ContextModel) => {
  Logger().info(`Mutation [Template Create] received at: ${new Date().toISOString()}. ` +
                `Input: ${JSON.stringify(args.input)}. Trace: ${context.traceId}`);

  // Parse Template
  let template = Template.build().plainToClass(args.input);

  // Create Template Request
  template = await ServiceLocator.TemplateService().create(template, context.traceId);

  return {
    __typename: 'TemplateCreatePayload',
    template: TemplateModel.build().entityToModel(template)
  };
};

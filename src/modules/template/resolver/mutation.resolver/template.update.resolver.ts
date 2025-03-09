import {Logger} from '@creatioart-js/express-logging';
import {TemplateModule} from '../../generated.types/module.types.js';
import {ContextModel} from '@creatioart-js/graphql-core';
import {Template} from '../../entity/template.js';
import {ServiceLocator} from '../../../../locator/service.locator.js';
import {TemplateModel} from '../../model/template.model.js';

type MutationResolver = TemplateModule.MutationResolvers['templateUpdate'];

/**
 * Template Update Mutation Resolver
 */
export const templateUpdateMutationResolver: MutationResolver = async (_, args, context: ContextModel) => {
  Logger().info(`Mutation [Template Update] received at: ${new Date().toISOString()}. ` +
                `Input: ${JSON.stringify(args.input)}. Trace: ${context.traceId}`);

  // Parse Template
  let template = Template.build().plainToClass(args.input);

  // Update Template Request
  template = await ServiceLocator.TemplateService().update(template, context.traceId);

  return {
    __typename: 'TemplateUpdatePayload',
    template: TemplateModel.build().entityToModel(template)
  };
};

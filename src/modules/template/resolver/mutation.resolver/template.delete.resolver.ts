import {Logger} from '@creatioart-js/express-logging';
import {TemplateModule} from '../../generated.types/module.types.js';
import {ContextModel} from '@creatioart-js/graphql-core';
import {ServiceLocator} from '../../../../locator/service.locator.js';
import {TemplateModel} from '../../model/template.model.js';

type MutationResolver = TemplateModule.MutationResolvers['templateDelete'];

/**
 * Template Delete Mutation Resolver
 */
export const templateDeleteMutationResolver: MutationResolver = async (_, args, context: ContextModel) => {
  Logger().info(`Mutation [Template Delete] received at: ${new Date().toISOString()}. ` +
                `Input: ${JSON.stringify(args.input)}. Trace: ${context.traceId}`);

  // Get Template
  const template = await ServiceLocator.TemplateService().getTemplateById(args.input.id, context.traceId);

  // Update Template Request
  const response = await ServiceLocator.TemplateService().delete(args.input.id, context.traceId);

  Logger().info(`Template by ${args.input.id} id, with result: ${response}. Trace: ${context.traceId}`);

  return {
    __typename: 'TemplateDeletePayload',
    template: TemplateModel.build().entityToModel(template)
  };
};

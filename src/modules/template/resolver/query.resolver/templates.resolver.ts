import {Logger} from '@creatioart-js/express-logging';
import {ContextModel} from '@creatioart-js/graphql-core';
import {TemplateModule} from '../../generated.types/module.types.js';
import {ServiceLocator} from '../../../../locator/service.locator.js';
import {Filter, Order} from '@creatioart-js/express-core';
import {TemplateModel} from '../../model/template.model.js';

type QueryResolver = TemplateModule.QueryResolvers['templates'];

/**
 * Templates Query Resolver
 */
export const templatesQueryResolver: QueryResolver = async (_, args, context: ContextModel) => {
  Logger().info(`Query [Templates] was received at: ${new Date().toISOString()}. ` +
                `Input: ${JSON.stringify(args.input)}. Trace: ${context.traceId}`);

  const filters =  args.input?.searchOption?.filters !== undefined && args.input?.searchOption?.filters !== null
                  ? args.input?.searchOption?.filters.map((item) => Filter.build().plainToClass(item))
                  : [];
  const order = args.input?.searchOption?.order !== undefined && args.input.searchOption.order?.property !== undefined
                  ? new Order(args.input.searchOption.order?.property, args.input.searchOption.order?.sort)
                  : undefined;
  const page = args.input?.searchOption?.page !== undefined && args.input?.searchOption?.page !== null
                  ? args.input.searchOption.page
                  : 1;
  const pageCount = args.input?.searchOption?.pageCount !== undefined && args.input?.searchOption?.pageCount !== null
                  ? args.input.searchOption.pageCount
                  : 100;

  const templates = await ServiceLocator.TemplateService().findBy(filters, order, page, pageCount, context.traceId);

  return {
    __typename: 'TemplatePayload',
    count: templates.count,
    templates: templates.list.map((item) => TemplateModel.build().entityToModel(item)),
  };
};

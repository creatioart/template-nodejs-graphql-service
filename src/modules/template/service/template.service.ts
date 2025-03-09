import 'reflect-metadata';

import {Service} from 'typedi';
import {Logger} from '@creatioart-js/express-logging';
import {ErrorHelper, ErrorStatus} from '@creatioart-js/express-core';
import {EntityError, ErrorCode} from '@creatioart-js/express-error';
import {ErrorResponse} from '@creatioart-js/express-error-handler';
import {BaseService} from '@creatioart-js/express-storage';
import {Template} from '../entity/template.js';
import {ITemplateService} from './interface/itemplate.service.js';
import {RepositoryLocator} from '../../../locator/repository.locator.js';
import {CoreServiceLocator} from '../../../locator/core.service.locator.js';

/**
 * Template Service
 */
@Service()
export class TemplateService extends BaseService<Template> implements ITemplateService {
  /**
   * Constructor
   */
  constructor() {
    super(RepositoryLocator.TemplateRepository(), Template);
  }

  /**
   * Get the Template by id
   * @param id Template Id
   * @param traceId Trace id
   * @returns Template
   */
  public async getTemplateById(id: string, traceId: string): Promise<Template> {
    Logger().info(`Get template by ${id} id. Trace: ${traceId}`);

    try {
      if (id !== undefined) {
        const entity = await this.findOne(id, traceId);

        if (entity !== undefined) {
          return entity;
        }
      }
    } catch (err: any) {
      Logger().error(ErrorHelper.toErrorString(err, traceId));
      Logger().error(`You're requesting a data that doesn't exist. Trace: ${traceId}`);
    }

    // return error
    throw new ErrorResponse(new EntityError(ErrorStatus.NOT_FOUND,
      CoreServiceLocator.LocaleService().translate('template_not_found'),
      ErrorCode.NOT_FOUND_BASE, Template.Name, undefined
    ));
  }
}

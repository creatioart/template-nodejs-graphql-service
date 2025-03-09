import {IBaseService} from '@creatioart-js/express-storage';
import {Template} from '../../entity/template.js';

/**
 * ITemplate Service
 */
export interface ITemplateService extends IBaseService<Template> {
  /**
   * Get the Template by id
   * @param id Template Id
   * @param traceId Trace id
   * @returns Template
   */
  getTemplateById(id: string, traceId: string): Promise<Template>;
}

import 'reflect-metadata';

import {Container} from 'typedi';
import {TemplateService} from '../modules/template/service/template.service.js';
import {ITemplateService} from '../modules/template/service/interface/itemplate.service.js';

/**
 * Service Locator
 */
export class ServiceLocator {

  /**
   * Template Service
   */
  public static TemplateService(): ITemplateService {
    if (this.templateService) {
      return this.templateService;
    } else {
      this.templateService = Container.get(TemplateService);
      return this.templateService;
    }
  }

  /**
   * Clean the Locator
   */
  public static clean(): void {
    // Template Module
    this.templateService = undefined;
  }

  /**
   * Template Module
   */
  private static templateService: ITemplateService | undefined;
}

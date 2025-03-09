import 'reflect-metadata';

import {Container} from 'typedi';
import {IRepositoryManager} from '@creatioart-js/express-storage';
import {Template} from '../modules/template/entity/template.js';
import {TemplateRepository} from '../modules/template/repository/template.repository.js';

/**
 * Repository Locator
 */
export class RepositoryLocator {
  /**
   * Template Repository
   */
  public static TemplateRepository(): IRepositoryManager<Template> {
    if (this.templateRepository) {
      return this.templateRepository;
    } else {
      this.templateRepository = Container.get<IRepositoryManager<Template>>(TemplateRepository);
      return this.templateRepository;
    }
  }

  /**
   * Clean the Locator
   */
  public static clean(): void {
    // Template Module
    this.templateRepository = undefined;
  }

  /**
   * Template Module
   */
  private static templateRepository: IRepositoryManager<Template> | undefined;
}

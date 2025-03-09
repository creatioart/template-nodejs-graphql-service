import {createApplication} from 'graphql-modules';
import {CommonModule} from './core/module.js';
import {TemplateModule} from './template/module.js';

/**
 * Creates Application out of Modules
 */
export const AppModules = createApplication({
  modules: [
    CommonModule,
    TemplateModule
  ],
});

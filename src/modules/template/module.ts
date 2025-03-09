import {createModule} from 'graphql-modules';
import {typedefs} from './schema/apollo.typedefs.js';
import {resolvers} from './resolver/index.js';

const __dirname = import.meta.dirname;

/**
 * Create a Template Module
 */
export const TemplateModule = createModule({
  id: 'TemplateModule',
  dirname: __dirname,
  typeDefs: [typedefs()],
  resolvers: [resolvers],
});

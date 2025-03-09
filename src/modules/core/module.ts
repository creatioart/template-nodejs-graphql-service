import {createModule} from 'graphql-modules';
import {typedefs} from './schema/apollo.typedefs.js';
import {resolvers} from './resolver/index.js';

const __dirname = import.meta.dirname;

/**
 * Create a Common Module
 */
export const CommonModule = createModule({
  id: 'CoreModule',
  dirname: __dirname,
  typeDefs: [typedefs()],
  resolvers: [resolvers],
});

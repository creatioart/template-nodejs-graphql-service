import {GraphQLFileLoader} from '@graphql-tools/graphql-file-loader';
import {loadTypedefsSync} from '@graphql-tools/load';
import {DocumentNode} from 'graphql';
import {gql} from 'graphql-tag';

const __dirname = import.meta.dirname;

/**
 * Type Defs
 * @returns Document Node
 */
export function typedefs(): DocumentNode {
  const typeDefs = loadTypedefsSync('../../../core.schema.graphql', {
    cwd: __dirname,
    loaders: [new GraphQLFileLoader()],
  });

  const typeDef: DocumentNode = (typeDefs.length > 0 && typeDefs[0] !== undefined && typeDefs[0].document !== undefined)
                                  ? typeDefs[0].document
                                  : gql``;

  return typeDef;
}

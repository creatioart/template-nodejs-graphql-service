import {GraphQLScalarType, Kind} from 'graphql';

/**
 * GraphQL Object Scalar
 */
export const objectScalar = new GraphQLScalarType({
  name: 'Object',
  description: 'Object custom scalar type',
  serialize(value: any) {
    return JSON.stringify(value); // Convert outgoing Object to String for JSON
  },
  parseValue(value: any) {
    try {
      return JSON.parse(value); // Convert incoming String to Object
    } catch {
      return value;
    }
  },
  parseLiteral(ast) {
    switch (ast.kind){
      // STRING Value
      case Kind.STRING:
        return JSON.parse(ast.value); // Convert hard-coded AST String to Oject

      // OBJECT Value
      case Kind.OBJECT:
        return JSON.parse(JSON.stringify(ast.fields)); // Convert hard-coded AST Oject to Oject

      // Default
      default: {
        return null; // Invalid hard-coded value (not an String or Oject)
      }
    }
  },
});

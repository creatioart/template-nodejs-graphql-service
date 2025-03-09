import {ValidationErrorResolvers} from '../../../../generated.types/graphql.js';

/**
 * Validation Error Resolvers
 */
export const validationErrorResolvers: ValidationErrorResolvers = {
  /**
   * Attribute Field
   */
  attribute: (validationError) => {
    return validationError.attribute;
  },

  /**
   * Message Field
   */
  message: (validationError) => {
    return validationError.message;
  },
};

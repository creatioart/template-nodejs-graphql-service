import 'reflect-metadata';

import {BaseModel} from '@creatioart-js/graphql-core';
import {Template} from '../entity/template.js';

/**
 * Template Model
 */
export class TemplateModel extends BaseModel {
  /**
   * Build factory method
   * @returns Instance
   */
  public static build() {
    return new this();
  }

  /**
   * Create class model from class Entity
   * @param source Template Entity
   * @return Template Model
   */
  public entityToModel(source: Template): TemplateModel {
    const instance = new TemplateModel();

    if (source !== undefined) {
      instance.id = source.id?.toString() ?? '';
      instance.name = source.name;
      instance.description = source.description;
    }

    return instance;
  }

  public id: string;

  public name: string;

  public description: string;

  // Constructor Overloading
  constructor();
  constructor(id: string, name: string, description: string);
  constructor(id?: string, name?: string, description?: string) {
    super();
    this.id = id ?? '';
    this.name = name ?? '';
    this.description = description ?? '';
  }
}

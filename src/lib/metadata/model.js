/**
* The map of names to model metadata
*/
export const models = {};

/**
* The model metadata class
*/
export class ModelMetadata {

  /**
  * The map of entity collection names to entity type
  */
  entityCollections

  /**
  * @constructor
  */
  constructor() {
    this.entityCollections = {};
  }

  /**
  * Gets a model by name, creating if necessary
  */
  static getOrCreate( modelName ) {

    let model = models[modelName];
    if (!model) {
      models[modelName] = model = new ModelMetadata(modelName);
    }
    return model;
  }

}

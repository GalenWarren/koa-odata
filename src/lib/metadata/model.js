/**
* The map of names to model metadata
*/
export const models = {};

/**
* The model metadata class
*/
export class ModelMetadata {

  constructor() {
    this.entities = [];
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

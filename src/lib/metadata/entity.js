export class EntityMetadata {

  properties = []

  constructor({ name: name, model: model, properties: properties }) {
    this.name = name;
    this.model = model;
    this.properties = properties;
  }

}

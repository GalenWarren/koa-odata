/**
* Class that holds entity metadata
*/
export class EntityMetadata {

  constructor({ name: name, model: model, properties: properties }) {
    this.name = name;
    this.model = model;
    this.properties = properties || [];
  }

}

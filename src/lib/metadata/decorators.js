import _ from "lodash";
import {ModelMetadata} from "./model";
import {EntityMetadata} from "./entity";
import {PropertyMetadata} from "./property";

/**
* Symbols used to attach metadata
*/
export const entityMetadata = Symbol();
export const propertiesMetadata = Symbol();

/**
* Decorator that designates an entity type
*/
export function entity( options = {} ) {

  return function( constructor ) {

    // if string passed in, this is the name
    if (_.isString( options )) {
      options = {
        name: options
      }
    }

    // assign defaults
    options = _.defaults( {}, options || {}, {
      name: constructor.name,
      model: "default"
    });

    // access the model object
    const model = ModelMetadata.getOrCreate( options.model );

    // find any discovered properties (the propery decorators run first,
    // so they temporarily store properties here)
    const properties = constructor.prototype[propertiesMetadata] || [];
    delete constructor.prototype[propertiesMetadata];

    // create the entity object and add to model's entities
    const entity = new EntityMetadata({ name: options.name, model: model, properties: properties });
    model.entities[ entity.collectionName ] = entity;

    // store the metadata on the constructor so we can find it later
    constructor[entityMetadata] = entity;

  }

}

/**
* Decorator that designates a property
*/
export function property( options =  {} ) {

  return function( prototype, name, descriptor ) {

    // if string passed in, this is the name
    if (_.isString( options )) {
      options = {
        name: options
      }
    }

    // assign defaults
    options = _.defaults( {}, options || {}, {
      name: name
    });

    // access the property metadata
    let properties = prototype[propertiesMetadata];
    if (!properties) {
      properties = prototype[propertiesMetadata] = [];
    }

    // create the property object and add to collection
    const property = new PropertyMetadata({ name: options.name });
    properties.push( property );

  }

}

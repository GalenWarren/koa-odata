import _ from "lodash";

/**
* A functions class instance
*/
export class Functions {

  /**
  * @constructor
  */
  constructor() {

  }

  /**
  * Gets a property value for the provided name
  */
  getProperty( instance, name ) {
    return instance[name];
  }

  /**
  * Helper to resolve a lodash wrapper if needed
  */
  getValue( obj ) {
    return _.isFunction( obj.value ) ? obj.value() : obj;
  }

  /**
  * Wrapper for top
  */
  top(collection, count) {
    return collection.take(count);
  }

  /**
  * Wrapper for select
  */
  select(collection, predicate) {
    throw "notimplemented";
  }

  /**
  * Wrapper for filter
  */
  filter( collection, predicate ) {
    return collection.filter(predicate);
  }

  /**
  * Equality check
  */
  eq( a, b ) {
    return a === b;
  }

};

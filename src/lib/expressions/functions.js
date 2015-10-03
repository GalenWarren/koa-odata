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
  getProperty( name ) {
    return 1;
  }

  /**
  * Helper to resolve a lodash wrapper if needed
  */
  value( obj ) {
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
    return collection.filter(predicate);
  }

};

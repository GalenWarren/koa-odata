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
  value: function( obj ) {
    return _.isFunction( obj.value ) ? obj.value() : obj;
  },

  /**
  * Wrapper for top
  */
  top: function(collection, count) {
    return collection.take(count);
  },

  /**
  * Wrapper for select
  */
  select: function(collection, predicate) {
    return collection.filter(predicate);
  }

};

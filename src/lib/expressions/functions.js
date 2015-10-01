import _ from "lodash";

export const functions = {

  /**
  * Helper to resolve a lodash wrapper if needed
  */
  value: function( obj ) {
    return _.isFunction( obj.value ) ? obj.value() : obj;
  },

  /**
  * Wrapper for top function
  */
  top: function(collection, count) {
    return collection.take(count);
  }

};

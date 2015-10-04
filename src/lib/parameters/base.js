/**
* Base class for a query string parameter, i.e. $top
*/
export class Parameter {

  /**
  * Construction, takes the parameter name, i.e. $top
  */
  constructor( options, key, order ) {
    this.options = options;
    this.key = key;
    this.order = order;
  }

}

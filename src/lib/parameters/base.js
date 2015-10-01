/**
* Base class for a query string parameter, i.e. $top
*/
export class Parameter {

  /**
  * Construction, takes the parameter name, i.e. $top
  */
  constructor( options, key ) {
    this.options = options;
    this.key = key;
  }

}

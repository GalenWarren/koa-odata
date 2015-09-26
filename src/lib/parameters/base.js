import {normalize} from "./utilities";

export class Parameter {

  /**
  * Construction, takes the parameter name, i.e. $top
  */
  constructor( options, key ) {
    this.options = options;
    this.key = key;
  }

  /**
  * Normalize an expression
  */
  normalize( expression, parameters ) {
    return normalize( expression, parameters );
  }


}

import {inject} from "aurelia-dependency-injection";
import {Parameter} from "./base";

/**
* Model for thd $top parameter
*/
@inject("options")
export class TopParameter extends Parameter {

  /**
  * Construction
  */
  constructor( options ) {
    super( options, "$key");
  }

}

import {inject} from "aurelia-dependency-injection";
import {Parameter} from "./base";
import {createParameter,createFunctionCall} from "../expressions/utilities";
import {TranslatingVisitor} from "../expressions/visitors/translating";

/**
* Model for thd $top parameter
*/
@inject("options")
export class SelectParameter extends Parameter {

  /**
  * Construction
  */
  constructor( options ) {
    super( options, "$select", 20);
  }

  /**
  * Parses a value and returns a modified expression
  */
  parse( value, expression, context, pipeline ) {

    return createFunctionCall( "select", [
      expression,
      new TranslatingVisitor( context, pipeline).visit( value )
    ]);

  }
}

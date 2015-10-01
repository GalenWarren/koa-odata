import {inject} from "aurelia-dependency-injection";
import {Parameter} from "./base";
import {createParameter,createFunctionCall} from "../expressions/utilities";

/**
* Model for thd $top parameter
*/
@inject("options")
export class TopParameter extends Parameter {

  /**
  * Construction
  */
  constructor( options ) {
    super( options, "$top");
  }

  /**
  * Parses a value and returns a modified expression
  */
  parse( value, expression, context, pipeline ) {

    return createFunctionCall( "top", [
      expression,
      createParameter( context.state.odata.parameters, value )
    ]);

  }
}

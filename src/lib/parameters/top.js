import {inject} from "aurelia-dependency-injection";
import {Parameter} from "./base";
import {createParameter,createFunctionCall} from "../expressions/utilities";
import {ParameterizingVisitor} from "../expressions/visitors/parameterizing";

/**
* Model for thd $top parameter
*/
@inject("options")
export class TopParameter extends Parameter {

  /**
  * Construction
  */
  constructor( options ) {
    super( options, "$top", 10);
  }

  /**
  * Parses a value and returns a modified expression
  */
  parse( value, expression, context, pipeline ) {

    return createFunctionCall( "top", [
      expression,
      new ParameterizingVisitor( context, pipeline).visit({
        type: "literal",
        value: value
      })
    ]);

  }
}

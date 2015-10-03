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
    super( options, "$select");
  }

  /**
  * Parses a value and returns a modified expression
  */
  parse( value, expression, context, pipeline ) {

    /*
    const  new TranslatingVisitor().visit(value);
    const x = translatingVisitor.visit( value );

    return createFunctionCall( "select", [
      expression,
      createParameter( context.state.odata.parameters, value )
    ]);
    */

  }
}

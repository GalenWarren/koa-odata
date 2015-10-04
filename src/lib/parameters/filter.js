import {inject} from "aurelia-dependency-injection";
import {Parameter} from "./base";
import {createFunctionCall,createInstanceFunction} from "../expressions/utilities";
import {TranslatingVisitor} from "../expressions/visitors/translating";

/**
* Model for the $filter parameter
*/
@inject("options")
export class FilterParameter extends Parameter {

  /**
  * Construction
  */
  constructor( options ) {
    super( options, "$filter", 0);
  }

  /**
  * Parses a value and returns a modified expression
  */
  parse( value, expression, context, pipeline ) {

    return createFunctionCall( "filter", [
      expression,
      createInstanceFunction( new TranslatingVisitor( context, pipeline ).visit( value ))
    ]);

  }
}

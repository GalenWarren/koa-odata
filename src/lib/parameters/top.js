import {inject} from "aurelia-dependency-injection";
import {Parameter} from "./base";
import {top} from "../expressions/functions";

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

    return {
      type: "CallExpression",
      callee: {
        "type": "Identifier",
        "name": "top"
      },
      arguments: [
        expression,
        {
          type: "Literal",
          value: Number(value),
          raw: value
        }
      ]
    };

  }
}

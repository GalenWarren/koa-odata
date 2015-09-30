import {singleton,inject} from "aurelia-dependency-injection";
import parser from "odata-parser";
import {InitializingVisitor} from "../expressions/visitors/index";
import {TopParameter} from "./top";
import _ from "lodash";

/**
* The name we'll use for the parameters
*/
const parametersName = "parameters";

/**
* Class to facilitate parameter processing
*/
@inject( TopParameter )
export class Parameters {

  /**
  * The map of odata parameters that we can parse
  */
  parameters

  /**
  * Construction
  */
  constructor( ...parameters ) {
    this.parameters = new Map( _(parameters).map( p => [ p.key, p ]).value());
  }

  /**
  * Called to generate an expression from the request context
  */
  parse( context, pipeline ) {

    debugger;

    // generate the initial expression, which is just the collection
    // identifier (which is assumed to be a lodash wrapper)
    let expression = {
      type: "Identifier",
      name: "collection"
    };

    // query string exists?
    if (context.request.querystring) {

      debugger;

      // yes, parse the query string using odata-parser library ...
      let ast = parser.parse( context.request.querystring);

      // do the initial processing, including factoring out literals
      const initializingVisitor = new InitializingVisitor( parametersName );
      ast = initializingVisitor.visit( ast );
      context.state.odata.parameters = initializingVisitor.parameters;

      // now, process the expression
      expression = _(ast).reduce( ( inputExpression, value, key ) => {

        // do we support this parameter?
        const parameter = this.parameters.get( key );
        if (parameter) {

          // modify the expression to reflect this parameter
          return parameter.parse( value, inputExpression, context, pipeline );

        }

        // not handled, return expression unmodified
        return inputExpression;

      }, expression );

    }

    // return the final ast
    return {
      type: "Program",
      body: {
        type: "ExpressionStatement",
        expression: expression
      },
      sourceType: "script"
    };

  }

}

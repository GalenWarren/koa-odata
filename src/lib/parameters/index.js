import {singleton,inject} from "aurelia-dependency-injection";
import parser from "odata-parser";
import {TopParameter} from "./top";
import {SelectParameter} from "./select";
import {FilterParameter} from "./filter";
import {functionsName,collectionName} from "../expressions/utilities";
import _ from "lodash";

/**
* Class to facilitate parameter processing
*/
@inject(
  TopParameter,
  SelectParameter,
  FilterParameter
)
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

    // generate the initial expression, which is just the collection
    // identifier (which is assumed to be a lodash wrapper)
    let expression = {
      "type": "Identifier",
      "name": collectionName
    };

    // query string exists?
    if (context.request.querystring) {

      // yes, parse the query string using odata-parser library ...
      let ast = parser.parse( decodeURI( context.request.querystring ));

      // build up the expression from the query string ast
      expression = _(ast)
        .pairs()
        .map( tuple => {

          const [key, value] = tuple;
          const parameter = this.parameters.get(key);
          if (!parameter) {
            throw new Error(`Parameter ${key} is not supported`);
          }
          tuple.push( parameter);
          return tuple;

        }, this )
        .sortBy( tuple => tuple[2].order )
        .reduce( ( inputExpression, tuple ) => {

          const [key, value, parameter] = tuple;
          return parameter.parse( value, inputExpression, context, pipeline );

        }, expression );
    }

    // return the final expression
    return expression;

  }

}

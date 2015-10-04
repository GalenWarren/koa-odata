import {inject} from "aurelia-dependency-injection";
import {PipelineComponent} from "./base";
import {PipelineState} from "./state";
import _ from "lodash";
import escodegen from "escodegen";
import {parametersName,functionsName,collectionName} from "../expressions/utilities";
import Cache from "lru-cache";


/**
* The pipeline component to parse the odata request
*/
@inject("options", Cache)
export class PreparePipelineComponent extends PipelineComponent {

  /**
  * Construction
  */
  constructor( options, cache ) {
    super(options);
    this.cache = cache;
  }

  /**
  * Returns a koa middleware function that parses the request
  */
  *process( next, context, pipeline ) {

    // remove!
    console.log( JSON.stringify( context.state.odata.expression, null, 5 ));

    // parse the function to create the function code
    const functionCode = escodegen.generate({
      "type": "BlockStatement",
      "body": [
          {
              "type": "ExpressionStatement",
              "expression": {
                  "type": "Literal",
                  "value": "use strict",
                  "raw": "\"use strict\""
              }
          },
          {
              "type": "ReturnStatement",
              "argument": {

                "type": "CallExpression",
                "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": functionsName
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "getValue"
                    }
                },
                "arguments": [ context.state.odata.expression ]
              }
          }
        ]
      },
      {
        format: {
          compact: true
        }
      }
    );

    console.log(functionCode);

    // try to find a cached function
    let get = this.cache.get(functionCode);
    if (!get) {
      get = new Function( collectionName, parametersName, functionsName, functionCode );
      this.cache.set( functionCode, get )
    }

    // assign the function to the context
    context.state.odata.get = get;

    yield next;

  }

}

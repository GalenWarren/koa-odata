import {ParameterizingVisitor} from "./parameterizing";
import {createParameter,createFunctionCall} from "../utilities";
import {Functions} from "../functions";
import _ from "lodash";

/**
* Visitor class that translates a parsed odata expression
*/
export class TranslatingVisitor extends ParameterizingVisitor {

  /**
  * Construction
  */
  constructor( context, pipeline ) {
    super( context, pipeline );
  }

  /**
  * Called when a binary comparison or logical operator is encountered
  */
  visitBinary( node ) {

    // look up the function
    if (!_.has( Functions.prototype, node.type )) {
      throw new Error( `Operator ${node.type} is not supported`);
    }

    // construct the node
    return createFunctionCall( node.type, [
      this.visit( node.left),
      this.visit( node.right)
    ]);
  }

  /**
  * Called when a function call is encountered
  */
  visitFunctionCall( node ) {
    debugger;
  }



}

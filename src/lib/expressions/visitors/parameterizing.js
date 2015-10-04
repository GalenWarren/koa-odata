import {ODataVisitor} from "./odata";
import {createParameter} from "../utilities";

/**
* Visitor that initializes the odata tree
*/
export class ParameterizingVisitor extends ODataVisitor {

  /**
  * Construct with the name of the expression that will hold the parms
  */
  constructor( context, pipeline ) {
    super( context, pipeline );
  }

  /**
  * Visit a literal expression
  */
  visitLiteral( node ) {

    // capture the parameter
    return createParameter( this.context, node.value );

  }

}

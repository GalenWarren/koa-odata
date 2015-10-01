import {ODataVisitor} from "./odata";
import {createParameter} from "../utilities";

/**
* Visitor that initializes the odata tree
*/
export class InitializingVisitor extends ODataVisitor {

  /**
  * Construct with the name of the expression that will hold the parms
  */
  constructor( parameters ) {
    super();
    this.parameters = parameters;
  }

  /**
  * Visit a literal expression
  */
  visitLiteral( node ) {

    // capture the parameter
    return createParameter( this.parameters, node.value );

  }

}

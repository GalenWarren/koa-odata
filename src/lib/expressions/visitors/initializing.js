import {ODataVisitor} from "./odata";

/**
* Visitor that initializes the odata tree
*/
export class InitializingVisitor extends ODataVisitor {

  /**
  * Construct with the name of the expression that will hold the parms
  */
  constructor( parametersName ) {
    super();
    this.parameters = [];
    this.parametersName = parametersName;
  }

  /**
  * Visit a literal expression
  */
  visitLiteral( node ) {

    debugger;

    // capture the parameter
    const index = this.parameters.length;
    this.parameters.push(node.value);

    // replace with a member expression node
    return {
      "type": "MemberExpression",
      "computed": true,
      "object": {
        "type": "Identifier",
        "name": this.parametersName
      },
      "property": {
        "type": "Literal",
        "value": index,
        "raw": index.toString()
      }
    };
  }


}

import {ExpressionVisitor} from "./expressionVisitor";

export class ParameterizingVisitor extends ExpressionVisitor {

  /**
  * The parameters that are detected
  */
  parameters = []

  /**
  * Construct with the name of the expression that will hold the parms
  */
  constructor( parametersName = "parms" ) {
    super();
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

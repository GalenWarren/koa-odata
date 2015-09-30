// the binary operators
const binaryOperators = new Set([
  "eq",
  "ne",
  "lt",
  "gt",
  "lte",
  "gte",
  "and",
  "or"
]);

export class ODataExpressionVisitor {

  /**
  * The main visit method, calls to specialized types based on type of node
  */
  visit( node ) {
    if (binaryOperators.has(node.type)) {
      return this.visitBinary( node );
    }
    else {
      switch (node.type) {
        case "functioncall":
          return this.visitFunctionCall( node );
        case "literal":
          return this.visitLiteral( node );
        case "property":
          return this.visitProperty( node );
        default:
          return node;
      }
    }
  }

  /**
  * Visit a literal expression
  */
  visitLiteral( node ) {
    return node;
  }

  /**
  * Visit a property expression
  */
  visitProperty( node ) {
    return node;
  }

  /**
  * Visit a binary expression
  */
  visitBinary( node ) {
    node.left = this.visit( node.left );
    node.right = this.visit( node.right );
    return node;

  }

  /**
  * Visit a function call expression
  */
  visitFunctionCall( node ) {
    for (let i=0; i<node.args.length; i++) {
      node.args[i] = this.visit( node.args[i]);
    }
    return node;
  }

}

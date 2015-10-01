/**
* The value we'll use everywhere to represents parameters passed to an expression
*/
export const parametersName =  "p";

/**
* The value we'll use for functions
*/
export const functionsName = "f";

/**
* The name of the collection parm
*/
export const collectionName = "c";

/**
* Creates an esprima style structure for a parameter expression
*/
export function createParameter( parameters, value ) {

  const index = parameters.length;
  parameters.push( value );

  return {
    "type": "MemberExpression",
    "computed": true,
    "object": {
      "type": "Identifier",
      "name": parametersName
    },
    "property": {
      "type": "Literal",
      "value": index,
      "raw": index.toString()
    }
  };

}

/**
* Helper to create  a function call expression
*/
export function createFunctionCall( functionName, args ) {

  return {
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
            "name": functionName
        }
    },
    "arguments": args
  };
}

/**
* Creates ast for a property get operation
*/
export function createPropertyGet( propertyName ) {
  return {
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
            "name": "getName"
        }
    },
    "arguments": [
        {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\""
        }
    ]
  }
}

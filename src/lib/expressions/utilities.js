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
* The name of the instance parm
*/
export function getInstanceName( depth ) {
  return `i${depth}`;
}

/**
* Creates an esprima style structure for a parameter expression
*/
export function createParameter( context, value ) {

  const parameters = context.state.odata.parameters;
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
* Creates a function taking an instance as a parameter
*/
export function createInstanceFunction( expression, depth = 0 ) {

  return {
      "type": "FunctionExpression",
      "id": null,
      "params": [
          {
              "type": "Identifier",
              "name": getInstanceName( depth )
          }
      ],
      "defaults": [],
      "body": {
          "type": "BlockStatement",
          "body": [
              {
                  "type": "ReturnStatement",
                  "argument": expression
              }
          ]
      },
      "generator": false,
      "expression": false
  };
}

/**
* Creates ast for a property get operation
*/
export function createPropertyGet( propertyName, depth = 0 ) {

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
          "name": "getProperty"
      }
    },
    "arguments": [
      {
        "type": "Identifier",
        "name": getInstanceName( depth )
      },
      {
          "type": "Literal",
          "value": propertyName,
          "raw": propertyName
      }
    ]
  };

}

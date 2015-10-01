"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createParameter = createParameter;
exports.createFunctionCall = createFunctionCall;
var parametersName = "p";

exports.parametersName = parametersName;
var functionsName = "f";

exports.functionsName = functionsName;
var collectionName = "c";

exports.collectionName = collectionName;

function createParameter(parameters, value) {

  var index = parameters.length;
  parameters.push(value);

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

function createFunctionCall(functionName, args) {

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9leHByZXNzaW9ucy91dGlsaXRpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdPLElBQU0sY0FBYyxHQUFJLEdBQUcsQ0FBQzs7O0FBSzVCLElBQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQzs7O0FBSzFCLElBQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQzs7OztBQUszQixTQUFTLGVBQWUsQ0FBRSxVQUFVLEVBQUUsS0FBSyxFQUFHOztBQUVuRCxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO0FBQ2hDLFlBQVUsQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7O0FBRXpCLFNBQU87QUFDTCxVQUFNLEVBQUUsa0JBQWtCO0FBQzFCLGNBQVUsRUFBRSxJQUFJO0FBQ2hCLFlBQVEsRUFBRTtBQUNSLFlBQU0sRUFBRSxZQUFZO0FBQ3BCLFlBQU0sRUFBRSxjQUFjO0tBQ3ZCO0FBQ0QsY0FBVSxFQUFFO0FBQ1YsWUFBTSxFQUFFLFNBQVM7QUFDakIsYUFBTyxFQUFFLEtBQUs7QUFDZCxXQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRTtLQUN4QjtHQUNGLENBQUM7Q0FFSDs7QUFLTSxTQUFTLGtCQUFrQixDQUFFLFlBQVksRUFBRSxJQUFJLEVBQUc7O0FBRXZELFNBQU87QUFDTCxVQUFNLEVBQUUsZ0JBQWdCO0FBQ3hCLFlBQVEsRUFBRTtBQUNOLFlBQU0sRUFBRSxrQkFBa0I7QUFDMUIsZ0JBQVUsRUFBRSxLQUFLO0FBQ2pCLGNBQVEsRUFBRTtBQUNOLGNBQU0sRUFBRSxZQUFZO0FBQ3BCLGNBQU0sRUFBRSxhQUFhO09BQ3hCO0FBQ0QsZ0JBQVUsRUFBRTtBQUNSLGNBQU0sRUFBRSxZQUFZO0FBQ3BCLGNBQU0sRUFBRSxZQUFZO09BQ3ZCO0tBQ0o7QUFDRCxlQUFXLEVBQUUsSUFBSTtHQUNsQixDQUFDO0NBQ0giLCJmaWxlIjoibGliL2V4cHJlc3Npb25zL3V0aWxpdGllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4qIFRoZSB2YWx1ZSB3ZSdsbCB1c2UgZXZlcnl3aGVyZSB0byByZXByZXNlbnRzIHBhcmFtZXRlcnMgcGFzc2VkIHRvIGFuIGV4cHJlc3Npb25cclxuKi9cclxuZXhwb3J0IGNvbnN0IHBhcmFtZXRlcnNOYW1lID0gIFwicFwiO1xyXG5cclxuLyoqXHJcbiogVGhlIHZhbHVlIHdlJ2xsIHVzZSBmb3IgZnVuY3Rpb25zXHJcbiovXHJcbmV4cG9ydCBjb25zdCBmdW5jdGlvbnNOYW1lID0gXCJmXCI7XHJcblxyXG4vKipcclxuKiBUaGUgbmFtZSBvZiB0aGUgY29sbGVjdGlvbiBwYXJtXHJcbiovXHJcbmV4cG9ydCBjb25zdCBjb2xsZWN0aW9uTmFtZSA9IFwiY1wiO1xyXG5cclxuLyoqXHJcbiogQ3JlYXRlcyBhbiBlc3ByaW1hIHN0eWxlIHN0cnVjdHVyZSBmb3IgYSBwYXJhbWV0ZXIgZXhwcmVzc2lvblxyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFyYW1ldGVyKCBwYXJhbWV0ZXJzLCB2YWx1ZSApIHtcclxuXHJcbiAgY29uc3QgaW5kZXggPSBwYXJhbWV0ZXJzLmxlbmd0aDtcclxuICBwYXJhbWV0ZXJzLnB1c2goIHZhbHVlICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBcInR5cGVcIjogXCJNZW1iZXJFeHByZXNzaW9uXCIsXHJcbiAgICBcImNvbXB1dGVkXCI6IHRydWUsXHJcbiAgICBcIm9iamVjdFwiOiB7XHJcbiAgICAgIFwidHlwZVwiOiBcIklkZW50aWZpZXJcIixcclxuICAgICAgXCJuYW1lXCI6IHBhcmFtZXRlcnNOYW1lXHJcbiAgICB9LFxyXG4gICAgXCJwcm9wZXJ0eVwiOiB7XHJcbiAgICAgIFwidHlwZVwiOiBcIkxpdGVyYWxcIixcclxuICAgICAgXCJ2YWx1ZVwiOiBpbmRleCxcclxuICAgICAgXCJyYXdcIjogaW5kZXgudG9TdHJpbmcoKVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG59XHJcblxyXG4vKipcclxuKiBIZWxwZXIgdG8gY3JlYXRlICBhIGZ1bmN0aW9uIGNhbGwgZXhwcmVzc2lvblxyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb25DYWxsKCBmdW5jdGlvbk5hbWUsIGFyZ3MgKSB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBcInR5cGVcIjogXCJDYWxsRXhwcmVzc2lvblwiLFxyXG4gICAgXCJjYWxsZWVcIjoge1xyXG4gICAgICAgIFwidHlwZVwiOiBcIk1lbWJlckV4cHJlc3Npb25cIixcclxuICAgICAgICBcImNvbXB1dGVkXCI6IGZhbHNlLFxyXG4gICAgICAgIFwib2JqZWN0XCI6IHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiSWRlbnRpZmllclwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogZnVuY3Rpb25zTmFtZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJwcm9wZXJ0eVwiOiB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIklkZW50aWZpZXJcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IGZ1bmN0aW9uTmFtZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImFyZ3VtZW50c1wiOiBhcmdzXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

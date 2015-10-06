"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInstanceName = getInstanceName;
exports.createParameter = createParameter;
exports.createFunctionCall = createFunctionCall;
exports.createInstanceFunction = createInstanceFunction;
exports.createPropertyGet = createPropertyGet;
var parametersName = "p";

exports.parametersName = parametersName;
var functionsName = "f";

exports.functionsName = functionsName;
var collectionName = "c";

exports.collectionName = collectionName;

function getInstanceName(depth) {
  return "i" + depth;
}

function createParameter(context, value) {

  var parameters = context.state.odata.parameters;
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

function createInstanceFunction(expression) {
  var depth = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

  return {
    "type": "FunctionExpression",
    "id": null,
    "params": [{
      "type": "Identifier",
      "name": getInstanceName(depth)
    }],
    "defaults": [],
    "body": {
      "type": "BlockStatement",
      "body": [{
        "type": "ReturnStatement",
        "argument": expression
      }]
    },
    "generator": false,
    "expression": false
  };
}

function createPropertyGet(propertyName) {
  var depth = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

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
    "arguments": [{
      "type": "Identifier",
      "name": getInstanceName(depth)
    }, {
      "type": "Literal",
      "value": propertyName,
      "raw": propertyName
    }]
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9leHByZXNzaW9ucy91dGlsaXRpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdPLElBQU0sY0FBYyxHQUFJLEdBQUcsQ0FBQzs7O0FBSzVCLElBQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQzs7O0FBSzFCLElBQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQzs7OztBQUszQixTQUFTLGVBQWUsQ0FBRSxLQUFLLEVBQUc7QUFDdkMsZUFBVyxLQUFLLENBQUc7Q0FDcEI7O0FBS00sU0FBUyxlQUFlLENBQUUsT0FBTyxFQUFFLEtBQUssRUFBRzs7QUFFaEQsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO0FBQ2xELE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7QUFDaEMsWUFBVSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQzs7QUFFekIsU0FBTztBQUNMLFVBQU0sRUFBRSxrQkFBa0I7QUFDMUIsY0FBVSxFQUFFLElBQUk7QUFDaEIsWUFBUSxFQUFFO0FBQ1IsWUFBTSxFQUFFLFlBQVk7QUFDcEIsWUFBTSxFQUFFLGNBQWM7S0FDdkI7QUFDRCxjQUFVLEVBQUU7QUFDVixZQUFNLEVBQUUsU0FBUztBQUNqQixhQUFPLEVBQUUsS0FBSztBQUNkLFdBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFO0tBQ3hCO0dBQ0YsQ0FBQztDQUVIOztBQUtNLFNBQVMsa0JBQWtCLENBQUUsWUFBWSxFQUFFLElBQUksRUFBRzs7QUFFdkQsU0FBTztBQUNMLFVBQU0sRUFBRSxnQkFBZ0I7QUFDeEIsWUFBUSxFQUFFO0FBQ04sWUFBTSxFQUFFLGtCQUFrQjtBQUMxQixnQkFBVSxFQUFFLEtBQUs7QUFDakIsY0FBUSxFQUFFO0FBQ04sY0FBTSxFQUFFLFlBQVk7QUFDcEIsY0FBTSxFQUFFLGFBQWE7T0FDeEI7QUFDRCxnQkFBVSxFQUFFO0FBQ1IsY0FBTSxFQUFFLFlBQVk7QUFDcEIsY0FBTSxFQUFFLFlBQVk7T0FDdkI7S0FDSjtBQUNELGVBQVcsRUFBRSxJQUFJO0dBQ2xCLENBQUM7Q0FDSDs7QUFLTSxTQUFTLHNCQUFzQixDQUFFLFVBQVUsRUFBYztNQUFaLEtBQUsseURBQUcsQ0FBQzs7QUFFM0QsU0FBTztBQUNILFVBQU0sRUFBRSxvQkFBb0I7QUFDNUIsUUFBSSxFQUFFLElBQUk7QUFDVixZQUFRLEVBQUUsQ0FDTjtBQUNJLFlBQU0sRUFBRSxZQUFZO0FBQ3BCLFlBQU0sRUFBRSxlQUFlLENBQUUsS0FBSyxDQUFFO0tBQ25DLENBQ0o7QUFDRCxjQUFVLEVBQUUsRUFBRTtBQUNkLFVBQU0sRUFBRTtBQUNKLFlBQU0sRUFBRSxnQkFBZ0I7QUFDeEIsWUFBTSxFQUFFLENBQ0o7QUFDSSxjQUFNLEVBQUUsaUJBQWlCO0FBQ3pCLGtCQUFVLEVBQUUsVUFBVTtPQUN6QixDQUNKO0tBQ0o7QUFDRCxlQUFXLEVBQUUsS0FBSztBQUNsQixnQkFBWSxFQUFFLEtBQUs7R0FDdEIsQ0FBQztDQUNIOztBQUtNLFNBQVMsaUJBQWlCLENBQUUsWUFBWSxFQUFjO01BQVosS0FBSyx5REFBRyxDQUFDOztBQUV4RCxTQUFPOztBQUVMLFVBQU0sRUFBRSxnQkFBZ0I7QUFDeEIsWUFBUSxFQUFFO0FBQ1IsWUFBTSxFQUFFLGtCQUFrQjtBQUMxQixnQkFBVSxFQUFFLEtBQUs7QUFDakIsY0FBUSxFQUFFO0FBQ04sY0FBTSxFQUFFLFlBQVk7QUFDcEIsY0FBTSxFQUFFLGFBQWE7T0FDeEI7QUFDRCxnQkFBVSxFQUFFO0FBQ1IsY0FBTSxFQUFFLFlBQVk7QUFDcEIsY0FBTSxFQUFFLGFBQWE7T0FDeEI7S0FDRjtBQUNELGVBQVcsRUFBRSxDQUNYO0FBQ0UsWUFBTSxFQUFFLFlBQVk7QUFDcEIsWUFBTSxFQUFFLGVBQWUsQ0FBRSxLQUFLLENBQUU7S0FDakMsRUFDRDtBQUNJLFlBQU0sRUFBRSxTQUFTO0FBQ2pCLGFBQU8sRUFBRSxZQUFZO0FBQ3JCLFdBQUssRUFBRSxZQUFZO0tBQ3RCLENBQ0Y7R0FDRixDQUFDO0NBRUgiLCJmaWxlIjoibGliL2V4cHJlc3Npb25zL3V0aWxpdGllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4qIFRoZSB2YWx1ZSB3ZSdsbCB1c2UgZXZlcnl3aGVyZSB0byByZXByZXNlbnRzIHBhcmFtZXRlcnMgcGFzc2VkIHRvIGFuIGV4cHJlc3Npb25cclxuKi9cclxuZXhwb3J0IGNvbnN0IHBhcmFtZXRlcnNOYW1lID0gIFwicFwiO1xyXG5cclxuLyoqXHJcbiogVGhlIHZhbHVlIHdlJ2xsIHVzZSBmb3IgZnVuY3Rpb25zXHJcbiovXHJcbmV4cG9ydCBjb25zdCBmdW5jdGlvbnNOYW1lID0gXCJmXCI7XHJcblxyXG4vKipcclxuKiBUaGUgbmFtZSBvZiB0aGUgY29sbGVjdGlvbiBwYXJtXHJcbiovXHJcbmV4cG9ydCBjb25zdCBjb2xsZWN0aW9uTmFtZSA9IFwiY1wiO1xyXG5cclxuLyoqXHJcbiogVGhlIG5hbWUgb2YgdGhlIGluc3RhbmNlIHBhcm1cclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluc3RhbmNlTmFtZSggZGVwdGggKSB7XHJcbiAgcmV0dXJuIGBpJHtkZXB0aH1gO1xyXG59XHJcblxyXG4vKipcclxuKiBDcmVhdGVzIGFuIGVzcHJpbWEgc3R5bGUgc3RydWN0dXJlIGZvciBhIHBhcmFtZXRlciBleHByZXNzaW9uXHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYXJhbWV0ZXIoIGNvbnRleHQsIHZhbHVlICkge1xyXG5cclxuICBjb25zdCBwYXJhbWV0ZXJzID0gY29udGV4dC5zdGF0ZS5vZGF0YS5wYXJhbWV0ZXJzO1xyXG4gIGNvbnN0IGluZGV4ID0gcGFyYW1ldGVycy5sZW5ndGg7XHJcbiAgcGFyYW1ldGVycy5wdXNoKCB2YWx1ZSApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgXCJ0eXBlXCI6IFwiTWVtYmVyRXhwcmVzc2lvblwiLFxyXG4gICAgXCJjb21wdXRlZFwiOiB0cnVlLFxyXG4gICAgXCJvYmplY3RcIjoge1xyXG4gICAgICBcInR5cGVcIjogXCJJZGVudGlmaWVyXCIsXHJcbiAgICAgIFwibmFtZVwiOiBwYXJhbWV0ZXJzTmFtZVxyXG4gICAgfSxcclxuICAgIFwicHJvcGVydHlcIjoge1xyXG4gICAgICBcInR5cGVcIjogXCJMaXRlcmFsXCIsXHJcbiAgICAgIFwidmFsdWVcIjogaW5kZXgsXHJcbiAgICAgIFwicmF3XCI6IGluZGV4LnRvU3RyaW5nKClcclxuICAgIH1cclxuICB9O1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiogSGVscGVyIHRvIGNyZWF0ZSAgYSBmdW5jdGlvbiBjYWxsIGV4cHJlc3Npb25cclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uQ2FsbCggZnVuY3Rpb25OYW1lLCBhcmdzICkge1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgXCJ0eXBlXCI6IFwiQ2FsbEV4cHJlc3Npb25cIixcclxuICAgIFwiY2FsbGVlXCI6IHtcclxuICAgICAgICBcInR5cGVcIjogXCJNZW1iZXJFeHByZXNzaW9uXCIsXHJcbiAgICAgICAgXCJjb21wdXRlZFwiOiBmYWxzZSxcclxuICAgICAgICBcIm9iamVjdFwiOiB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIklkZW50aWZpZXJcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IGZ1bmN0aW9uc05hbWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicHJvcGVydHlcIjoge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJJZGVudGlmaWVyXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBmdW5jdGlvbk5hbWVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJhcmd1bWVudHNcIjogYXJnc1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4qIENyZWF0ZXMgYSBmdW5jdGlvbiB0YWtpbmcgYW4gaW5zdGFuY2UgYXMgYSBwYXJhbWV0ZXJcclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlRnVuY3Rpb24oIGV4cHJlc3Npb24sIGRlcHRoID0gMCApIHtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgICAgXCJ0eXBlXCI6IFwiRnVuY3Rpb25FeHByZXNzaW9uXCIsXHJcbiAgICAgIFwiaWRcIjogbnVsbCxcclxuICAgICAgXCJwYXJhbXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcIklkZW50aWZpZXJcIixcclxuICAgICAgICAgICAgICBcIm5hbWVcIjogZ2V0SW5zdGFuY2VOYW1lKCBkZXB0aCApXHJcbiAgICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIFwiZGVmYXVsdHNcIjogW10sXHJcbiAgICAgIFwiYm9keVwiOiB7XHJcbiAgICAgICAgICBcInR5cGVcIjogXCJCbG9ja1N0YXRlbWVudFwiLFxyXG4gICAgICAgICAgXCJib2R5XCI6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlJldHVyblN0YXRlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImFyZ3VtZW50XCI6IGV4cHJlc3Npb25cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiZ2VuZXJhdG9yXCI6IGZhbHNlLFxyXG4gICAgICBcImV4cHJlc3Npb25cIjogZmFsc2VcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuKiBDcmVhdGVzIGFzdCBmb3IgYSBwcm9wZXJ0eSBnZXQgb3BlcmF0aW9uXHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9wZXJ0eUdldCggcHJvcGVydHlOYW1lLCBkZXB0aCA9IDAgKSB7XHJcblxyXG4gIHJldHVybiB7XHJcblxyXG4gICAgXCJ0eXBlXCI6IFwiQ2FsbEV4cHJlc3Npb25cIixcclxuICAgIFwiY2FsbGVlXCI6IHtcclxuICAgICAgXCJ0eXBlXCI6IFwiTWVtYmVyRXhwcmVzc2lvblwiLFxyXG4gICAgICBcImNvbXB1dGVkXCI6IGZhbHNlLFxyXG4gICAgICBcIm9iamVjdFwiOiB7XHJcbiAgICAgICAgICBcInR5cGVcIjogXCJJZGVudGlmaWVyXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogZnVuY3Rpb25zTmFtZVxyXG4gICAgICB9LFxyXG4gICAgICBcInByb3BlcnR5XCI6IHtcclxuICAgICAgICAgIFwidHlwZVwiOiBcIklkZW50aWZpZXJcIixcclxuICAgICAgICAgIFwibmFtZVwiOiBcImdldFByb3BlcnR5XCJcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiYXJndW1lbnRzXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwidHlwZVwiOiBcIklkZW50aWZpZXJcIixcclxuICAgICAgICBcIm5hbWVcIjogZ2V0SW5zdGFuY2VOYW1lKCBkZXB0aCApXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAgIFwidHlwZVwiOiBcIkxpdGVyYWxcIixcclxuICAgICAgICAgIFwidmFsdWVcIjogcHJvcGVydHlOYW1lLFxyXG4gICAgICAgICAgXCJyYXdcIjogcHJvcGVydHlOYW1lXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9O1xyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

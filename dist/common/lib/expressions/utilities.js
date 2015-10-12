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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9leHByZXNzaW9ucy91dGlsaXRpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdPLElBQU0sY0FBYyxHQUFJLEdBQUcsQ0FBQzs7O0FBSzVCLElBQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQzs7O0FBSzFCLElBQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQzs7OztBQUszQixTQUFTLGVBQWUsQ0FBRSxLQUFLLEVBQUc7QUFDdkMsZUFBVyxLQUFLLENBQUc7Q0FDcEI7O0FBS00sU0FBUyxlQUFlLENBQUUsT0FBTyxFQUFFLEtBQUssRUFBRzs7QUFFaEQsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO0FBQ2xELE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7QUFDaEMsWUFBVSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQzs7QUFFekIsU0FBTztBQUNMLFVBQU0sRUFBRSxrQkFBa0I7QUFDMUIsY0FBVSxFQUFFLElBQUk7QUFDaEIsWUFBUSxFQUFFO0FBQ1IsWUFBTSxFQUFFLFlBQVk7QUFDcEIsWUFBTSxFQUFFLGNBQWM7S0FDdkI7QUFDRCxjQUFVLEVBQUU7QUFDVixZQUFNLEVBQUUsU0FBUztBQUNqQixhQUFPLEVBQUUsS0FBSztBQUNkLFdBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFO0tBQ3hCO0dBQ0YsQ0FBQztDQUVIOztBQUtNLFNBQVMsa0JBQWtCLENBQUUsWUFBWSxFQUFFLElBQUksRUFBRzs7QUFFdkQsU0FBTztBQUNMLFVBQU0sRUFBRSxnQkFBZ0I7QUFDeEIsWUFBUSxFQUFFO0FBQ04sWUFBTSxFQUFFLGtCQUFrQjtBQUMxQixnQkFBVSxFQUFFLEtBQUs7QUFDakIsY0FBUSxFQUFFO0FBQ04sY0FBTSxFQUFFLFlBQVk7QUFDcEIsY0FBTSxFQUFFLGFBQWE7T0FDeEI7QUFDRCxnQkFBVSxFQUFFO0FBQ1IsY0FBTSxFQUFFLFlBQVk7QUFDcEIsY0FBTSxFQUFFLFlBQVk7T0FDdkI7S0FDSjtBQUNELGVBQVcsRUFBRSxJQUFJO0dBQ2xCLENBQUM7Q0FDSDs7QUFLTSxTQUFTLHNCQUFzQixDQUFFLFVBQVUsRUFBYztNQUFaLEtBQUsseURBQUcsQ0FBQzs7QUFFM0QsU0FBTztBQUNILFVBQU0sRUFBRSxvQkFBb0I7QUFDNUIsUUFBSSxFQUFFLElBQUk7QUFDVixZQUFRLEVBQUUsQ0FDTjtBQUNJLFlBQU0sRUFBRSxZQUFZO0FBQ3BCLFlBQU0sRUFBRSxlQUFlLENBQUUsS0FBSyxDQUFFO0tBQ25DLENBQ0o7QUFDRCxjQUFVLEVBQUUsRUFBRTtBQUNkLFVBQU0sRUFBRTtBQUNKLFlBQU0sRUFBRSxnQkFBZ0I7QUFDeEIsWUFBTSxFQUFFLENBQ0o7QUFDSSxjQUFNLEVBQUUsaUJBQWlCO0FBQ3pCLGtCQUFVLEVBQUUsVUFBVTtPQUN6QixDQUNKO0tBQ0o7QUFDRCxlQUFXLEVBQUUsS0FBSztBQUNsQixnQkFBWSxFQUFFLEtBQUs7R0FDdEIsQ0FBQztDQUNIOztBQUtNLFNBQVMsaUJBQWlCLENBQUUsWUFBWSxFQUFjO01BQVosS0FBSyx5REFBRyxDQUFDOztBQUV4RCxTQUFPOztBQUVMLFVBQU0sRUFBRSxnQkFBZ0I7QUFDeEIsWUFBUSxFQUFFO0FBQ1IsWUFBTSxFQUFFLGtCQUFrQjtBQUMxQixnQkFBVSxFQUFFLEtBQUs7QUFDakIsY0FBUSxFQUFFO0FBQ04sY0FBTSxFQUFFLFlBQVk7QUFDcEIsY0FBTSxFQUFFLGFBQWE7T0FDeEI7QUFDRCxnQkFBVSxFQUFFO0FBQ1IsY0FBTSxFQUFFLFlBQVk7QUFDcEIsY0FBTSxFQUFFLGFBQWE7T0FDeEI7S0FDRjtBQUNELGVBQVcsRUFBRSxDQUNYO0FBQ0UsWUFBTSxFQUFFLFlBQVk7QUFDcEIsWUFBTSxFQUFFLGVBQWUsQ0FBRSxLQUFLLENBQUU7S0FDakMsRUFDRDtBQUNJLFlBQU0sRUFBRSxTQUFTO0FBQ2pCLGFBQU8sRUFBRSxZQUFZO0FBQ3JCLFdBQUssRUFBRSxZQUFZO0tBQ3RCLENBQ0Y7R0FDRixDQUFDO0NBRUgiLCJmaWxlIjoibGliL2V4cHJlc3Npb25zL3V0aWxpdGllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuKiBUaGUgdmFsdWUgd2UnbGwgdXNlIGV2ZXJ5d2hlcmUgdG8gcmVwcmVzZW50cyBwYXJhbWV0ZXJzIHBhc3NlZCB0byBhbiBleHByZXNzaW9uXG4qL1xuZXhwb3J0IGNvbnN0IHBhcmFtZXRlcnNOYW1lID0gIFwicFwiO1xuXG4vKipcbiogVGhlIHZhbHVlIHdlJ2xsIHVzZSBmb3IgZnVuY3Rpb25zXG4qL1xuZXhwb3J0IGNvbnN0IGZ1bmN0aW9uc05hbWUgPSBcImZcIjtcblxuLyoqXG4qIFRoZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uIHBhcm1cbiovXG5leHBvcnQgY29uc3QgY29sbGVjdGlvbk5hbWUgPSBcImNcIjtcblxuLyoqXG4qIFRoZSBuYW1lIG9mIHRoZSBpbnN0YW5jZSBwYXJtXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEluc3RhbmNlTmFtZSggZGVwdGggKSB7XG4gIHJldHVybiBgaSR7ZGVwdGh9YDtcbn1cblxuLyoqXG4qIENyZWF0ZXMgYW4gZXNwcmltYSBzdHlsZSBzdHJ1Y3R1cmUgZm9yIGEgcGFyYW1ldGVyIGV4cHJlc3Npb25cbiovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFyYW1ldGVyKCBjb250ZXh0LCB2YWx1ZSApIHtcblxuICBjb25zdCBwYXJhbWV0ZXJzID0gY29udGV4dC5zdGF0ZS5vZGF0YS5wYXJhbWV0ZXJzO1xuICBjb25zdCBpbmRleCA9IHBhcmFtZXRlcnMubGVuZ3RoO1xuICBwYXJhbWV0ZXJzLnB1c2goIHZhbHVlICk7XG5cbiAgcmV0dXJuIHtcbiAgICBcInR5cGVcIjogXCJNZW1iZXJFeHByZXNzaW9uXCIsXG4gICAgXCJjb21wdXRlZFwiOiB0cnVlLFxuICAgIFwib2JqZWN0XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIklkZW50aWZpZXJcIixcbiAgICAgIFwibmFtZVwiOiBwYXJhbWV0ZXJzTmFtZVxuICAgIH0sXG4gICAgXCJwcm9wZXJ0eVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJMaXRlcmFsXCIsXG4gICAgICBcInZhbHVlXCI6IGluZGV4LFxuICAgICAgXCJyYXdcIjogaW5kZXgudG9TdHJpbmcoKVxuICAgIH1cbiAgfTtcblxufVxuXG4vKipcbiogSGVscGVyIHRvIGNyZWF0ZSAgYSBmdW5jdGlvbiBjYWxsIGV4cHJlc3Npb25cbiovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb25DYWxsKCBmdW5jdGlvbk5hbWUsIGFyZ3MgKSB7XG5cbiAgcmV0dXJuIHtcbiAgICBcInR5cGVcIjogXCJDYWxsRXhwcmVzc2lvblwiLFxuICAgIFwiY2FsbGVlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiTWVtYmVyRXhwcmVzc2lvblwiLFxuICAgICAgICBcImNvbXB1dGVkXCI6IGZhbHNlLFxuICAgICAgICBcIm9iamVjdFwiOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJJZGVudGlmaWVyXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogZnVuY3Rpb25zTmFtZVxuICAgICAgICB9LFxuICAgICAgICBcInByb3BlcnR5XCI6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIklkZW50aWZpZXJcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBmdW5jdGlvbk5hbWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJhcmd1bWVudHNcIjogYXJnc1xuICB9O1xufVxuXG4vKipcbiogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRha2luZyBhbiBpbnN0YW5jZSBhcyBhIHBhcmFtZXRlclxuKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZUZ1bmN0aW9uKCBleHByZXNzaW9uLCBkZXB0aCA9IDAgKSB7XG5cbiAgcmV0dXJuIHtcbiAgICAgIFwidHlwZVwiOiBcIkZ1bmN0aW9uRXhwcmVzc2lvblwiLFxuICAgICAgXCJpZFwiOiBudWxsLFxuICAgICAgXCJwYXJhbXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiSWRlbnRpZmllclwiLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogZ2V0SW5zdGFuY2VOYW1lKCBkZXB0aCApXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiZGVmYXVsdHNcIjogW10sXG4gICAgICBcImJvZHlcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcIkJsb2NrU3RhdGVtZW50XCIsXG4gICAgICAgICAgXCJib2R5XCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiUmV0dXJuU3RhdGVtZW50XCIsXG4gICAgICAgICAgICAgICAgICBcImFyZ3VtZW50XCI6IGV4cHJlc3Npb25cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImdlbmVyYXRvclwiOiBmYWxzZSxcbiAgICAgIFwiZXhwcmVzc2lvblwiOiBmYWxzZVxuICB9O1xufVxuXG4vKipcbiogQ3JlYXRlcyBhc3QgZm9yIGEgcHJvcGVydHkgZ2V0IG9wZXJhdGlvblxuKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9wZXJ0eUdldCggcHJvcGVydHlOYW1lLCBkZXB0aCA9IDAgKSB7XG5cbiAgcmV0dXJuIHtcblxuICAgIFwidHlwZVwiOiBcIkNhbGxFeHByZXNzaW9uXCIsXG4gICAgXCJjYWxsZWVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiTWVtYmVyRXhwcmVzc2lvblwiLFxuICAgICAgXCJjb21wdXRlZFwiOiBmYWxzZSxcbiAgICAgIFwib2JqZWN0XCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJJZGVudGlmaWVyXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IGZ1bmN0aW9uc05hbWVcbiAgICAgIH0sXG4gICAgICBcInByb3BlcnR5XCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJJZGVudGlmaWVyXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiZ2V0UHJvcGVydHlcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCJhcmd1bWVudHNcIjogW1xuICAgICAge1xuICAgICAgICBcInR5cGVcIjogXCJJZGVudGlmaWVyXCIsXG4gICAgICAgIFwibmFtZVwiOiBnZXRJbnN0YW5jZU5hbWUoIGRlcHRoIClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiTGl0ZXJhbFwiLFxuICAgICAgICAgIFwidmFsdWVcIjogcHJvcGVydHlOYW1lLFxuICAgICAgICAgIFwicmF3XCI6IHByb3BlcnR5TmFtZVxuICAgICAgfVxuICAgIF1cbiAgfTtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

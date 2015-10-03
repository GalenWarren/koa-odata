"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createParameter = createParameter;
exports.createFunctionCall = createFunctionCall;
exports.createPropertyGet = createPropertyGet;
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

function createPropertyGet(propertyName) {
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
    "arguments": [{
      "type": "Literal",
      "value": "a",
      "raw": "\"a\""
    }]
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9leHByZXNzaW9ucy91dGlsaXRpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHTyxJQUFNLGNBQWMsR0FBSSxHQUFHLENBQUM7OztBQUs1QixJQUFNLGFBQWEsR0FBRyxHQUFHLENBQUM7OztBQUsxQixJQUFNLGNBQWMsR0FBRyxHQUFHLENBQUM7Ozs7QUFLM0IsU0FBUyxlQUFlLENBQUUsVUFBVSxFQUFFLEtBQUssRUFBRzs7QUFFbkQsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztBQUNoQyxZQUFVLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFDOztBQUV6QixTQUFPO0FBQ0wsVUFBTSxFQUFFLGtCQUFrQjtBQUMxQixjQUFVLEVBQUUsSUFBSTtBQUNoQixZQUFRLEVBQUU7QUFDUixZQUFNLEVBQUUsWUFBWTtBQUNwQixZQUFNLEVBQUUsY0FBYztLQUN2QjtBQUNELGNBQVUsRUFBRTtBQUNWLFlBQU0sRUFBRSxTQUFTO0FBQ2pCLGFBQU8sRUFBRSxLQUFLO0FBQ2QsV0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUU7S0FDeEI7R0FDRixDQUFDO0NBRUg7O0FBS00sU0FBUyxrQkFBa0IsQ0FBRSxZQUFZLEVBQUUsSUFBSSxFQUFHOztBQUV2RCxTQUFPO0FBQ0wsVUFBTSxFQUFFLGdCQUFnQjtBQUN4QixZQUFRLEVBQUU7QUFDTixZQUFNLEVBQUUsa0JBQWtCO0FBQzFCLGdCQUFVLEVBQUUsS0FBSztBQUNqQixjQUFRLEVBQUU7QUFDTixjQUFNLEVBQUUsWUFBWTtBQUNwQixjQUFNLEVBQUUsYUFBYTtPQUN4QjtBQUNELGdCQUFVLEVBQUU7QUFDUixjQUFNLEVBQUUsWUFBWTtBQUNwQixjQUFNLEVBQUUsWUFBWTtPQUN2QjtLQUNKO0FBQ0QsZUFBVyxFQUFFLElBQUk7R0FDbEIsQ0FBQztDQUNIOztBQUtNLFNBQVMsaUJBQWlCLENBQUUsWUFBWSxFQUFHO0FBQ2hELFNBQU87QUFDTCxVQUFNLEVBQUUsZ0JBQWdCO0FBQ3hCLFlBQVEsRUFBRTtBQUNOLFlBQU0sRUFBRSxrQkFBa0I7QUFDMUIsZ0JBQVUsRUFBRSxLQUFLO0FBQ2pCLGNBQVEsRUFBRTtBQUNOLGNBQU0sRUFBRSxZQUFZO0FBQ3BCLGNBQU0sRUFBRSxhQUFhO09BQ3hCO0FBQ0QsZ0JBQVUsRUFBRTtBQUNSLGNBQU0sRUFBRSxZQUFZO0FBQ3BCLGNBQU0sRUFBRSxTQUFTO09BQ3BCO0tBQ0o7QUFDRCxlQUFXLEVBQUUsQ0FDVDtBQUNJLFlBQU0sRUFBRSxTQUFTO0FBQ2pCLGFBQU8sRUFBRSxHQUFHO0FBQ1osV0FBSyxFQUFFLE9BQU87S0FDakIsQ0FDSjtHQUNGLENBQUE7Q0FDRiIsImZpbGUiOiJsaWIvZXhwcmVzc2lvbnMvdXRpbGl0aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiogVGhlIHZhbHVlIHdlJ2xsIHVzZSBldmVyeXdoZXJlIHRvIHJlcHJlc2VudHMgcGFyYW1ldGVycyBwYXNzZWQgdG8gYW4gZXhwcmVzc2lvblxyXG4qL1xyXG5leHBvcnQgY29uc3QgcGFyYW1ldGVyc05hbWUgPSAgXCJwXCI7XHJcblxyXG4vKipcclxuKiBUaGUgdmFsdWUgd2UnbGwgdXNlIGZvciBmdW5jdGlvbnNcclxuKi9cclxuZXhwb3J0IGNvbnN0IGZ1bmN0aW9uc05hbWUgPSBcImZcIjtcclxuXHJcbi8qKlxyXG4qIFRoZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uIHBhcm1cclxuKi9cclxuZXhwb3J0IGNvbnN0IGNvbGxlY3Rpb25OYW1lID0gXCJjXCI7XHJcblxyXG4vKipcclxuKiBDcmVhdGVzIGFuIGVzcHJpbWEgc3R5bGUgc3RydWN0dXJlIGZvciBhIHBhcmFtZXRlciBleHByZXNzaW9uXHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYXJhbWV0ZXIoIHBhcmFtZXRlcnMsIHZhbHVlICkge1xyXG5cclxuICBjb25zdCBpbmRleCA9IHBhcmFtZXRlcnMubGVuZ3RoO1xyXG4gIHBhcmFtZXRlcnMucHVzaCggdmFsdWUgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIFwidHlwZVwiOiBcIk1lbWJlckV4cHJlc3Npb25cIixcclxuICAgIFwiY29tcHV0ZWRcIjogdHJ1ZSxcclxuICAgIFwib2JqZWN0XCI6IHtcclxuICAgICAgXCJ0eXBlXCI6IFwiSWRlbnRpZmllclwiLFxyXG4gICAgICBcIm5hbWVcIjogcGFyYW1ldGVyc05hbWVcclxuICAgIH0sXHJcbiAgICBcInByb3BlcnR5XCI6IHtcclxuICAgICAgXCJ0eXBlXCI6IFwiTGl0ZXJhbFwiLFxyXG4gICAgICBcInZhbHVlXCI6IGluZGV4LFxyXG4gICAgICBcInJhd1wiOiBpbmRleC50b1N0cmluZygpXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4qIEhlbHBlciB0byBjcmVhdGUgIGEgZnVuY3Rpb24gY2FsbCBleHByZXNzaW9uXHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGdW5jdGlvbkNhbGwoIGZ1bmN0aW9uTmFtZSwgYXJncyApIHtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIFwidHlwZVwiOiBcIkNhbGxFeHByZXNzaW9uXCIsXHJcbiAgICBcImNhbGxlZVwiOiB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwiTWVtYmVyRXhwcmVzc2lvblwiLFxyXG4gICAgICAgIFwiY29tcHV0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgXCJvYmplY3RcIjoge1xyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJJZGVudGlmaWVyXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBmdW5jdGlvbnNOYW1lXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInByb3BlcnR5XCI6IHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiSWRlbnRpZmllclwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogZnVuY3Rpb25OYW1lXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiYXJndW1lbnRzXCI6IGFyZ3NcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuKiBDcmVhdGVzIGFzdCBmb3IgYSBwcm9wZXJ0eSBnZXQgb3BlcmF0aW9uXHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9wZXJ0eUdldCggcHJvcGVydHlOYW1lICkge1xyXG4gIHJldHVybiB7XHJcbiAgICBcInR5cGVcIjogXCJDYWxsRXhwcmVzc2lvblwiLFxyXG4gICAgXCJjYWxsZWVcIjoge1xyXG4gICAgICAgIFwidHlwZVwiOiBcIk1lbWJlckV4cHJlc3Npb25cIixcclxuICAgICAgICBcImNvbXB1dGVkXCI6IGZhbHNlLFxyXG4gICAgICAgIFwib2JqZWN0XCI6IHtcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiSWRlbnRpZmllclwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogZnVuY3Rpb25zTmFtZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJwcm9wZXJ0eVwiOiB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIklkZW50aWZpZXJcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZ2V0TmFtZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiYXJndW1lbnRzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIkxpdGVyYWxcIixcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcImFcIixcclxuICAgICAgICAgICAgXCJyYXdcIjogXCJcXFwiYVxcXCJcIlxyXG4gICAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

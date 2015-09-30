"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _aureliaDependencyInjection = require("aurelia-dependency-injection");

var _odataParser = require("odata-parser");

var _odataParser2 = _interopRequireDefault(_odataParser);

var _top = require("./top");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var Parameters = (function () {
  function Parameters() {
    _classCallCheck(this, _Parameters);

    debugger;

    for (var _len = arguments.length, parameters = Array(_len), _key = 0; _key < _len; _key++) {
      parameters[_key] = arguments[_key];
    }

    this.parameters = new Map((0, _lodash2["default"])(parameters).map(function (p) {
      return [p.key, p];
    }).value());
  }

  _createClass(Parameters, [{
    key: "parse",
    value: function parse(context, pipeline) {
      var _this = this;

      debugger;

      var expression = {
        type: "Identifier",
        name: "collection"
      };

      if (context.request.querystring) {
        var ast = _odataParser2["default"].parse(context.request.querystring);

        expression = (0, _lodash2["default"])(ast).reduce(function (inputExpression, value, key) {
          var parameter = _this.parameters.get(key);
          if (parameter) {
            return parameter.parse(value, inputExpression, context, pipeline);
          }

          return inputExpression;
        }, expression);
      }

      return {
        type: "Program",
        body: {
          type: "ExpressionStatement",
          expression: expression
        },
        sourceType: "script"
      };
    }
  }]);

  var _Parameters = Parameters;
  Parameters = (0, _aureliaDependencyInjection.inject)(_top.TopParameter)(Parameters) || Parameters;
  return Parameters;
})();

exports.Parameters = Parameters;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9wYXJhbWV0ZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OzswQ0FBK0IsOEJBQThCOzsyQkFDMUMsY0FBYzs7OzttQkFDTixPQUFPOztzQkFDcEIsUUFBUTs7OztJQUdULFVBQVU7QUFVVixXQVZBLFVBQVUsR0FVUTs7O0FBRTNCLGFBQVM7O3NDQUZLLFVBQVU7QUFBVixnQkFBVTs7O0FBS3hCLFFBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLENBQUUseUJBQUUsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFFLFVBQUEsQ0FBQzthQUFJLENBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUU7S0FBQSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztHQUMzRTs7ZUFoQlUsVUFBVTs7V0FxQmhCLGVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRzs7O0FBRXpCLGVBQVM7O0FBSVQsVUFBSSxVQUFVLEdBQUc7QUFDZixZQUFJLEVBQUUsWUFBWTtBQUNsQixZQUFJLEVBQUUsWUFBWTtPQUNuQixDQUFDOztBQUdGLFVBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7QUFHL0IsWUFBTSxHQUFHLEdBQUcseUJBQU8sS0FBSyxDQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7O0FBRXZELGtCQUFVLEdBQUcseUJBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFFLFVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQU07QUFHN0QsY0FBTSxTQUFTLEdBQUcsTUFBSyxVQUFVLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBRSxDQUFDO0FBQzdDLGNBQUksU0FBUyxFQUFFO0FBR2IsbUJBQU8sU0FBUyxDQUFDLEtBQUssQ0FBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUUsQ0FBQztXQUVyRTs7QUFHRCxpQkFBTyxlQUFlLENBQUM7U0FFeEIsRUFBRSxVQUFVLENBQUUsQ0FBQztPQUVqQjs7QUFHRCxhQUFPO0FBQ0wsWUFBSSxFQUFFLFNBQVM7QUFDZixZQUFJLEVBQUU7QUFDSixjQUFJLEVBQUUscUJBQXFCO0FBQzNCLG9CQUFVLEVBQUUsVUFBVTtTQUN2QjtBQUNELGtCQUFVLEVBQUUsUUFBUTtPQUNyQixDQUFDO0tBRUg7OztvQkFsRVUsVUFBVTtBQUFWLFlBQVUsR0FEdEIsMERBQXNCLENBQ1YsVUFBVSxLQUFWLFVBQVU7U0FBVixVQUFVIiwiZmlsZSI6ImxpYi9wYXJhbWV0ZXJzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzaW5nbGV0b24saW5qZWN0fSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xyXG5pbXBvcnQgcGFyc2VyIGZyb20gXCJvZGF0YS1wYXJzZXJcIjtcclxuaW1wb3J0IHtUb3BQYXJhbWV0ZXJ9IGZyb20gXCIuL3RvcFwiO1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5AaW5qZWN0KCBUb3BQYXJhbWV0ZXIgKVxyXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVycyB7XHJcblxyXG4gIC8qKlxyXG4gICogVGhlIG1hcCBvZiBvZGF0YSBwYXJhbWV0ZXJzIHRoYXQgd2UgY2FuIHBhcnNlXHJcbiAgKi9cclxuICBwYXJhbWV0ZXJzXHJcblxyXG4gIC8qKlxyXG4gICogQ29uc3RydWN0aW9uXHJcbiAgKi9cclxuICBjb25zdHJ1Y3RvciggLi4ucGFyYW1ldGVycyApIHtcclxuXHJcbiAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICAvLyBjcmVhdGUgdGhlIHBhcmFtZXRlcnMgbWFwXHJcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBuZXcgTWFwKCBfKHBhcmFtZXRlcnMpLm1hcCggcCA9PiBbIHAua2V5LCBwIF0pLnZhbHVlKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBDYWxsZWQgdG8gZ2VuZXJhdGUgYW4gZXhwcmVzc2lvbiBmcm9tIHRoZSByZXF1ZXN0IGNvbnRleHRcclxuICAqL1xyXG4gIHBhcnNlKCBjb250ZXh0LCBwaXBlbGluZSApIHtcclxuXHJcbiAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICAvLyBnZW5lcmF0ZSB0aGUgaW5pdGlhbCBleHByZXNzaW9uLCB3aGljaCBpcyBqdXN0IHRoZSBjb2xsZWN0aW9uXHJcbiAgICAvLyBpZGVudGlmaWVyICh3aGljaCBpcyBhc3N1bWVkIHRvIGJlIGEgbG9kYXNoIHdyYXBwZXIpXHJcbiAgICBsZXQgZXhwcmVzc2lvbiA9IHtcclxuICAgICAgdHlwZTogXCJJZGVudGlmaWVyXCIsXHJcbiAgICAgIG5hbWU6IFwiY29sbGVjdGlvblwiXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHF1ZXJ5IHN0cmluZyBleGlzdHM/XHJcbiAgICBpZiAoY29udGV4dC5yZXF1ZXN0LnF1ZXJ5c3RyaW5nKSB7XHJcblxyXG4gICAgICAvLyB5ZXMsIHBhcnNlIHRoZSBxdWVyeSBzdHJpbmcgdXNpbmcgb2RhdGEtcGFyc2VyIGxpYnJhcnkgLi4uXHJcbiAgICAgIGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZSggY29udGV4dC5yZXF1ZXN0LnF1ZXJ5c3RyaW5nKTtcclxuXHJcbiAgICAgIGV4cHJlc3Npb24gPSBfKGFzdCkucmVkdWNlKCAoIGlucHV0RXhwcmVzc2lvbiwgdmFsdWUsIGtleSApID0+IHtcclxuXHJcbiAgICAgICAgLy8gZG8gd2Ugc3VwcG9ydCB0aGlzIHBhcmFtZXRlcj9cclxuICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSB0aGlzLnBhcmFtZXRlcnMuZ2V0KCBrZXkgKTtcclxuICAgICAgICBpZiAocGFyYW1ldGVyKSB7XHJcblxyXG4gICAgICAgICAgLy8gbW9kaWZ5IHRoZSBleHByZXNzaW9uIHRvIHJlZmxlY3QgdGhpcyBwYXJhbWV0ZXJcclxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXIucGFyc2UoIHZhbHVlLCBpbnB1dEV4cHJlc3Npb24sIGNvbnRleHQsIHBpcGVsaW5lICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbm90IGhhbmRsZWQsIHJldHVybiBleHByZXNzaW9uIHVubW9kaWZpZWRcclxuICAgICAgICByZXR1cm4gaW5wdXRFeHByZXNzaW9uO1xyXG5cclxuICAgICAgfSwgZXhwcmVzc2lvbiApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gdGhlIGZpbmFsIGFzdFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogXCJQcm9ncmFtXCIsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICB0eXBlOiBcIkV4cHJlc3Npb25TdGF0ZW1lbnRcIixcclxuICAgICAgICBleHByZXNzaW9uOiBleHByZXNzaW9uXHJcbiAgICAgIH0sXHJcbiAgICAgIHNvdXJjZVR5cGU6IFwic2NyaXB0XCJcclxuICAgIH07XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

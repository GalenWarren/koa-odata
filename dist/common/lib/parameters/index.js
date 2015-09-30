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

var _expressionsVisitorsIndex = require("../expressions/visitors/index");

var _top = require("./top");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var parametersName = "parameters";

var Parameters = (function () {
  function Parameters() {
    _classCallCheck(this, _Parameters);

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

        debugger;

        var ast = _odataParser2["default"].parse(context.request.querystring);

        var initializingVisitor = new _expressionsVisitorsIndex.InitializingVisitor(parametersName);
        ast = initializingVisitor.visit(ast);
        context.state.odata.parameters = initializingVisitor.parameters;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9wYXJhbWV0ZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OzswQ0FBK0IsOEJBQThCOzsyQkFDMUMsY0FBYzs7Ozt3Q0FDQywrQkFBK0I7O21CQUN0QyxPQUFPOztzQkFDcEIsUUFBUTs7OztBQUt0QixJQUFNLGNBQWMsR0FBRyxZQUFZLENBQUM7O0lBTXZCLFVBQVU7QUFVVixXQVZBLFVBQVUsR0FVUTs7O3NDQUFiLFVBQVU7QUFBVixnQkFBVTs7O0FBQ3hCLFFBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLENBQUUseUJBQUUsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFFLFVBQUEsQ0FBQzthQUFJLENBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUU7S0FBQSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztHQUMzRTs7ZUFaVSxVQUFVOztXQWlCaEIsZUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFHOzs7QUFFekIsZUFBUzs7QUFJVCxVQUFJLFVBQVUsR0FBRztBQUNmLFlBQUksRUFBRSxZQUFZO0FBQ2xCLFlBQUksRUFBRSxZQUFZO09BQ25CLENBQUM7O0FBR0YsVUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTs7QUFFL0IsaUJBQVM7O0FBR1QsWUFBSSxHQUFHLEdBQUcseUJBQU8sS0FBSyxDQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7O0FBR3JELFlBQU0sbUJBQW1CLEdBQUcsa0RBQXlCLGNBQWMsQ0FBRSxDQUFDO0FBQ3RFLFdBQUcsR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLENBQUUsR0FBRyxDQUFFLENBQUM7QUFDdkMsZUFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLG1CQUFtQixDQUFDLFVBQVUsQ0FBQzs7QUFHaEUsa0JBQVUsR0FBRyx5QkFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUUsVUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBTTtBQUc3RCxjQUFNLFNBQVMsR0FBRyxNQUFLLFVBQVUsQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFFLENBQUM7QUFDN0MsY0FBSSxTQUFTLEVBQUU7QUFHYixtQkFBTyxTQUFTLENBQUMsS0FBSyxDQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBRSxDQUFDO1dBRXJFOztBQUdELGlCQUFPLGVBQWUsQ0FBQztTQUV4QixFQUFFLFVBQVUsQ0FBRSxDQUFDO09BRWpCOztBQUdELGFBQU87QUFDTCxZQUFJLEVBQUUsU0FBUztBQUNmLFlBQUksRUFBRTtBQUNKLGNBQUksRUFBRSxxQkFBcUI7QUFDM0Isb0JBQVUsRUFBRSxVQUFVO1NBQ3ZCO0FBQ0Qsa0JBQVUsRUFBRSxRQUFRO09BQ3JCLENBQUM7S0FFSDs7O29CQXRFVSxVQUFVO0FBQVYsWUFBVSxHQUR0QiwwREFBc0IsQ0FDVixVQUFVLEtBQVYsVUFBVTtTQUFWLFVBQVUiLCJmaWxlIjoibGliL3BhcmFtZXRlcnMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NpbmdsZXRvbixpbmplY3R9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XHJcbmltcG9ydCBwYXJzZXIgZnJvbSBcIm9kYXRhLXBhcnNlclwiO1xyXG5pbXBvcnQge0luaXRpYWxpemluZ1Zpc2l0b3J9IGZyb20gXCIuLi9leHByZXNzaW9ucy92aXNpdG9ycy9pbmRleFwiO1xyXG5pbXBvcnQge1RvcFBhcmFtZXRlcn0gZnJvbSBcIi4vdG9wXCI7XHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbi8qKlxyXG4qIFRoZSBuYW1lIHdlJ2xsIHVzZSBmb3IgdGhlIHBhcmFtZXRlcnNcclxuKi9cclxuY29uc3QgcGFyYW1ldGVyc05hbWUgPSBcInBhcmFtZXRlcnNcIjtcclxuXHJcbi8qKlxyXG4qIENsYXNzIHRvIGZhY2lsaXRhdGUgcGFyYW1ldGVyIHByb2Nlc3NpbmdcclxuKi9cclxuQGluamVjdCggVG9wUGFyYW1ldGVyIClcclxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlcnMge1xyXG5cclxuICAvKipcclxuICAqIFRoZSBtYXAgb2Ygb2RhdGEgcGFyYW1ldGVycyB0aGF0IHdlIGNhbiBwYXJzZVxyXG4gICovXHJcbiAgcGFyYW1ldGVyc1xyXG5cclxuICAvKipcclxuICAqIENvbnN0cnVjdGlvblxyXG4gICovXHJcbiAgY29uc3RydWN0b3IoIC4uLnBhcmFtZXRlcnMgKSB7XHJcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBuZXcgTWFwKCBfKHBhcmFtZXRlcnMpLm1hcCggcCA9PiBbIHAua2V5LCBwIF0pLnZhbHVlKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBDYWxsZWQgdG8gZ2VuZXJhdGUgYW4gZXhwcmVzc2lvbiBmcm9tIHRoZSByZXF1ZXN0IGNvbnRleHRcclxuICAqL1xyXG4gIHBhcnNlKCBjb250ZXh0LCBwaXBlbGluZSApIHtcclxuXHJcbiAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICAvLyBnZW5lcmF0ZSB0aGUgaW5pdGlhbCBleHByZXNzaW9uLCB3aGljaCBpcyBqdXN0IHRoZSBjb2xsZWN0aW9uXHJcbiAgICAvLyBpZGVudGlmaWVyICh3aGljaCBpcyBhc3N1bWVkIHRvIGJlIGEgbG9kYXNoIHdyYXBwZXIpXHJcbiAgICBsZXQgZXhwcmVzc2lvbiA9IHtcclxuICAgICAgdHlwZTogXCJJZGVudGlmaWVyXCIsXHJcbiAgICAgIG5hbWU6IFwiY29sbGVjdGlvblwiXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHF1ZXJ5IHN0cmluZyBleGlzdHM/XHJcbiAgICBpZiAoY29udGV4dC5yZXF1ZXN0LnF1ZXJ5c3RyaW5nKSB7XHJcblxyXG4gICAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICAgIC8vIHllcywgcGFyc2UgdGhlIHF1ZXJ5IHN0cmluZyB1c2luZyBvZGF0YS1wYXJzZXIgbGlicmFyeSAuLi5cclxuICAgICAgbGV0IGFzdCA9IHBhcnNlci5wYXJzZSggY29udGV4dC5yZXF1ZXN0LnF1ZXJ5c3RyaW5nKTtcclxuXHJcbiAgICAgIC8vIGRvIHRoZSBpbml0aWFsIHByb2Nlc3NpbmcsIGluY2x1ZGluZyBmYWN0b3Jpbmcgb3V0IGxpdGVyYWxzXHJcbiAgICAgIGNvbnN0IGluaXRpYWxpemluZ1Zpc2l0b3IgPSBuZXcgSW5pdGlhbGl6aW5nVmlzaXRvciggcGFyYW1ldGVyc05hbWUgKTtcclxuICAgICAgYXN0ID0gaW5pdGlhbGl6aW5nVmlzaXRvci52aXNpdCggYXN0ICk7XHJcbiAgICAgIGNvbnRleHQuc3RhdGUub2RhdGEucGFyYW1ldGVycyA9IGluaXRpYWxpemluZ1Zpc2l0b3IucGFyYW1ldGVycztcclxuXHJcbiAgICAgIC8vIG5vdywgcHJvY2VzcyB0aGUgZXhwcmVzc2lvblxyXG4gICAgICBleHByZXNzaW9uID0gXyhhc3QpLnJlZHVjZSggKCBpbnB1dEV4cHJlc3Npb24sIHZhbHVlLCBrZXkgKSA9PiB7XHJcblxyXG4gICAgICAgIC8vIGRvIHdlIHN1cHBvcnQgdGhpcyBwYXJhbWV0ZXI/XHJcbiAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gdGhpcy5wYXJhbWV0ZXJzLmdldCgga2V5ICk7XHJcbiAgICAgICAgaWYgKHBhcmFtZXRlcikge1xyXG5cclxuICAgICAgICAgIC8vIG1vZGlmeSB0aGUgZXhwcmVzc2lvbiB0byByZWZsZWN0IHRoaXMgcGFyYW1ldGVyXHJcbiAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyLnBhcnNlKCB2YWx1ZSwgaW5wdXRFeHByZXNzaW9uLCBjb250ZXh0LCBwaXBlbGluZSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG5vdCBoYW5kbGVkLCByZXR1cm4gZXhwcmVzc2lvbiB1bm1vZGlmaWVkXHJcbiAgICAgICAgcmV0dXJuIGlucHV0RXhwcmVzc2lvbjtcclxuXHJcbiAgICAgIH0sIGV4cHJlc3Npb24gKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJuIHRoZSBmaW5hbCBhc3RcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFwiUHJvZ3JhbVwiLFxyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgdHlwZTogXCJFeHByZXNzaW9uU3RhdGVtZW50XCIsXHJcbiAgICAgICAgZXhwcmVzc2lvbjogZXhwcmVzc2lvblxyXG4gICAgICB9LFxyXG4gICAgICBzb3VyY2VUeXBlOiBcInNjcmlwdFwiXHJcbiAgICB9O1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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

var _select = require("./select");

var _expressionsUtilities = require("../expressions/utilities");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

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
        "type": "Identifier",
        "name": _expressionsUtilities.collectionName
      };

      if (context.request.querystring) {

        debugger;

        var ast = _odataParser2["default"].parse(context.request.querystring);

        var initializingVisitor = new _expressionsVisitorsIndex.InitializingVisitor(context.state.odata.parameters);
        ast = initializingVisitor.visit(ast);

        expression = (0, _lodash2["default"])(ast).reduce(function (inputExpression, value, key) {
          var parameter = _this.parameters.get(key);
          if (parameter) {
            return parameter.parse(value, inputExpression, context, pipeline);
          }

          return inputExpression;
        }, expression);
      }

      return expression;
    }
  }]);

  var _Parameters = Parameters;
  Parameters = (0, _aureliaDependencyInjection.inject)(_top.TopParameter, _select.SelectParameter)(Parameters) || Parameters;
  return Parameters;
})();

exports.Parameters = Parameters;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9wYXJhbWV0ZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OzswQ0FBK0IsOEJBQThCOzsyQkFDMUMsY0FBYzs7Ozt3Q0FDQywrQkFBK0I7O21CQUN0QyxPQUFPOztzQkFDSixVQUFVOztvQ0FDRywwQkFBMEI7O3NCQUN2RCxRQUFROzs7O0lBU1QsVUFBVTtBQVVWLFdBVkEsVUFBVSxHQVVROzs7c0NBQWIsVUFBVTtBQUFWLGdCQUFVOzs7QUFDeEIsUUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsQ0FBRSx5QkFBRSxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUUsVUFBQSxDQUFDO2FBQUksQ0FBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBRTtLQUFBLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0dBQzNFOztlQVpVLFVBQVU7O1dBaUJoQixlQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUc7OztBQUV6QixlQUFTOztBQUlULFVBQUksVUFBVSxHQUFHO0FBQ2YsY0FBTSxFQUFFLFlBQVk7QUFDcEIsY0FBTSxzQ0FBZ0I7T0FDdkIsQ0FBQzs7QUFHRixVQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFOztBQUUvQixpQkFBUzs7QUFHVCxZQUFJLEdBQUcsR0FBRyx5QkFBTyxLQUFLLENBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQzs7QUFHckQsWUFBTSxtQkFBbUIsR0FBRyxrREFBeUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFFLENBQUM7QUFDdEYsV0FBRyxHQUFHLG1CQUFtQixDQUFDLEtBQUssQ0FBRSxHQUFHLENBQUUsQ0FBQzs7QUFHdkMsa0JBQVUsR0FBRyx5QkFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUUsVUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBTTtBQUc3RCxjQUFNLFNBQVMsR0FBRyxNQUFLLFVBQVUsQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFFLENBQUM7QUFDN0MsY0FBSSxTQUFTLEVBQUU7QUFHYixtQkFBTyxTQUFTLENBQUMsS0FBSyxDQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBRSxDQUFDO1dBRXJFOztBQUdELGlCQUFPLGVBQWUsQ0FBQztTQUV4QixFQUFFLFVBQVUsQ0FBRSxDQUFDO09BRWpCOztBQUdELGFBQU8sVUFBVSxDQUFDO0tBRW5COzs7b0JBOURVLFVBQVU7QUFBVixZQUFVLEdBSnRCLG1GQUdBLENBQ1ksVUFBVSxLQUFWLFVBQVU7U0FBVixVQUFVIiwiZmlsZSI6ImxpYi9wYXJhbWV0ZXJzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzaW5nbGV0b24saW5qZWN0fSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xyXG5pbXBvcnQgcGFyc2VyIGZyb20gXCJvZGF0YS1wYXJzZXJcIjtcclxuaW1wb3J0IHtJbml0aWFsaXppbmdWaXNpdG9yfSBmcm9tIFwiLi4vZXhwcmVzc2lvbnMvdmlzaXRvcnMvaW5kZXhcIjtcclxuaW1wb3J0IHtUb3BQYXJhbWV0ZXJ9IGZyb20gXCIuL3RvcFwiO1xyXG5pbXBvcnQge1NlbGVjdFBhcmFtZXRlcn0gZnJvbSBcIi4vc2VsZWN0XCI7XHJcbmltcG9ydCB7ZnVuY3Rpb25zTmFtZSxjb2xsZWN0aW9uTmFtZX0gZnJvbSBcIi4uL2V4cHJlc3Npb25zL3V0aWxpdGllc1wiO1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG4vKipcclxuKiBDbGFzcyB0byBmYWNpbGl0YXRlIHBhcmFtZXRlciBwcm9jZXNzaW5nXHJcbiovXHJcbkBpbmplY3QoXHJcbiAgVG9wUGFyYW1ldGVyLFxyXG4gIFNlbGVjdFBhcmFtZXRlclxyXG4pXHJcbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJzIHtcclxuXHJcbiAgLyoqXHJcbiAgKiBUaGUgbWFwIG9mIG9kYXRhIHBhcmFtZXRlcnMgdGhhdCB3ZSBjYW4gcGFyc2VcclxuICAqL1xyXG4gIHBhcmFtZXRlcnNcclxuXHJcbiAgLyoqXHJcbiAgKiBDb25zdHJ1Y3Rpb25cclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKCAuLi5wYXJhbWV0ZXJzICkge1xyXG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gbmV3IE1hcCggXyhwYXJhbWV0ZXJzKS5tYXAoIHAgPT4gWyBwLmtleSwgcCBdKS52YWx1ZSgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQ2FsbGVkIHRvIGdlbmVyYXRlIGFuIGV4cHJlc3Npb24gZnJvbSB0aGUgcmVxdWVzdCBjb250ZXh0XHJcbiAgKi9cclxuICBwYXJzZSggY29udGV4dCwgcGlwZWxpbmUgKSB7XHJcblxyXG4gICAgZGVidWdnZXI7XHJcblxyXG4gICAgLy8gZ2VuZXJhdGUgdGhlIGluaXRpYWwgZXhwcmVzc2lvbiwgd2hpY2ggaXMganVzdCB0aGUgY29sbGVjdGlvblxyXG4gICAgLy8gaWRlbnRpZmllciAod2hpY2ggaXMgYXNzdW1lZCB0byBiZSBhIGxvZGFzaCB3cmFwcGVyKVxyXG4gICAgbGV0IGV4cHJlc3Npb24gPSB7XHJcbiAgICAgIFwidHlwZVwiOiBcIklkZW50aWZpZXJcIixcclxuICAgICAgXCJuYW1lXCI6IGNvbGxlY3Rpb25OYW1lXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHF1ZXJ5IHN0cmluZyBleGlzdHM/XHJcbiAgICBpZiAoY29udGV4dC5yZXF1ZXN0LnF1ZXJ5c3RyaW5nKSB7XHJcblxyXG4gICAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICAgIC8vIHllcywgcGFyc2UgdGhlIHF1ZXJ5IHN0cmluZyB1c2luZyBvZGF0YS1wYXJzZXIgbGlicmFyeSAuLi5cclxuICAgICAgbGV0IGFzdCA9IHBhcnNlci5wYXJzZSggY29udGV4dC5yZXF1ZXN0LnF1ZXJ5c3RyaW5nKTtcclxuXHJcbiAgICAgIC8vIGRvIHRoZSBpbml0aWFsIHByb2Nlc3NpbmcsIGluY2x1ZGluZyBmYWN0b3Jpbmcgb3V0IGxpdGVyYWxzXHJcbiAgICAgIGNvbnN0IGluaXRpYWxpemluZ1Zpc2l0b3IgPSBuZXcgSW5pdGlhbGl6aW5nVmlzaXRvciggY29udGV4dC5zdGF0ZS5vZGF0YS5wYXJhbWV0ZXJzICk7XHJcbiAgICAgIGFzdCA9IGluaXRpYWxpemluZ1Zpc2l0b3IudmlzaXQoIGFzdCApO1xyXG5cclxuICAgICAgLy8gbm93LCBwcm9jZXNzIHRoZSBleHByZXNzaW9uXHJcbiAgICAgIGV4cHJlc3Npb24gPSBfKGFzdCkucmVkdWNlKCAoIGlucHV0RXhwcmVzc2lvbiwgdmFsdWUsIGtleSApID0+IHtcclxuXHJcbiAgICAgICAgLy8gZG8gd2Ugc3VwcG9ydCB0aGlzIHBhcmFtZXRlcj9cclxuICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSB0aGlzLnBhcmFtZXRlcnMuZ2V0KCBrZXkgKTtcclxuICAgICAgICBpZiAocGFyYW1ldGVyKSB7XHJcblxyXG4gICAgICAgICAgLy8gbW9kaWZ5IHRoZSBleHByZXNzaW9uIHRvIHJlZmxlY3QgdGhpcyBwYXJhbWV0ZXJcclxuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXIucGFyc2UoIHZhbHVlLCBpbnB1dEV4cHJlc3Npb24sIGNvbnRleHQsIHBpcGVsaW5lICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbm90IGhhbmRsZWQsIHJldHVybiBleHByZXNzaW9uIHVubW9kaWZpZWRcclxuICAgICAgICByZXR1cm4gaW5wdXRFeHByZXNzaW9uO1xyXG5cclxuICAgICAgfSwgZXhwcmVzc2lvbiApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gdGhlIGZpbmFsIGV4cHJlc3Npb25cclxuICAgIHJldHVybiBleHByZXNzaW9uO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

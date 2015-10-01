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

var _expressionsUtilities = require("../expressions/utilities");

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
  Parameters = (0, _aureliaDependencyInjection.inject)(_top.TopParameter)(Parameters) || Parameters;
  return Parameters;
})();

exports.Parameters = Parameters;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9wYXJhbWV0ZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OzswQ0FBK0IsOEJBQThCOzsyQkFDMUMsY0FBYzs7Ozt3Q0FDQywrQkFBK0I7O21CQUN0QyxPQUFPOztvQ0FDUywwQkFBMEI7O3NCQUN2RCxRQUFROzs7O0FBS3RCLElBQU0sY0FBYyxHQUFHLFlBQVksQ0FBQzs7SUFNdkIsVUFBVTtBQVVWLFdBVkEsVUFBVSxHQVVROzs7c0NBQWIsVUFBVTtBQUFWLGdCQUFVOzs7QUFDeEIsUUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsQ0FBRSx5QkFBRSxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUUsVUFBQSxDQUFDO2FBQUksQ0FBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBRTtLQUFBLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0dBQzNFOztlQVpVLFVBQVU7O1dBaUJoQixlQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUc7OztBQUV6QixlQUFTOztBQUlULFVBQUksVUFBVSxHQUFHO0FBQ2YsY0FBTSxFQUFFLFlBQVk7QUFDcEIsY0FBTSxzQ0FBZ0I7T0FDdkIsQ0FBQzs7QUFHRixVQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFOztBQUUvQixpQkFBUzs7QUFHVCxZQUFJLEdBQUcsR0FBRyx5QkFBTyxLQUFLLENBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQzs7QUFHckQsWUFBTSxtQkFBbUIsR0FBRyxrREFBeUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFFLENBQUM7QUFDdEYsV0FBRyxHQUFHLG1CQUFtQixDQUFDLEtBQUssQ0FBRSxHQUFHLENBQUUsQ0FBQzs7QUFHdkMsa0JBQVUsR0FBRyx5QkFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUUsVUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBTTtBQUc3RCxjQUFNLFNBQVMsR0FBRyxNQUFLLFVBQVUsQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFFLENBQUM7QUFDN0MsY0FBSSxTQUFTLEVBQUU7QUFHYixtQkFBTyxTQUFTLENBQUMsS0FBSyxDQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBRSxDQUFDO1dBRXJFOztBQUdELGlCQUFPLGVBQWUsQ0FBQztTQUV4QixFQUFFLFVBQVUsQ0FBRSxDQUFDO09BRWpCOztBQUdELGFBQU8sVUFBVSxDQUFDO0tBRW5COzs7b0JBOURVLFVBQVU7QUFBVixZQUFVLEdBRHRCLDBEQUFzQixDQUNWLFVBQVUsS0FBVixVQUFVO1NBQVYsVUFBVSIsImZpbGUiOiJsaWIvcGFyYW1ldGVycy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2luZ2xldG9uLGluamVjdH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuaW1wb3J0IHBhcnNlciBmcm9tIFwib2RhdGEtcGFyc2VyXCI7XHJcbmltcG9ydCB7SW5pdGlhbGl6aW5nVmlzaXRvcn0gZnJvbSBcIi4uL2V4cHJlc3Npb25zL3Zpc2l0b3JzL2luZGV4XCI7XHJcbmltcG9ydCB7VG9wUGFyYW1ldGVyfSBmcm9tIFwiLi90b3BcIjtcclxuaW1wb3J0IHtmdW5jdGlvbnNOYW1lLGNvbGxlY3Rpb25OYW1lfSBmcm9tIFwiLi4vZXhwcmVzc2lvbnMvdXRpbGl0aWVzXCI7XHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbi8qKlxyXG4qIFRoZSBuYW1lIHdlJ2xsIHVzZSBmb3IgdGhlIHBhcmFtZXRlcnNcclxuKi9cclxuY29uc3QgcGFyYW1ldGVyc05hbWUgPSBcInBhcmFtZXRlcnNcIjtcclxuXHJcbi8qKlxyXG4qIENsYXNzIHRvIGZhY2lsaXRhdGUgcGFyYW1ldGVyIHByb2Nlc3NpbmdcclxuKi9cclxuQGluamVjdCggVG9wUGFyYW1ldGVyIClcclxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlcnMge1xyXG5cclxuICAvKipcclxuICAqIFRoZSBtYXAgb2Ygb2RhdGEgcGFyYW1ldGVycyB0aGF0IHdlIGNhbiBwYXJzZVxyXG4gICovXHJcbiAgcGFyYW1ldGVyc1xyXG5cclxuICAvKipcclxuICAqIENvbnN0cnVjdGlvblxyXG4gICovXHJcbiAgY29uc3RydWN0b3IoIC4uLnBhcmFtZXRlcnMgKSB7XHJcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBuZXcgTWFwKCBfKHBhcmFtZXRlcnMpLm1hcCggcCA9PiBbIHAua2V5LCBwIF0pLnZhbHVlKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBDYWxsZWQgdG8gZ2VuZXJhdGUgYW4gZXhwcmVzc2lvbiBmcm9tIHRoZSByZXF1ZXN0IGNvbnRleHRcclxuICAqL1xyXG4gIHBhcnNlKCBjb250ZXh0LCBwaXBlbGluZSApIHtcclxuXHJcbiAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICAvLyBnZW5lcmF0ZSB0aGUgaW5pdGlhbCBleHByZXNzaW9uLCB3aGljaCBpcyBqdXN0IHRoZSBjb2xsZWN0aW9uXHJcbiAgICAvLyBpZGVudGlmaWVyICh3aGljaCBpcyBhc3N1bWVkIHRvIGJlIGEgbG9kYXNoIHdyYXBwZXIpXHJcbiAgICBsZXQgZXhwcmVzc2lvbiA9IHtcclxuICAgICAgXCJ0eXBlXCI6IFwiSWRlbnRpZmllclwiLFxyXG4gICAgICBcIm5hbWVcIjogY29sbGVjdGlvbk5hbWVcclxuICAgIH07XHJcblxyXG4gICAgLy8gcXVlcnkgc3RyaW5nIGV4aXN0cz9cclxuICAgIGlmIChjb250ZXh0LnJlcXVlc3QucXVlcnlzdHJpbmcpIHtcclxuXHJcbiAgICAgIGRlYnVnZ2VyO1xyXG5cclxuICAgICAgLy8geWVzLCBwYXJzZSB0aGUgcXVlcnkgc3RyaW5nIHVzaW5nIG9kYXRhLXBhcnNlciBsaWJyYXJ5IC4uLlxyXG4gICAgICBsZXQgYXN0ID0gcGFyc2VyLnBhcnNlKCBjb250ZXh0LnJlcXVlc3QucXVlcnlzdHJpbmcpO1xyXG5cclxuICAgICAgLy8gZG8gdGhlIGluaXRpYWwgcHJvY2Vzc2luZywgaW5jbHVkaW5nIGZhY3RvcmluZyBvdXQgbGl0ZXJhbHNcclxuICAgICAgY29uc3QgaW5pdGlhbGl6aW5nVmlzaXRvciA9IG5ldyBJbml0aWFsaXppbmdWaXNpdG9yKCBjb250ZXh0LnN0YXRlLm9kYXRhLnBhcmFtZXRlcnMgKTtcclxuICAgICAgYXN0ID0gaW5pdGlhbGl6aW5nVmlzaXRvci52aXNpdCggYXN0ICk7XHJcblxyXG4gICAgICAvLyBub3csIHByb2Nlc3MgdGhlIGV4cHJlc3Npb25cclxuICAgICAgZXhwcmVzc2lvbiA9IF8oYXN0KS5yZWR1Y2UoICggaW5wdXRFeHByZXNzaW9uLCB2YWx1ZSwga2V5ICkgPT4ge1xyXG5cclxuICAgICAgICAvLyBkbyB3ZSBzdXBwb3J0IHRoaXMgcGFyYW1ldGVyP1xyXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IHRoaXMucGFyYW1ldGVycy5nZXQoIGtleSApO1xyXG4gICAgICAgIGlmIChwYXJhbWV0ZXIpIHtcclxuXHJcbiAgICAgICAgICAvLyBtb2RpZnkgdGhlIGV4cHJlc3Npb24gdG8gcmVmbGVjdCB0aGlzIHBhcmFtZXRlclxyXG4gICAgICAgICAgcmV0dXJuIHBhcmFtZXRlci5wYXJzZSggdmFsdWUsIGlucHV0RXhwcmVzc2lvbiwgY29udGV4dCwgcGlwZWxpbmUgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBub3QgaGFuZGxlZCwgcmV0dXJuIGV4cHJlc3Npb24gdW5tb2RpZmllZFxyXG4gICAgICAgIHJldHVybiBpbnB1dEV4cHJlc3Npb247XHJcblxyXG4gICAgICB9LCBleHByZXNzaW9uICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybiB0aGUgZmluYWwgZXhwcmVzc2lvblxyXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

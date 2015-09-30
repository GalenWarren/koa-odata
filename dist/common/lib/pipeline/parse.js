"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _aureliaDependencyInjection = require("aurelia-dependency-injection");

var _base = require("./base");

var _segmentsIndex = require("../segments/index");

var _parametersIndex = require("../parameters/index");

var _state = require("./state");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var ParsePipelineComponent = (function (_PipelineComponent) {
  _inherits(ParsePipelineComponent, _PipelineComponent);

  function ParsePipelineComponent(options, segments, parameters) {
    _classCallCheck(this, _ParsePipelineComponent);

    _get(Object.getPrototypeOf(_ParsePipelineComponent.prototype), "constructor", this).call(this, options);
    this.segments = segments;
    this.parameters = parameters;
  }

  _createClass(ParsePipelineComponent, [{
    key: "process",
    value: function* process(next, context, pipeline) {
      context.state.odata = new _state.PipelineState();

      context.state.odata.segments = this.segments.parse(context, pipeline);

      debugger;
      context.state.odata.expression = this.parameters.parse(context, pipeline);

      yield next;
    }
  }]);

  var _ParsePipelineComponent = ParsePipelineComponent;
  ParsePipelineComponent = (0, _aureliaDependencyInjection.inject)("options", _segmentsIndex.Segments, _parametersIndex.Parameters)(ParsePipelineComponent) || ParsePipelineComponent;
  return ParsePipelineComponent;
})(_base.PipelineComponent);

exports.ParsePipelineComponent = ParsePipelineComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9waXBlbGluZS9wYXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUFxQiw4QkFBOEI7O29CQUNuQixRQUFROzs2QkFDakIsbUJBQW1COzsrQkFDakIscUJBQXFCOztxQkFDbEIsU0FBUzs7c0JBQ3ZCLFFBQVE7Ozs7SUFNVCxzQkFBc0I7WUFBdEIsc0JBQXNCOztBQUt0QixXQUxBLHNCQUFzQixDQUtwQixPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRzs7O0FBQzNDLG1HQUFNLE9BQU8sRUFBRTtBQUNmLFFBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLFFBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0dBQzlCOztlQVRVLHNCQUFzQjs7V0FjekIsa0JBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUc7QUFHbEMsYUFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsMEJBQW1CLENBQUM7O0FBRzFDLGFBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBRSxPQUFPLEVBQUUsUUFBUSxDQUFFLENBQUM7O0FBR3hFLGVBQVM7QUFDVCxhQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBRSxDQUFDOztBQUU1RSxZQUFNLElBQUksQ0FBQztLQUVaOzs7Z0NBNUJVLHNCQUFzQjtBQUF0Qix3QkFBc0IsR0FEbEMsd0NBQU8sU0FBUyx1REFBd0IsQ0FDNUIsc0JBQXNCLEtBQXRCLHNCQUFzQjtTQUF0QixzQkFBc0IiLCJmaWxlIjoibGliL3BpcGVsaW5lL3BhcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XHJcbmltcG9ydCB7UGlwZWxpbmVDb21wb25lbnR9IGZyb20gXCIuL2Jhc2VcIjtcclxuaW1wb3J0IHtTZWdtZW50c30gZnJvbSBcIi4uL3NlZ21lbnRzL2luZGV4XCI7XHJcbmltcG9ydCB7UGFyYW1ldGVyc30gZnJvbSBcIi4uL3BhcmFtZXRlcnMvaW5kZXhcIjtcclxuaW1wb3J0IHtQaXBlbGluZVN0YXRlfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG4vKipcclxuKiBUaGUgcGlwZWxpbmUgY29tcG9uZW50IHRvIHBhcnNlIHRoZSBvZGF0YSByZXF1ZXN0XHJcbiovXHJcbkBpbmplY3QoXCJvcHRpb25zXCIsIFNlZ21lbnRzLCBQYXJhbWV0ZXJzIClcclxuZXhwb3J0IGNsYXNzIFBhcnNlUGlwZWxpbmVDb21wb25lbnQgZXh0ZW5kcyBQaXBlbGluZUNvbXBvbmVudCB7XHJcblxyXG4gIC8qKlxyXG4gICogQ29uc3RydWN0aW9uXHJcbiAgKi9cclxuICBjb25zdHJ1Y3Rvciggb3B0aW9ucywgc2VnbWVudHMsIHBhcmFtZXRlcnMgKSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIHRoaXMuc2VnbWVudHMgPSBzZWdtZW50cztcclxuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFJldHVybnMgYSBrb2EgbWlkZGxld2FyZSBmdW5jdGlvbiB0aGF0IHBhcnNlcyB0aGUgcmVxdWVzdFxyXG4gICovXHJcbiAgKnByb2Nlc3MoIG5leHQsIGNvbnRleHQsIHBpcGVsaW5lICkge1xyXG5cclxuICAgIC8vIGluaXRpYWxpemUgdGhlIG9kYXRhIHN0YXRlXHJcbiAgICBjb250ZXh0LnN0YXRlLm9kYXRhID0gbmV3IFBpcGVsaW5lU3RhdGUoKTtcclxuXHJcbiAgICAvLyBwYXJzZSB0aGUgc2VnbWVudHNcclxuICAgIGNvbnRleHQuc3RhdGUub2RhdGEuc2VnbWVudHMgPSB0aGlzLnNlZ21lbnRzLnBhcnNlKCBjb250ZXh0LCBwaXBlbGluZSApO1xyXG5cclxuICAgIC8vIHllcywgcGFyc2UgdGhlIGV4cHJlc3Npb25cclxuICAgIGRlYnVnZ2VyO1xyXG4gICAgY29udGV4dC5zdGF0ZS5vZGF0YS5leHByZXNzaW9uID0gdGhpcy5wYXJhbWV0ZXJzLnBhcnNlKCBjb250ZXh0LCBwaXBlbGluZSApO1xyXG5cclxuICAgIHlpZWxkIG5leHQ7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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

debugger;

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

      context.state.odata.expression = this.parameters.parse(context, pipeline);

      yield next;
    }
  }]);

  var _ParsePipelineComponent = ParsePipelineComponent;
  ParsePipelineComponent = (0, _aureliaDependencyInjection.inject)("options", _segmentsIndex.Segments, _parametersIndex.Parameters)(ParsePipelineComponent) || ParsePipelineComponent;
  return ParsePipelineComponent;
})(_base.PipelineComponent);

exports.ParsePipelineComponent = ParsePipelineComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9waXBlbGluZS9wYXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUEyQiw4QkFBOEI7O29CQUN6QixRQUFROzs2QkFDakIsbUJBQW1COzsrQkFDakIscUJBQXFCOztxQkFDbEIsU0FBUzs7c0JBQ3ZCLFFBQVE7Ozs7QUFFdEIsU0FBUzs7SUFNSSxzQkFBc0I7WUFBdEIsc0JBQXNCOztBQUt0QixXQUxBLHNCQUFzQixDQUtwQixPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRzs7O0FBQzNDLG1HQUFNLE9BQU8sRUFBRTtBQUNmLFFBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLFFBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0dBQzlCOztlQVRVLHNCQUFzQjs7V0FjekIsa0JBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUc7QUFHbEMsYUFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsMEJBQW1CLENBQUM7O0FBRzFDLGFBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBRSxPQUFPLEVBQUUsUUFBUSxDQUFFLENBQUM7O0FBR3hFLGFBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBRSxPQUFPLEVBQUUsUUFBUSxDQUFFLENBQUM7O0FBRTVFLFlBQU0sSUFBSSxDQUFDO0tBRVo7OztnQ0EzQlUsc0JBQXNCO0FBQXRCLHdCQUFzQixHQURsQyx3Q0FBTyxTQUFTLHVEQUF3QixDQUM1QixzQkFBc0IsS0FBdEIsc0JBQXNCO1NBQXRCLHNCQUFzQiIsImZpbGUiOiJsaWIvcGlwZWxpbmUvcGFyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCxwcm94eX0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuaW1wb3J0IHtQaXBlbGluZUNvbXBvbmVudH0gZnJvbSBcIi4vYmFzZVwiO1xyXG5pbXBvcnQge1NlZ21lbnRzfSBmcm9tIFwiLi4vc2VnbWVudHMvaW5kZXhcIjtcclxuaW1wb3J0IHtQYXJhbWV0ZXJzfSBmcm9tIFwiLi4vcGFyYW1ldGVycy9pbmRleFwiO1xyXG5pbXBvcnQge1BpcGVsaW5lU3RhdGV9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmRlYnVnZ2VyO1xyXG5cclxuLyoqXHJcbiogVGhlIHBpcGVsaW5lIGNvbXBvbmVudCB0byBwYXJzZSB0aGUgb2RhdGEgcmVxdWVzdFxyXG4qL1xyXG5AaW5qZWN0KFwib3B0aW9uc1wiLCBTZWdtZW50cywgUGFyYW1ldGVycyApXHJcbmV4cG9ydCBjbGFzcyBQYXJzZVBpcGVsaW5lQ29tcG9uZW50IGV4dGVuZHMgUGlwZWxpbmVDb21wb25lbnQge1xyXG5cclxuICAvKipcclxuICAqIENvbnN0cnVjdGlvblxyXG4gICovXHJcbiAgY29uc3RydWN0b3IoIG9wdGlvbnMsIHNlZ21lbnRzLCBwYXJhbWV0ZXJzICkge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICB0aGlzLnNlZ21lbnRzID0gc2VnbWVudHM7XHJcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBSZXR1cm5zIGEga29hIG1pZGRsZXdhcmUgZnVuY3Rpb24gdGhhdCBwYXJzZXMgdGhlIHJlcXVlc3RcclxuICAqL1xyXG4gICpwcm9jZXNzKCBuZXh0LCBjb250ZXh0LCBwaXBlbGluZSApIHtcclxuXHJcbiAgICAvLyBpbml0aWFsaXplIHRoZSBvZGF0YSBzdGF0ZVxyXG4gICAgY29udGV4dC5zdGF0ZS5vZGF0YSA9IG5ldyBQaXBlbGluZVN0YXRlKCk7XHJcblxyXG4gICAgLy8gcGFyc2UgdGhlIHNlZ21lbnRzXHJcbiAgICBjb250ZXh0LnN0YXRlLm9kYXRhLnNlZ21lbnRzID0gdGhpcy5zZWdtZW50cy5wYXJzZSggY29udGV4dCwgcGlwZWxpbmUgKTtcclxuXHJcbiAgICAvLyB5ZXMsIHBhcnNlIHRoZSBleHByZXNzaW9uXHJcbiAgICBjb250ZXh0LnN0YXRlLm9kYXRhLmV4cHJlc3Npb24gPSB0aGlzLnBhcmFtZXRlcnMucGFyc2UoIGNvbnRleHQsIHBpcGVsaW5lICk7XHJcblxyXG4gICAgeWllbGQgbmV4dDtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

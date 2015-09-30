"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _odataParser = require("odata-parser");

var _odataParser2 = _interopRequireDefault(_odataParser);

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
            context.state.odata = new _state.PipelineState(pipeline.modelMetadata);

            context.state.odata.segments = this.segments.parse(context.request.path, pipeline);

            if (context.request.querystring) {
                var parsed = _odataParser2["default"].parse(context.request.querystring);
                context.state.odata.expression = this.parameters.parse(parsed);
            }

            debugger;

            yield next;
        }
    }]);

    var _ParsePipelineComponent = ParsePipelineComponent;
    ParsePipelineComponent = (0, _aureliaDependencyInjection.inject)("options", _segmentsIndex.Segments, _parametersIndex.Parameters)(ParsePipelineComponent) || ParsePipelineComponent;
    return ParsePipelineComponent;
})(_base.PipelineComponent);

exports.ParsePipelineComponent = ParsePipelineComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9waXBlbGluZS9wYXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzJCQUFtQixjQUFjOzs7OzBDQUNaLDhCQUE4Qjs7b0JBQ25CLFFBQVE7OzZCQUNqQixtQkFBbUI7OytCQUNqQixxQkFBcUI7O3FCQUNsQixTQUFTOztzQkFDdkIsUUFBUTs7OztJQU1ULHNCQUFzQjtjQUF0QixzQkFBc0I7O0FBS3RCLGFBTEEsc0JBQXNCLENBS3BCLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFHOzs7QUFDM0MsdUdBQU0sT0FBTyxFQUFFO0FBQ2YsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDekIsWUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDOUI7O2lCQVRVLHNCQUFzQjs7ZUFjekIsa0JBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUc7QUFHbEMsbUJBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLHlCQUFtQixRQUFRLENBQUMsYUFBYSxDQUFFLENBQUM7O0FBR2xFLG1CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFFLENBQUM7O0FBR3JGLGdCQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO0FBRy9CLG9CQUFNLE1BQU0sR0FBRyx5QkFBTyxLQUFLLENBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUUsQ0FBQztBQUMzRCx1QkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFFLE1BQU0sQ0FBRSxDQUFDO2FBQ2xFOztBQUVELHFCQUFTOztBQUVULGtCQUFNLElBQUksQ0FBQztTQUVaOzs7a0NBbENVLHNCQUFzQjtBQUF0QiwwQkFBc0IsR0FEbEMsd0NBQU8sU0FBUyx1REFBd0IsQ0FDNUIsc0JBQXNCLEtBQXRCLHNCQUFzQjtXQUF0QixzQkFBc0IiLCJmaWxlIjoibGliL3BpcGVsaW5lL3BhcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhcnNlciBmcm9tIFwib2RhdGEtcGFyc2VyXCI7XHJcbmltcG9ydCB7aW5qZWN0fSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xyXG5pbXBvcnQge1BpcGVsaW5lQ29tcG9uZW50fSBmcm9tIFwiLi9iYXNlXCI7XHJcbmltcG9ydCB7U2VnbWVudHN9IGZyb20gXCIuLi9zZWdtZW50cy9pbmRleFwiO1xyXG5pbXBvcnQge1BhcmFtZXRlcnN9IGZyb20gXCIuLi9wYXJhbWV0ZXJzL2luZGV4XCI7XHJcbmltcG9ydCB7UGlwZWxpbmVTdGF0ZX0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuLyoqXHJcbiogVGhlIHBpcGVsaW5lIGNvbXBvbmVudCB0byBwYXJzZSB0aGUgb2RhdGEgcmVxdWVzdFxyXG4qL1xyXG5AaW5qZWN0KFwib3B0aW9uc1wiLCBTZWdtZW50cywgUGFyYW1ldGVycyApXHJcbmV4cG9ydCBjbGFzcyBQYXJzZVBpcGVsaW5lQ29tcG9uZW50IGV4dGVuZHMgUGlwZWxpbmVDb21wb25lbnQge1xyXG5cclxuICAvKipcclxuICAqIENvbnN0cnVjdGlvblxyXG4gICovXHJcbiAgY29uc3RydWN0b3IoIG9wdGlvbnMsIHNlZ21lbnRzLCBwYXJhbWV0ZXJzICkge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICB0aGlzLnNlZ21lbnRzID0gc2VnbWVudHM7XHJcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBSZXR1cm5zIGEga29hIG1pZGRsZXdhcmUgZnVuY3Rpb24gdGhhdCBwYXJzZXMgdGhlIHJlcXVlc3RcclxuICAqL1xyXG4gICpwcm9jZXNzKCBuZXh0LCBjb250ZXh0LCBwaXBlbGluZSApIHtcclxuXHJcbiAgICAvLyBpbml0aWFsaXplIHRoZSBvZGF0YSBzdGF0ZVxyXG4gICAgY29udGV4dC5zdGF0ZS5vZGF0YSA9IG5ldyBQaXBlbGluZVN0YXRlKCBwaXBlbGluZS5tb2RlbE1ldGFkYXRhICk7XHJcblxyXG4gICAgLy8gcGFyc2UgdGhlIHNlZ21lbnRzXHJcbiAgICBjb250ZXh0LnN0YXRlLm9kYXRhLnNlZ21lbnRzID0gdGhpcy5zZWdtZW50cy5wYXJzZSggY29udGV4dC5yZXF1ZXN0LnBhdGgsIHBpcGVsaW5lICk7XHJcblxyXG4gICAgLy8gaXMgcXVlcnkgc3RyaW5nIHN1cHBsaWVkP1xyXG4gICAgaWYgKGNvbnRleHQucmVxdWVzdC5xdWVyeXN0cmluZykge1xyXG5cclxuICAgICAgLy8geWVzLCBwYXJzZSBpdFxyXG4gICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZXIucGFyc2UoIGNvbnRleHQucmVxdWVzdC5xdWVyeXN0cmluZyApO1xyXG4gICAgICBjb250ZXh0LnN0YXRlLm9kYXRhLmV4cHJlc3Npb24gPSB0aGlzLnBhcmFtZXRlcnMucGFyc2UoIHBhcnNlZCApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlYnVnZ2VyO1xyXG5cclxuICAgIHlpZWxkIG5leHQ7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

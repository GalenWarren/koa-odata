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

            context.state.odata.segments = this.segments.parse(context.request.path, this.options.model);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9waXBlbGluZS9wYXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzJCQUFtQixjQUFjOzs7OzBDQUNaLDhCQUE4Qjs7b0JBQ25CLFFBQVE7OzZCQUNqQixtQkFBbUI7OytCQUNqQixxQkFBcUI7O3FCQUNsQixTQUFTOztzQkFDdkIsUUFBUTs7OztJQU1ULHNCQUFzQjtjQUF0QixzQkFBc0I7O0FBS3RCLGFBTEEsc0JBQXNCLENBS3BCLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFHOzs7QUFDM0MsdUdBQU0sT0FBTyxFQUFFO0FBQ2YsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDekIsWUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDOUI7O2lCQVRVLHNCQUFzQjs7ZUFjekIsa0JBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUc7QUFHbEMsbUJBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLHlCQUFtQixRQUFRLENBQUMsYUFBYSxDQUFFLENBQUM7O0FBR2xFLG1CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUUsQ0FBQzs7QUFHL0YsZ0JBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7QUFHL0Isb0JBQU0sTUFBTSxHQUFHLHlCQUFPLEtBQUssQ0FBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBRSxDQUFDO0FBQzNELHVCQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUUsTUFBTSxDQUFFLENBQUM7YUFDbEU7O0FBRUQscUJBQVM7O0FBRVQsa0JBQU0sSUFBSSxDQUFDO1NBRVo7OztrQ0FsQ1Usc0JBQXNCO0FBQXRCLDBCQUFzQixHQURsQyx3Q0FBTyxTQUFTLHVEQUF3QixDQUM1QixzQkFBc0IsS0FBdEIsc0JBQXNCO1dBQXRCLHNCQUFzQiIsImZpbGUiOiJsaWIvcGlwZWxpbmUvcGFyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGFyc2VyIGZyb20gXCJvZGF0YS1wYXJzZXJcIjtcclxuaW1wb3J0IHtpbmplY3R9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XHJcbmltcG9ydCB7UGlwZWxpbmVDb21wb25lbnR9IGZyb20gXCIuL2Jhc2VcIjtcclxuaW1wb3J0IHtTZWdtZW50c30gZnJvbSBcIi4uL3NlZ21lbnRzL2luZGV4XCI7XHJcbmltcG9ydCB7UGFyYW1ldGVyc30gZnJvbSBcIi4uL3BhcmFtZXRlcnMvaW5kZXhcIjtcclxuaW1wb3J0IHtQaXBlbGluZVN0YXRlfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG4vKipcclxuKiBUaGUgcGlwZWxpbmUgY29tcG9uZW50IHRvIHBhcnNlIHRoZSBvZGF0YSByZXF1ZXN0XHJcbiovXHJcbkBpbmplY3QoXCJvcHRpb25zXCIsIFNlZ21lbnRzLCBQYXJhbWV0ZXJzIClcclxuZXhwb3J0IGNsYXNzIFBhcnNlUGlwZWxpbmVDb21wb25lbnQgZXh0ZW5kcyBQaXBlbGluZUNvbXBvbmVudCB7XHJcblxyXG4gIC8qKlxyXG4gICogQ29uc3RydWN0aW9uXHJcbiAgKi9cclxuICBjb25zdHJ1Y3Rvciggb3B0aW9ucywgc2VnbWVudHMsIHBhcmFtZXRlcnMgKSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIHRoaXMuc2VnbWVudHMgPSBzZWdtZW50cztcclxuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFJldHVybnMgYSBrb2EgbWlkZGxld2FyZSBmdW5jdGlvbiB0aGF0IHBhcnNlcyB0aGUgcmVxdWVzdFxyXG4gICovXHJcbiAgKnByb2Nlc3MoIG5leHQsIGNvbnRleHQsIHBpcGVsaW5lICkge1xyXG5cclxuICAgIC8vIGluaXRpYWxpemUgdGhlIG9kYXRhIHN0YXRlXHJcbiAgICBjb250ZXh0LnN0YXRlLm9kYXRhID0gbmV3IFBpcGVsaW5lU3RhdGUoIHBpcGVsaW5lLm1vZGVsTWV0YWRhdGEgKTtcclxuXHJcbiAgICAvLyBwYXJzZSB0aGUgc2VnbWVudHNcclxuICAgIGNvbnRleHQuc3RhdGUub2RhdGEuc2VnbWVudHMgPSB0aGlzLnNlZ21lbnRzLnBhcnNlKCBjb250ZXh0LnJlcXVlc3QucGF0aCwgdGhpcy5vcHRpb25zLm1vZGVsICk7XHJcblxyXG4gICAgLy8gaXMgcXVlcnkgc3RyaW5nIHN1cHBsaWVkP1xyXG4gICAgaWYgKGNvbnRleHQucmVxdWVzdC5xdWVyeXN0cmluZykge1xyXG5cclxuICAgICAgLy8geWVzLCBwYXJzZSBpdFxyXG4gICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZXIucGFyc2UoIGNvbnRleHQucmVxdWVzdC5xdWVyeXN0cmluZyApO1xyXG4gICAgICBjb250ZXh0LnN0YXRlLm9kYXRhLmV4cHJlc3Npb24gPSB0aGlzLnBhcmFtZXRlcnMucGFyc2UoIHBhcnNlZCApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlYnVnZ2VyO1xyXG5cclxuICAgIHlpZWxkIG5leHQ7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

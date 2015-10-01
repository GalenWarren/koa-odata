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

            context.state.odata.expression = this.parameters.parse(context, pipeline);

            yield next;

            console.log(JSON.stringify(context.state.odata.expression, null, 5));
        }
    }]);

    var _ParsePipelineComponent = ParsePipelineComponent;
    ParsePipelineComponent = (0, _aureliaDependencyInjection.inject)("options", _segmentsIndex.Segments, _parametersIndex.Parameters)(ParsePipelineComponent) || ParsePipelineComponent;
    return ParsePipelineComponent;
})(_base.PipelineComponent);

exports.ParsePipelineComponent = ParsePipelineComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9waXBlbGluZS9wYXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUFxQiw4QkFBOEI7O29CQUNuQixRQUFROzs2QkFDakIsbUJBQW1COzsrQkFDakIscUJBQXFCOztxQkFDbEIsU0FBUzs7c0JBQ3ZCLFFBQVE7Ozs7SUFNVCxzQkFBc0I7Y0FBdEIsc0JBQXNCOztBQUt0QixhQUxBLHNCQUFzQixDQUtwQixPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRzs7O0FBQzNDLHVHQUFNLE9BQU8sRUFBRTtBQUNmLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLFlBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0tBQzlCOztpQkFUVSxzQkFBc0I7O2VBY3pCLGtCQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFHO0FBR2xDLG1CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRywwQkFBbUIsQ0FBQzs7QUFHMUMsbUJBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBRSxPQUFPLEVBQUUsUUFBUSxDQUFFLENBQUM7O0FBR3hFLG1CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBRSxDQUFDOztBQUU1RSxrQkFBTSxJQUFJLENBQUM7O0FBRVgsbUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FFcEU7OztrQ0E3QlUsc0JBQXNCO0FBQXRCLDBCQUFzQixHQURsQyx3Q0FBTyxTQUFTLHVEQUF3QixDQUM1QixzQkFBc0IsS0FBdEIsc0JBQXNCO1dBQXRCLHNCQUFzQiIsImZpbGUiOiJsaWIvcGlwZWxpbmUvcGFyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuaW1wb3J0IHtQaXBlbGluZUNvbXBvbmVudH0gZnJvbSBcIi4vYmFzZVwiO1xyXG5pbXBvcnQge1NlZ21lbnRzfSBmcm9tIFwiLi4vc2VnbWVudHMvaW5kZXhcIjtcclxuaW1wb3J0IHtQYXJhbWV0ZXJzfSBmcm9tIFwiLi4vcGFyYW1ldGVycy9pbmRleFwiO1xyXG5pbXBvcnQge1BpcGVsaW5lU3RhdGV9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbi8qKlxyXG4qIFRoZSBwaXBlbGluZSBjb21wb25lbnQgdG8gcGFyc2UgdGhlIG9kYXRhIHJlcXVlc3RcclxuKi9cclxuQGluamVjdChcIm9wdGlvbnNcIiwgU2VnbWVudHMsIFBhcmFtZXRlcnMgKVxyXG5leHBvcnQgY2xhc3MgUGFyc2VQaXBlbGluZUNvbXBvbmVudCBleHRlbmRzIFBpcGVsaW5lQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqXHJcbiAgKiBDb25zdHJ1Y3Rpb25cclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zLCBzZWdtZW50cywgcGFyYW1ldGVycyApIHtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5zZWdtZW50cyA9IHNlZ21lbnRzO1xyXG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVyczsgXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFJldHVybnMgYSBrb2EgbWlkZGxld2FyZSBmdW5jdGlvbiB0aGF0IHBhcnNlcyB0aGUgcmVxdWVzdFxyXG4gICovXHJcbiAgKnByb2Nlc3MoIG5leHQsIGNvbnRleHQsIHBpcGVsaW5lICkge1xyXG5cclxuICAgIC8vIGluaXRpYWxpemUgdGhlIG9kYXRhIHN0YXRlXHJcbiAgICBjb250ZXh0LnN0YXRlLm9kYXRhID0gbmV3IFBpcGVsaW5lU3RhdGUoKTtcclxuXHJcbiAgICAvLyBwYXJzZSB0aGUgc2VnbWVudHNcclxuICAgIGNvbnRleHQuc3RhdGUub2RhdGEuc2VnbWVudHMgPSB0aGlzLnNlZ21lbnRzLnBhcnNlKCBjb250ZXh0LCBwaXBlbGluZSApO1xyXG5cclxuICAgIC8vIHllcywgcGFyc2UgdGhlIGV4cHJlc3Npb25cclxuICAgIGNvbnRleHQuc3RhdGUub2RhdGEuZXhwcmVzc2lvbiA9IHRoaXMucGFyYW1ldGVycy5wYXJzZSggY29udGV4dCwgcGlwZWxpbmUgKTtcclxuXHJcbiAgICB5aWVsZCBuZXh0O1xyXG5cclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNvbnRleHQuc3RhdGUub2RhdGEuZXhwcmVzc2lvbixudWxsLDUpKTtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

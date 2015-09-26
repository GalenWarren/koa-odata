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

var _parametersIndex = require("../parameters/index");

var ParsePipelineComponent = (function (_PipelineComponent) {
  _inherits(ParsePipelineComponent, _PipelineComponent);

  function ParsePipelineComponent(options, parameters) {
    _classCallCheck(this, _ParsePipelineComponent);

    _get(Object.getPrototypeOf(_ParsePipelineComponent.prototype), "constructor", this).call(this, options);
    this.parameters = parameters;
  }

  _createClass(ParsePipelineComponent, [{
    key: "process",
    value: function* process(next, context) {

      yield next;

      context.body = context.request.path;
    }
  }]);

  var _ParsePipelineComponent = ParsePipelineComponent;
  ParsePipelineComponent = (0, _aureliaDependencyInjection.inject)("options", _parametersIndex.Parameters)(ParsePipelineComponent) || ParsePipelineComponent;
  return ParsePipelineComponent;
})(_base.PipelineComponent);

exports.ParsePipelineComponent = ParsePipelineComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9waXBlbGluZS9wYXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzJCQUFtQixjQUFjOzs7OzBDQUNaLDhCQUE4Qjs7b0JBQ25CLFFBQVE7OytCQUNmLHFCQUFxQjs7SUFNakMsc0JBQXNCO1lBQXRCLHNCQUFzQjs7QUFLdEIsV0FMQSxzQkFBc0IsQ0FLcEIsT0FBTyxFQUFFLFVBQVUsRUFBRzs7O0FBQ2pDLG1HQUFNLE9BQU8sRUFBRTtBQUNmLFFBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0dBQzlCOztlQVJVLHNCQUFzQjs7V0FhekIsa0JBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRzs7QUFFeEIsWUFBTSxJQUFJLENBQUM7O0FBR1gsYUFBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztLQUVyQzs7O2dDQXBCVSxzQkFBc0I7QUFBdEIsd0JBQXNCLEdBRGxDLHdDQUFPLFNBQVMsOEJBQWEsQ0FDakIsc0JBQXNCLEtBQXRCLHNCQUFzQjtTQUF0QixzQkFBc0IiLCJmaWxlIjoibGliL3BpcGVsaW5lL3BhcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhcnNlciBmcm9tIFwib2RhdGEtcGFyc2VyXCI7XHJcbmltcG9ydCB7aW5qZWN0fSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xyXG5pbXBvcnQge1BpcGVsaW5lQ29tcG9uZW50fSBmcm9tIFwiLi9iYXNlXCI7XHJcbmltcG9ydCB7UGFyYW1ldGVyc30gZnJvbSBcIi4uL3BhcmFtZXRlcnMvaW5kZXhcIjtcclxuXHJcbi8qKlxyXG4qIFRoZSBwaXBlbGluZSBjb21wb25lbnQgdG8gcGFyc2UgdGhlIG9kYXRhIHJlcXVlc3RcclxuKi9cclxuQGluamVjdChcIm9wdGlvbnNcIiwgUGFyYW1ldGVycylcclxuZXhwb3J0IGNsYXNzIFBhcnNlUGlwZWxpbmVDb21wb25lbnQgZXh0ZW5kcyBQaXBlbGluZUNvbXBvbmVudCB7XHJcblxyXG4gIC8qKlxyXG4gICogQ29uc3RydWN0aW9uXHJcbiAgKi9cclxuICBjb25zdHJ1Y3Rvciggb3B0aW9ucywgcGFyYW1ldGVycyApIHtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogUmV0dXJucyBhIGtvYSBtaWRkbGV3YXJlIGZ1bmN0aW9uIHRoYXQgcGFyc2VzIHRoZSByZXF1ZXN0XHJcbiAgKi9cclxuICAqcHJvY2VzcyggbmV4dCwgY29udGV4dCApIHtcclxuXHJcbiAgICB5aWVsZCBuZXh0O1xyXG5cclxuICAgIC8vICAgIHRoaXMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHBhcnNlci5wYXJzZSh0aGlzLnJlcXVlc3QucXVlcnlzdHJpbmcpKTtcclxuICAgIGNvbnRleHQuYm9keSA9IGNvbnRleHQucmVxdWVzdC5wYXRoO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _aureliaDependencyInjection = require("aurelia-dependency-injection");

var _base = require("./base");

var _state = require("./state");

var InitPipelineComponent = (function (_PipelineComponent) {
  _inherits(InitPipelineComponent, _PipelineComponent);

  function InitPipelineComponent(options) {
    _classCallCheck(this, _InitPipelineComponent);

    _get(Object.getPrototypeOf(_InitPipelineComponent.prototype), "constructor", this).call(this, options);
  }

  _createClass(InitPipelineComponent, [{
    key: "process",
    value: function* process(next, context) {
      context.state.odata = new _state.ODataState(this.options);
      yield next;
    }
  }]);

  var _InitPipelineComponent = InitPipelineComponent;
  InitPipelineComponent = (0, _aureliaDependencyInjection.inject)("options", _state.ODataState)(InitPipelineComponent) || InitPipelineComponent;
  return InitPipelineComponent;
})(_base.PipelineComponent);

exports.InitPipelineComponent = InitPipelineComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9waXBlbGluZS9pbml0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OzBDQUFxQiw4QkFBOEI7O29CQUNuQixRQUFROztxQkFDZixTQUFTOztJQU1yQixxQkFBcUI7WUFBckIscUJBQXFCOztBQUtyQixXQUxBLHFCQUFxQixDQUtuQixPQUFPLEVBQUc7OztBQUNyQixrR0FBTSxPQUFPLEVBQUU7R0FDaEI7O2VBUFUscUJBQXFCOztXQVl4QixrQkFBRSxJQUFJLEVBQUUsT0FBTyxFQUFHO0FBQ3hCLGFBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLHNCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFFLENBQUM7QUFDckQsWUFBTSxJQUFJLENBQUM7S0FDWjs7OytCQWZVLHFCQUFxQjtBQUFyQix1QkFBcUIsR0FEakMsd0NBQU8sU0FBUyxvQkFBYyxDQUNsQixxQkFBcUIsS0FBckIscUJBQXFCO1NBQXJCLHFCQUFxQiIsImZpbGUiOiJsaWIvcGlwZWxpbmUvaW5pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xyXG5pbXBvcnQge1BpcGVsaW5lQ29tcG9uZW50fSBmcm9tIFwiLi9iYXNlXCI7XHJcbmltcG9ydCB7T0RhdGFTdGF0ZX0gZnJvbSBcIi4vc3RhdGVcIjtcclxuXHJcbi8qKlxyXG4qIFRoZSBwaXBlbGluZSBjb21wb25lbnQgdG8gaW5pdCB0aGUgb2RhdGEgc3RhdGVcclxuKi9cclxuQGluamVjdChcIm9wdGlvbnNcIiwgT0RhdGFTdGF0ZSApXHJcbmV4cG9ydCBjbGFzcyBJbml0UGlwZWxpbmVDb21wb25lbnQgZXh0ZW5kcyBQaXBlbGluZUNvbXBvbmVudCB7XHJcblxyXG4gIC8qKlxyXG4gICogQ29uc3RydWN0IHdpdGggdGhlIG9kYXRhIG9wdGlvbnNcclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zICkge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEluaXQgbWlkZGxld2FyZVxyXG4gICovXHJcbiAgKnByb2Nlc3MoIG5leHQsIGNvbnRleHQgKSB7XHJcbiAgICBjb250ZXh0LnN0YXRlLm9kYXRhID0gbmV3IE9EYXRhU3RhdGUoIHRoaXMub3B0aW9ucyApO1xyXG4gICAgeWllbGQgbmV4dDtcclxuICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

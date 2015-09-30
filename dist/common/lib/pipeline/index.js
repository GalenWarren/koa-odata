"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _aureliaDependencyInjection = require("aurelia-dependency-injection");

var _parse = require("./parse");

var Pipeline = (function () {
  function Pipeline(options) {
    _classCallCheck(this, _Pipeline);

    this.options = options;

    for (var _len = arguments.length, pipelineComponents = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      pipelineComponents[_key - 1] = arguments[_key];
    }

    this.pipelineComponents = pipelineComponents;
  }

  _createClass(Pipeline, [{
    key: "createApp",
    value: function createApp() {
      var app = (0, _koa2["default"])();

      var pipeline = this;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function () {
          var pipelineComponent = _step.value;

          app.use(function* (next) {
            yield* pipelineComponent.process(next, this, pipeline);
          });
        };

        for (var _iterator = this.pipelineComponents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"]) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return app;
    }
  }]);

  var _Pipeline = Pipeline;
  Pipeline = (0, _aureliaDependencyInjection.inject)("options", _parse.ParsePipelineComponent)(Pipeline) || Pipeline;
  return Pipeline;
})();

exports.Pipeline = Pipeline;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9waXBlbGluZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7bUJBQWdCLEtBQUs7Ozs7MENBQ0EsOEJBQThCOztxQkFDZCxTQUFTOztJQVNqQyxRQUFRO0FBS1IsV0FMQSxRQUFRLENBS04sT0FBTyxFQUEwQjs7O0FBRTVDLFFBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztzQ0FGQSxrQkFBa0I7QUFBbEIsd0JBQWtCOzs7QUFHekMsUUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO0dBQzlDOztlQVRVLFFBQVE7O1dBY1YscUJBQUc7QUFHVixVQUFNLEdBQUcsR0FBRyx1QkFBSyxDQUFDOztBQUdsQixVQUFNLFFBQVEsR0FBRyxJQUFJLENBQUM7Ozs7Ozs7Y0FDYixpQkFBaUI7O0FBQ3hCLGFBQUcsQ0FBQyxHQUFHLENBQUUsV0FBVyxJQUFJLEVBQUU7QUFDeEIsbUJBQVEsaUJBQWlCLENBQUMsT0FBTyxDQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFFLENBQUM7V0FDM0QsQ0FBQyxDQUFDOzs7QUFITCw2QkFBOEIsSUFBSSxDQUFDLGtCQUFrQiw4SEFBRTs7U0FJdEQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRCxhQUFPLEdBQUcsQ0FBQztLQUVaOzs7a0JBOUJVLFFBQVE7QUFBUixVQUFRLEdBSnBCLHdDQUNDLFNBQVMsZ0NBRVYsQ0FDWSxRQUFRLEtBQVIsUUFBUTtTQUFSLFFBQVEiLCJmaWxlIjoibGliL3BpcGVsaW5lL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGtvYSBmcm9tIFwia29hXCI7XHJcbmltcG9ydCB7aW5qZWN0fSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xyXG5pbXBvcnQge1BhcnNlUGlwZWxpbmVDb21wb25lbnR9IGZyb20gXCIuL3BhcnNlXCI7XHJcblxyXG4vKipcclxuKiBUaGUgbWFpbiBhcHBsaWNhdGlvbiBwaXBlbGluZSBvYmplY3RcclxuKi9cclxuQGluamVjdChcclxuICBcIm9wdGlvbnNcIixcclxuICBQYXJzZVBpcGVsaW5lQ29tcG9uZW50XHJcbilcclxuZXhwb3J0IGNsYXNzIFBpcGVsaW5lIHtcclxuXHJcbiAgLyoqXHJcbiAgKiBDb25zdHJ1Y3Rpb25cclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zLCAuLi5waXBlbGluZUNvbXBvbmVudHMgKSB7XHJcblxyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMucGlwZWxpbmVDb21wb25lbnRzID0gcGlwZWxpbmVDb21wb25lbnRzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBDcmVhdGUgdGhlIGtvYSBhcHAgZm9yIHRoaXMgc2V0IG9mIG9wdGlvbnNcclxuICAqL1xyXG4gIGNyZWF0ZUFwcCgpIHtcclxuXHJcbiAgICAvLyBjcmVhdGUgdGhlIGtvYSBhcHBcclxuICAgIGNvbnN0IGFwcCA9IGtvYSgpO1xyXG5cclxuICAgIC8vIGFkZCBhbGwgdGhlIHBpcGVsaW5lIGNvbXBvbmVudHMgdG8gdGhlIGFwcFxyXG4gICAgY29uc3QgcGlwZWxpbmUgPSB0aGlzO1xyXG4gICAgZm9yIChsZXQgcGlwZWxpbmVDb21wb25lbnQgb2YgdGhpcy5waXBlbGluZUNvbXBvbmVudHMpIHtcclxuICAgICAgYXBwLnVzZSggZnVuY3Rpb24gKihuZXh0KSB7XHJcbiAgICAgICAgeWllbGQgKiBwaXBlbGluZUNvbXBvbmVudC5wcm9jZXNzKCBuZXh0LCB0aGlzLCBwaXBlbGluZSApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkb25lIVxyXG4gICAgcmV0dXJuIGFwcDtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

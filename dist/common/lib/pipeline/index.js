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

var _error = require("./error");

var _parse = require("./parse");

var _prepare = require("./prepare");

var _execute = require("./execute");

var _lruCache = require("lru-cache");

var _lruCache2 = _interopRequireDefault(_lruCache);

var Pipeline = (function () {
  function Pipeline(options) {
    _classCallCheck(this, _Pipeline);

    this.options = options;

    for (var _len = arguments.length, components = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      components[_key - 1] = arguments[_key];
    }

    this.components = components;
    this.modelMetadata = options.model;
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
          var component = _step.value;

          app.use(function* (next) {
            yield* component.process(next, this, pipeline);
          });
        };

        for (var _iterator = this.components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
  Pipeline = (0, _aureliaDependencyInjection.inject)("options", _error.ErrorPipelineComponent, _parse.ParsePipelineComponent, _prepare.PreparePipelineComponent, _execute.ExecutePipelineComponent)(Pipeline) || Pipeline;
  return Pipeline;
})();

exports.Pipeline = Pipeline;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9waXBlbGluZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7bUJBQWdCLEtBQUs7Ozs7MENBQ0EsOEJBQThCOztxQkFDZCxTQUFTOztxQkFDVCxTQUFTOzt1QkFDUCxXQUFXOzt1QkFDWCxXQUFXOzt3QkFDaEMsV0FBVzs7OztJQVloQixRQUFRO0FBb0JSLFdBcEJBLFFBQVEsQ0FvQk4sT0FBTyxFQUFrQjs7O0FBQ3BDLFFBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztzQ0FEQSxVQUFVO0FBQVYsZ0JBQVU7OztBQUVqQyxRQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixRQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7R0FDcEM7O2VBeEJVLFFBQVE7O1dBNkJWLHFCQUFHO0FBR1YsVUFBTSxHQUFHLEdBQUcsdUJBQUssQ0FBQzs7QUFHbEIsVUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDOzs7Ozs7O2NBQ2IsU0FBUzs7QUFDaEIsYUFBRyxDQUFDLEdBQUcsQ0FBRSxXQUFXLElBQUksRUFBRTtBQUN4QixtQkFBUSxTQUFTLENBQUMsT0FBTyxDQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFFLENBQUM7V0FDbkQsQ0FBQyxDQUFDOzs7QUFITCw2QkFBc0IsSUFBSSxDQUFDLFVBQVUsOEhBQUU7O1NBSXRDOzs7Ozs7Ozs7Ozs7Ozs7O0FBR0QsYUFBTyxHQUFHLENBQUM7S0FFWjs7O2tCQTdDVSxRQUFRO0FBQVIsVUFBUSxHQVBwQix3Q0FDQyxTQUFTLHFJQUtWLENBQ1ksUUFBUSxLQUFSLFFBQVE7U0FBUixRQUFRIiwiZmlsZSI6ImxpYi9waXBlbGluZS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBrb2EgZnJvbSBcImtvYVwiO1xyXG5pbXBvcnQge2luamVjdH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuaW1wb3J0IHtFcnJvclBpcGVsaW5lQ29tcG9uZW50fSBmcm9tIFwiLi9lcnJvclwiO1xyXG5pbXBvcnQge1BhcnNlUGlwZWxpbmVDb21wb25lbnR9IGZyb20gXCIuL3BhcnNlXCI7XHJcbmltcG9ydCB7UHJlcGFyZVBpcGVsaW5lQ29tcG9uZW50fSBmcm9tIFwiLi9wcmVwYXJlXCI7XHJcbmltcG9ydCB7RXhlY3V0ZVBpcGVsaW5lQ29tcG9uZW50fSBmcm9tIFwiLi9leGVjdXRlXCI7XHJcbmltcG9ydCBDYWNoZSBmcm9tIFwibHJ1LWNhY2hlXCI7XHJcblxyXG4vKipcclxuKiBUaGUgbWFpbiBhcHBsaWNhdGlvbiBwaXBlbGluZSBvYmplY3RcclxuKi9cclxuQGluamVjdChcclxuICBcIm9wdGlvbnNcIixcclxuICBFcnJvclBpcGVsaW5lQ29tcG9uZW50LFxyXG4gIFBhcnNlUGlwZWxpbmVDb21wb25lbnQsXHJcbiAgUHJlcGFyZVBpcGVsaW5lQ29tcG9uZW50LFxyXG4gIEV4ZWN1dGVQaXBlbGluZUNvbXBvbmVudFxyXG4pXHJcbmV4cG9ydCBjbGFzcyBQaXBlbGluZSB7XHJcblxyXG4gIC8qKlxyXG4gICogVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xyXG4gICovXHJcbiAgb3B0aW9uc1xyXG5cclxuICAvKipcclxuICAqIFRoZSBwaXBlbGluZSBjb21wb25lbnRzXHJcbiAgKi9cclxuICBjb21wb25lbnRzXHJcblxyXG4gIC8qKlxyXG4gICogVGhlIG1ldGFkYXRhIGZvciB0aGlzIHBpcGVsaW5lJ3MgbW9kZWxcclxuICAqL1xyXG4gIG1vZGVsTWV0YWRhdGFcclxuXHJcbiAgLyoqXHJcbiAgKiBDb25zdHJ1Y3Rpb25cclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zLCAuLi5jb21wb25lbnRzICkge1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMuY29tcG9uZW50cyA9IGNvbXBvbmVudHM7XHJcbiAgICB0aGlzLm1vZGVsTWV0YWRhdGEgPSBvcHRpb25zLm1vZGVsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBDcmVhdGUgdGhlIGtvYSBhcHAgZm9yIHRoaXMgc2V0IG9mIG9wdGlvbnNcclxuICAqL1xyXG4gIGNyZWF0ZUFwcCgpIHtcclxuXHJcbiAgICAvLyBjcmVhdGUgdGhlIGtvYSBhcHBcclxuICAgIGNvbnN0IGFwcCA9IGtvYSgpO1xyXG5cclxuICAgIC8vIGFkZCBhbGwgdGhlIHBpcGVsaW5lIGNvbXBvbmVudHMgdG8gdGhlIGFwcFxyXG4gICAgY29uc3QgcGlwZWxpbmUgPSB0aGlzO1xyXG4gICAgZm9yIChsZXQgY29tcG9uZW50IG9mIHRoaXMuY29tcG9uZW50cykge1xyXG4gICAgICBhcHAudXNlKCBmdW5jdGlvbiAqKG5leHQpIHtcclxuICAgICAgICB5aWVsZCAqIGNvbXBvbmVudC5wcm9jZXNzKCBuZXh0LCB0aGlzLCBwaXBlbGluZSApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkb25lIVxyXG4gICAgcmV0dXJuIGFwcDtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

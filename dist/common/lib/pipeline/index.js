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

var Pipeline = (function () {
  function Pipeline(options) {
    _classCallCheck(this, _Pipeline);

    this.options = options;

    for (var _len = arguments.length, pipelineComponents = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      pipelineComponents[_key - 1] = arguments[_key];
    }

    this.pipelineComponents = pipelineComponents;
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
  Pipeline = (0, _aureliaDependencyInjection.inject)("options", _error.ErrorPipelineComponent, _parse.ParsePipelineComponent)(Pipeline) || Pipeline;
  return Pipeline;
})();

exports.Pipeline = Pipeline;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9waXBlbGluZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7bUJBQWdCLEtBQUs7Ozs7MENBQ0EsOEJBQThCOztxQkFDZCxTQUFTOztxQkFDVCxTQUFTOztJQVVqQyxRQUFRO0FBVVIsV0FWQSxRQUFRLENBVU4sT0FBTyxFQUEwQjs7O0FBQzVDLFFBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztzQ0FEQSxrQkFBa0I7QUFBbEIsd0JBQWtCOzs7QUFFekMsUUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO0FBQzdDLFFBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztHQUNwQzs7ZUFkVSxRQUFROztXQW1CVixxQkFBRztBQUdWLFVBQU0sR0FBRyxHQUFHLHVCQUFLLENBQUM7O0FBR2xCLFVBQU0sUUFBUSxHQUFHLElBQUksQ0FBQzs7Ozs7OztjQUNiLGlCQUFpQjs7QUFDeEIsYUFBRyxDQUFDLEdBQUcsQ0FBRSxXQUFXLElBQUksRUFBRTtBQUN4QixtQkFBUSxpQkFBaUIsQ0FBQyxPQUFPLENBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUUsQ0FBQztXQUMzRCxDQUFDLENBQUM7OztBQUhMLDZCQUE4QixJQUFJLENBQUMsa0JBQWtCLDhIQUFFOztTQUl0RDs7Ozs7Ozs7Ozs7Ozs7OztBQUdELGFBQU8sR0FBRyxDQUFDO0tBRVo7OztrQkFuQ1UsUUFBUTtBQUFSLFVBQVEsR0FMcEIsd0NBQ0MsU0FBUywrREFHVixDQUNZLFFBQVEsS0FBUixRQUFRO1NBQVIsUUFBUSIsImZpbGUiOiJsaWIvcGlwZWxpbmUvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQga29hIGZyb20gXCJrb2FcIjtcclxuaW1wb3J0IHtpbmplY3R9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XHJcbmltcG9ydCB7RXJyb3JQaXBlbGluZUNvbXBvbmVudH0gZnJvbSBcIi4vZXJyb3JcIjtcclxuaW1wb3J0IHtQYXJzZVBpcGVsaW5lQ29tcG9uZW50fSBmcm9tIFwiLi9wYXJzZVwiO1xyXG5cclxuLyoqXHJcbiogVGhlIG1haW4gYXBwbGljYXRpb24gcGlwZWxpbmUgb2JqZWN0XHJcbiovXHJcbkBpbmplY3QoXHJcbiAgXCJvcHRpb25zXCIsXHJcbiAgRXJyb3JQaXBlbGluZUNvbXBvbmVudCxcclxuICBQYXJzZVBpcGVsaW5lQ29tcG9uZW50XHJcbilcclxuZXhwb3J0IGNsYXNzIFBpcGVsaW5lIHtcclxuXHJcbiAgLyoqXHJcbiAgKiBUaGUgbWV0YWRhdGEgZm9yIHRoaXMgcGlwZWxpbmUncyBtb2RlbFxyXG4gICovXHJcbiAgbW9kZWxNZXRhZGF0YVxyXG5cclxuICAvKipcclxuICAqIENvbnN0cnVjdGlvblxyXG4gICovXHJcbiAgY29uc3RydWN0b3IoIG9wdGlvbnMsIC4uLnBpcGVsaW5lQ29tcG9uZW50cyApIHtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLnBpcGVsaW5lQ29tcG9uZW50cyA9IHBpcGVsaW5lQ29tcG9uZW50cztcclxuICAgIHRoaXMubW9kZWxNZXRhZGF0YSA9IG9wdGlvbnMubW9kZWw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIENyZWF0ZSB0aGUga29hIGFwcCBmb3IgdGhpcyBzZXQgb2Ygb3B0aW9uc1xyXG4gICovXHJcbiAgY3JlYXRlQXBwKCkge1xyXG5cclxuICAgIC8vIGNyZWF0ZSB0aGUga29hIGFwcFxyXG4gICAgY29uc3QgYXBwID0ga29hKCk7XHJcblxyXG4gICAgLy8gYWRkIGFsbCB0aGUgcGlwZWxpbmUgY29tcG9uZW50cyB0byB0aGUgYXBwXHJcbiAgICBjb25zdCBwaXBlbGluZSA9IHRoaXM7XHJcbiAgICBmb3IgKGxldCBwaXBlbGluZUNvbXBvbmVudCBvZiB0aGlzLnBpcGVsaW5lQ29tcG9uZW50cykge1xyXG4gICAgICBhcHAudXNlKCBmdW5jdGlvbiAqKG5leHQpIHtcclxuICAgICAgICB5aWVsZCAqIHBpcGVsaW5lQ29tcG9uZW50LnByb2Nlc3MoIG5leHQsIHRoaXMsIHBpcGVsaW5lICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRvbmUhXHJcbiAgICByZXR1cm4gYXBwO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

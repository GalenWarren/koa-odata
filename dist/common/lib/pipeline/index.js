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

var _init = require("./init");

var _parse = require("./parse");

var Pipeline = (function () {
  function Pipeline(options) {
    _classCallCheck(this, _Pipeline);

    debugger;

    this.options = options;

    for (var _len = arguments.length, pipelineComponents = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      pipelineComponents[_key - 1] = arguments[_key];
    }

    this.pipelineComponents = pipelineComponents;
  }

  _createClass(Pipeline, [{
    key: "createApp",
    value: function createApp() {

      debugger;

      var app = (0, _koa2["default"])();

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function () {
          var pipelineComponent = _step.value;

          app.use(function* (next) {
            yield* pipelineComponent.process(next, this);
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
  Pipeline = (0, _aureliaDependencyInjection.inject)("options", _init.InitPipelineComponent, _parse.ParsePipelineComponent)(Pipeline) || Pipeline;
  return Pipeline;
})();

exports.Pipeline = Pipeline;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9waXBlbGluZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7bUJBQWdCLEtBQUs7Ozs7MENBQ0EsOEJBQThCOztvQkFDZixRQUFROztxQkFDUCxTQUFTOztJQVVqQyxRQUFRO0FBS1IsV0FMQSxRQUFRLENBS04sT0FBTyxFQUEwQjs7O0FBRTVDLGFBQVM7O0FBRVQsUUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O3NDQUpBLGtCQUFrQjtBQUFsQix3QkFBa0I7OztBQUt6QyxRQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7R0FDOUM7O2VBWFUsUUFBUTs7V0FnQlYscUJBQUc7O0FBRVYsZUFBUzs7QUFHVCxVQUFNLEdBQUcsR0FBRyx1QkFBSyxDQUFDOzs7Ozs7OztjQUdULGlCQUFpQjs7QUFDeEIsYUFBRyxDQUFDLEdBQUcsQ0FBRSxXQUFXLElBQUksRUFBRTtBQUN4QixtQkFBUSxpQkFBaUIsQ0FBQyxPQUFPLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBRSxDQUFDO1dBQ2pELENBQUMsQ0FBQzs7O0FBSEwsNkJBQThCLElBQUksQ0FBQyxrQkFBa0IsOEhBQUU7O1NBSXREOzs7Ozs7Ozs7Ozs7Ozs7O0FBR0QsYUFBTyxHQUFHLENBQUM7S0FFWjs7O2tCQWpDVSxRQUFRO0FBQVIsVUFBUSxHQUxwQix3Q0FDQyxTQUFTLDZEQUdWLENBQ1ksUUFBUSxLQUFSLFFBQVE7U0FBUixRQUFRIiwiZmlsZSI6ImxpYi9waXBlbGluZS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBrb2EgZnJvbSBcImtvYVwiO1xyXG5pbXBvcnQge2luamVjdH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuaW1wb3J0IHtJbml0UGlwZWxpbmVDb21wb25lbnR9IGZyb20gXCIuL2luaXRcIjtcclxuaW1wb3J0IHtQYXJzZVBpcGVsaW5lQ29tcG9uZW50fSBmcm9tIFwiLi9wYXJzZVwiO1xyXG5cclxuLyoqXHJcbiogVGhlIG1haW4gYXBwbGljYXRpb24gcGlwZWxpbmUgb2JqZWN0XHJcbiovXHJcbkBpbmplY3QoXHJcbiAgXCJvcHRpb25zXCIsXHJcbiAgSW5pdFBpcGVsaW5lQ29tcG9uZW50LFxyXG4gIFBhcnNlUGlwZWxpbmVDb21wb25lbnRcclxuKVxyXG5leHBvcnQgY2xhc3MgUGlwZWxpbmUge1xyXG5cclxuICAvKipcclxuICAqIENvbnN0cnVjdGlvblxyXG4gICovXHJcbiAgY29uc3RydWN0b3IoIG9wdGlvbnMsIC4uLnBpcGVsaW5lQ29tcG9uZW50cyApIHtcclxuXHJcbiAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgdGhpcy5waXBlbGluZUNvbXBvbmVudHMgPSBwaXBlbGluZUNvbXBvbmVudHM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIENyZWF0ZSB0aGUga29hIGFwcCBmb3IgdGhpcyBzZXQgb2Ygb3B0aW9uc1xyXG4gICovXHJcbiAgY3JlYXRlQXBwKCkge1xyXG5cclxuICAgIGRlYnVnZ2VyO1xyXG5cclxuICAgIC8vIGNyZWF0ZSB0aGUga29hIGFwcFxyXG4gICAgY29uc3QgYXBwID0ga29hKCk7XHJcblxyXG4gICAgLy8gYWRkIGFsbCB0aGUgcGlwZWxpbmUgY29tcG9uZW50cyB0byB0aGUgYXBwXHJcbiAgICBmb3IgKGxldCBwaXBlbGluZUNvbXBvbmVudCBvZiB0aGlzLnBpcGVsaW5lQ29tcG9uZW50cykge1xyXG4gICAgICBhcHAudXNlKCBmdW5jdGlvbiAqKG5leHQpIHtcclxuICAgICAgICB5aWVsZCAqIHBpcGVsaW5lQ29tcG9uZW50LnByb2Nlc3MoIG5leHQsIHRoaXMgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZG9uZSFcclxuICAgIHJldHVybiBhcHA7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
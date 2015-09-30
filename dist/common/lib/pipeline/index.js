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
  Pipeline = (0, _aureliaDependencyInjection.inject)("options", _parse.ParsePipelineComponent)(Pipeline) || Pipeline;
  return Pipeline;
})();

exports.Pipeline = Pipeline;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9waXBlbGluZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7bUJBQWdCLEtBQUs7Ozs7MENBQ0EsOEJBQThCOztxQkFDZCxTQUFTOztJQVNqQyxRQUFRO0FBVVIsV0FWQSxRQUFRLENBVU4sT0FBTyxFQUEwQjs7O0FBQzVDLFFBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztzQ0FEQSxrQkFBa0I7QUFBbEIsd0JBQWtCOzs7QUFFekMsUUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO0FBQzdDLFFBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztHQUNwQzs7ZUFkVSxRQUFROztXQW1CVixxQkFBRztBQUdWLFVBQU0sR0FBRyxHQUFHLHVCQUFLLENBQUM7O0FBR2xCLFVBQU0sUUFBUSxHQUFHLElBQUksQ0FBQzs7Ozs7OztjQUNiLGlCQUFpQjs7QUFDeEIsYUFBRyxDQUFDLEdBQUcsQ0FBRSxXQUFXLElBQUksRUFBRTtBQUN4QixtQkFBUSxpQkFBaUIsQ0FBQyxPQUFPLENBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUUsQ0FBQztXQUMzRCxDQUFDLENBQUM7OztBQUhMLDZCQUE4QixJQUFJLENBQUMsa0JBQWtCLDhIQUFFOztTQUl0RDs7Ozs7Ozs7Ozs7Ozs7OztBQUdELGFBQU8sR0FBRyxDQUFDO0tBRVo7OztrQkFuQ1UsUUFBUTtBQUFSLFVBQVEsR0FKcEIsd0NBQ0MsU0FBUyxnQ0FFVixDQUNZLFFBQVEsS0FBUixRQUFRO1NBQVIsUUFBUSIsImZpbGUiOiJsaWIvcGlwZWxpbmUvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQga29hIGZyb20gXCJrb2FcIjtcclxuaW1wb3J0IHtpbmplY3R9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XHJcbmltcG9ydCB7UGFyc2VQaXBlbGluZUNvbXBvbmVudH0gZnJvbSBcIi4vcGFyc2VcIjtcclxuXHJcbi8qKlxyXG4qIFRoZSBtYWluIGFwcGxpY2F0aW9uIHBpcGVsaW5lIG9iamVjdFxyXG4qL1xyXG5AaW5qZWN0KFxyXG4gIFwib3B0aW9uc1wiLFxyXG4gIFBhcnNlUGlwZWxpbmVDb21wb25lbnRcclxuKVxyXG5leHBvcnQgY2xhc3MgUGlwZWxpbmUge1xyXG5cclxuICAvKipcclxuICAqIFRoZSBtZXRhZGF0YSBmb3IgdGhpcyBwaXBlbGluZSdzIG1vZGVsXHJcbiAgKi9cclxuICBtb2RlbE1ldGFkYXRhXHJcblxyXG4gIC8qKlxyXG4gICogQ29uc3RydWN0aW9uXHJcbiAgKi9cclxuICBjb25zdHJ1Y3Rvciggb3B0aW9ucywgLi4ucGlwZWxpbmVDb21wb25lbnRzICkge1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMucGlwZWxpbmVDb21wb25lbnRzID0gcGlwZWxpbmVDb21wb25lbnRzO1xyXG4gICAgdGhpcy5tb2RlbE1ldGFkYXRhID0gb3B0aW9ucy5tb2RlbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQ3JlYXRlIHRoZSBrb2EgYXBwIGZvciB0aGlzIHNldCBvZiBvcHRpb25zXHJcbiAgKi9cclxuICBjcmVhdGVBcHAoKSB7XHJcblxyXG4gICAgLy8gY3JlYXRlIHRoZSBrb2EgYXBwXHJcbiAgICBjb25zdCBhcHAgPSBrb2EoKTtcclxuXHJcbiAgICAvLyBhZGQgYWxsIHRoZSBwaXBlbGluZSBjb21wb25lbnRzIHRvIHRoZSBhcHBcclxuICAgIGNvbnN0IHBpcGVsaW5lID0gdGhpcztcclxuICAgIGZvciAobGV0IHBpcGVsaW5lQ29tcG9uZW50IG9mIHRoaXMucGlwZWxpbmVDb21wb25lbnRzKSB7XHJcbiAgICAgIGFwcC51c2UoIGZ1bmN0aW9uICoobmV4dCkge1xyXG4gICAgICAgIHlpZWxkICogcGlwZWxpbmVDb21wb25lbnQucHJvY2VzcyggbmV4dCwgdGhpcywgcGlwZWxpbmUgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZG9uZSFcclxuICAgIHJldHVybiBhcHA7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

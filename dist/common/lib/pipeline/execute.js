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

var _state = require("./state");

var _expressionsFunctions = require("../expressions/functions");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var ExecutePipelineComponent = (function (_PipelineComponent) {
  _inherits(ExecutePipelineComponent, _PipelineComponent);

  function ExecutePipelineComponent(options) {
    _classCallCheck(this, ExecutePipelineComponent);

    _get(Object.getPrototypeOf(ExecutePipelineComponent.prototype), "constructor", this).call(this, options);
  }

  _createClass(ExecutePipelineComponent, [{
    key: "process",
    value: function* process(next, context, pipeline) {

      var collection = (0, _lodash2["default"])([{ name: "Galen" }, { name: "Bob" }, { name: "Steve" }]);

      var functions = new _expressionsFunctions.Functions();

      context.response.body = {
        value: context.state.odata.get(collection, context.state.odata.parameters, functions)
      };

      yield next;
    }
  }]);

  return ExecutePipelineComponent;
})(_base.PipelineComponent);

exports.ExecutePipelineComponent = ExecutePipelineComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9waXBlbGluZS9leGVjdXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7MENBQXFCLDhCQUE4Qjs7b0JBQ25CLFFBQVE7O3FCQUNaLFNBQVM7O29DQUNiLDBCQUEwQjs7c0JBQ3BDLFFBQVE7Ozs7SUFLVCx3QkFBd0I7WUFBeEIsd0JBQXdCOztBQUt4QixXQUxBLHdCQUF3QixDQUt0QixPQUFPLEVBQUc7MEJBTFosd0JBQXdCOztBQU1qQywrQkFOUyx3QkFBd0IsNkNBTTNCLE9BQU8sRUFBRTtHQUNoQjs7ZUFQVSx3QkFBd0I7O1dBWTNCLGtCQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFHOztBQUVsQyxVQUFNLFVBQVUsR0FBRyx5QkFBRSxDQUNuQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFDakIsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQ2YsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQ2xCLENBQUMsQ0FBQzs7QUFFSCxVQUFNLFNBQVMsR0FBRyxxQ0FBZSxDQUFDOztBQUVsQyxhQUFPLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRztBQUN0QixhQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFFO09BQ3hGLENBQUM7O0FBRUYsWUFBTSxJQUFJLENBQUM7S0FFWjs7O1NBNUJVLHdCQUF3QiIsImZpbGUiOiJsaWIvcGlwZWxpbmUvZXhlY3V0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xuaW1wb3J0IHtQaXBlbGluZUNvbXBvbmVudH0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHtQaXBlbGluZVN0YXRlfSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IHtGdW5jdGlvbnN9IGZyb20gXCIuLi9leHByZXNzaW9ucy9mdW5jdGlvbnNcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuLyoqXG4qIFRoZSBwaXBlbGluZSBjb21wb25lbnQgdG8gcGFyc2UgdGhlIG9kYXRhIHJlcXVlc3RcbiovXG5leHBvcnQgY2xhc3MgRXhlY3V0ZVBpcGVsaW5lQ29tcG9uZW50IGV4dGVuZHMgUGlwZWxpbmVDb21wb25lbnQge1xuXG4gIC8qKlxuICAqIENvbnN0cnVjdGlvblxuICAqL1xuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAqIFJldHVybnMgYSBrb2EgbWlkZGxld2FyZSBmdW5jdGlvbiB0aGF0IHBhcnNlcyB0aGUgcmVxdWVzdFxuICAqL1xuICAqcHJvY2VzcyggbmV4dCwgY29udGV4dCwgcGlwZWxpbmUgKSB7XG5cbiAgICBjb25zdCBjb2xsZWN0aW9uID0gXyhbXG4gICAgICB7IG5hbWU6IFwiR2FsZW5cIiB9LFxuICAgICAgeyBuYW1lOiBcIkJvYlwiIH0sXG4gICAgICB7IG5hbWU6IFwiU3RldmVcIiB9XG4gICAgXSk7XG5cbiAgICBjb25zdCBmdW5jdGlvbnMgPSBuZXcgRnVuY3Rpb25zKCk7XG5cbiAgICBjb250ZXh0LnJlc3BvbnNlLmJvZHkgPSB7XG4gICAgICB2YWx1ZTogY29udGV4dC5zdGF0ZS5vZGF0YS5nZXQoIGNvbGxlY3Rpb24sIGNvbnRleHQuc3RhdGUub2RhdGEucGFyYW1ldGVycywgZnVuY3Rpb25zIClcbiAgICB9O1xuXG4gICAgeWllbGQgbmV4dDtcblxuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

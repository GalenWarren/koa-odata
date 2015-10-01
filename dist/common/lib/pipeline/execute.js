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

      context.response.body = context.state.odata.get(collection, context.state.odata.parameters, _expressionsFunctions.functions);

      yield next;
    }
  }]);

  return ExecutePipelineComponent;
})(_base.PipelineComponent);

exports.ExecutePipelineComponent = ExecutePipelineComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9waXBlbGluZS9leGVjdXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7MENBQXFCLDhCQUE4Qjs7b0JBQ25CLFFBQVE7O3FCQUNaLFNBQVM7O29DQUNiLDBCQUEwQjs7c0JBQ3BDLFFBQVE7Ozs7SUFLVCx3QkFBd0I7WUFBeEIsd0JBQXdCOztBQUt4QixXQUxBLHdCQUF3QixDQUt0QixPQUFPLEVBQUc7MEJBTFosd0JBQXdCOztBQU1qQywrQkFOUyx3QkFBd0IsNkNBTTNCLE9BQU8sRUFBRTtHQUNoQjs7ZUFQVSx3QkFBd0I7O1dBWTNCLGtCQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFHOztBQUVsQyxVQUFNLFVBQVUsR0FBRyx5QkFBRSxDQUNuQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFDakIsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQ2YsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQ2xCLENBQUMsQ0FBQzs7QUFFSCxhQUFPLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsa0NBQWEsQ0FBQzs7QUFFekcsWUFBTSxJQUFJLENBQUM7S0FFWjs7O1NBeEJVLHdCQUF3QiIsImZpbGUiOiJsaWIvcGlwZWxpbmUvZXhlY3V0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xyXG5pbXBvcnQge1BpcGVsaW5lQ29tcG9uZW50fSBmcm9tIFwiLi9iYXNlXCI7XHJcbmltcG9ydCB7UGlwZWxpbmVTdGF0ZX0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHtmdW5jdGlvbnN9IGZyb20gXCIuLi9leHByZXNzaW9ucy9mdW5jdGlvbnNcIjtcclxuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuLyoqXHJcbiogVGhlIHBpcGVsaW5lIGNvbXBvbmVudCB0byBwYXJzZSB0aGUgb2RhdGEgcmVxdWVzdFxyXG4qL1xyXG5leHBvcnQgY2xhc3MgRXhlY3V0ZVBpcGVsaW5lQ29tcG9uZW50IGV4dGVuZHMgUGlwZWxpbmVDb21wb25lbnQge1xyXG5cclxuICAvKipcclxuICAqIENvbnN0cnVjdGlvblxyXG4gICovXHJcbiAgY29uc3RydWN0b3IoIG9wdGlvbnMgKSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogUmV0dXJucyBhIGtvYSBtaWRkbGV3YXJlIGZ1bmN0aW9uIHRoYXQgcGFyc2VzIHRoZSByZXF1ZXN0XHJcbiAgKi9cclxuICAqcHJvY2VzcyggbmV4dCwgY29udGV4dCwgcGlwZWxpbmUgKSB7XHJcblxyXG4gICAgY29uc3QgY29sbGVjdGlvbiA9IF8oW1xyXG4gICAgICB7IG5hbWU6IFwiR2FsZW5cIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiQm9iXCIgfSxcclxuICAgICAgeyBuYW1lOiBcIlN0ZXZlXCIgfVxyXG4gICAgXSk7XHJcblxyXG4gICAgY29udGV4dC5yZXNwb25zZS5ib2R5ID0gY29udGV4dC5zdGF0ZS5vZGF0YS5nZXQoIGNvbGxlY3Rpb24sIGNvbnRleHQuc3RhdGUub2RhdGEucGFyYW1ldGVycywgZnVuY3Rpb25zICk7XHJcblxyXG4gICAgeWllbGQgbmV4dDtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

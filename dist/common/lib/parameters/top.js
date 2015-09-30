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

var _expressionsFunctions = require("../expressions/functions");

var TopParameter = (function (_Parameter) {
  _inherits(TopParameter, _Parameter);

  function TopParameter(options) {
    _classCallCheck(this, _TopParameter);

    _get(Object.getPrototypeOf(_TopParameter.prototype), "constructor", this).call(this, options, "$top");
  }

  _createClass(TopParameter, [{
    key: "parse",
    value: function parse(value, expression, context, pipeline) {

      return {
        type: "CallExpression",
        callee: {
          "type": "Identifier",
          "name": "top"
        },
        arguments: [expression, {
          type: "Literal",
          value: Number(value),
          raw: value
        }]
      };
    }
  }]);

  var _TopParameter = TopParameter;
  TopParameter = (0, _aureliaDependencyInjection.inject)("options")(TopParameter) || TopParameter;
  return TopParameter;
})(_base.Parameter);

exports.TopParameter = TopParameter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9wYXJhbWV0ZXJzL3RvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzswQ0FBcUIsOEJBQThCOztvQkFDM0IsUUFBUTs7b0NBQ2QsMEJBQTBCOztJQU0vQixZQUFZO1lBQVosWUFBWTs7QUFLWixXQUxBLFlBQVksQ0FLVixPQUFPLEVBQUc7OztBQUNyQix5RkFBTyxPQUFPLEVBQUUsTUFBTSxFQUFFO0dBQ3pCOztlQVBVLFlBQVk7O1dBWWxCLGVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFHOztBQUU1QyxhQUFPO0FBQ0wsWUFBSSxFQUFFLGdCQUFnQjtBQUN0QixjQUFNLEVBQUU7QUFDTixnQkFBTSxFQUFFLFlBQVk7QUFDcEIsZ0JBQU0sRUFBRSxLQUFLO1NBQ2Q7QUFDRCxpQkFBUyxFQUFFLENBQ1QsVUFBVSxFQUNWO0FBQ0UsY0FBSSxFQUFFLFNBQVM7QUFDZixlQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNwQixhQUFHLEVBQUUsS0FBSztTQUNYLENBQ0Y7T0FDRixDQUFDO0tBRUg7OztzQkE5QlUsWUFBWTtBQUFaLGNBQVksR0FEeEIsd0NBQU8sU0FBUyxDQUFDLENBQ0wsWUFBWSxLQUFaLFlBQVk7U0FBWixZQUFZIiwiZmlsZSI6ImxpYi9wYXJhbWV0ZXJzL3RvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xyXG5pbXBvcnQge1BhcmFtZXRlcn0gZnJvbSBcIi4vYmFzZVwiO1xyXG5pbXBvcnQge3RvcH0gZnJvbSBcIi4uL2V4cHJlc3Npb25zL2Z1bmN0aW9uc1wiO1xyXG5cclxuLyoqXHJcbiogTW9kZWwgZm9yIHRoZCAkdG9wIHBhcmFtZXRlclxyXG4qL1xyXG5AaW5qZWN0KFwib3B0aW9uc1wiKVxyXG5leHBvcnQgY2xhc3MgVG9wUGFyYW1ldGVyIGV4dGVuZHMgUGFyYW1ldGVyIHtcclxuXHJcbiAgLyoqXHJcbiAgKiBDb25zdHJ1Y3Rpb25cclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zICkge1xyXG4gICAgc3VwZXIoIG9wdGlvbnMsIFwiJHRvcFwiKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogUGFyc2VzIGEgdmFsdWUgYW5kIHJldHVybnMgYSBtb2RpZmllZCBleHByZXNzaW9uXHJcbiAgKi9cclxuICBwYXJzZSggdmFsdWUsIGV4cHJlc3Npb24sIGNvbnRleHQsIHBpcGVsaW5lICkge1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFwiQ2FsbEV4cHJlc3Npb25cIixcclxuICAgICAgY2FsbGVlOiB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwiSWRlbnRpZmllclwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcInRvcFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGFyZ3VtZW50czogW1xyXG4gICAgICAgIGV4cHJlc3Npb24sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogXCJMaXRlcmFsXCIsXHJcbiAgICAgICAgICB2YWx1ZTogTnVtYmVyKHZhbHVlKSxcclxuICAgICAgICAgIHJhdzogdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcblxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

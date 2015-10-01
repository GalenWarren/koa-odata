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

var _expressionsUtilities = require("../expressions/utilities");

var TopParameter = (function (_Parameter) {
  _inherits(TopParameter, _Parameter);

  function TopParameter(options) {
    _classCallCheck(this, _TopParameter);

    _get(Object.getPrototypeOf(_TopParameter.prototype), "constructor", this).call(this, options, "$top");
  }

  _createClass(TopParameter, [{
    key: "parse",
    value: function parse(value, expression, context, pipeline) {

      return (0, _expressionsUtilities.createFunctionCall)("top", [expression, (0, _expressionsUtilities.createParameter)(context.state.odata.parameters, value)]);
    }
  }]);

  var _TopParameter = TopParameter;
  TopParameter = (0, _aureliaDependencyInjection.inject)("options")(TopParameter) || TopParameter;
  return TopParameter;
})(_base.Parameter);

exports.TopParameter = TopParameter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9wYXJhbWV0ZXJzL3RvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzswQ0FBcUIsOEJBQThCOztvQkFDM0IsUUFBUTs7b0NBQ2lCLDBCQUEwQjs7SUFNOUQsWUFBWTtZQUFaLFlBQVk7O0FBS1osV0FMQSxZQUFZLENBS1YsT0FBTyxFQUFHOzs7QUFDckIseUZBQU8sT0FBTyxFQUFFLE1BQU0sRUFBRTtHQUN6Qjs7ZUFQVSxZQUFZOztXQVlsQixlQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRzs7QUFFNUMsYUFBTyw4Q0FBb0IsS0FBSyxFQUFFLENBQ2hDLFVBQVUsRUFDViwyQ0FBaUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBRSxDQUN6RCxDQUFDLENBQUM7S0FFSjs7O3NCQW5CVSxZQUFZO0FBQVosY0FBWSxHQUR4Qix3Q0FBTyxTQUFTLENBQUMsQ0FDTCxZQUFZLEtBQVosWUFBWTtTQUFaLFlBQVkiLCJmaWxlIjoibGliL3BhcmFtZXRlcnMvdG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XHJcbmltcG9ydCB7UGFyYW1ldGVyfSBmcm9tIFwiLi9iYXNlXCI7XHJcbmltcG9ydCB7Y3JlYXRlUGFyYW1ldGVyLGNyZWF0ZUZ1bmN0aW9uQ2FsbH0gZnJvbSBcIi4uL2V4cHJlc3Npb25zL3V0aWxpdGllc1wiO1xyXG5cclxuLyoqXHJcbiogTW9kZWwgZm9yIHRoZCAkdG9wIHBhcmFtZXRlclxyXG4qL1xyXG5AaW5qZWN0KFwib3B0aW9uc1wiKVxyXG5leHBvcnQgY2xhc3MgVG9wUGFyYW1ldGVyIGV4dGVuZHMgUGFyYW1ldGVyIHtcclxuXHJcbiAgLyoqXHJcbiAgKiBDb25zdHJ1Y3Rpb25cclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zICkge1xyXG4gICAgc3VwZXIoIG9wdGlvbnMsIFwiJHRvcFwiKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogUGFyc2VzIGEgdmFsdWUgYW5kIHJldHVybnMgYSBtb2RpZmllZCBleHByZXNzaW9uXHJcbiAgKi9cclxuICBwYXJzZSggdmFsdWUsIGV4cHJlc3Npb24sIGNvbnRleHQsIHBpcGVsaW5lICkge1xyXG5cclxuICAgIHJldHVybiBjcmVhdGVGdW5jdGlvbkNhbGwoIFwidG9wXCIsIFtcclxuICAgICAgZXhwcmVzc2lvbixcclxuICAgICAgY3JlYXRlUGFyYW1ldGVyKCBjb250ZXh0LnN0YXRlLm9kYXRhLnBhcmFtZXRlcnMsIHZhbHVlIClcclxuICAgIF0pO1xyXG5cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

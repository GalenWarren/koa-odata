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

var _expressionsVisitorsTranslating = require("../expressions/visitors/translating");

var SelectParameter = (function (_Parameter) {
  _inherits(SelectParameter, _Parameter);

  function SelectParameter(options) {
    _classCallCheck(this, _SelectParameter);

    _get(Object.getPrototypeOf(_SelectParameter.prototype), "constructor", this).call(this, options, "$select");
  }

  _createClass(SelectParameter, [{
    key: "parse",
    value: function parse(value, expression, context, pipeline) {}
  }]);

  var _SelectParameter = SelectParameter;
  SelectParameter = (0, _aureliaDependencyInjection.inject)("options")(SelectParameter) || SelectParameter;
  return SelectParameter;
})(_base.Parameter);

exports.SelectParameter = SelectParameter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9wYXJhbWV0ZXJzL3NlbGVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzswQ0FBcUIsOEJBQThCOztvQkFDM0IsUUFBUTs7b0NBQ2lCLDBCQUEwQjs7OENBQzFDLHFDQUFxQzs7SUFNekQsZUFBZTtZQUFmLGVBQWU7O0FBS2YsV0FMQSxlQUFlLENBS2IsT0FBTyxFQUFHOzs7QUFDckIsNEZBQU8sT0FBTyxFQUFFLFNBQVMsRUFBRTtHQUM1Qjs7ZUFQVSxlQUFlOztXQVlyQixlQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRyxFQVk3Qzs7O3lCQXhCVSxlQUFlO0FBQWYsaUJBQWUsR0FEM0Isd0NBQU8sU0FBUyxDQUFDLENBQ0wsZUFBZSxLQUFmLGVBQWU7U0FBZixlQUFlIiwiZmlsZSI6ImxpYi9wYXJhbWV0ZXJzL3NlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xyXG5pbXBvcnQge1BhcmFtZXRlcn0gZnJvbSBcIi4vYmFzZVwiO1xyXG5pbXBvcnQge2NyZWF0ZVBhcmFtZXRlcixjcmVhdGVGdW5jdGlvbkNhbGx9IGZyb20gXCIuLi9leHByZXNzaW9ucy91dGlsaXRpZXNcIjtcclxuaW1wb3J0IHtUcmFuc2xhdGluZ1Zpc2l0b3J9IGZyb20gXCIuLi9leHByZXNzaW9ucy92aXNpdG9ycy90cmFuc2xhdGluZ1wiO1xyXG5cclxuLyoqXHJcbiogTW9kZWwgZm9yIHRoZCAkdG9wIHBhcmFtZXRlclxyXG4qL1xyXG5AaW5qZWN0KFwib3B0aW9uc1wiKVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0UGFyYW1ldGVyIGV4dGVuZHMgUGFyYW1ldGVyIHtcclxuXHJcbiAgLyoqXHJcbiAgKiBDb25zdHJ1Y3Rpb25cclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zICkge1xyXG4gICAgc3VwZXIoIG9wdGlvbnMsIFwiJHNlbGVjdFwiKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogUGFyc2VzIGEgdmFsdWUgYW5kIHJldHVybnMgYSBtb2RpZmllZCBleHByZXNzaW9uXHJcbiAgKi9cclxuICBwYXJzZSggdmFsdWUsIGV4cHJlc3Npb24sIGNvbnRleHQsIHBpcGVsaW5lICkge1xyXG5cclxuICAgIC8qXHJcbiAgICBjb25zdCAgbmV3IFRyYW5zbGF0aW5nVmlzaXRvcigpLnZpc2l0KHZhbHVlKTtcclxuICAgIGNvbnN0IHggPSB0cmFuc2xhdGluZ1Zpc2l0b3IudmlzaXQoIHZhbHVlICk7XHJcblxyXG4gICAgcmV0dXJuIGNyZWF0ZUZ1bmN0aW9uQ2FsbCggXCJzZWxlY3RcIiwgW1xyXG4gICAgICBleHByZXNzaW9uLFxyXG4gICAgICBjcmVhdGVQYXJhbWV0ZXIoIGNvbnRleHQuc3RhdGUub2RhdGEucGFyYW1ldGVycywgdmFsdWUgKVxyXG4gICAgXSk7XHJcbiAgICAqL1xyXG5cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

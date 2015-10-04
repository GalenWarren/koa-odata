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

var FilterParameter = (function (_Parameter) {
  _inherits(FilterParameter, _Parameter);

  function FilterParameter(options) {
    _classCallCheck(this, _FilterParameter);

    _get(Object.getPrototypeOf(_FilterParameter.prototype), "constructor", this).call(this, options, "$filter", 0);
  }

  _createClass(FilterParameter, [{
    key: "parse",
    value: function parse(value, expression, context, pipeline) {

      return (0, _expressionsUtilities.createFunctionCall)("filter", [expression, (0, _expressionsUtilities.createInstanceFunction)(new _expressionsVisitorsTranslating.TranslatingVisitor(context, pipeline).visit(value))]);
    }
  }]);

  var _FilterParameter = FilterParameter;
  FilterParameter = (0, _aureliaDependencyInjection.inject)("options")(FilterParameter) || FilterParameter;
  return FilterParameter;
})(_base.Parameter);

exports.FilterParameter = FilterParameter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9wYXJhbWV0ZXJzL2ZpbHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzswQ0FBcUIsOEJBQThCOztvQkFDM0IsUUFBUTs7b0NBQ3dCLDBCQUEwQjs7OENBQ2pELHFDQUFxQzs7SUFNekQsZUFBZTtZQUFmLGVBQWU7O0FBS2YsV0FMQSxlQUFlLENBS2IsT0FBTyxFQUFHOzs7QUFDckIsNEZBQU8sT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUU7R0FDL0I7O2VBUFUsZUFBZTs7V0FZckIsZUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUc7O0FBRTVDLGFBQU8sOENBQW9CLFFBQVEsRUFBRSxDQUNuQyxVQUFVLEVBQ1Ysa0RBQXdCLHVEQUF3QixPQUFPLEVBQUUsUUFBUSxDQUFFLENBQUMsS0FBSyxDQUFFLEtBQUssQ0FBRSxDQUFDLENBQ3BGLENBQUMsQ0FBQztLQUVKOzs7eUJBbkJVLGVBQWU7QUFBZixpQkFBZSxHQUQzQix3Q0FBTyxTQUFTLENBQUMsQ0FDTCxlQUFlLEtBQWYsZUFBZTtTQUFmLGVBQWUiLCJmaWxlIjoibGliL3BhcmFtZXRlcnMvZmlsdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XG5pbXBvcnQge1BhcmFtZXRlcn0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHtjcmVhdGVGdW5jdGlvbkNhbGwsY3JlYXRlSW5zdGFuY2VGdW5jdGlvbn0gZnJvbSBcIi4uL2V4cHJlc3Npb25zL3V0aWxpdGllc1wiO1xuaW1wb3J0IHtUcmFuc2xhdGluZ1Zpc2l0b3J9IGZyb20gXCIuLi9leHByZXNzaW9ucy92aXNpdG9ycy90cmFuc2xhdGluZ1wiO1xuXG4vKipcbiogTW9kZWwgZm9yIHRoZSAkZmlsdGVyIHBhcmFtZXRlclxuKi9cbkBpbmplY3QoXCJvcHRpb25zXCIpXG5leHBvcnQgY2xhc3MgRmlsdGVyUGFyYW1ldGVyIGV4dGVuZHMgUGFyYW1ldGVyIHtcblxuICAvKipcbiAgKiBDb25zdHJ1Y3Rpb25cbiAgKi9cbiAgY29uc3RydWN0b3IoIG9wdGlvbnMgKSB7XG4gICAgc3VwZXIoIG9wdGlvbnMsIFwiJGZpbHRlclwiLCAwKTtcbiAgfVxuXG4gIC8qKlxuICAqIFBhcnNlcyBhIHZhbHVlIGFuZCByZXR1cm5zIGEgbW9kaWZpZWQgZXhwcmVzc2lvblxuICAqL1xuICBwYXJzZSggdmFsdWUsIGV4cHJlc3Npb24sIGNvbnRleHQsIHBpcGVsaW5lICkge1xuXG4gICAgcmV0dXJuIGNyZWF0ZUZ1bmN0aW9uQ2FsbCggXCJmaWx0ZXJcIiwgW1xuICAgICAgZXhwcmVzc2lvbixcbiAgICAgIGNyZWF0ZUluc3RhbmNlRnVuY3Rpb24oIG5ldyBUcmFuc2xhdGluZ1Zpc2l0b3IoIGNvbnRleHQsIHBpcGVsaW5lICkudmlzaXQoIHZhbHVlICkpXG4gICAgXSk7XG5cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

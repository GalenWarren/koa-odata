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

    _get(Object.getPrototypeOf(_SelectParameter.prototype), "constructor", this).call(this, options, "$select", 20);
  }

  _createClass(SelectParameter, [{
    key: "parse",
    value: function parse(value, expression, context, pipeline) {

      return (0, _expressionsUtilities.createFunctionCall)("select", [expression, new _expressionsVisitorsTranslating.TranslatingVisitor(context, pipeline).visit(value)]);
    }
  }]);

  var _SelectParameter = SelectParameter;
  SelectParameter = (0, _aureliaDependencyInjection.inject)("options")(SelectParameter) || SelectParameter;
  return SelectParameter;
})(_base.Parameter);

exports.SelectParameter = SelectParameter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9wYXJhbWV0ZXJzL3NlbGVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzswQ0FBcUIsOEJBQThCOztvQkFDM0IsUUFBUTs7b0NBQ2lCLDBCQUEwQjs7OENBQzFDLHFDQUFxQzs7SUFNekQsZUFBZTtZQUFmLGVBQWU7O0FBS2YsV0FMQSxlQUFlLENBS2IsT0FBTyxFQUFHOzs7QUFDckIsNEZBQU8sT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7R0FDaEM7O2VBUFUsZUFBZTs7V0FZckIsZUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUc7O0FBRTVDLGFBQU8sOENBQW9CLFFBQVEsRUFBRSxDQUNuQyxVQUFVLEVBQ1YsdURBQXdCLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUUsS0FBSyxDQUFFLENBQzFELENBQUMsQ0FBQztLQUVKOzs7eUJBbkJVLGVBQWU7QUFBZixpQkFBZSxHQUQzQix3Q0FBTyxTQUFTLENBQUMsQ0FDTCxlQUFlLEtBQWYsZUFBZTtTQUFmLGVBQWUiLCJmaWxlIjoibGliL3BhcmFtZXRlcnMvc2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XG5pbXBvcnQge1BhcmFtZXRlcn0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHtjcmVhdGVQYXJhbWV0ZXIsY3JlYXRlRnVuY3Rpb25DYWxsfSBmcm9tIFwiLi4vZXhwcmVzc2lvbnMvdXRpbGl0aWVzXCI7XG5pbXBvcnQge1RyYW5zbGF0aW5nVmlzaXRvcn0gZnJvbSBcIi4uL2V4cHJlc3Npb25zL3Zpc2l0b3JzL3RyYW5zbGF0aW5nXCI7XG5cbi8qKlxuKiBNb2RlbCBmb3IgdGhkICR0b3AgcGFyYW1ldGVyXG4qL1xuQGluamVjdChcIm9wdGlvbnNcIilcbmV4cG9ydCBjbGFzcyBTZWxlY3RQYXJhbWV0ZXIgZXh0ZW5kcyBQYXJhbWV0ZXIge1xuXG4gIC8qKlxuICAqIENvbnN0cnVjdGlvblxuICAqL1xuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApIHtcbiAgICBzdXBlciggb3B0aW9ucywgXCIkc2VsZWN0XCIsIDIwKTtcbiAgfVxuXG4gIC8qKlxuICAqIFBhcnNlcyBhIHZhbHVlIGFuZCByZXR1cm5zIGEgbW9kaWZpZWQgZXhwcmVzc2lvblxuICAqL1xuICBwYXJzZSggdmFsdWUsIGV4cHJlc3Npb24sIGNvbnRleHQsIHBpcGVsaW5lICkge1xuXG4gICAgcmV0dXJuIGNyZWF0ZUZ1bmN0aW9uQ2FsbCggXCJzZWxlY3RcIiwgW1xuICAgICAgZXhwcmVzc2lvbixcbiAgICAgIG5ldyBUcmFuc2xhdGluZ1Zpc2l0b3IoIGNvbnRleHQsIHBpcGVsaW5lKS52aXNpdCggdmFsdWUgKVxuICAgIF0pO1xuXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

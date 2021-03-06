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

var _expressionsVisitorsParameterizing = require("../expressions/visitors/parameterizing");

var TopParameter = (function (_Parameter) {
  _inherits(TopParameter, _Parameter);

  function TopParameter(options) {
    _classCallCheck(this, _TopParameter);

    _get(Object.getPrototypeOf(_TopParameter.prototype), "constructor", this).call(this, options, "$top", 10);
  }

  _createClass(TopParameter, [{
    key: "parse",
    value: function parse(value, expression, context, pipeline) {

      return (0, _expressionsUtilities.createFunctionCall)("top", [expression, new _expressionsVisitorsParameterizing.ParameterizingVisitor(context, pipeline).visit({
        type: "literal",
        value: value
      })]);
    }
  }]);

  var _TopParameter = TopParameter;
  TopParameter = (0, _aureliaDependencyInjection.inject)("options")(TopParameter) || TopParameter;
  return TopParameter;
})(_base.Parameter);

exports.TopParameter = TopParameter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9wYXJhbWV0ZXJzL3RvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzswQ0FBcUIsOEJBQThCOztvQkFDM0IsUUFBUTs7b0NBQ2lCLDBCQUEwQjs7aURBQ3ZDLHdDQUF3Qzs7SUFNL0QsWUFBWTtZQUFaLFlBQVk7O0FBS1osV0FMQSxZQUFZLENBS1YsT0FBTyxFQUFHOzs7QUFDckIseUZBQU8sT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7R0FDN0I7O2VBUFUsWUFBWTs7V0FZbEIsZUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUc7O0FBRTVDLGFBQU8sOENBQW9CLEtBQUssRUFBRSxDQUNoQyxVQUFVLEVBQ1YsNkRBQTJCLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDbEQsWUFBSSxFQUFFLFNBQVM7QUFDZixhQUFLLEVBQUUsS0FBSztPQUNiLENBQUMsQ0FDSCxDQUFDLENBQUM7S0FFSjs7O3NCQXRCVSxZQUFZO0FBQVosY0FBWSxHQUR4Qix3Q0FBTyxTQUFTLENBQUMsQ0FDTCxZQUFZLEtBQVosWUFBWTtTQUFaLFlBQVkiLCJmaWxlIjoibGliL3BhcmFtZXRlcnMvdG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XG5pbXBvcnQge1BhcmFtZXRlcn0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHtjcmVhdGVQYXJhbWV0ZXIsY3JlYXRlRnVuY3Rpb25DYWxsfSBmcm9tIFwiLi4vZXhwcmVzc2lvbnMvdXRpbGl0aWVzXCI7XG5pbXBvcnQge1BhcmFtZXRlcml6aW5nVmlzaXRvcn0gZnJvbSBcIi4uL2V4cHJlc3Npb25zL3Zpc2l0b3JzL3BhcmFtZXRlcml6aW5nXCI7XG5cbi8qKlxuKiBNb2RlbCBmb3IgdGhkICR0b3AgcGFyYW1ldGVyXG4qL1xuQGluamVjdChcIm9wdGlvbnNcIilcbmV4cG9ydCBjbGFzcyBUb3BQYXJhbWV0ZXIgZXh0ZW5kcyBQYXJhbWV0ZXIge1xuXG4gIC8qKlxuICAqIENvbnN0cnVjdGlvblxuICAqL1xuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApIHtcbiAgICBzdXBlciggb3B0aW9ucywgXCIkdG9wXCIsIDEwKTtcbiAgfVxuXG4gIC8qKlxuICAqIFBhcnNlcyBhIHZhbHVlIGFuZCByZXR1cm5zIGEgbW9kaWZpZWQgZXhwcmVzc2lvblxuICAqL1xuICBwYXJzZSggdmFsdWUsIGV4cHJlc3Npb24sIGNvbnRleHQsIHBpcGVsaW5lICkge1xuXG4gICAgcmV0dXJuIGNyZWF0ZUZ1bmN0aW9uQ2FsbCggXCJ0b3BcIiwgW1xuICAgICAgZXhwcmVzc2lvbixcbiAgICAgIG5ldyBQYXJhbWV0ZXJpemluZ1Zpc2l0b3IoIGNvbnRleHQsIHBpcGVsaW5lKS52aXNpdCh7XG4gICAgICAgIHR5cGU6IFwibGl0ZXJhbFwiLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pXG4gICAgXSk7XG5cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

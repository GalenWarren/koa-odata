"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _expressionVisitor = require("./expressionVisitor");

var ParameterizingVisitor = (function (_ExpressionVisitor) {
  _inherits(ParameterizingVisitor, _ExpressionVisitor);

  function ParameterizingVisitor() {
    var parametersName = arguments.length <= 0 || arguments[0] === undefined ? "parms" : arguments[0];

    _classCallCheck(this, ParameterizingVisitor);

    _get(Object.getPrototypeOf(ParameterizingVisitor.prototype), "constructor", this).call(this);
    this.parameters = [];
    this.parametersName = parametersName;
  }

  _createClass(ParameterizingVisitor, [{
    key: "visitLiteral",
    value: function visitLiteral(node) {

      debugger;

      var index = this.parameters.length;
      this.parameters.push(node.value);

      return {
        "type": "MemberExpression",
        "computed": true,
        "object": {
          "type": "Identifier",
          "name": this.parametersName
        },
        "property": {
          "type": "Literal",
          "value": index,
          "raw": index.toString()
        }
      };
    }
  }]);

  return ParameterizingVisitor;
})(_expressionVisitor.ExpressionVisitor);

exports.ParameterizingVisitor = ParameterizingVisitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9leHByZXNzaW9ucy9wYXJhbWV0ZXJpemluZ1Zpc2l0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7aUNBQWdDLHFCQUFxQjs7SUFFeEMscUJBQXFCO1lBQXJCLHFCQUFxQjs7QUFLckIsV0FMQSxxQkFBcUIsR0FLUTtRQUEzQixjQUFjLHlEQUFHLE9BQU87OzBCQUwxQixxQkFBcUI7O0FBTTlCLCtCQU5TLHFCQUFxQiw2Q0FNdEI7QUFDUixRQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUNyQixRQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztHQUN0Qzs7ZUFUVSxxQkFBcUI7O1dBY3BCLHNCQUFFLElBQUksRUFBRzs7QUFFbkIsZUFBUzs7QUFHVCxVQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztBQUNyQyxVQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBR2pDLGFBQU87QUFDTCxjQUFNLEVBQUUsa0JBQWtCO0FBQzFCLGtCQUFVLEVBQUUsSUFBSTtBQUNoQixnQkFBUSxFQUFFO0FBQ1IsZ0JBQU0sRUFBRSxZQUFZO0FBQ3BCLGdCQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWM7U0FDNUI7QUFDRCxrQkFBVSxFQUFFO0FBQ1YsZ0JBQU0sRUFBRSxTQUFTO0FBQ2pCLGlCQUFPLEVBQUUsS0FBSztBQUNkLGVBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFO1NBQ3hCO09BQ0YsQ0FBQztLQUNIOzs7U0FwQ1UscUJBQXFCIiwiZmlsZSI6ImxpYi9leHByZXNzaW9ucy9wYXJhbWV0ZXJpemluZ1Zpc2l0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V4cHJlc3Npb25WaXNpdG9yfSBmcm9tIFwiLi9leHByZXNzaW9uVmlzaXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlcml6aW5nVmlzaXRvciBleHRlbmRzIEV4cHJlc3Npb25WaXNpdG9yIHtcclxuXHJcbiAgLyoqXHJcbiAgKiBDb25zdHJ1Y3Qgd2l0aCB0aGUgbmFtZSBvZiB0aGUgZXhwcmVzc2lvbiB0aGF0IHdpbGwgaG9sZCB0aGUgcGFybXNcclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKCBwYXJhbWV0ZXJzTmFtZSA9IFwicGFybXNcIiApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBbXTtcclxuICAgIHRoaXMucGFyYW1ldGVyc05hbWUgPSBwYXJhbWV0ZXJzTmFtZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogVmlzaXQgYSBsaXRlcmFsIGV4cHJlc3Npb25cclxuICAqL1xyXG4gIHZpc2l0TGl0ZXJhbCggbm9kZSApIHtcclxuXHJcbiAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICAvLyBjYXB0dXJlIHRoZSBwYXJhbWV0ZXJcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wYXJhbWV0ZXJzLmxlbmd0aDtcclxuICAgIHRoaXMucGFyYW1ldGVycy5wdXNoKG5vZGUudmFsdWUpO1xyXG5cclxuICAgIC8vIHJlcGxhY2Ugd2l0aCBhIG1lbWJlciBleHByZXNzaW9uIG5vZGVcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFwidHlwZVwiOiBcIk1lbWJlckV4cHJlc3Npb25cIixcclxuICAgICAgXCJjb21wdXRlZFwiOiB0cnVlLFxyXG4gICAgICBcIm9iamVjdFwiOiB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwiSWRlbnRpZmllclwiLFxyXG4gICAgICAgIFwibmFtZVwiOiB0aGlzLnBhcmFtZXRlcnNOYW1lXHJcbiAgICAgIH0sXHJcbiAgICAgIFwicHJvcGVydHlcIjoge1xyXG4gICAgICAgIFwidHlwZVwiOiBcIkxpdGVyYWxcIixcclxuICAgICAgICBcInZhbHVlXCI6IGluZGV4LFxyXG4gICAgICAgIFwicmF3XCI6IGluZGV4LnRvU3RyaW5nKClcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9leHByZXNzaW9ucy9wYXJhbWV0ZXJpemluZ1Zpc2l0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7aUNBQWdDLHFCQUFxQjs7SUFFeEMscUJBQXFCO1lBQXJCLHFCQUFxQjs7QUFVckIsV0FWQSxxQkFBcUIsR0FVUTtRQUEzQixjQUFjLHlEQUFHLE9BQU87OzBCQVYxQixxQkFBcUI7O0FBVzlCLCtCQVhTLHFCQUFxQiw2Q0FXdEI7U0FOVixVQUFVLEdBQUcsRUFBRTtBQU9iLFFBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0dBQ3RDOztlQWJVLHFCQUFxQjs7V0FrQnBCLHNCQUFFLElBQUksRUFBRzs7QUFFbkIsZUFBUzs7QUFHVCxVQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztBQUNyQyxVQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBR2pDLGFBQU87QUFDTCxjQUFNLEVBQUUsa0JBQWtCO0FBQzFCLGtCQUFVLEVBQUUsSUFBSTtBQUNoQixnQkFBUSxFQUFFO0FBQ1IsZ0JBQU0sRUFBRSxZQUFZO0FBQ3BCLGdCQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWM7U0FDNUI7QUFDRCxrQkFBVSxFQUFFO0FBQ1YsZ0JBQU0sRUFBRSxTQUFTO0FBQ2pCLGlCQUFPLEVBQUUsS0FBSztBQUNkLGVBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFO1NBQ3hCO09BQ0YsQ0FBQztLQUNIOzs7U0F4Q1UscUJBQXFCIiwiZmlsZSI6ImxpYi9leHByZXNzaW9ucy9wYXJhbWV0ZXJpemluZ1Zpc2l0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V4cHJlc3Npb25WaXNpdG9yfSBmcm9tIFwiLi9leHByZXNzaW9uVmlzaXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlcml6aW5nVmlzaXRvciBleHRlbmRzIEV4cHJlc3Npb25WaXNpdG9yIHtcclxuXHJcbiAgLyoqXHJcbiAgKiBUaGUgcGFyYW1ldGVycyB0aGF0IGFyZSBkZXRlY3RlZFxyXG4gICovXHJcbiAgcGFyYW1ldGVycyA9IFtdXHJcblxyXG4gIC8qKlxyXG4gICogQ29uc3RydWN0IHdpdGggdGhlIG5hbWUgb2YgdGhlIGV4cHJlc3Npb24gdGhhdCB3aWxsIGhvbGQgdGhlIHBhcm1zXHJcbiAgKi9cclxuICBjb25zdHJ1Y3RvciggcGFyYW1ldGVyc05hbWUgPSBcInBhcm1zXCIgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5wYXJhbWV0ZXJzTmFtZSA9IHBhcmFtZXRlcnNOYW1lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBWaXNpdCBhIGxpdGVyYWwgZXhwcmVzc2lvblxyXG4gICovXHJcbiAgdmlzaXRMaXRlcmFsKCBub2RlICkge1xyXG5cclxuICAgIGRlYnVnZ2VyO1xyXG5cclxuICAgIC8vIGNhcHR1cmUgdGhlIHBhcmFtZXRlclxyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnBhcmFtZXRlcnMubGVuZ3RoO1xyXG4gICAgdGhpcy5wYXJhbWV0ZXJzLnB1c2gobm9kZS52YWx1ZSk7XHJcblxyXG4gICAgLy8gcmVwbGFjZSB3aXRoIGEgbWVtYmVyIGV4cHJlc3Npb24gbm9kZVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgXCJ0eXBlXCI6IFwiTWVtYmVyRXhwcmVzc2lvblwiLFxyXG4gICAgICBcImNvbXB1dGVkXCI6IHRydWUsXHJcbiAgICAgIFwib2JqZWN0XCI6IHtcclxuICAgICAgICBcInR5cGVcIjogXCJJZGVudGlmaWVyXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IHRoaXMucGFyYW1ldGVyc05hbWVcclxuICAgICAgfSxcclxuICAgICAgXCJwcm9wZXJ0eVwiOiB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwiTGl0ZXJhbFwiLFxyXG4gICAgICAgIFwidmFsdWVcIjogaW5kZXgsXHJcbiAgICAgICAgXCJyYXdcIjogaW5kZXgudG9TdHJpbmcoKVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
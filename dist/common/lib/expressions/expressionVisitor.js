"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var binaryOperators = new Set(["eq", "ne", "lt", "gt", "lte", "gte", "and", "or"]);

var ExpressionVisitor = (function () {
  function ExpressionVisitor() {
    _classCallCheck(this, ExpressionVisitor);
  }

  _createClass(ExpressionVisitor, [{
    key: "visit",
    value: function visit(node) {
      if (binaryOperators.has(node.type)) {
        return this.visitBinary(node);
      } else {
        switch (node.type) {
          case "functioncall":
            return this.visitFunctionCall(node);
          case "literal":
            return this.visitLiteral(node);
          case "property":
            return this.visitProperty(node);
          default:
            return node;
        }
      }
    }
  }, {
    key: "visitLiteral",
    value: function visitLiteral(node) {
      return node;
    }
  }, {
    key: "visitProperty",
    value: function visitProperty(node) {
      return node;
    }
  }, {
    key: "visitBinary",
    value: function visitBinary(node) {
      node.left = this.visit(node.left);
      node.right = this.visit(node.right);
      return node;
    }
  }, {
    key: "visitFunctionCall",
    value: function visitFunctionCall(node) {
      for (var i = 0; i < node.args.length; i++) {
        node.args[i] = this.visit(node.args[i]);
      }
      return node;
    }
  }]);

  return ExpressionVisitor;
})();

exports.ExpressionVisitor = ExpressionVisitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9leHByZXNzaW9ucy9leHByZXNzaW9uVmlzaXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsSUFBTSxlQUFlLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FDOUIsSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLEVBQ0osSUFBSSxFQUNKLEtBQUssRUFDTCxLQUFLLEVBQ0wsS0FBSyxFQUNMLElBQUksQ0FDTCxDQUFDLENBQUM7O0lBRVUsaUJBQWlCO1dBQWpCLGlCQUFpQjswQkFBakIsaUJBQWlCOzs7ZUFBakIsaUJBQWlCOztXQUt2QixlQUFFLElBQUksRUFBRztBQUNaLFVBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDbEMsZUFBTyxJQUFJLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBRSxDQUFDO09BQ2pDLE1BQ0k7QUFDSCxnQkFBUSxJQUFJLENBQUMsSUFBSTtBQUNmLGVBQUssY0FBYztBQUNqQixtQkFBTyxJQUFJLENBQUMsaUJBQWlCLENBQUUsSUFBSSxDQUFFLENBQUM7QUFBQSxBQUN4QyxlQUFLLFNBQVM7QUFDWixtQkFBTyxJQUFJLENBQUMsWUFBWSxDQUFFLElBQUksQ0FBRSxDQUFDO0FBQUEsQUFDbkMsZUFBSyxVQUFVO0FBQ2IsbUJBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBRSxJQUFJLENBQUUsQ0FBQztBQUFBLEFBQ3BDO0FBQ0UsbUJBQU8sSUFBSSxDQUFDO0FBQUEsU0FDZjtPQUNGO0tBQ0Y7OztXQUtXLHNCQUFFLElBQUksRUFBRztBQUNuQixhQUFPLElBQUksQ0FBQztLQUNiOzs7V0FLWSx1QkFBRSxJQUFJLEVBQUc7QUFDcEIsYUFBTyxJQUFJLENBQUM7S0FDYjs7O1dBS1UscUJBQUUsSUFBSSxFQUFHO0FBQ2xCLFVBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUM7QUFDcEMsVUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQztBQUN0QyxhQUFPLElBQUksQ0FBQztLQUViOzs7V0FLZ0IsMkJBQUUsSUFBSSxFQUFHO0FBQ3hCLFdBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNyQyxZQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQzFDO0FBQ0QsYUFBTyxJQUFJLENBQUM7S0FDYjs7O1NBdkRVLGlCQUFpQiIsImZpbGUiOiJsaWIvZXhwcmVzc2lvbnMvZXhwcmVzc2lvblZpc2l0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGUgYmluYXJ5IG9wZXJhdG9yc1xyXG5jb25zdCBiaW5hcnlPcGVyYXRvcnMgPSBuZXcgU2V0KFtcclxuICBcImVxXCIsXHJcbiAgXCJuZVwiLFxyXG4gIFwibHRcIixcclxuICBcImd0XCIsXHJcbiAgXCJsdGVcIixcclxuICBcImd0ZVwiLFxyXG4gIFwiYW5kXCIsXHJcbiAgXCJvclwiXHJcbl0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb25WaXNpdG9yIHtcclxuXHJcbiAgLyoqXHJcbiAgKiBUaGUgbWFpbiB2aXNpdCBtZXRob2QsIGNhbGxzIHRvIHNwZWNpYWxpemVkIHR5cGVzIGJhc2VkIG9uIHR5cGUgb2Ygbm9kZVxyXG4gICovXHJcbiAgdmlzaXQoIG5vZGUgKSB7XHJcbiAgICBpZiAoYmluYXJ5T3BlcmF0b3JzLmhhcyhub2RlLnR5cGUpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZpc2l0QmluYXJ5KCBub2RlICk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiZnVuY3Rpb25jYWxsXCI6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy52aXNpdEZ1bmN0aW9uQ2FsbCggbm9kZSApO1xyXG4gICAgICAgIGNhc2UgXCJsaXRlcmFsXCI6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy52aXNpdExpdGVyYWwoIG5vZGUgKTtcclxuICAgICAgICBjYXNlIFwicHJvcGVydHlcIjpcclxuICAgICAgICAgIHJldHVybiB0aGlzLnZpc2l0UHJvcGVydHkoIG5vZGUgKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogVmlzaXQgYSBsaXRlcmFsIGV4cHJlc3Npb25cclxuICAqL1xyXG4gIHZpc2l0TGl0ZXJhbCggbm9kZSApIHtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBWaXNpdCBhIHByb3BlcnR5IGV4cHJlc3Npb25cclxuICAqL1xyXG4gIHZpc2l0UHJvcGVydHkoIG5vZGUgKSB7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogVmlzaXQgYSBiaW5hcnkgZXhwcmVzc2lvblxyXG4gICovXHJcbiAgdmlzaXRCaW5hcnkoIG5vZGUgKSB7XHJcbiAgICBub2RlLmxlZnQgPSB0aGlzLnZpc2l0KCBub2RlLmxlZnQgKTtcclxuICAgIG5vZGUucmlnaHQgPSB0aGlzLnZpc2l0KCBub2RlLnJpZ2h0ICk7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFZpc2l0IGEgZnVuY3Rpb24gY2FsbCBleHByZXNzaW9uXHJcbiAgKi9cclxuICB2aXNpdEZ1bmN0aW9uQ2FsbCggbm9kZSApIHtcclxuICAgIGZvciAobGV0IGk9MDsgaTxub2RlLmFyZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbm9kZS5hcmdzW2ldID0gdGhpcy52aXNpdCggbm9kZS5hcmdzW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

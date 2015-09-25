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
            debugger;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9leHByZXNzaW9ucy9leHByZXNzaW9uVmlzaXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsSUFBTSxlQUFlLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FDOUIsSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLEVBQ0osSUFBSSxFQUNKLEtBQUssRUFDTCxLQUFLLEVBQ0wsS0FBSyxFQUNMLElBQUksQ0FDTCxDQUFDLENBQUM7O0lBRVUsaUJBQWlCO1dBQWpCLGlCQUFpQjswQkFBakIsaUJBQWlCOzs7ZUFBakIsaUJBQWlCOztXQUt2QixlQUFFLElBQUksRUFBRztBQUNaLFVBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDbEMsZUFBTyxJQUFJLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBRSxDQUFDO09BQ2pDLE1BQ0k7QUFDSCxnQkFBUSxJQUFJLENBQUMsSUFBSTtBQUNmLGVBQUssY0FBYztBQUNqQixtQkFBTyxJQUFJLENBQUMsaUJBQWlCLENBQUUsSUFBSSxDQUFFLENBQUM7QUFBQSxBQUN4QyxlQUFLLFNBQVM7QUFDWixtQkFBTyxJQUFJLENBQUMsWUFBWSxDQUFFLElBQUksQ0FBRSxDQUFDO0FBQUEsQUFDbkMsZUFBSyxVQUFVO0FBQ2IsbUJBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBRSxJQUFJLENBQUUsQ0FBQztBQUFBLEFBQ3BDO0FBQ0UscUJBQVM7QUFDVCxtQkFBTyxJQUFJLENBQUM7QUFBQSxTQUNmO09BQ0Y7S0FDRjs7O1dBS1csc0JBQUUsSUFBSSxFQUFHO0FBQ25CLGFBQU8sSUFBSSxDQUFDO0tBQ2I7OztXQUtZLHVCQUFFLElBQUksRUFBRztBQUNwQixhQUFPLElBQUksQ0FBQztLQUNiOzs7V0FLVSxxQkFBRSxJQUFJLEVBQUc7QUFDbEIsVUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQztBQUNwQyxVQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDO0FBQ3RDLGFBQU8sSUFBSSxDQUFDO0tBRWI7OztXQUtnQiwyQkFBRSxJQUFJLEVBQUc7QUFDeEIsV0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3JDLFlBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7T0FDMUM7QUFDRCxhQUFPLElBQUksQ0FBQztLQUNiOzs7U0F4RFUsaUJBQWlCIiwiZmlsZSI6ImxpYi9leHByZXNzaW9ucy9leHByZXNzaW9uVmlzaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRoZSBiaW5hcnkgb3BlcmF0b3JzXHJcbmNvbnN0IGJpbmFyeU9wZXJhdG9ycyA9IG5ldyBTZXQoW1xyXG4gIFwiZXFcIixcclxuICBcIm5lXCIsXHJcbiAgXCJsdFwiLFxyXG4gIFwiZ3RcIixcclxuICBcImx0ZVwiLFxyXG4gIFwiZ3RlXCIsXHJcbiAgXCJhbmRcIixcclxuICBcIm9yXCJcclxuXSk7XHJcblxyXG5leHBvcnQgY2xhc3MgRXhwcmVzc2lvblZpc2l0b3Ige1xyXG5cclxuICAvKipcclxuICAqIFRoZSBtYWluIHZpc2l0IG1ldGhvZCwgY2FsbHMgdG8gc3BlY2lhbGl6ZWQgdHlwZXMgYmFzZWQgb24gdHlwZSBvZiBub2RlXHJcbiAgKi9cclxuICB2aXNpdCggbm9kZSApIHtcclxuICAgIGlmIChiaW5hcnlPcGVyYXRvcnMuaGFzKG5vZGUudHlwZSkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmlzaXRCaW5hcnkoIG5vZGUgKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJmdW5jdGlvbmNhbGxcIjpcclxuICAgICAgICAgIHJldHVybiB0aGlzLnZpc2l0RnVuY3Rpb25DYWxsKCBub2RlICk7XHJcbiAgICAgICAgY2FzZSBcImxpdGVyYWxcIjpcclxuICAgICAgICAgIHJldHVybiB0aGlzLnZpc2l0TGl0ZXJhbCggbm9kZSApO1xyXG4gICAgICAgIGNhc2UgXCJwcm9wZXJ0eVwiOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRQcm9wZXJ0eSggbm9kZSApO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFZpc2l0IGEgbGl0ZXJhbCBleHByZXNzaW9uXHJcbiAgKi9cclxuICB2aXNpdExpdGVyYWwoIG5vZGUgKSB7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogVmlzaXQgYSBwcm9wZXJ0eSBleHByZXNzaW9uXHJcbiAgKi9cclxuICB2aXNpdFByb3BlcnR5KCBub2RlICkge1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFZpc2l0IGEgYmluYXJ5IGV4cHJlc3Npb25cclxuICAqL1xyXG4gIHZpc2l0QmluYXJ5KCBub2RlICkge1xyXG4gICAgbm9kZS5sZWZ0ID0gdGhpcy52aXNpdCggbm9kZS5sZWZ0ICk7XHJcbiAgICBub2RlLnJpZ2h0ID0gdGhpcy52aXNpdCggbm9kZS5yaWdodCApO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBWaXNpdCBhIGZ1bmN0aW9uIGNhbGwgZXhwcmVzc2lvblxyXG4gICovXHJcbiAgdmlzaXRGdW5jdGlvbkNhbGwoIG5vZGUgKSB7XHJcbiAgICBmb3IgKGxldCBpPTA7IGk8bm9kZS5hcmdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG5vZGUuYXJnc1tpXSA9IHRoaXMudmlzaXQoIG5vZGUuYXJnc1tpXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
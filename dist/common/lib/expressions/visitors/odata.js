"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var binaryOperators = new Set(["eq", "ne", "lt", "gt", "lte", "gte", "and", "or"]);

var ODataVisitor = (function () {
  function ODataVisitor() {
    _classCallCheck(this, ODataVisitor);
  }

  _createClass(ODataVisitor, [{
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

  return ODataVisitor;
})();

exports.ODataVisitor = ODataVisitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9leHByZXNzaW9ucy92aXNpdG9ycy9vZGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsSUFBTSxlQUFlLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FDOUIsSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLEVBQ0osSUFBSSxFQUNKLEtBQUssRUFDTCxLQUFLLEVBQ0wsS0FBSyxFQUNMLElBQUksQ0FDTCxDQUFDLENBQUM7O0lBRVUsWUFBWTtXQUFaLFlBQVk7MEJBQVosWUFBWTs7O2VBQVosWUFBWTs7V0FLbEIsZUFBRSxJQUFJLEVBQUc7QUFDWixVQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ2xDLGVBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUUsQ0FBQztPQUNqQyxNQUNJO0FBQ0gsZ0JBQVEsSUFBSSxDQUFDLElBQUk7QUFDZixlQUFLLGNBQWM7QUFDakIsbUJBQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFFLElBQUksQ0FBRSxDQUFDO0FBQUEsQUFDeEMsZUFBSyxTQUFTO0FBQ1osbUJBQU8sSUFBSSxDQUFDLFlBQVksQ0FBRSxJQUFJLENBQUUsQ0FBQztBQUFBLEFBQ25DLGVBQUssVUFBVTtBQUNiLG1CQUFPLElBQUksQ0FBQyxhQUFhLENBQUUsSUFBSSxDQUFFLENBQUM7QUFBQSxBQUNwQztBQUNFLG1CQUFPLElBQUksQ0FBQztBQUFBLFNBQ2Y7T0FDRjtLQUNGOzs7V0FLVyxzQkFBRSxJQUFJLEVBQUc7QUFDbkIsYUFBTyxJQUFJLENBQUM7S0FDYjs7O1dBS1ksdUJBQUUsSUFBSSxFQUFHO0FBQ3BCLGFBQU8sSUFBSSxDQUFDO0tBQ2I7OztXQUtVLHFCQUFFLElBQUksRUFBRztBQUNsQixVQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDO0FBQ3BDLFVBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7QUFDdEMsYUFBTyxJQUFJLENBQUM7S0FFYjs7O1dBS2dCLDJCQUFFLElBQUksRUFBRztBQUN4QixXQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDckMsWUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztPQUMxQztBQUNELGFBQU8sSUFBSSxDQUFDO0tBQ2I7OztTQXZEVSxZQUFZIiwiZmlsZSI6ImxpYi9leHByZXNzaW9ucy92aXNpdG9ycy9vZGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRoZSBiaW5hcnkgb3BlcmF0b3JzXHJcbmNvbnN0IGJpbmFyeU9wZXJhdG9ycyA9IG5ldyBTZXQoW1xyXG4gIFwiZXFcIixcclxuICBcIm5lXCIsXHJcbiAgXCJsdFwiLFxyXG4gIFwiZ3RcIixcclxuICBcImx0ZVwiLFxyXG4gIFwiZ3RlXCIsXHJcbiAgXCJhbmRcIixcclxuICBcIm9yXCJcclxuXSk7XHJcblxyXG5leHBvcnQgY2xhc3MgT0RhdGFWaXNpdG9yIHtcclxuXHJcbiAgLyoqXHJcbiAgKiBUaGUgbWFpbiB2aXNpdCBtZXRob2QsIGNhbGxzIHRvIHNwZWNpYWxpemVkIHR5cGVzIGJhc2VkIG9uIHR5cGUgb2Ygbm9kZVxyXG4gICovXHJcbiAgdmlzaXQoIG5vZGUgKSB7XHJcbiAgICBpZiAoYmluYXJ5T3BlcmF0b3JzLmhhcyhub2RlLnR5cGUpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZpc2l0QmluYXJ5KCBub2RlICk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiZnVuY3Rpb25jYWxsXCI6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy52aXNpdEZ1bmN0aW9uQ2FsbCggbm9kZSApO1xyXG4gICAgICAgIGNhc2UgXCJsaXRlcmFsXCI6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy52aXNpdExpdGVyYWwoIG5vZGUgKTtcclxuICAgICAgICBjYXNlIFwicHJvcGVydHlcIjpcclxuICAgICAgICAgIHJldHVybiB0aGlzLnZpc2l0UHJvcGVydHkoIG5vZGUgKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogVmlzaXQgYSBsaXRlcmFsIGV4cHJlc3Npb25cclxuICAqL1xyXG4gIHZpc2l0TGl0ZXJhbCggbm9kZSApIHtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBWaXNpdCBhIHByb3BlcnR5IGV4cHJlc3Npb25cclxuICAqL1xyXG4gIHZpc2l0UHJvcGVydHkoIG5vZGUgKSB7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogVmlzaXQgYSBiaW5hcnkgZXhwcmVzc2lvblxyXG4gICovXHJcbiAgdmlzaXRCaW5hcnkoIG5vZGUgKSB7XHJcbiAgICBub2RlLmxlZnQgPSB0aGlzLnZpc2l0KCBub2RlLmxlZnQgKTtcclxuICAgIG5vZGUucmlnaHQgPSB0aGlzLnZpc2l0KCBub2RlLnJpZ2h0ICk7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFZpc2l0IGEgZnVuY3Rpb24gY2FsbCBleHByZXNzaW9uXHJcbiAgKi9cclxuICB2aXNpdEZ1bmN0aW9uQ2FsbCggbm9kZSApIHtcclxuICAgIGZvciAobGV0IGk9MDsgaTxub2RlLmFyZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbm9kZS5hcmdzW2ldID0gdGhpcy52aXNpdCggbm9kZS5hcmdzW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

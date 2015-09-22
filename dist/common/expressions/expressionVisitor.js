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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cHJlc3Npb25zL2V4cHJlc3Npb25WaXNpdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxJQUFNLGVBQWUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUM5QixJQUFJLEVBQ0osSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxFQUNMLEtBQUssRUFDTCxLQUFLLEVBQ0wsSUFBSSxDQUNMLENBQUMsQ0FBQzs7SUFFVSxpQkFBaUI7V0FBakIsaUJBQWlCOzBCQUFqQixpQkFBaUI7OztlQUFqQixpQkFBaUI7O1dBS3ZCLGVBQUUsSUFBSSxFQUFHO0FBQ1osVUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNsQyxlQUFPLElBQUksQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFFLENBQUM7T0FDakMsTUFDSTtBQUNILGdCQUFRLElBQUksQ0FBQyxJQUFJO0FBQ2YsZUFBSyxjQUFjO0FBQ2pCLG1CQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBRSxJQUFJLENBQUUsQ0FBQztBQUFBLEFBQ3hDLGVBQUssU0FBUztBQUNaLG1CQUFPLElBQUksQ0FBQyxZQUFZLENBQUUsSUFBSSxDQUFFLENBQUM7QUFBQSxBQUNuQyxlQUFLLFVBQVU7QUFDYixtQkFBTyxJQUFJLENBQUMsYUFBYSxDQUFFLElBQUksQ0FBRSxDQUFDO0FBQUEsQUFDcEM7QUFDRSxxQkFBUztBQUNULG1CQUFPLElBQUksQ0FBQztBQUFBLFNBQ2Y7T0FDRjtLQUNGOzs7V0FLVyxzQkFBRSxJQUFJLEVBQUc7QUFDbkIsYUFBTyxJQUFJLENBQUM7S0FDYjs7O1dBS1ksdUJBQUUsSUFBSSxFQUFHO0FBQ3BCLGFBQU8sSUFBSSxDQUFDO0tBQ2I7OztXQUtVLHFCQUFFLElBQUksRUFBRztBQUNsQixVQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDO0FBQ3BDLFVBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7QUFDdEMsYUFBTyxJQUFJLENBQUM7S0FFYjs7O1dBS2dCLDJCQUFFLElBQUksRUFBRztBQUN4QixXQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDckMsWUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztPQUMxQztBQUNELGFBQU8sSUFBSSxDQUFDO0tBQ2I7OztTQXhEVSxpQkFBaUIiLCJmaWxlIjoiZXhwcmVzc2lvbnMvZXhwcmVzc2lvblZpc2l0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGUgYmluYXJ5IG9wZXJhdG9yc1xyXG5jb25zdCBiaW5hcnlPcGVyYXRvcnMgPSBuZXcgU2V0KFtcclxuICBcImVxXCIsXHJcbiAgXCJuZVwiLFxyXG4gIFwibHRcIixcclxuICBcImd0XCIsXHJcbiAgXCJsdGVcIixcclxuICBcImd0ZVwiLFxyXG4gIFwiYW5kXCIsXHJcbiAgXCJvclwiXHJcbl0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb25WaXNpdG9yIHtcclxuXHJcbiAgLyoqXHJcbiAgKiBUaGUgbWFpbiB2aXNpdCBtZXRob2QsIGNhbGxzIHRvIHNwZWNpYWxpemVkIHR5cGVzIGJhc2VkIG9uIHR5cGUgb2Ygbm9kZVxyXG4gICovXHJcbiAgdmlzaXQoIG5vZGUgKSB7XHJcbiAgICBpZiAoYmluYXJ5T3BlcmF0b3JzLmhhcyhub2RlLnR5cGUpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZpc2l0QmluYXJ5KCBub2RlICk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiZnVuY3Rpb25jYWxsXCI6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy52aXNpdEZ1bmN0aW9uQ2FsbCggbm9kZSApO1xyXG4gICAgICAgIGNhc2UgXCJsaXRlcmFsXCI6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy52aXNpdExpdGVyYWwoIG5vZGUgKTtcclxuICAgICAgICBjYXNlIFwicHJvcGVydHlcIjpcclxuICAgICAgICAgIHJldHVybiB0aGlzLnZpc2l0UHJvcGVydHkoIG5vZGUgKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBWaXNpdCBhIGxpdGVyYWwgZXhwcmVzc2lvblxyXG4gICovXHJcbiAgdmlzaXRMaXRlcmFsKCBub2RlICkge1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFZpc2l0IGEgcHJvcGVydHkgZXhwcmVzc2lvblxyXG4gICovXHJcbiAgdmlzaXRQcm9wZXJ0eSggbm9kZSApIHtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBWaXNpdCBhIGJpbmFyeSBleHByZXNzaW9uXHJcbiAgKi9cclxuICB2aXNpdEJpbmFyeSggbm9kZSApIHtcclxuICAgIG5vZGUubGVmdCA9IHRoaXMudmlzaXQoIG5vZGUubGVmdCApO1xyXG4gICAgbm9kZS5yaWdodCA9IHRoaXMudmlzaXQoIG5vZGUucmlnaHQgKTtcclxuICAgIHJldHVybiBub2RlO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogVmlzaXQgYSBmdW5jdGlvbiBjYWxsIGV4cHJlc3Npb25cclxuICAqL1xyXG4gIHZpc2l0RnVuY3Rpb25DYWxsKCBub2RlICkge1xyXG4gICAgZm9yIChsZXQgaT0wOyBpPG5vZGUuYXJncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBub2RlLmFyZ3NbaV0gPSB0aGlzLnZpc2l0KCBub2RlLmFyZ3NbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
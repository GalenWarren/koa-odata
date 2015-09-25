System.register([], function (_export) {
  "use strict";

  var binaryOperators, ExpressionVisitor;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      binaryOperators = new Set(["eq", "ne", "lt", "gt", "lte", "gte", "and", "or"]);

      ExpressionVisitor = (function () {
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

      _export("ExpressionVisitor", ExpressionVisitor);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9leHByZXNzaW9ucy9leHByZXNzaW9uVmlzaXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFDTSxlQUFlLEVBV1IsaUJBQWlCOzs7Ozs7Ozs7QUFYeEIscUJBQWUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUM5QixJQUFJLEVBQ0osSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxFQUNMLEtBQUssRUFDTCxLQUFLLEVBQ0wsSUFBSSxDQUNMLENBQUM7O0FBRVcsdUJBQWlCO2lCQUFqQixpQkFBaUI7Z0NBQWpCLGlCQUFpQjs7O3FCQUFqQixpQkFBaUI7O2lCQUt2QixlQUFFLElBQUksRUFBRztBQUNaLGdCQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ2xDLHFCQUFPLElBQUksQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFFLENBQUM7YUFDakMsTUFDSTtBQUNILHNCQUFRLElBQUksQ0FBQyxJQUFJO0FBQ2YscUJBQUssY0FBYztBQUNqQix5QkFBTyxJQUFJLENBQUMsaUJBQWlCLENBQUUsSUFBSSxDQUFFLENBQUM7QUFBQSxBQUN4QyxxQkFBSyxTQUFTO0FBQ1oseUJBQU8sSUFBSSxDQUFDLFlBQVksQ0FBRSxJQUFJLENBQUUsQ0FBQztBQUFBLEFBQ25DLHFCQUFLLFVBQVU7QUFDYix5QkFBTyxJQUFJLENBQUMsYUFBYSxDQUFFLElBQUksQ0FBRSxDQUFDO0FBQUEsQUFDcEM7QUFDRSwyQkFBUztBQUNULHlCQUFPLElBQUksQ0FBQztBQUFBLGVBQ2Y7YUFDRjtXQUNGOzs7aUJBS1csc0JBQUUsSUFBSSxFQUFHO0FBQ25CLG1CQUFPLElBQUksQ0FBQztXQUNiOzs7aUJBS1ksdUJBQUUsSUFBSSxFQUFHO0FBQ3BCLG1CQUFPLElBQUksQ0FBQztXQUNiOzs7aUJBS1UscUJBQUUsSUFBSSxFQUFHO0FBQ2xCLGdCQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDO0FBQ3BDLGdCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDO0FBQ3RDLG1CQUFPLElBQUksQ0FBQztXQUViOzs7aUJBS2dCLDJCQUFFLElBQUksRUFBRztBQUN4QixpQkFBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3JDLGtCQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFDO0FBQ0QsbUJBQU8sSUFBSSxDQUFDO1dBQ2I7OztlQXhEVSxpQkFBaUIiLCJmaWxlIjoibGliL2V4cHJlc3Npb25zL2V4cHJlc3Npb25WaXNpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhlIGJpbmFyeSBvcGVyYXRvcnNcclxuY29uc3QgYmluYXJ5T3BlcmF0b3JzID0gbmV3IFNldChbXHJcbiAgXCJlcVwiLFxyXG4gIFwibmVcIixcclxuICBcImx0XCIsXHJcbiAgXCJndFwiLFxyXG4gIFwibHRlXCIsXHJcbiAgXCJndGVcIixcclxuICBcImFuZFwiLFxyXG4gIFwib3JcIlxyXG5dKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBFeHByZXNzaW9uVmlzaXRvciB7XHJcblxyXG4gIC8qKlxyXG4gICogVGhlIG1haW4gdmlzaXQgbWV0aG9kLCBjYWxscyB0byBzcGVjaWFsaXplZCB0eXBlcyBiYXNlZCBvbiB0eXBlIG9mIG5vZGVcclxuICAqL1xyXG4gIHZpc2l0KCBub2RlICkge1xyXG4gICAgaWYgKGJpbmFyeU9wZXJhdG9ycy5oYXMobm9kZS50eXBlKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy52aXNpdEJpbmFyeSggbm9kZSApO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcImZ1bmN0aW9uY2FsbFwiOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRGdW5jdGlvbkNhbGwoIG5vZGUgKTtcclxuICAgICAgICBjYXNlIFwibGl0ZXJhbFwiOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRMaXRlcmFsKCBub2RlICk7XHJcbiAgICAgICAgY2FzZSBcInByb3BlcnR5XCI6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy52aXNpdFByb3BlcnR5KCBub2RlICk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogVmlzaXQgYSBsaXRlcmFsIGV4cHJlc3Npb25cclxuICAqL1xyXG4gIHZpc2l0TGl0ZXJhbCggbm9kZSApIHtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBWaXNpdCBhIHByb3BlcnR5IGV4cHJlc3Npb25cclxuICAqL1xyXG4gIHZpc2l0UHJvcGVydHkoIG5vZGUgKSB7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogVmlzaXQgYSBiaW5hcnkgZXhwcmVzc2lvblxyXG4gICovXHJcbiAgdmlzaXRCaW5hcnkoIG5vZGUgKSB7XHJcbiAgICBub2RlLmxlZnQgPSB0aGlzLnZpc2l0KCBub2RlLmxlZnQgKTtcclxuICAgIG5vZGUucmlnaHQgPSB0aGlzLnZpc2l0KCBub2RlLnJpZ2h0ICk7XHJcbiAgICByZXR1cm4gbm9kZTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFZpc2l0IGEgZnVuY3Rpb24gY2FsbCBleHByZXNzaW9uXHJcbiAgKi9cclxuICB2aXNpdEZ1bmN0aW9uQ2FsbCggbm9kZSApIHtcclxuICAgIGZvciAobGV0IGk9MDsgaTxub2RlLmFyZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbm9kZS5hcmdzW2ldID0gdGhpcy52aXNpdCggbm9kZS5hcmdzW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _utilities = require("../utilities");

var binaryOperators = new Set(["eq", "ne", "lt", "gt", "lte", "gte", "and", "or"]);

var ODataVisitor = (function () {
  function ODataVisitor(context, pipeline) {
    _classCallCheck(this, ODataVisitor);

    this.context = context;
    this.pipeline = pipeline;
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
        }
      }

      throw new Error("OData node " + JSON.stringify(node) + " not handled");
    }
  }, {
    key: "visitLiteral",
    value: function visitLiteral(node) {
      return node;
    }
  }, {
    key: "visitProperty",
    value: function visitProperty(node) {
      return (0, _utilities.createPropertyGet)(node.name);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9leHByZXNzaW9ucy92aXNpdG9ycy9vZGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3lCQUFtRSxjQUFjOztBQUdqRixJQUFNLGVBQWUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUM5QixJQUFJLEVBQ0osSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxFQUNMLEtBQUssRUFDTCxLQUFLLEVBQ0wsSUFBSSxDQUNMLENBQUMsQ0FBQzs7SUFFVSxZQUFZO0FBS1osV0FMQSxZQUFZLENBS1YsT0FBTyxFQUFFLFFBQVEsRUFBRzswQkFMdEIsWUFBWTs7QUFNckIsUUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsUUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7R0FDMUI7O2VBUlUsWUFBWTs7V0FhbEIsZUFBRSxJQUFJLEVBQUc7QUFDWixVQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ2xDLGVBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUUsQ0FBQztPQUNqQyxNQUNJO0FBQ0gsZ0JBQVEsSUFBSSxDQUFDLElBQUk7QUFDZixlQUFLLGNBQWM7QUFDakIsbUJBQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFFLElBQUksQ0FBRSxDQUFDO0FBQUEsQUFDeEMsZUFBSyxTQUFTO0FBQ1osbUJBQU8sSUFBSSxDQUFDLFlBQVksQ0FBRSxJQUFJLENBQUUsQ0FBQztBQUFBLEFBQ25DLGVBQUssVUFBVTtBQUNiLG1CQUFPLElBQUksQ0FBQyxhQUFhLENBQUUsSUFBSSxDQUFFLENBQUM7QUFBQSxTQUNyQztPQUNGOztBQUdELFlBQU0sSUFBSSxLQUFLLGlCQUFnQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxrQkFBZSxDQUFDO0tBQ3BFOzs7V0FLVyxzQkFBRSxJQUFJLEVBQUc7QUFDbkIsYUFBTyxJQUFJLENBQUM7S0FDYjs7O1dBS1ksdUJBQUUsSUFBSSxFQUFHO0FBQ3BCLGFBQU8sa0NBQW1CLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQztLQUN2Qzs7O1dBS1UscUJBQUUsSUFBSSxFQUFHO0FBQ2xCLFVBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUM7QUFDcEMsVUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQztBQUN0QyxhQUFPLElBQUksQ0FBQztLQUViOzs7V0FLZ0IsMkJBQUUsSUFBSSxFQUFHO0FBQ3hCLFdBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNyQyxZQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQzFDO0FBQ0QsYUFBTyxJQUFJLENBQUM7S0FDYjs7O1NBaEVVLFlBQVkiLCJmaWxlIjoibGliL2V4cHJlc3Npb25zL3Zpc2l0b3JzL29kYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVQYXJhbWV0ZXIsY3JlYXRlRnVuY3Rpb25DYWxsLGNyZWF0ZVByb3BlcnR5R2V0fSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcblxyXG4vLyB0aGUgYmluYXJ5IG9wZXJhdG9yc1xyXG5jb25zdCBiaW5hcnlPcGVyYXRvcnMgPSBuZXcgU2V0KFtcclxuICBcImVxXCIsXHJcbiAgXCJuZVwiLFxyXG4gIFwibHRcIixcclxuICBcImd0XCIsXHJcbiAgXCJsdGVcIixcclxuICBcImd0ZVwiLFxyXG4gIFwiYW5kXCIsXHJcbiAgXCJvclwiXHJcbl0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9EYXRhVmlzaXRvciB7XHJcblxyXG4gIC8qKlxyXG4gICogIEBjb25zdHJ1Y3RvclxyXG4gICovXHJcbiAgY29uc3RydWN0b3IoIGNvbnRleHQsIHBpcGVsaW5lICkge1xyXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgIHRoaXMucGlwZWxpbmUgPSBwaXBlbGluZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogVGhlIG1haW4gdmlzaXQgbWV0aG9kLCBjYWxscyB0byBzcGVjaWFsaXplZCB0eXBlcyBiYXNlZCBvbiB0eXBlIG9mIG5vZGVcclxuICAqL1xyXG4gIHZpc2l0KCBub2RlICkge1xyXG4gICAgaWYgKGJpbmFyeU9wZXJhdG9ycy5oYXMobm9kZS50eXBlKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy52aXNpdEJpbmFyeSggbm9kZSApO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcImZ1bmN0aW9uY2FsbFwiOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRGdW5jdGlvbkNhbGwoIG5vZGUgKTtcclxuICAgICAgICBjYXNlIFwibGl0ZXJhbFwiOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRMaXRlcmFsKCBub2RlICk7XHJcbiAgICAgICAgY2FzZSBcInByb3BlcnR5XCI6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy52aXNpdFByb3BlcnR5KCBub2RlICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoYXQgdG8gZG8gaGVyZSAuLi5cclxuICAgIHRocm93IG5ldyBFcnJvciggYE9EYXRhIG5vZGUgJHtKU09OLnN0cmluZ2lmeShub2RlKX0gbm90IGhhbmRsZWRgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogVmlzaXQgYSBsaXRlcmFsIGV4cHJlc3Npb25cclxuICAqL1xyXG4gIHZpc2l0TGl0ZXJhbCggbm9kZSApIHtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBWaXNpdCBhIHByb3BlcnR5IGV4cHJlc3Npb25cclxuICAqL1xyXG4gIHZpc2l0UHJvcGVydHkoIG5vZGUgKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlUHJvcGVydHlHZXQoIG5vZGUubmFtZSApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBWaXNpdCBhIGJpbmFyeSBleHByZXNzaW9uXHJcbiAgKi9cclxuICB2aXNpdEJpbmFyeSggbm9kZSApIHtcclxuICAgIG5vZGUubGVmdCA9IHRoaXMudmlzaXQoIG5vZGUubGVmdCApO1xyXG4gICAgbm9kZS5yaWdodCA9IHRoaXMudmlzaXQoIG5vZGUucmlnaHQgKTtcclxuICAgIHJldHVybiBub2RlO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogVmlzaXQgYSBmdW5jdGlvbiBjYWxsIGV4cHJlc3Npb25cclxuICAqL1xyXG4gIHZpc2l0RnVuY3Rpb25DYWxsKCBub2RlICkge1xyXG4gICAgZm9yIChsZXQgaT0wOyBpPG5vZGUuYXJncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBub2RlLmFyZ3NbaV0gPSB0aGlzLnZpc2l0KCBub2RlLmFyZ3NbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

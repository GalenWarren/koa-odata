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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9leHByZXNzaW9ucy92aXNpdG9ycy9vZGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3lCQUFtRSxjQUFjOztBQUdqRixJQUFNLGVBQWUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUM5QixJQUFJLEVBQ0osSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxFQUNMLEtBQUssRUFDTCxLQUFLLEVBQ0wsSUFBSSxDQUNMLENBQUMsQ0FBQzs7SUFFVSxZQUFZO0FBS1osV0FMQSxZQUFZLENBS1YsT0FBTyxFQUFFLFFBQVEsRUFBRzswQkFMdEIsWUFBWTs7QUFNckIsUUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsUUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7R0FDMUI7O2VBUlUsWUFBWTs7V0FhbEIsZUFBRSxJQUFJLEVBQUc7QUFDWixVQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ2xDLGVBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUUsQ0FBQztPQUNqQyxNQUNJO0FBQ0gsZ0JBQVEsSUFBSSxDQUFDLElBQUk7QUFDZixlQUFLLGNBQWM7QUFDakIsbUJBQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFFLElBQUksQ0FBRSxDQUFDO0FBQUEsQUFDeEMsZUFBSyxTQUFTO0FBQ1osbUJBQU8sSUFBSSxDQUFDLFlBQVksQ0FBRSxJQUFJLENBQUUsQ0FBQztBQUFBLEFBQ25DLGVBQUssVUFBVTtBQUNiLG1CQUFPLElBQUksQ0FBQyxhQUFhLENBQUUsSUFBSSxDQUFFLENBQUM7QUFBQSxTQUNyQztPQUNGOztBQUdELFlBQU0sSUFBSSxLQUFLLGlCQUFnQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxrQkFBZSxDQUFDO0tBQ3BFOzs7V0FLVyxzQkFBRSxJQUFJLEVBQUc7QUFDbkIsYUFBTyxJQUFJLENBQUM7S0FDYjs7O1dBS1ksdUJBQUUsSUFBSSxFQUFHO0FBQ3BCLGFBQU8sa0NBQW1CLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQztLQUN2Qzs7O1dBS1UscUJBQUUsSUFBSSxFQUFHO0FBQ2xCLFVBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUM7QUFDcEMsVUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQztBQUN0QyxhQUFPLElBQUksQ0FBQztLQUViOzs7V0FLZ0IsMkJBQUUsSUFBSSxFQUFHO0FBQ3hCLFdBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNyQyxZQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQzFDO0FBQ0QsYUFBTyxJQUFJLENBQUM7S0FDYjs7O1NBaEVVLFlBQVkiLCJmaWxlIjoibGliL2V4cHJlc3Npb25zL3Zpc2l0b3JzL29kYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVQYXJhbWV0ZXIsY3JlYXRlRnVuY3Rpb25DYWxsLGNyZWF0ZVByb3BlcnR5R2V0fSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XG5cbi8vIHRoZSBiaW5hcnkgb3BlcmF0b3JzXG5jb25zdCBiaW5hcnlPcGVyYXRvcnMgPSBuZXcgU2V0KFtcbiAgXCJlcVwiLFxuICBcIm5lXCIsXG4gIFwibHRcIixcbiAgXCJndFwiLFxuICBcImx0ZVwiLFxuICBcImd0ZVwiLFxuICBcImFuZFwiLFxuICBcIm9yXCJcbl0pO1xuXG5leHBvcnQgY2xhc3MgT0RhdGFWaXNpdG9yIHtcblxuICAvKipcbiAgKiAgQGNvbnN0cnVjdG9yXG4gICovXG4gIGNvbnN0cnVjdG9yKCBjb250ZXh0LCBwaXBlbGluZSApIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMucGlwZWxpbmUgPSBwaXBlbGluZTtcbiAgfVxuXG4gIC8qKlxuICAqIFRoZSBtYWluIHZpc2l0IG1ldGhvZCwgY2FsbHMgdG8gc3BlY2lhbGl6ZWQgdHlwZXMgYmFzZWQgb24gdHlwZSBvZiBub2RlXG4gICovXG4gIHZpc2l0KCBub2RlICkge1xuICAgIGlmIChiaW5hcnlPcGVyYXRvcnMuaGFzKG5vZGUudHlwZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnZpc2l0QmluYXJ5KCBub2RlICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcImZ1bmN0aW9uY2FsbFwiOlxuICAgICAgICAgIHJldHVybiB0aGlzLnZpc2l0RnVuY3Rpb25DYWxsKCBub2RlICk7XG4gICAgICAgIGNhc2UgXCJsaXRlcmFsXCI6XG4gICAgICAgICAgcmV0dXJuIHRoaXMudmlzaXRMaXRlcmFsKCBub2RlICk7XG4gICAgICAgIGNhc2UgXCJwcm9wZXJ0eVwiOlxuICAgICAgICAgIHJldHVybiB0aGlzLnZpc2l0UHJvcGVydHkoIG5vZGUgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoYXQgdG8gZG8gaGVyZSAuLi5cbiAgICB0aHJvdyBuZXcgRXJyb3IoIGBPRGF0YSBub2RlICR7SlNPTi5zdHJpbmdpZnkobm9kZSl9IG5vdCBoYW5kbGVkYCk7XG4gIH1cblxuICAvKipcbiAgKiBWaXNpdCBhIGxpdGVyYWwgZXhwcmVzc2lvblxuICAqL1xuICB2aXNpdExpdGVyYWwoIG5vZGUgKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICAvKipcbiAgKiBWaXNpdCBhIHByb3BlcnR5IGV4cHJlc3Npb25cbiAgKi9cbiAgdmlzaXRQcm9wZXJ0eSggbm9kZSApIHtcbiAgICByZXR1cm4gY3JlYXRlUHJvcGVydHlHZXQoIG5vZGUubmFtZSApO1xuICB9XG5cbiAgLyoqXG4gICogVmlzaXQgYSBiaW5hcnkgZXhwcmVzc2lvblxuICAqL1xuICB2aXNpdEJpbmFyeSggbm9kZSApIHtcbiAgICBub2RlLmxlZnQgPSB0aGlzLnZpc2l0KCBub2RlLmxlZnQgKTtcbiAgICBub2RlLnJpZ2h0ID0gdGhpcy52aXNpdCggbm9kZS5yaWdodCApO1xuICAgIHJldHVybiBub2RlO1xuXG4gIH1cblxuICAvKipcbiAgKiBWaXNpdCBhIGZ1bmN0aW9uIGNhbGwgZXhwcmVzc2lvblxuICAqL1xuICB2aXNpdEZ1bmN0aW9uQ2FsbCggbm9kZSApIHtcbiAgICBmb3IgKGxldCBpPTA7IGk8bm9kZS5hcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBub2RlLmFyZ3NbaV0gPSB0aGlzLnZpc2l0KCBub2RlLmFyZ3NbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

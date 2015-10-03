"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var Functions = (function () {
  function Functions() {
    _classCallCheck(this, Functions);
  }

  _createClass(Functions, [{
    key: "getProperty",
    value: function getProperty(name) {
      return 1;
    }
  }, {
    key: "value",
    value: function value(obj) {
      return _lodash2["default"].isFunction(obj.value) ? obj.value() : obj;
    }
  }, {
    key: "top",
    value: function top(collection, count) {
      return collection.take(count);
    }
  }, {
    key: "select",
    value: function select(collection, predicate) {
      return collection.filter(predicate);
    }
  }]);

  return Functions;
})();

exports.Functions = Functions;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9leHByZXNzaW9ucy9mdW5jdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3NCQUFjLFFBQVE7Ozs7SUFLVCxTQUFTO0FBS1QsV0FMQSxTQUFTLEdBS047MEJBTEgsU0FBUztHQU9uQjs7ZUFQVSxTQUFTOztXQVlULHFCQUFFLElBQUksRUFBRztBQUNsQixhQUFPLENBQUMsQ0FBQztLQUNWOzs7V0FLSSxlQUFFLEdBQUcsRUFBRztBQUNYLGFBQU8sb0JBQUUsVUFBVSxDQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsR0FBRyxDQUFDO0tBQ3REOzs7V0FLRSxhQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUU7QUFDckIsYUFBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQy9COzs7V0FLSyxnQkFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFO0FBQzVCLGFBQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNyQzs7O1NBbkNVLFNBQVM7Ozs7QUFxQ3JCLENBQUMiLCJmaWxlIjoibGliL2V4cHJlc3Npb25zL2Z1bmN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbi8qKlxyXG4qIEEgZnVuY3Rpb25zIGNsYXNzIGluc3RhbmNlXHJcbiovXHJcbmV4cG9ydCBjbGFzcyBGdW5jdGlvbnMge1xyXG5cclxuICAvKipcclxuICAqIEBjb25zdHJ1Y3RvclxyXG4gICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBHZXRzIGEgcHJvcGVydHkgdmFsdWUgZm9yIHRoZSBwcm92aWRlZCBuYW1lXHJcbiAgKi9cclxuICBnZXRQcm9wZXJ0eSggbmFtZSApIHtcclxuICAgIHJldHVybiAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBIZWxwZXIgdG8gcmVzb2x2ZSBhIGxvZGFzaCB3cmFwcGVyIGlmIG5lZWRlZFxyXG4gICovXHJcbiAgdmFsdWUoIG9iaiApIHtcclxuICAgIHJldHVybiBfLmlzRnVuY3Rpb24oIG9iai52YWx1ZSApID8gb2JqLnZhbHVlKCkgOiBvYmo7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFdyYXBwZXIgZm9yIHRvcFxyXG4gICovXHJcbiAgdG9wKGNvbGxlY3Rpb24sIGNvdW50KSB7XHJcbiAgICByZXR1cm4gY29sbGVjdGlvbi50YWtlKGNvdW50KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogV3JhcHBlciBmb3Igc2VsZWN0XHJcbiAgKi9cclxuICBzZWxlY3QoY29sbGVjdGlvbiwgcHJlZGljYXRlKSB7XHJcbiAgICByZXR1cm4gY29sbGVjdGlvbi5maWx0ZXIocHJlZGljYXRlKTtcclxuICB9XHJcblxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

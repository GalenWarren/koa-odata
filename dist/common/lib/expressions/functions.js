"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var functions = {
  value: function value(obj) {
    return _lodash2["default"].isFunction(obj.value) ? obj.value() : obj;
  },

  top: function top(collection, count) {
    return collection.take(count);
  }

};
exports.functions = functions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9leHByZXNzaW9ucy9mdW5jdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7c0JBQWMsUUFBUTs7OztBQUVmLElBQU0sU0FBUyxHQUFHO0FBS3ZCLE9BQUssRUFBRSxlQUFVLEdBQUcsRUFBRztBQUNyQixXQUFPLG9CQUFFLFVBQVUsQ0FBRSxHQUFHLENBQUMsS0FBSyxDQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQztHQUN0RDs7QUFLRCxLQUFHLEVBQUUsYUFBUyxVQUFVLEVBQUUsS0FBSyxFQUFFO0FBQy9CLFdBQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUMvQjs7Q0FFRixDQUFDIiwiZmlsZSI6ImxpYi9leHByZXNzaW9ucy9mdW5jdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZnVuY3Rpb25zID0ge1xyXG5cclxuICAvKipcclxuICAqIEhlbHBlciB0byByZXNvbHZlIGEgbG9kYXNoIHdyYXBwZXIgaWYgbmVlZGVkXHJcbiAgKi9cclxuICB2YWx1ZTogZnVuY3Rpb24oIG9iaiApIHtcclxuICAgIHJldHVybiBfLmlzRnVuY3Rpb24oIG9iai52YWx1ZSApID8gb2JqLnZhbHVlKCkgOiBvYmo7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgKiBXcmFwcGVyIGZvciB0b3AgZnVuY3Rpb25cclxuICAqL1xyXG4gIHRvcDogZnVuY3Rpb24oY29sbGVjdGlvbiwgY291bnQpIHtcclxuICAgIHJldHVybiBjb2xsZWN0aW9uLnRha2UoY291bnQpO1xyXG4gIH1cclxuXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

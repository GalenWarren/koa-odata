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
    value: function getProperty(instance, name) {
      return instance[name];
    }
  }, {
    key: "getValue",
    value: function getValue(obj) {
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
      throw "notimplemented";
    }
  }, {
    key: "filter",
    value: function filter(collection, predicate) {
      return collection.filter(predicate);
    }
  }, {
    key: "eq",
    value: function eq(a, b) {
      return a === b;
    }
  }]);

  return Functions;
})();

exports.Functions = Functions;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9leHByZXNzaW9ucy9mdW5jdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3NCQUFjLFFBQVE7Ozs7SUFLVCxTQUFTO0FBS1QsV0FMQSxTQUFTLEdBS047MEJBTEgsU0FBUztHQU9uQjs7ZUFQVSxTQUFTOztXQVlULHFCQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUc7QUFDNUIsYUFBTyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdkI7OztXQUtPLGtCQUFFLEdBQUcsRUFBRztBQUNkLGFBQU8sb0JBQUUsVUFBVSxDQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsR0FBRyxDQUFDO0tBQ3REOzs7V0FLRSxhQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUU7QUFDckIsYUFBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQy9COzs7V0FLSyxnQkFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFO0FBQzVCLFlBQU0sZ0JBQWdCLENBQUM7S0FDeEI7OztXQUtLLGdCQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUc7QUFDOUIsYUFBTyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3JDOzs7V0FLQyxZQUFFLENBQUMsRUFBRSxDQUFDLEVBQUc7QUFDVCxhQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEI7OztTQWpEVSxTQUFTOzs7O0FBbURyQixDQUFDIiwiZmlsZSI6ImxpYi9leHByZXNzaW9ucy9mdW5jdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG4vKipcclxuKiBBIGZ1bmN0aW9ucyBjbGFzcyBpbnN0YW5jZVxyXG4qL1xyXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25zIHtcclxuXHJcbiAgLyoqXHJcbiAgKiBAY29uc3RydWN0b3JcclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogR2V0cyBhIHByb3BlcnR5IHZhbHVlIGZvciB0aGUgcHJvdmlkZWQgbmFtZVxyXG4gICovXHJcbiAgZ2V0UHJvcGVydHkoIGluc3RhbmNlLCBuYW1lICkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlW25hbWVdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBIZWxwZXIgdG8gcmVzb2x2ZSBhIGxvZGFzaCB3cmFwcGVyIGlmIG5lZWRlZFxyXG4gICovXHJcbiAgZ2V0VmFsdWUoIG9iaiApIHtcclxuICAgIHJldHVybiBfLmlzRnVuY3Rpb24oIG9iai52YWx1ZSApID8gb2JqLnZhbHVlKCkgOiBvYmo7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFdyYXBwZXIgZm9yIHRvcFxyXG4gICovXHJcbiAgdG9wKGNvbGxlY3Rpb24sIGNvdW50KSB7XHJcbiAgICByZXR1cm4gY29sbGVjdGlvbi50YWtlKGNvdW50KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogV3JhcHBlciBmb3Igc2VsZWN0XHJcbiAgKi9cclxuICBzZWxlY3QoY29sbGVjdGlvbiwgcHJlZGljYXRlKSB7XHJcbiAgICB0aHJvdyBcIm5vdGltcGxlbWVudGVkXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFdyYXBwZXIgZm9yIGZpbHRlclxyXG4gICovXHJcbiAgZmlsdGVyKCBjb2xsZWN0aW9uLCBwcmVkaWNhdGUgKSB7XHJcbiAgICByZXR1cm4gY29sbGVjdGlvbi5maWx0ZXIocHJlZGljYXRlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogRXF1YWxpdHkgY2hlY2tcclxuICAqL1xyXG4gIGVxKCBhLCBiICkge1xyXG4gICAgcmV0dXJuIGEgPT09IGI7XHJcbiAgfVxyXG5cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9leHByZXNzaW9ucy9mdW5jdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3NCQUFjLFFBQVE7Ozs7SUFLVCxTQUFTO0FBS1QsV0FMQSxTQUFTLEdBS047MEJBTEgsU0FBUztHQU9uQjs7ZUFQVSxTQUFTOztXQVlULHFCQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUc7QUFDNUIsYUFBTyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdkI7OztXQUtPLGtCQUFFLEdBQUcsRUFBRztBQUNkLGFBQU8sb0JBQUUsVUFBVSxDQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsR0FBRyxDQUFDO0tBQ3REOzs7V0FLRSxhQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUU7QUFDckIsYUFBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQy9COzs7V0FLSyxnQkFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFO0FBQzVCLFlBQU0sZ0JBQWdCLENBQUM7S0FDeEI7OztXQUtLLGdCQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUc7QUFDOUIsYUFBTyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3JDOzs7V0FLQyxZQUFFLENBQUMsRUFBRSxDQUFDLEVBQUc7QUFDVCxhQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEI7OztTQWpEVSxTQUFTOzs7O0FBbURyQixDQUFDIiwiZmlsZSI6ImxpYi9leHByZXNzaW9ucy9mdW5jdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbi8qKlxuKiBBIGZ1bmN0aW9ucyBjbGFzcyBpbnN0YW5jZVxuKi9cbmV4cG9ydCBjbGFzcyBGdW5jdGlvbnMge1xuXG4gIC8qKlxuICAqIEBjb25zdHJ1Y3RvclxuICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgLyoqXG4gICogR2V0cyBhIHByb3BlcnR5IHZhbHVlIGZvciB0aGUgcHJvdmlkZWQgbmFtZVxuICAqL1xuICBnZXRQcm9wZXJ0eSggaW5zdGFuY2UsIG5hbWUgKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlW25hbWVdO1xuICB9XG5cbiAgLyoqXG4gICogSGVscGVyIHRvIHJlc29sdmUgYSBsb2Rhc2ggd3JhcHBlciBpZiBuZWVkZWRcbiAgKi9cbiAgZ2V0VmFsdWUoIG9iaiApIHtcbiAgICByZXR1cm4gXy5pc0Z1bmN0aW9uKCBvYmoudmFsdWUgKSA/IG9iai52YWx1ZSgpIDogb2JqO1xuICB9XG5cbiAgLyoqXG4gICogV3JhcHBlciBmb3IgdG9wXG4gICovXG4gIHRvcChjb2xsZWN0aW9uLCBjb3VudCkge1xuICAgIHJldHVybiBjb2xsZWN0aW9uLnRha2UoY291bnQpO1xuICB9XG5cbiAgLyoqXG4gICogV3JhcHBlciBmb3Igc2VsZWN0XG4gICovXG4gIHNlbGVjdChjb2xsZWN0aW9uLCBwcmVkaWNhdGUpIHtcbiAgICB0aHJvdyBcIm5vdGltcGxlbWVudGVkXCI7XG4gIH1cblxuICAvKipcbiAgKiBXcmFwcGVyIGZvciBmaWx0ZXJcbiAgKi9cbiAgZmlsdGVyKCBjb2xsZWN0aW9uLCBwcmVkaWNhdGUgKSB7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb24uZmlsdGVyKHByZWRpY2F0ZSk7XG4gIH1cblxuICAvKipcbiAgKiBFcXVhbGl0eSBjaGVja1xuICAqL1xuICBlcSggYSwgYiApIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgfVxuXG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

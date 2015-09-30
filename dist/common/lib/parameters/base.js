"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _utilities = require("./utilities");

var Parameter = (function () {
  function Parameter(options, key) {
    _classCallCheck(this, Parameter);

    this.options = options;
    this.key = key;
  }

  _createClass(Parameter, [{
    key: "normalize",
    value: function normalize(expression, parameters) {
      return (0, _utilities.normalize)(expression, parameters);
    }
  }]);

  return Parameter;
})();

exports.Parameter = Parameter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9wYXJhbWV0ZXJzL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozt5QkFBd0IsYUFBYTs7SUFFeEIsU0FBUztBQUtULFdBTEEsU0FBUyxDQUtQLE9BQU8sRUFBRSxHQUFHLEVBQUc7MEJBTGpCLFNBQVM7O0FBTWxCLFFBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFFBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0dBQ2hCOztlQVJVLFNBQVM7O1dBYVgsbUJBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRztBQUNsQyxhQUFPLDBCQUFXLFVBQVUsRUFBRSxVQUFVLENBQUUsQ0FBQztLQUM1Qzs7O1NBZlUsU0FBUyIsImZpbGUiOiJsaWIvcGFyYW1ldGVycy9iYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtub3JtYWxpemV9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyIHtcblxuICAvKipcbiAgKiBDb25zdHJ1Y3Rpb24sIHRha2VzIHRoZSBwYXJhbWV0ZXIgbmFtZSwgaS5lLiAkdG9wXG4gICovXG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zLCBrZXkgKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgfVxuXG4gIC8qKlxuICAqIE5vcm1hbGl6ZSBhbiBleHByZXNzaW9uXG4gICovXG4gIG5vcm1hbGl6ZSggZXhwcmVzc2lvbiwgcGFyYW1ldGVycyApIHtcbiAgICByZXR1cm4gbm9ybWFsaXplKCBleHByZXNzaW9uLCBwYXJhbWV0ZXJzICk7XG4gIH1cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

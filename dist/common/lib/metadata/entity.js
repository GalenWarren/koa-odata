"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _pluralize = require("pluralize");

var _pluralize2 = _interopRequireDefault(_pluralize);

var EntityMetadata = function EntityMetadata(_ref) {
  var name = _ref.name;
  var model = _ref.model;
  var properties = _ref.properties;

  _classCallCheck(this, EntityMetadata);

  this.name = name;
  this.model = model;
  this.properties = properties || [];
};

exports.EntityMetadata = EntityMetadata;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9tZXRhZGF0YS9lbnRpdHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozt5QkFBc0IsV0FBVzs7OztJQUtwQixjQUFjLEdBRWQsU0FGQSxjQUFjLENBRWIsSUFBb0QsRUFBRTtNQUE5QyxJQUFJLEdBQVosSUFBb0QsQ0FBbEQsSUFBSTtNQUFlLEtBQUssR0FBMUIsSUFBb0QsQ0FBdEMsS0FBSztNQUFxQixVQUFVLEdBQWxELElBQW9ELENBQXhCLFVBQVU7O3dCQUZ2QyxjQUFjOztBQUd2QixNQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixNQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxFQUFFLENBQUM7Q0FDcEMiLCJmaWxlIjoibGliL21ldGFkYXRhL2VudGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwbHVyYWxpemUgZnJvbSBcInBsdXJhbGl6ZVwiO1xuXG4vKipcbiogQ2xhc3MgdGhhdCBob2xkcyBlbnRpdHkgbWV0YWRhdGFcbiovXG5leHBvcnQgY2xhc3MgRW50aXR5TWV0YWRhdGEge1xuXG4gIGNvbnN0cnVjdG9yKHsgbmFtZTogbmFtZSwgbW9kZWw6IG1vZGVsLCBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzIH0pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IFtdO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _odata = require("./odata");

var TranslatingVisitor = (function (_ODataVisitor) {
  _inherits(TranslatingVisitor, _ODataVisitor);

  function TranslatingVisitor() {
    _classCallCheck(this, TranslatingVisitor);

    _get(Object.getPrototypeOf(TranslatingVisitor.prototype), "constructor", this).apply(this, arguments);
  }

  return TranslatingVisitor;
})(_odata.ODataVisitor);

exports.TranslatingVisitor = TranslatingVisitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9leHByZXNzaW9ucy92aXNpdG9ycy90cmFuc2xhdGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7cUJBQTJCLFNBQVM7O0lBS3ZCLGtCQUFrQjtZQUFsQixrQkFBa0I7O1dBQWxCLGtCQUFrQjswQkFBbEIsa0JBQWtCOzsrQkFBbEIsa0JBQWtCOzs7U0FBbEIsa0JBQWtCIiwiZmlsZSI6ImxpYi9leHByZXNzaW9ucy92aXNpdG9ycy90cmFuc2xhdGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T0RhdGFWaXNpdG9yfSBmcm9tIFwiLi9vZGF0YVwiO1xyXG5cclxuLyoqXHJcbiogVmlzaXRvciBjbGFzcyB0aGF0IHRyYW5zbGF0ZXMgYSBwYXJzZWQgb2RhdGEgZXhwcmVzc2lvblxyXG4qL1xyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpbmdWaXNpdG9yIGV4dGVuZHMgT0RhdGFWaXNpdG9yIHtcclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

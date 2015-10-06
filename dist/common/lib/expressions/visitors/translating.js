"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _parameterizing = require("./parameterizing");

var _utilities = require("../utilities");

var _functions = require("../functions");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var TranslatingVisitor = (function (_ParameterizingVisitor) {
  _inherits(TranslatingVisitor, _ParameterizingVisitor);

  function TranslatingVisitor(context, pipeline) {
    _classCallCheck(this, TranslatingVisitor);

    _get(Object.getPrototypeOf(TranslatingVisitor.prototype), "constructor", this).call(this, context, pipeline);
  }

  _createClass(TranslatingVisitor, [{
    key: "visitBinary",
    value: function visitBinary(node) {
      if (!_lodash2["default"].has(_functions.Functions.prototype, node.type)) {
        throw new Error("Operator " + node.type + " is not supported");
      }

      return (0, _utilities.createFunctionCall)(node.type, [this.visit(node.left), this.visit(node.right)]);
    }
  }, {
    key: "visitFunctionCall",
    value: function visitFunctionCall(node) {
      debugger;
    }
  }]);

  return TranslatingVisitor;
})(_parameterizing.ParameterizingVisitor);

exports.TranslatingVisitor = TranslatingVisitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9leHByZXNzaW9ucy92aXNpdG9ycy90cmFuc2xhdGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUFvQyxrQkFBa0I7O3lCQUNMLGNBQWM7O3lCQUN2QyxjQUFjOztzQkFDeEIsUUFBUTs7OztJQUtULGtCQUFrQjtZQUFsQixrQkFBa0I7O0FBS2xCLFdBTEEsa0JBQWtCLENBS2hCLE9BQU8sRUFBRSxRQUFRLEVBQUc7MEJBTHRCLGtCQUFrQjs7QUFNM0IsK0JBTlMsa0JBQWtCLDZDQU1wQixPQUFPLEVBQUUsUUFBUSxFQUFHO0dBQzVCOztlQVBVLGtCQUFrQjs7V0FZbEIscUJBQUUsSUFBSSxFQUFHO0FBR2xCLFVBQUksQ0FBQyxvQkFBRSxHQUFHLENBQUUscUJBQVUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsRUFBRTtBQUM1QyxjQUFNLElBQUksS0FBSyxlQUFjLElBQUksQ0FBQyxJQUFJLHVCQUFvQixDQUFDO09BQzVEOztBQUdELGFBQU8sbUNBQW9CLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FDcEMsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUN4QixDQUFDLENBQUM7S0FDSjs7O1dBS2dCLDJCQUFFLElBQUksRUFBRztBQUN4QixlQUFTO0tBQ1Y7OztTQS9CVSxrQkFBa0IiLCJmaWxlIjoibGliL2V4cHJlc3Npb25zL3Zpc2l0b3JzL3RyYW5zbGF0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQYXJhbWV0ZXJpemluZ1Zpc2l0b3J9IGZyb20gXCIuL3BhcmFtZXRlcml6aW5nXCI7XHJcbmltcG9ydCB7Y3JlYXRlUGFyYW1ldGVyLGNyZWF0ZUZ1bmN0aW9uQ2FsbH0gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xyXG5pbXBvcnQge0Z1bmN0aW9uc30gZnJvbSBcIi4uL2Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG4vKipcclxuKiBWaXNpdG9yIGNsYXNzIHRoYXQgdHJhbnNsYXRlcyBhIHBhcnNlZCBvZGF0YSBleHByZXNzaW9uXHJcbiovXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGluZ1Zpc2l0b3IgZXh0ZW5kcyBQYXJhbWV0ZXJpemluZ1Zpc2l0b3Ige1xyXG5cclxuICAvKipcclxuICAqIENvbnN0cnVjdGlvblxyXG4gICovXHJcbiAgY29uc3RydWN0b3IoIGNvbnRleHQsIHBpcGVsaW5lICkge1xyXG4gICAgc3VwZXIoIGNvbnRleHQsIHBpcGVsaW5lICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIENhbGxlZCB3aGVuIGEgYmluYXJ5IGNvbXBhcmlzb24gb3IgbG9naWNhbCBvcGVyYXRvciBpcyBlbmNvdW50ZXJlZFxyXG4gICovXHJcbiAgdmlzaXRCaW5hcnkoIG5vZGUgKSB7XHJcblxyXG4gICAgLy8gbG9vayB1cCB0aGUgZnVuY3Rpb25cclxuICAgIGlmICghXy5oYXMoIEZ1bmN0aW9ucy5wcm90b3R5cGUsIG5vZGUudHlwZSApKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvciggYE9wZXJhdG9yICR7bm9kZS50eXBlfSBpcyBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc3RydWN0IHRoZSBub2RlXHJcbiAgICByZXR1cm4gY3JlYXRlRnVuY3Rpb25DYWxsKCBub2RlLnR5cGUsIFtcclxuICAgICAgdGhpcy52aXNpdCggbm9kZS5sZWZ0KSxcclxuICAgICAgdGhpcy52aXNpdCggbm9kZS5yaWdodClcclxuICAgIF0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBDYWxsZWQgd2hlbiBhIGZ1bmN0aW9uIGNhbGwgaXMgZW5jb3VudGVyZWRcclxuICAqL1xyXG4gIHZpc2l0RnVuY3Rpb25DYWxsKCBub2RlICkge1xyXG4gICAgZGVidWdnZXI7XHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

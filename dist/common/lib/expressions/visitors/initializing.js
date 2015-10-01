"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _odata = require("./odata");

var _utilities = require("../utilities");

var InitializingVisitor = (function (_ODataVisitor) {
  _inherits(InitializingVisitor, _ODataVisitor);

  function InitializingVisitor(parameters) {
    _classCallCheck(this, InitializingVisitor);

    _get(Object.getPrototypeOf(InitializingVisitor.prototype), "constructor", this).call(this);
    this.parameters = parameters;
  }

  _createClass(InitializingVisitor, [{
    key: "visitLiteral",
    value: function visitLiteral(node) {
      return (0, _utilities.createParameter)(this.parameters, node.value);
    }
  }]);

  return InitializingVisitor;
})(_odata.ODataVisitor);

exports.InitializingVisitor = InitializingVisitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9leHByZXNzaW9ucy92aXNpdG9ycy9pbml0aWFsaXppbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7cUJBQTJCLFNBQVM7O3lCQUNOLGNBQWM7O0lBSy9CLG1CQUFtQjtZQUFuQixtQkFBbUI7O0FBS25CLFdBTEEsbUJBQW1CLENBS2pCLFVBQVUsRUFBRzswQkFMZixtQkFBbUI7O0FBTTVCLCtCQU5TLG1CQUFtQiw2Q0FNcEI7QUFDUixRQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztHQUM5Qjs7ZUFSVSxtQkFBbUI7O1dBYWxCLHNCQUFFLElBQUksRUFBRztBQUduQixhQUFPLGdDQUFpQixJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQztLQUV2RDs7O1NBbEJVLG1CQUFtQiIsImZpbGUiOiJsaWIvZXhwcmVzc2lvbnMvdmlzaXRvcnMvaW5pdGlhbGl6aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPRGF0YVZpc2l0b3J9IGZyb20gXCIuL29kYXRhXCI7XHJcbmltcG9ydCB7Y3JlYXRlUGFyYW1ldGVyfSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XHJcblxyXG4vKipcclxuKiBWaXNpdG9yIHRoYXQgaW5pdGlhbGl6ZXMgdGhlIG9kYXRhIHRyZWVcclxuKi9cclxuZXhwb3J0IGNsYXNzIEluaXRpYWxpemluZ1Zpc2l0b3IgZXh0ZW5kcyBPRGF0YVZpc2l0b3Ige1xyXG5cclxuICAvKipcclxuICAqIENvbnN0cnVjdCB3aXRoIHRoZSBuYW1lIG9mIHRoZSBleHByZXNzaW9uIHRoYXQgd2lsbCBob2xkIHRoZSBwYXJtc1xyXG4gICovXHJcbiAgY29uc3RydWN0b3IoIHBhcmFtZXRlcnMgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogVmlzaXQgYSBsaXRlcmFsIGV4cHJlc3Npb25cclxuICAqL1xyXG4gIHZpc2l0TGl0ZXJhbCggbm9kZSApIHtcclxuXHJcbiAgICAvLyBjYXB0dXJlIHRoZSBwYXJhbWV0ZXJcclxuICAgIHJldHVybiBjcmVhdGVQYXJhbWV0ZXIoIHRoaXMucGFyYW1ldGVycywgbm9kZS52YWx1ZSApO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

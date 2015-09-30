"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _odata = require("./odata");

var InitializingVisitor = (function (_ODataVisitor) {
  _inherits(InitializingVisitor, _ODataVisitor);

  function InitializingVisitor(parametersName) {
    _classCallCheck(this, InitializingVisitor);

    _get(Object.getPrototypeOf(InitializingVisitor.prototype), "constructor", this).call(this);
    this.parameters = [];
    this.parametersName = parametersName;
  }

  _createClass(InitializingVisitor, [{
    key: "visitLiteral",
    value: function visitLiteral(node) {

      debugger;

      var index = this.parameters.length;
      this.parameters.push(node.value);

      return {
        "type": "MemberExpression",
        "computed": true,
        "object": {
          "type": "Identifier",
          "name": this.parametersName
        },
        "property": {
          "type": "Literal",
          "value": index,
          "raw": index.toString()
        }
      };
    }
  }]);

  return InitializingVisitor;
})(_odata.ODataVisitor);

exports.InitializingVisitor = InitializingVisitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9leHByZXNzaW9ucy92aXNpdG9ycy9pbml0aWFsaXppbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7cUJBQTJCLFNBQVM7O0lBS3ZCLG1CQUFtQjtZQUFuQixtQkFBbUI7O0FBS25CLFdBTEEsbUJBQW1CLENBS2pCLGNBQWMsRUFBRzswQkFMbkIsbUJBQW1COztBQU01QiwrQkFOUyxtQkFBbUIsNkNBTXBCO0FBQ1IsUUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDckIsUUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7R0FDdEM7O2VBVFUsbUJBQW1COztXQWNsQixzQkFBRSxJQUFJLEVBQUc7O0FBRW5CLGVBQVM7O0FBR1QsVUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7QUFDckMsVUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUdqQyxhQUFPO0FBQ0wsY0FBTSxFQUFFLGtCQUFrQjtBQUMxQixrQkFBVSxFQUFFLElBQUk7QUFDaEIsZ0JBQVEsRUFBRTtBQUNSLGdCQUFNLEVBQUUsWUFBWTtBQUNwQixnQkFBTSxFQUFFLElBQUksQ0FBQyxjQUFjO1NBQzVCO0FBQ0Qsa0JBQVUsRUFBRTtBQUNWLGdCQUFNLEVBQUUsU0FBUztBQUNqQixpQkFBTyxFQUFFLEtBQUs7QUFDZCxlQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRTtTQUN4QjtPQUNGLENBQUM7S0FDSDs7O1NBcENVLG1CQUFtQiIsImZpbGUiOiJsaWIvZXhwcmVzc2lvbnMvdmlzaXRvcnMvaW5pdGlhbGl6aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPRGF0YVZpc2l0b3J9IGZyb20gXCIuL29kYXRhXCI7XHJcblxyXG4vKipcclxuKiBWaXNpdG9yIHRoYXQgaW5pdGlhbGl6ZXMgdGhlIG9kYXRhIHRyZWVcclxuKi9cclxuZXhwb3J0IGNsYXNzIEluaXRpYWxpemluZ1Zpc2l0b3IgZXh0ZW5kcyBPRGF0YVZpc2l0b3Ige1xyXG5cclxuICAvKipcclxuICAqIENvbnN0cnVjdCB3aXRoIHRoZSBuYW1lIG9mIHRoZSBleHByZXNzaW9uIHRoYXQgd2lsbCBob2xkIHRoZSBwYXJtc1xyXG4gICovXHJcbiAgY29uc3RydWN0b3IoIHBhcmFtZXRlcnNOYW1lICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMucGFyYW1ldGVycyA9IFtdO1xyXG4gICAgdGhpcy5wYXJhbWV0ZXJzTmFtZSA9IHBhcmFtZXRlcnNOYW1lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBWaXNpdCBhIGxpdGVyYWwgZXhwcmVzc2lvblxyXG4gICovXHJcbiAgdmlzaXRMaXRlcmFsKCBub2RlICkge1xyXG5cclxuICAgIGRlYnVnZ2VyO1xyXG5cclxuICAgIC8vIGNhcHR1cmUgdGhlIHBhcmFtZXRlclxyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnBhcmFtZXRlcnMubGVuZ3RoO1xyXG4gICAgdGhpcy5wYXJhbWV0ZXJzLnB1c2gobm9kZS52YWx1ZSk7XHJcblxyXG4gICAgLy8gcmVwbGFjZSB3aXRoIGEgbWVtYmVyIGV4cHJlc3Npb24gbm9kZVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgXCJ0eXBlXCI6IFwiTWVtYmVyRXhwcmVzc2lvblwiLFxyXG4gICAgICBcImNvbXB1dGVkXCI6IHRydWUsXHJcbiAgICAgIFwib2JqZWN0XCI6IHtcclxuICAgICAgICBcInR5cGVcIjogXCJJZGVudGlmaWVyXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IHRoaXMucGFyYW1ldGVyc05hbWVcclxuICAgICAgfSxcclxuICAgICAgXCJwcm9wZXJ0eVwiOiB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwiTGl0ZXJhbFwiLFxyXG4gICAgICAgIFwidmFsdWVcIjogaW5kZXgsXHJcbiAgICAgICAgXCJyYXdcIjogaW5kZXgudG9TdHJpbmcoKVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

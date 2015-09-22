"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _expressionVisitor = require("./expressionVisitor");

var ParameterizingVisitor = (function (_ExpressionVisitor) {
  _inherits(ParameterizingVisitor, _ExpressionVisitor);

  function ParameterizingVisitor() {
    var parametersName = arguments.length <= 0 || arguments[0] === undefined ? "parms" : arguments[0];

    _classCallCheck(this, ParameterizingVisitor);

    _get(Object.getPrototypeOf(ParameterizingVisitor.prototype), "constructor", this).call(this);
    this.parameters = [];
    this.parametersName = parametersName;
  }

  _createClass(ParameterizingVisitor, [{
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

  return ParameterizingVisitor;
})(_expressionVisitor.ExpressionVisitor);

exports.ParameterizingVisitor = ParameterizingVisitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cHJlc3Npb25zL3BhcmFtZXRlcml6aW5nVmlzaXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztpQ0FBZ0MscUJBQXFCOztJQUV4QyxxQkFBcUI7WUFBckIscUJBQXFCOztBQVVyQixXQVZBLHFCQUFxQixHQVVRO1FBQTNCLGNBQWMseURBQUcsT0FBTzs7MEJBVjFCLHFCQUFxQjs7QUFXOUIsK0JBWFMscUJBQXFCLDZDQVd0QjtTQU5WLFVBQVUsR0FBRyxFQUFFO0FBT2IsUUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7R0FDdEM7O2VBYlUscUJBQXFCOztXQWtCcEIsc0JBQUUsSUFBSSxFQUFHOztBQUVuQixlQUFTOztBQUdULFVBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO0FBQ3JDLFVBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFHakMsYUFBTztBQUNMLGNBQU0sRUFBRSxrQkFBa0I7QUFDMUIsa0JBQVUsRUFBRSxJQUFJO0FBQ2hCLGdCQUFRLEVBQUU7QUFDUixnQkFBTSxFQUFFLFlBQVk7QUFDcEIsZ0JBQU0sRUFBRSxJQUFJLENBQUMsY0FBYztTQUM1QjtBQUNELGtCQUFVLEVBQUU7QUFDVixnQkFBTSxFQUFFLFNBQVM7QUFDakIsaUJBQU8sRUFBRSxLQUFLO0FBQ2QsZUFBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUU7U0FDeEI7T0FDRixDQUFDO0tBQ0g7OztTQXhDVSxxQkFBcUIiLCJmaWxlIjoiZXhwcmVzc2lvbnMvcGFyYW1ldGVyaXppbmdWaXNpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFeHByZXNzaW9uVmlzaXRvcn0gZnJvbSBcIi4vZXhwcmVzc2lvblZpc2l0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJpemluZ1Zpc2l0b3IgZXh0ZW5kcyBFeHByZXNzaW9uVmlzaXRvciB7XHJcblxyXG4gIC8qKlxyXG4gICogVGhlIHBhcmFtZXRlcnMgdGhhdCBhcmUgZGV0ZWN0ZWRcclxuICAqL1xyXG4gIHBhcmFtZXRlcnMgPSBbXVxyXG5cclxuICAvKipcclxuICAqIENvbnN0cnVjdCB3aXRoIHRoZSBuYW1lIG9mIHRoZSBleHByZXNzaW9uIHRoYXQgd2lsbCBob2xkIHRoZSBwYXJtc1xyXG4gICovXHJcbiAgY29uc3RydWN0b3IoIHBhcmFtZXRlcnNOYW1lID0gXCJwYXJtc1wiICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMucGFyYW1ldGVyc05hbWUgPSBwYXJhbWV0ZXJzTmFtZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogVmlzaXQgYSBsaXRlcmFsIGV4cHJlc3Npb25cclxuICAqL1xyXG4gIHZpc2l0TGl0ZXJhbCggbm9kZSApIHtcclxuXHJcbiAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICAvLyBjYXB0dXJlIHRoZSBwYXJhbWV0ZXJcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wYXJhbWV0ZXJzLmxlbmd0aDtcclxuICAgIHRoaXMucGFyYW1ldGVycy5wdXNoKG5vZGUudmFsdWUpO1xyXG5cclxuICAgIC8vIHJlcGxhY2Ugd2l0aCBhIG1lbWJlciBleHByZXNzaW9uIG5vZGVcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFwidHlwZVwiOiBcIk1lbWJlckV4cHJlc3Npb25cIixcclxuICAgICAgXCJjb21wdXRlZFwiOiB0cnVlLFxyXG4gICAgICBcIm9iamVjdFwiOiB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwiSWRlbnRpZmllclwiLFxyXG4gICAgICAgIFwibmFtZVwiOiB0aGlzLnBhcmFtZXRlcnNOYW1lXHJcbiAgICAgIH0sXHJcbiAgICAgIFwicHJvcGVydHlcIjoge1xyXG4gICAgICAgIFwidHlwZVwiOiBcIkxpdGVyYWxcIixcclxuICAgICAgICBcInZhbHVlXCI6IGluZGV4LFxyXG4gICAgICAgIFwicmF3XCI6IGluZGV4LnRvU3RyaW5nKClcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _aureliaDependencyInjection = require("aurelia-dependency-injection");

var _base = require("./base");

var TopParameter = (function (_Parameter) {
  _inherits(TopParameter, _Parameter);

  function TopParameter(options) {
    _classCallCheck(this, _TopParameter);

    _get(Object.getPrototypeOf(_TopParameter.prototype), "constructor", this).call(this, options, "$top");
  }

  var _TopParameter = TopParameter;
  TopParameter = (0, _aureliaDependencyInjection.inject)("options")(TopParameter) || TopParameter;
  return TopParameter;
})(_base.Parameter);

exports.TopParameter = TopParameter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9wYXJhbWV0ZXJzL3RvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7MENBQXFCLDhCQUE4Qjs7b0JBQzNCLFFBQVE7O0lBTW5CLFlBQVk7WUFBWixZQUFZOztBQUtaLFdBTEEsWUFBWSxDQUtWLE9BQU8sRUFBRzs7O0FBQ3JCLHlGQUFPLE9BQU8sRUFBRSxNQUFNLEVBQUU7R0FDekI7O3NCQVBVLFlBQVk7QUFBWixjQUFZLEdBRHhCLHdDQUFPLFNBQVMsQ0FBQyxDQUNMLFlBQVksS0FBWixZQUFZO1NBQVosWUFBWSIsImZpbGUiOiJsaWIvcGFyYW1ldGVycy90b3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuaW1wb3J0IHtQYXJhbWV0ZXJ9IGZyb20gXCIuL2Jhc2VcIjtcclxuXHJcbi8qKlxyXG4qIE1vZGVsIGZvciB0aGQgJHRvcCBwYXJhbWV0ZXJcclxuKi9cclxuQGluamVjdChcIm9wdGlvbnNcIilcclxuZXhwb3J0IGNsYXNzIFRvcFBhcmFtZXRlciBleHRlbmRzIFBhcmFtZXRlciB7XHJcblxyXG4gIC8qKlxyXG4gICogQ29uc3RydWN0aW9uXHJcbiAgKi9cclxuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApIHtcclxuICAgIHN1cGVyKCBvcHRpb25zLCBcIiR0b3BcIik7XHJcbiAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

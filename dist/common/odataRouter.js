"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _koaRouter = require("koa-router");

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var ODataRouter = (function (_Router) {
  _inherits(ODataRouter, _Router);

  function ODataRouter(options) {
    _classCallCheck(this, ODataRouter);

    _get(Object.getPrototypeOf(ODataRouter.prototype), "constructor", this).call(this, options);

    this.get("/*target", function* () {
      this.body = "Returning data for " + this.params.target;
    });
  }

  return ODataRouter;
})(_koaRouter2["default"]);

exports.ODataRouter = ODataRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9kYXRhUm91dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O3lCQUFtQixZQUFZOzs7O0lBS2xCLFdBQVc7WUFBWCxXQUFXOztBQUVYLFdBRkEsV0FBVyxDQUVULE9BQU8sRUFBRzswQkFGWixXQUFXOztBQUtwQiwrQkFMUyxXQUFXLDZDQUtkLE9BQU8sRUFBRTs7QUFHZixRQUFJLENBQUMsR0FBRyxDQUFFLFVBQVUsRUFBRSxhQUFZO0FBQ2hDLFVBQUksQ0FBQyxJQUFJLDJCQUF5QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQUFBRSxDQUFDO0tBQ3hELENBQUMsQ0FBQztHQUVKOztTQVpVLFdBQVciLCJmaWxlIjoib2RhdGFSb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gXCJrb2Etcm91dGVyXCI7XG5cbi8qKlxuKiBUaGUgT0RhdGEgcm91dGVyXG4qL1xuZXhwb3J0IGNsYXNzIE9EYXRhUm91dGVyIGV4dGVuZHMgUm91dGVyIHtcblxuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApIHtcblxuICAgIC8vIGJhc2UgY2xhc3MgY29uc3RydWN0b3JcbiAgICBzdXBlcihvcHRpb25zKTtcblxuICAgIC8vIGhhbmRsZSBnZXQgcmVxdWVzdHNcbiAgICB0aGlzLmdldCggXCIvKnRhcmdldFwiLCBmdW5jdGlvbiooKSB7XG4gICAgICB0aGlzLmJvZHkgPSBgUmV0dXJuaW5nIGRhdGEgZm9yICR7dGhpcy5wYXJhbXMudGFyZ2V0fWA7XG4gICAgfSk7XG5cbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
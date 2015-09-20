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

    this.get("/:collectionName", function* () {
      this.body = "Hello OData 2";
    });
  }

  return ODataRouter;
})(_koaRouter2["default"]);

exports.ODataRouter = ODataRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9kYXRhUm91dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O3lCQUFtQixZQUFZOzs7O0lBS2xCLFdBQVc7WUFBWCxXQUFXOztBQUVYLFdBRkEsV0FBVyxDQUVULE9BQU8sRUFBRzswQkFGWixXQUFXOztBQUtwQiwrQkFMUyxXQUFXLDZDQUtkLE9BQU8sRUFBRTs7QUFHZixRQUFJLENBQUMsR0FBRyxDQUFFLGtCQUFrQixFQUFFLGFBQVk7QUFDeEMsVUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7S0FDN0IsQ0FBQyxDQUFDO0dBRUo7O1NBWlUsV0FBVyIsImZpbGUiOiJvZGF0YVJvdXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcImtvYS1yb3V0ZXJcIjtcblxuLyoqXG4qIFRoZSBPRGF0YSByb3V0ZXJcbiovXG5leHBvcnQgY2xhc3MgT0RhdGFSb3V0ZXIgZXh0ZW5kcyBSb3V0ZXIge1xuXG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zICkge1xuXG4gICAgLy8gYmFzZSBjbGFzcyBjb25zdHJ1Y3RvclxuICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgLy8gbWFwIGNvbGxlY3Rpb24gcm91dGVzIHdpdGhvdXQga2V5c1xuICAgIHRoaXMuZ2V0KCBcIi86Y29sbGVjdGlvbk5hbWVcIiwgZnVuY3Rpb24qKCkge1xuICAgICAgdGhpcy5ib2R5ID0gXCJIZWxsbyBPRGF0YSAyXCI7XG4gICAgfSk7XG5cbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
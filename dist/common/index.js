"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.odata = odata;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

require("GalenWarren/node-odata-core");

function odata(options) {

  var app = (0, _koa2["default"])();

  app.use(function* () {
    this.body = this.body = "request for path=" + this.request.path + " and querystring=" + this.request.querystring;
  });

  return app;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OzttQkFBZ0IsS0FBSzs7OztRQUNOLDZCQUE2Qjs7QUFFckMsU0FBUyxLQUFLLENBQUUsT0FBTyxFQUFHOztBQUUvQixNQUFNLEdBQUcsR0FBRyx1QkFBSyxDQUFDOztBQUdsQixLQUFHLENBQUMsR0FBRyxDQUFFLGFBQWE7QUFDcEIsUUFBSSxDQUFDLElBQUksR0FFVCxJQUFJLENBQUMsSUFBSSx5QkFBdUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLHlCQUFvQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQUFBRSxDQUFDO0dBQ2pHLENBQUMsQ0FBQzs7QUFFSCxTQUFPLEdBQUcsQ0FBQztDQUVaIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGtvYSBmcm9tIFwia29hXCI7XG5pbXBvcnQge30gZnJvbSBcIkdhbGVuV2FycmVuL25vZGUtb2RhdGEtY29yZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb2RhdGEoIG9wdGlvbnMgKSB7XG5cbiAgY29uc3QgYXBwID0ga29hKCk7XG5cbiAgLy8gaGFuZGxlIHJlcXVlc3RzXG4gIGFwcC51c2UoIGZ1bmN0aW9uICooKSB7XG4gICAgdGhpcy5ib2R5ID1cblxuICAgIHRoaXMuYm9keSA9IGByZXF1ZXN0IGZvciBwYXRoPSR7dGhpcy5yZXF1ZXN0LnBhdGh9IGFuZCBxdWVyeXN0cmluZz0ke3RoaXMucmVxdWVzdC5xdWVyeXN0cmluZ31gO1xuICB9KTtcblxuICByZXR1cm4gYXBwO1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
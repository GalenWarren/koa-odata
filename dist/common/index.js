"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.odata = odata;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

function odata(options) {

  var app = (0, _koa2["default"])();

  app.use(function* () {
    this.body = "request for path=" + this.request.path + " and querystring=" + this.request.querystring;
  });

  return app;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OzttQkFBZ0IsS0FBSzs7OztBQUVkLFNBQVMsS0FBSyxDQUFFLE9BQU8sRUFBRzs7QUFFL0IsTUFBTSxHQUFHLEdBQUcsdUJBQUssQ0FBQzs7QUFHbEIsS0FBRyxDQUFDLEdBQUcsQ0FBRSxhQUFhO0FBQ3BCLFFBQUksQ0FBQyxJQUFJLHlCQUF1QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUkseUJBQW9CLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxBQUFFLENBQUM7R0FDakcsQ0FBQyxDQUFDOztBQUVILFNBQU8sR0FBRyxDQUFDO0NBRVoiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQga29hIGZyb20gXCJrb2FcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9kYXRhKCBvcHRpb25zICkge1xuXG4gIGNvbnN0IGFwcCA9IGtvYSgpO1xuXG4gIC8vIGhhbmRsZSByZXF1ZXN0c1xuICBhcHAudXNlKCBmdW5jdGlvbiAqKCkge1xuICAgIHRoaXMuYm9keSA9IGByZXF1ZXN0IGZvciBwYXRoPSR7dGhpcy5yZXF1ZXN0LnBhdGh9IGFuZCBxdWVyeXN0cmluZz0ke3RoaXMucmVxdWVzdC5xdWVyeXN0cmluZ31gO1xuICB9KTtcblxuICByZXR1cm4gYXBwO1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.odata = odata;

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj["default"]; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _pipelineIndex = require("./pipeline/index");

var _metadataIndex = require("./metadata/index");

_defaults(exports, _interopExportWildcard(_metadataIndex, _defaults));

var _providersIndex = require("./providers/index");

_defaults(exports, _interopExportWildcard(_providersIndex, _defaults));

function odata(options) {

  debugger;

  var app = (0, _koa2["default"])();

  app.use((0, _pipelineIndex.init)(options));
  app.use((0, _pipelineIndex.parse)(options));

  return app;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O21CQUFnQixLQUFLOzs7OzZCQUNJLGtCQUFrQjs7NkJBRTdCLGtCQUFrQjs7Ozs4QkFDbEIsbUJBQW1COzs7O0FBTTFCLFNBQVMsS0FBSyxDQUFFLE9BQU8sRUFBRzs7QUFFL0IsV0FBUzs7QUFFVCxNQUFNLEdBQUcsR0FBRyx1QkFBSyxDQUFDOztBQUdsQixLQUFHLENBQUMsR0FBRyxDQUFDLHlCQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDdkIsS0FBRyxDQUFDLEdBQUcsQ0FBQywwQkFBTSxPQUFPLENBQUMsQ0FBQyxDQUFDOztBQUd4QixTQUFPLEdBQUcsQ0FBQztDQUNaIiwiZmlsZSI6ImxpYi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBrb2EgZnJvbSBcImtvYVwiO1xuaW1wb3J0IHtpbml0LHBhcnNlfSBmcm9tIFwiLi9waXBlbGluZS9pbmRleFwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi9tZXRhZGF0YS9pbmRleFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vcHJvdmlkZXJzL2luZGV4XCI7XG5cbi8qKlxuKiBUaGUgbWFpbiBvZGF0YSBmdW5jdGlvbiwgcmV0dXJucyBhIGtvYSBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCBkaXJlY3RseVxuKiBvciBtb3VudGVkIGludG8gYW5vdGhlciBhcHBsaWNhdGlvblxuKi9cbmV4cG9ydCBmdW5jdGlvbiBvZGF0YSggb3B0aW9ucyApIHtcblxuICBkZWJ1Z2dlcjtcblxuICBjb25zdCBhcHAgPSBrb2EoKTtcblxuICAvLyBidWlsZCB1cCB0aGUgcGlwZWxpbmVcbiAgYXBwLnVzZShpbml0KG9wdGlvbnMpKTtcbiAgYXBwLnVzZShwYXJzZShvcHRpb25zKSk7XG5cbiAgLy8gZG9uZVxuICByZXR1cm4gYXBwO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
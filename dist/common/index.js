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

  var app = (0, _koa2["default"])();

  app.use((0, _pipelineIndex.init)(options));
  app.use((0, _pipelineIndex.parse)(options));

  return app;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7bUJBQWdCLEtBQUs7Ozs7NkJBQ0ksa0JBQWtCOzs2QkFFN0Isa0JBQWtCOzs7OzhCQUNsQixtQkFBbUI7Ozs7QUFNMUIsU0FBUyxLQUFLLENBQUUsT0FBTyxFQUFHOztBQUUvQixNQUFNLEdBQUcsR0FBRyx1QkFBSyxDQUFDOztBQUdsQixLQUFHLENBQUMsR0FBRyxDQUFDLHlCQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDdkIsS0FBRyxDQUFDLEdBQUcsQ0FBQywwQkFBTSxPQUFPLENBQUMsQ0FBQyxDQUFDOztBQUd4QixTQUFPLEdBQUcsQ0FBQztDQUNaIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGtvYSBmcm9tIFwia29hXCI7XG5pbXBvcnQge2luaXQscGFyc2V9IGZyb20gXCIuL3BpcGVsaW5lL2luZGV4XCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL21ldGFkYXRhL2luZGV4XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9wcm92aWRlcnMvaW5kZXhcIjtcblxuLyoqXG4qIFRoZSBtYWluIG9kYXRhIGZ1bmN0aW9uLCByZXR1cm5zIGEga29hIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIGRpcmVjdGx5XG4qIG9yIG1vdW50ZWQgaW50byBhbm90aGVyIGFwcGxpY2F0aW9uXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIG9kYXRhKCBvcHRpb25zICkge1xuXG4gIGNvbnN0IGFwcCA9IGtvYSgpO1xuXG4gIC8vIGJ1aWxkIHVwIHRoZSBwaXBlbGluZVxuICBhcHAudXNlKGluaXQob3B0aW9ucykpO1xuICBhcHAudXNlKHBhcnNlKG9wdGlvbnMpKTtcblxuICAvLyBkb25lXG4gIHJldHVybiBhcHA7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
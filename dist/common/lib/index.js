"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.odata = odata;

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj["default"]; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _aureliaDependencyInjection = require("aurelia-dependency-injection");

var _pipelineIndex = require("./pipeline/index");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _lruCache = require("lru-cache");

var _lruCache2 = _interopRequireDefault(_lruCache);

var _metadataIndex = require("./metadata/index");

_defaults(exports, _interopExportWildcard(_metadataIndex, _defaults));

var _providersIndex = require("./providers/index");

_defaults(exports, _interopExportWildcard(_providersIndex, _defaults));

function odata(options) {
  var actualOptions = _lodash2["default"].defaults({}, options, {});

  var container = new _aureliaDependencyInjection.Container();
  container.registerInstance("options", actualOptions);

  container.registerInstance(_lruCache2["default"], new _lruCache2["default"]());

  return container.get(_pipelineIndex.Pipeline).createApp();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzBDQUF3Qiw4QkFBOEI7OzZCQUMvQixrQkFBa0I7O3NCQUMzQixRQUFROzs7O3dCQUNKLFdBQVc7Ozs7NkJBR2Ysa0JBQWtCOzs7OzhCQUNsQixtQkFBbUI7Ozs7QUFNMUIsU0FBUyxLQUFLLENBQUUsT0FBTyxFQUFHO0FBRy9CLE1BQU0sYUFBYSxHQUFHLG9CQUFFLFFBQVEsQ0FBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQzlDLENBQUMsQ0FBQzs7QUFHSCxNQUFNLFNBQVMsR0FBRywyQ0FBZSxDQUFDO0FBQ2xDLFdBQVMsQ0FBQyxnQkFBZ0IsQ0FBRSxTQUFTLEVBQUUsYUFBYSxDQUFFLENBQUM7O0FBR3ZELFdBQVMsQ0FBQyxnQkFBZ0Isd0JBQVMsMkJBQVcsQ0FBQyxDQUFDOztBQUdoRCxTQUFPLFNBQVMsQ0FBQyxHQUFHLHlCQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7Q0FDNUMiLCJmaWxlIjoibGliL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250YWluZXJ9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XG5pbXBvcnQge1BpcGVsaW5lfSBmcm9tIFwiLi9waXBlbGluZS9pbmRleFwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IENhY2hlIGZyb20gXCJscnUtY2FjaGVcIjtcblxuLy8gcmUtZXhwb3J0IHN0dWZmIHVzZWQgYnkgY29uc3VtZXJzXG5leHBvcnQgKiBmcm9tIFwiLi9tZXRhZGF0YS9pbmRleFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vcHJvdmlkZXJzL2luZGV4XCI7XG5cbi8qKlxuKiBUaGUgbWFpbiBvZGF0YSBmdW5jdGlvbiwgcmV0dXJucyBhIGtvYSBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCBkaXJlY3RseVxuKiBvciBtb3VudGVkIGludG8gYW5vdGhlciBhcHBsaWNhdGlvblxuKi9cbmV4cG9ydCBmdW5jdGlvbiBvZGF0YSggb3B0aW9ucyApIHtcblxuICAvLyBzZXQgZGVmYXVsdHNcbiAgY29uc3QgYWN0dWFsT3B0aW9ucyA9IF8uZGVmYXVsdHMoIHt9LCBvcHRpb25zLCB7XG4gIH0pO1xuXG4gIC8vIGNyZWF0ZSB0aGUgY29udGFpbmVyIGFuZCByZWdpc3RlciBvcHRpb25zXG4gIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcbiAgY29udGFpbmVyLnJlZ2lzdGVySW5zdGFuY2UoIFwib3B0aW9uc1wiLCBhY3R1YWxPcHRpb25zICk7XG5cbiAgLy8gcmVnaXN0ZXIgdGhlIGNhY2hlIG9iamVjdCAtLSBrZ3cgY29uZmlndXJlIVxuICBjb250YWluZXIucmVnaXN0ZXJJbnN0YW5jZSggQ2FjaGUsIG5ldyBDYWNoZSgpKTtcblxuICAvLyByZXNvbHZlIHRoZSBwaXBlbGluZVxuICByZXR1cm4gY29udGFpbmVyLmdldChQaXBlbGluZSkuY3JlYXRlQXBwKCk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

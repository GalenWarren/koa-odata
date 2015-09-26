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

var _metadataIndex = require("./metadata/index");

_defaults(exports, _interopExportWildcard(_metadataIndex, _defaults));

var _providersIndex = require("./providers/index");

_defaults(exports, _interopExportWildcard(_providersIndex, _defaults));

function odata(options) {
  var actualOptions = _lodash2["default"].defaults({}, options, {});

  var container = new _aureliaDependencyInjection.Container();
  container.registerInstance("options", actualOptions);
  return container.get(_pipelineIndex.Pipeline).createApp();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzBDQUF3Qiw4QkFBOEI7OzZCQUM5QixrQkFBa0I7O3NCQUM1QixRQUFROzs7OzZCQUdSLGtCQUFrQjs7Ozs4QkFDbEIsbUJBQW1COzs7O0FBTTFCLFNBQVMsS0FBSyxDQUFFLE9BQU8sRUFBRztBQUcvQixNQUFNLGFBQWEsR0FBRyxvQkFBRSxRQUFRLENBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUU5QyxDQUFDLENBQUM7O0FBR0gsTUFBTSxTQUFTLEdBQUcsMkNBQWUsQ0FBQztBQUNsQyxXQUFTLENBQUMsZ0JBQWdCLENBQUUsU0FBUyxFQUFFLGFBQWEsQ0FBRSxDQUFDO0FBQ3ZELFNBQU8sU0FBUyxDQUFDLEdBQUcseUJBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztDQUM1QyIsImZpbGUiOiJsaWIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcbmltcG9ydCB7UGlwZWxpbmV9IGZyb20gIFwiLi9waXBlbGluZS9pbmRleFwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG4vLyByZS1leHBvcnQgc3R1ZmYgdXNlZCBieSBjb25zdW1lcnNcbmV4cG9ydCAqIGZyb20gXCIuL21ldGFkYXRhL2luZGV4XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9wcm92aWRlcnMvaW5kZXhcIjtcblxuLyoqXG4qIFRoZSBtYWluIG9kYXRhIGZ1bmN0aW9uLCByZXR1cm5zIGEga29hIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIGRpcmVjdGx5XG4qIG9yIG1vdW50ZWQgaW50byBhbm90aGVyIGFwcGxpY2F0aW9uXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIG9kYXRhKCBvcHRpb25zICkge1xuXG4gIC8vIHNldCBkZWZhdWx0c1xuICBjb25zdCBhY3R1YWxPcHRpb25zID0gXy5kZWZhdWx0cygge30sIG9wdGlvbnMsIHtcblxuICB9KTtcblxuICAvLyByZXNvbHZlIHRoZSBwaXBlbGluZSBvYmplY3QgZnJvbSB0aGUgY29udGFpbmVyIGFuZCByZXR1cm4gdGhlIGtvYSBhcHBcbiAgY29uc3QgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuICBjb250YWluZXIucmVnaXN0ZXJJbnN0YW5jZSggXCJvcHRpb25zXCIsIGFjdHVhbE9wdGlvbnMgKTtcbiAgcmV0dXJuIGNvbnRhaW5lci5nZXQoUGlwZWxpbmUpLmNyZWF0ZUFwcCgpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
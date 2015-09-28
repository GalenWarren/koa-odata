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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzBDQUF3Qiw4QkFBOEI7OzZCQUMvQixrQkFBa0I7O3NCQUMzQixRQUFROzs7OzZCQUdSLGtCQUFrQjs7Ozs4QkFDbEIsbUJBQW1COzs7O0FBTTFCLFNBQVMsS0FBSyxDQUFFLE9BQU8sRUFBRztBQUcvQixNQUFNLGFBQWEsR0FBRyxvQkFBRSxRQUFRLENBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUU5QyxDQUFDLENBQUM7O0FBR0gsTUFBTSxTQUFTLEdBQUcsMkNBQWUsQ0FBQztBQUNsQyxXQUFTLENBQUMsZ0JBQWdCLENBQUUsU0FBUyxFQUFFLGFBQWEsQ0FBRSxDQUFDO0FBQ3ZELFNBQU8sU0FBUyxDQUFDLEdBQUcseUJBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztDQUM1QyIsImZpbGUiOiJsaWIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcbmltcG9ydCB7UGlwZWxpbmV9IGZyb20gXCIuL3BpcGVsaW5lL2luZGV4XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbi8vIHJlLWV4cG9ydCBzdHVmZiB1c2VkIGJ5IGNvbnN1bWVyc1xuZXhwb3J0ICogZnJvbSBcIi4vbWV0YWRhdGEvaW5kZXhcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Byb3ZpZGVycy9pbmRleFwiO1xuXG4vKipcbiogVGhlIG1haW4gb2RhdGEgZnVuY3Rpb24sIHJldHVybnMgYSBrb2Egb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgZGlyZWN0bHlcbiogb3IgbW91bnRlZCBpbnRvIGFub3RoZXIgYXBwbGljYXRpb25cbiovXG5leHBvcnQgZnVuY3Rpb24gb2RhdGEoIG9wdGlvbnMgKSB7XG5cbiAgLy8gc2V0IGRlZmF1bHRzXG4gIGNvbnN0IGFjdHVhbE9wdGlvbnMgPSBfLmRlZmF1bHRzKCB7fSwgb3B0aW9ucywge1xuXG4gIH0pO1xuXG4gIC8vIHJlc29sdmUgdGhlIHBpcGVsaW5lIG9iamVjdCBmcm9tIHRoZSBjb250YWluZXIgYW5kIHJldHVybiB0aGUga29hIGFwcFxuICBjb25zdCBjb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XG4gIGNvbnRhaW5lci5yZWdpc3Rlckluc3RhbmNlKCBcIm9wdGlvbnNcIiwgYWN0dWFsT3B0aW9ucyApO1xuICByZXR1cm4gY29udGFpbmVyLmdldChQaXBlbGluZSkuY3JlYXRlQXBwKCk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

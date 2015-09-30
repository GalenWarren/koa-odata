"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sourceRequire = sourceRequire;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _aureliaDependencyInjection = require("aurelia-dependency-injection");

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function sourceRequire(moduleName) {
  return require(_path2["default"].join(__dirname, "../../../dist/common/", moduleName));
}

var container = new _aureliaDependencyInjection.Container();
exports.container = container;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxpdGllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7MENBQXdCLDhCQUE4Qjs7b0JBQ3JDLE1BQU07Ozs7c0JBQ1QsUUFBUTs7OztBQUtmLFNBQVMsYUFBYSxDQUFFLFVBQVUsRUFBRztBQUMxQyxTQUFPLE9BQU8sQ0FBRSxrQkFBSyxJQUFJLENBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLFVBQVUsQ0FBRSxDQUFDLENBQUM7Q0FDOUU7O0FBS00sSUFBTSxTQUFTLEdBQUcsMkNBQWUsQ0FBQyIsImZpbGUiOiJ1dGlsaXRpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbi8qKlxuKiBIZWxwZXIgdG8gbGFvZCBzb3VyY2UgbW9kdWxlc1xuKi9cbmV4cG9ydCBmdW5jdGlvbiBzb3VyY2VSZXF1aXJlKCBtb2R1bGVOYW1lICkge1xuICByZXR1cm4gcmVxdWlyZSggcGF0aC5qb2luKCBfX2Rpcm5hbWUsIFwiLi4vLi4vLi4vZGlzdC9jb21tb24vXCIsIG1vZHVsZU5hbWUgKSk7XG59XG5cbi8qKlxuKiBBIHNoYXJlZCBjb250YWluZXIgZm9yIHRlc3RzXG4qL1xuZXhwb3J0IGNvbnN0IGNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

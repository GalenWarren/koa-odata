"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _odataParser = require("odata-parser");

var _odataParser2 = _interopRequireDefault(_odataParser);

function parse(options) {

  return function* () {
    this.body = this.request.path;
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9waXBlbGluZS9wYXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7MkJBQW1CLGNBQWM7Ozs7QUFNMUIsU0FBUyxLQUFLLENBQUUsT0FBTyxFQUFHOztBQUUvQixTQUFPLGFBQWE7QUFHbEIsUUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztHQUUvQixDQUFDO0NBRUgiLCJmaWxlIjoibGliL3BpcGVsaW5lL3BhcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhcnNlciBmcm9tIFwib2RhdGEtcGFyc2VyXCI7XHJcblxyXG4vKipcclxuKiBQYXJzZSBjb21wb25lbnRcclxuKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZSggb3B0aW9ucyApIHtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uICooKSB7XHJcblxyXG4vLyAgICB0aGlzLmJvZHkgPSBKU09OLnN0cmluZ2lmeShwYXJzZXIucGFyc2UodGhpcy5yZXF1ZXN0LnF1ZXJ5c3RyaW5nKSk7XHJcbiAgICB0aGlzLmJvZHkgPSB0aGlzLnJlcXVlc3QucGF0aDtcclxuXHJcbiAgfTtcclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
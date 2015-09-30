"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _aureliaDependencyInjection = require("aurelia-dependency-injection");

var _entities = require("./entities");

var _metadataIndex = require("../metadata/index");

var _utilities = require("./utilities");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var rootSegmentClasses = [_entities.EntitiesSegment];

var Segments = (function () {
  function Segments() {
    _classCallCheck(this, Segments);
  }

  _createClass(Segments, [{
    key: "parse",
    value: function parse(path, modelMetadata) {

      debugger;

      var pathSegments = _lodash2["default"].filter(path.split("/"));

      return (0, _lodash2["default"])(pathSegments).transform(function (segments, pathSegment) {
        var segment = segments.length ? _lodash2["default"].last(segments).constructor.parse(pathSegment, segments, modelMetadata) : (0, _utilities.parsePathSegment)(pathSegment, rootSegmentClasses, segments, modelMetadata);

        if (!segment) {
          throw new Error("Unrecognized segment " + pathSegment);
        }

        segments.push(segment);
      }, []).value();
    }
  }]);

  return Segments;
})();

exports.Segments = Segments;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9zZWdtZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7MENBQStCLDhCQUE4Qjs7d0JBQy9CLFlBQVk7OzZCQUNkLG1CQUFtQjs7eUJBQ2hCLGFBQWE7O3NCQUM5QixRQUFROzs7O0FBR3RCLElBQU0sa0JBQWtCLEdBQUcsMkJBRTFCLENBQUM7O0lBS1csUUFBUTtXQUFSLFFBQVE7MEJBQVIsUUFBUTs7O2VBQVIsUUFBUTs7V0FLZCxlQUFFLElBQUksRUFBRSxhQUFhLEVBQUc7O0FBRTNCLGVBQVM7O0FBR1QsVUFBTSxZQUFZLEdBQUcsb0JBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFHL0MsYUFBTyx5QkFBRSxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUUsVUFBQyxRQUFRLEVBQUUsV0FBVyxFQUFNO0FBRzVELFlBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBRzdCLG9CQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsYUFBYSxDQUFFLEdBRzFFLGlDQUFrQixXQUFXLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDOztBQUc5RSxZQUFJLENBQUMsT0FBTyxFQUFFO0FBQ1osZ0JBQU0sSUFBSSxLQUFLLDJCQUEwQixXQUFXLENBQUcsQ0FBQztTQUN6RDs7QUFHRCxnQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztPQUV4QixFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBRWhCOzs7U0FsQ1UsUUFBUSIsImZpbGUiOiJsaWIvc2VnbWVudHMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NpbmdsZXRvbixpbmplY3R9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XG5pbXBvcnQge0VudGl0aWVzU2VnbWVudH0gZnJvbSBcIi4vZW50aXRpZXNcIjtcbmltcG9ydCB7TW9kZWxNZXRhZGF0YX0gZnJvbSBcIi4uL21ldGFkYXRhL2luZGV4XCI7XG5pbXBvcnQge3BhcnNlUGF0aFNlZ21lbnR9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG4vLyB0cmFjayB0aGUgc2VnbWVudHMgdGhhdCBjYW4gYmUgYXQgdGhlIHJvb3RcbmNvbnN0IHJvb3RTZWdtZW50Q2xhc3NlcyA9IFtcbiAgRW50aXRpZXNTZWdtZW50XG5dO1xuXG4vKipcbiogVGhlIHNlZ21lbnRzIGNsYXNzXG4qL1xuZXhwb3J0IGNsYXNzIFNlZ21lbnRzIHtcblxuICAvKipcbiAgKiBQYXJzZSBhIHBhdGggc3RyaW5nIGFuZCByZXR1cm4gYW4gYXJyYXkgb2Ygc2VnbWVudCBvYmplY3RzXG4gICovXG4gIHBhcnNlKCBwYXRoLCBtb2RlbE1ldGFkYXRhICkge1xuXG4gICAgZGVidWdnZXI7XG5cbiAgICAvLyBicmVhayB0aGUgcGF0aCBhcGFydCBpbnRvIHNlZ21lbnRzLCBzZXBhcmF0ZWQgYnkgL1xuICAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IF8uZmlsdGVyKHBhdGguc3BsaXQoXCIvXCIpKTtcblxuICAgIC8vIHBhcnNlIGFuZCByZXR1cm4gYW4gYXJyYXkgb2Ygc2VnbWVudCBvYmplY3RzXG4gICAgcmV0dXJuIF8ocGF0aFNlZ21lbnRzKS50cmFuc2Zvcm0oIChzZWdtZW50cywgcGF0aFNlZ21lbnQgKSA9PiB7XG5cbiAgICAgIC8vIHRyeSB0byBwYXJzZSB0aGUgcGF0aCBzZWdtZW50IGludG8gYSBzZWdtZW50IG9iamVjdFxuICAgICAgY29uc3Qgc2VnbWVudCA9IHNlZ21lbnRzLmxlbmd0aCA/XG5cbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBleGlzdGluZyBzZWdtZW50cywgY2FsbCBsYXN0IG9uZSBpbiBjaGFpbiB0byBwcm9jZXNzXG4gICAgICAgIF8ubGFzdChzZWdtZW50cykuY29uc3RydWN0b3IucGFyc2UoIHBhdGhTZWdtZW50LCBzZWdtZW50cywgbW9kZWxNZXRhZGF0YSApIDpcblxuICAgICAgICAvLyBpZiBubyBleGlzdGluZyBzZWdtZW50cywgdGhlbiBqdXN0IHByb2Nlc3Mgd2l0aCB0aGUgdG9wLWxldmVsIG9uZXNcbiAgICAgICAgcGFyc2VQYXRoU2VnbWVudCggcGF0aFNlZ21lbnQsIHJvb3RTZWdtZW50Q2xhc3Nlcywgc2VnbWVudHMsIG1vZGVsTWV0YWRhdGEpO1xuXG4gICAgICAvLyB0aHJvdyBlcnJvciBpZiB0aGUgc2VnbWVudCBpcyB1bnJlY29nbml6ZWRcbiAgICAgIGlmICghc2VnbWVudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIGBVbnJlY29nbml6ZWQgc2VnbWVudCAke3BhdGhTZWdtZW50fWApO1xuICAgICAgfVxuXG4gICAgICAvLyB3ZSBoYXZlIGEgdmFsaWQgc2VnbWVudCwgYWRkIGl0XG4gICAgICBzZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuXG4gICAgfSwgW10pLnZhbHVlKCk7XG5cbiAgfVxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _aureliaDependencyInjection = require("aurelia-dependency-injection");

var _errorWithStatus = require("../errorWithStatus");

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
    value: function parse(path, pipeline) {
      var pathSegments = _lodash2["default"].filter(path.split("/"));

      return (0, _lodash2["default"])(pathSegments).transform(function (segments, pathSegment) {
        var segment = segments.length ? _lodash2["default"].last(segments).constructor.parse(pathSegment, segments, pipeline) : (0, _utilities.parsePathSegment)(pathSegment, rootSegmentClasses, segments, pipeline);

        if (!segment) {
          throw new _errorWithStatus.ErrorWithStatus("Unrecognized segment " + pathSegment, 400);
        }

        segments.push(segment);
      }, []).value();
    }
  }]);

  return Segments;
})();

exports.Segments = Segments;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9zZWdtZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7MENBQStCLDhCQUE4Qjs7K0JBQy9CLG9CQUFvQjs7d0JBQ3BCLFlBQVk7OzZCQUNkLG1CQUFtQjs7eUJBQ2hCLGFBQWE7O3NCQUM5QixRQUFROzs7O0FBR3RCLElBQU0sa0JBQWtCLEdBQUcsMkJBRTFCLENBQUM7O0lBS1csUUFBUTtXQUFSLFFBQVE7MEJBQVIsUUFBUTs7O2VBQVIsUUFBUTs7V0FLZCxlQUFFLElBQUksRUFBRSxRQUFRLEVBQUc7QUFHdEIsVUFBTSxZQUFZLEdBQUcsb0JBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFHL0MsYUFBTyx5QkFBRSxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUUsVUFBQyxRQUFRLEVBQUUsV0FBVyxFQUFNO0FBRzVELFlBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBRzdCLG9CQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFFLEdBR3JFLGlDQUFrQixXQUFXLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDOztBQUd6RSxZQUFJLENBQUMsT0FBTyxFQUFFO0FBQ1osZ0JBQU0sK0RBQTZDLFdBQVcsRUFBSSxHQUFHLENBQUMsQ0FBQztTQUN4RTs7QUFHRCxnQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztPQUV4QixFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBRWhCOzs7U0FoQ1UsUUFBUSIsImZpbGUiOiJsaWIvc2VnbWVudHMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NpbmdsZXRvbixpbmplY3R9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XG5pbXBvcnQge0Vycm9yV2l0aFN0YXR1c30gZnJvbSBcIi4uL2Vycm9yV2l0aFN0YXR1c1wiO1xuaW1wb3J0IHtFbnRpdGllc1NlZ21lbnR9IGZyb20gXCIuL2VudGl0aWVzXCI7XG5pbXBvcnQge01vZGVsTWV0YWRhdGF9IGZyb20gXCIuLi9tZXRhZGF0YS9pbmRleFwiO1xuaW1wb3J0IHtwYXJzZVBhdGhTZWdtZW50fSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuLy8gdHJhY2sgdGhlIHNlZ21lbnRzIHRoYXQgY2FuIGJlIGF0IHRoZSByb290XG5jb25zdCByb290U2VnbWVudENsYXNzZXMgPSBbXG4gIEVudGl0aWVzU2VnbWVudFxuXTtcblxuLyoqXG4qIFRoZSBzZWdtZW50cyBjbGFzc1xuKi9cbmV4cG9ydCBjbGFzcyBTZWdtZW50cyB7XG5cbiAgLyoqXG4gICogUGFyc2UgYSBwYXRoIHN0cmluZyBhbmQgcmV0dXJuIGFuIGFycmF5IG9mIHNlZ21lbnQgb2JqZWN0c1xuICAqL1xuICBwYXJzZSggcGF0aCwgcGlwZWxpbmUgKSB7XG5cbiAgICAvLyBicmVhayB0aGUgcGF0aCBhcGFydCBpbnRvIHNlZ21lbnRzLCBzZXBhcmF0ZWQgYnkgL1xuICAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IF8uZmlsdGVyKHBhdGguc3BsaXQoXCIvXCIpKTtcblxuICAgIC8vIHBhcnNlIGFuZCByZXR1cm4gYW4gYXJyYXkgb2Ygc2VnbWVudCBvYmplY3RzXG4gICAgcmV0dXJuIF8ocGF0aFNlZ21lbnRzKS50cmFuc2Zvcm0oIChzZWdtZW50cywgcGF0aFNlZ21lbnQgKSA9PiB7XG5cbiAgICAgIC8vIHRyeSB0byBwYXJzZSB0aGUgcGF0aCBzZWdtZW50IGludG8gYSBzZWdtZW50IG9iamVjdFxuICAgICAgY29uc3Qgc2VnbWVudCA9IHNlZ21lbnRzLmxlbmd0aCA/XG5cbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBleGlzdGluZyBzZWdtZW50cywgY2FsbCBsYXN0IG9uZSBpbiBjaGFpbiB0byBwcm9jZXNzXG4gICAgICAgIF8ubGFzdChzZWdtZW50cykuY29uc3RydWN0b3IucGFyc2UoIHBhdGhTZWdtZW50LCBzZWdtZW50cywgcGlwZWxpbmUgKSA6XG5cbiAgICAgICAgLy8gaWYgbm8gZXhpc3Rpbmcgc2VnbWVudHMsIHRoZW4ganVzdCBwcm9jZXNzIHdpdGggdGhlIHRvcC1sZXZlbCBvbmVzXG4gICAgICAgIHBhcnNlUGF0aFNlZ21lbnQoIHBhdGhTZWdtZW50LCByb290U2VnbWVudENsYXNzZXMsIHNlZ21lbnRzLCBwaXBlbGluZSk7XG5cbiAgICAgIC8vIHRocm93IGVycm9yIGlmIHRoZSBzZWdtZW50IGlzIHVucmVjb2duaXplZFxuICAgICAgaWYgKCFzZWdtZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcldpdGhTdGF0dXMoIGBVbnJlY29nbml6ZWQgc2VnbWVudCAke3BhdGhTZWdtZW50fWAsIDQwMCk7XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIGhhdmUgYSB2YWxpZCBzZWdtZW50LCBhZGQgaXRcbiAgICAgIHNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG5cbiAgICB9LCBbXSkudmFsdWUoKTtcblxuICB9XG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

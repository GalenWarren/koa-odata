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
    value: function parse(context, pipeline) {
      var pathSegments = _lodash2["default"].filter(context.request.path.split("/"));

      return (0, _lodash2["default"])(pathSegments).transform(function (segments, pathSegment) {
        var segment = segments.length ? _lodash2["default"].last(segments).constructor.parse(pathSegment, segments, pipeline) : (0, _utilities.parsePathSegment)(pathSegment, rootSegmentClasses, segments, pipeline);

        if (!segment) {
          context["throw"]("Unrecognized segment " + pathSegment, 400);
        }

        segments.push(segment);
      }, []).value();
    }
  }]);

  return Segments;
})();

exports.Segments = Segments;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9zZWdtZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7MENBQStCLDhCQUE4Qjs7d0JBQy9CLFlBQVk7OzZCQUNkLG1CQUFtQjs7eUJBQ2hCLGFBQWE7O3NCQUM5QixRQUFROzs7O0FBR3RCLElBQU0sa0JBQWtCLEdBQUcsMkJBRTFCLENBQUM7O0lBS1csUUFBUTtXQUFSLFFBQVE7MEJBQVIsUUFBUTs7O2VBQVIsUUFBUTs7V0FLZCxlQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUc7QUFHekIsVUFBTSxZQUFZLEdBQUcsb0JBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztBQUcvRCxhQUFPLHlCQUFFLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBRSxVQUFDLFFBQVEsRUFBRSxXQUFXLEVBQU07QUFHNUQsWUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FHN0Isb0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUUsR0FHckUsaUNBQWtCLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7O0FBR3pFLFlBQUksQ0FBQyxPQUFPLEVBQUU7QUFDWixpQkFBTyxTQUFNLDJCQUF5QixXQUFXLEVBQUksR0FBRyxDQUFDLENBQUM7U0FDM0Q7O0FBR0QsZ0JBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7T0FFeEIsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUVoQjs7O1NBaENVLFFBQVEiLCJmaWxlIjoibGliL3NlZ21lbnRzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzaW5nbGV0b24saW5qZWN0fSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xuaW1wb3J0IHtFbnRpdGllc1NlZ21lbnR9IGZyb20gXCIuL2VudGl0aWVzXCI7XG5pbXBvcnQge01vZGVsTWV0YWRhdGF9IGZyb20gXCIuLi9tZXRhZGF0YS9pbmRleFwiO1xuaW1wb3J0IHtwYXJzZVBhdGhTZWdtZW50fSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuLy8gdHJhY2sgdGhlIHNlZ21lbnRzIHRoYXQgY2FuIGJlIGF0IHRoZSByb290XG5jb25zdCByb290U2VnbWVudENsYXNzZXMgPSBbXG4gIEVudGl0aWVzU2VnbWVudFxuXTtcblxuLyoqXG4qIFRoZSBzZWdtZW50cyBjbGFzc1xuKi9cbmV4cG9ydCBjbGFzcyBTZWdtZW50cyB7XG5cbiAgLyoqXG4gICogUGFyc2UgYSBwYXRoIHN0cmluZyBhbmQgcmV0dXJuIGFuIGFycmF5IG9mIHNlZ21lbnQgb2JqZWN0c1xuICAqL1xuICBwYXJzZSggY29udGV4dCwgcGlwZWxpbmUgKSB7XG5cbiAgICAvLyBicmVhayB0aGUgcGF0aCBhcGFydCBpbnRvIHNlZ21lbnRzLCBzZXBhcmF0ZWQgYnkgL1xuICAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IF8uZmlsdGVyKGNvbnRleHQucmVxdWVzdC5wYXRoLnNwbGl0KFwiL1wiKSk7XG5cbiAgICAvLyBwYXJzZSBhbmQgcmV0dXJuIGFuIGFycmF5IG9mIHNlZ21lbnQgb2JqZWN0c1xuICAgIHJldHVybiBfKHBhdGhTZWdtZW50cykudHJhbnNmb3JtKCAoc2VnbWVudHMsIHBhdGhTZWdtZW50ICkgPT4ge1xuXG4gICAgICAvLyB0cnkgdG8gcGFyc2UgdGhlIHBhdGggc2VnbWVudCBpbnRvIGEgc2VnbWVudCBvYmplY3RcbiAgICAgIGNvbnN0IHNlZ21lbnQgPSBzZWdtZW50cy5sZW5ndGggP1xuXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgZXhpc3Rpbmcgc2VnbWVudHMsIGNhbGwgbGFzdCBvbmUgaW4gY2hhaW4gdG8gcHJvY2Vzc1xuICAgICAgICBfLmxhc3Qoc2VnbWVudHMpLmNvbnN0cnVjdG9yLnBhcnNlKCBwYXRoU2VnbWVudCwgc2VnbWVudHMsIHBpcGVsaW5lICkgOlxuXG4gICAgICAgIC8vIGlmIG5vIGV4aXN0aW5nIHNlZ21lbnRzLCB0aGVuIGp1c3QgcHJvY2VzcyB3aXRoIHRoZSB0b3AtbGV2ZWwgb25lc1xuICAgICAgICBwYXJzZVBhdGhTZWdtZW50KCBwYXRoU2VnbWVudCwgcm9vdFNlZ21lbnRDbGFzc2VzLCBzZWdtZW50cywgcGlwZWxpbmUpO1xuXG4gICAgICAvLyB0aHJvdyBlcnJvciBpZiB0aGUgc2VnbWVudCBpcyB1bnJlY29nbml6ZWRcbiAgICAgIGlmICghc2VnbWVudCkge1xuICAgICAgICBjb250ZXh0LnRocm93KGBVbnJlY29nbml6ZWQgc2VnbWVudCAke3BhdGhTZWdtZW50fWAsIDQwMCk7XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIGhhdmUgYSB2YWxpZCBzZWdtZW50LCBhZGQgaXRcbiAgICAgIHNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG5cbiAgICB9LCBbXSkudmFsdWUoKTtcblxuICB9XG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

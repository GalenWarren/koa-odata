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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9zZWdtZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7MENBQStCLDhCQUE4Qjs7d0JBQy9CLFlBQVk7OzZCQUNkLG1CQUFtQjs7eUJBQ2hCLGFBQWE7O3NCQUM5QixRQUFROzs7O0FBR3RCLElBQU0sa0JBQWtCLEdBQUcsMkJBRTFCLENBQUM7O0lBS1csUUFBUTtXQUFSLFFBQVE7MEJBQVIsUUFBUTs7O2VBQVIsUUFBUTs7V0FLZCxlQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUc7QUFHekIsVUFBTSxZQUFZLEdBQUcsb0JBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztBQUcvRCxhQUFPLHlCQUFFLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBRSxVQUFDLFFBQVEsRUFBRSxXQUFXLEVBQU07QUFHNUQsWUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FHN0Isb0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUUsR0FHckUsaUNBQWtCLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7O0FBR3pFLFlBQUksQ0FBQyxPQUFPLEVBQUU7QUFDWixpQkFBTyxTQUFNLDJCQUF5QixXQUFXLEVBQUksR0FBRyxDQUFDLENBQUM7U0FDM0Q7O0FBR0QsZ0JBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7T0FFeEIsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUVoQjs7O1NBaENVLFFBQVEiLCJmaWxlIjoibGliL3NlZ21lbnRzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzaW5nbGV0b24saW5qZWN0fSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xyXG5pbXBvcnQge0VudGl0aWVzU2VnbWVudH0gZnJvbSBcIi4vZW50aXRpZXNcIjtcclxuaW1wb3J0IHtNb2RlbE1ldGFkYXRhfSBmcm9tIFwiLi4vbWV0YWRhdGEvaW5kZXhcIjtcclxuaW1wb3J0IHtwYXJzZVBhdGhTZWdtZW50fSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcclxuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuLy8gdHJhY2sgdGhlIHNlZ21lbnRzIHRoYXQgY2FuIGJlIGF0IHRoZSByb290XHJcbmNvbnN0IHJvb3RTZWdtZW50Q2xhc3NlcyA9IFtcclxuICBFbnRpdGllc1NlZ21lbnRcclxuXTtcclxuXHJcbi8qKlxyXG4qIFRoZSBzZWdtZW50cyBjbGFzc1xyXG4qL1xyXG5leHBvcnQgY2xhc3MgU2VnbWVudHMge1xyXG5cclxuICAvKipcclxuICAqIFBhcnNlIGEgcGF0aCBzdHJpbmcgYW5kIHJldHVybiBhbiBhcnJheSBvZiBzZWdtZW50IG9iamVjdHNcclxuICAqL1xyXG4gIHBhcnNlKCBjb250ZXh0LCBwaXBlbGluZSApIHtcclxuXHJcbiAgICAvLyBicmVhayB0aGUgcGF0aCBhcGFydCBpbnRvIHNlZ21lbnRzLCBzZXBhcmF0ZWQgYnkgL1xyXG4gICAgY29uc3QgcGF0aFNlZ21lbnRzID0gXy5maWx0ZXIoY29udGV4dC5yZXF1ZXN0LnBhdGguc3BsaXQoXCIvXCIpKTtcclxuXHJcbiAgICAvLyBwYXJzZSBhbmQgcmV0dXJuIGFuIGFycmF5IG9mIHNlZ21lbnQgb2JqZWN0c1xyXG4gICAgcmV0dXJuIF8ocGF0aFNlZ21lbnRzKS50cmFuc2Zvcm0oIChzZWdtZW50cywgcGF0aFNlZ21lbnQgKSA9PiB7XHJcblxyXG4gICAgICAvLyB0cnkgdG8gcGFyc2UgdGhlIHBhdGggc2VnbWVudCBpbnRvIGEgc2VnbWVudCBvYmplY3RcclxuICAgICAgY29uc3Qgc2VnbWVudCA9IHNlZ21lbnRzLmxlbmd0aCA/XHJcblxyXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgZXhpc3Rpbmcgc2VnbWVudHMsIGNhbGwgbGFzdCBvbmUgaW4gY2hhaW4gdG8gcHJvY2Vzc1xyXG4gICAgICAgIF8ubGFzdChzZWdtZW50cykuY29uc3RydWN0b3IucGFyc2UoIHBhdGhTZWdtZW50LCBzZWdtZW50cywgcGlwZWxpbmUgKSA6XHJcblxyXG4gICAgICAgIC8vIGlmIG5vIGV4aXN0aW5nIHNlZ21lbnRzLCB0aGVuIGp1c3QgcHJvY2VzcyB3aXRoIHRoZSB0b3AtbGV2ZWwgb25lc1xyXG4gICAgICAgIHBhcnNlUGF0aFNlZ21lbnQoIHBhdGhTZWdtZW50LCByb290U2VnbWVudENsYXNzZXMsIHNlZ21lbnRzLCBwaXBlbGluZSk7XHJcblxyXG4gICAgICAvLyB0aHJvdyBlcnJvciBpZiB0aGUgc2VnbWVudCBpcyB1bnJlY29nbml6ZWRcclxuICAgICAgaWYgKCFzZWdtZW50KSB7XHJcbiAgICAgICAgY29udGV4dC50aHJvdyhgVW5yZWNvZ25pemVkIHNlZ21lbnQgJHtwYXRoU2VnbWVudH1gLCA0MDApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyB3ZSBoYXZlIGEgdmFsaWQgc2VnbWVudCwgYWRkIGl0XHJcbiAgICAgIHNlZ21lbnRzLnB1c2goc2VnbWVudCk7XHJcblxyXG4gICAgfSwgW10pLnZhbHVlKCk7XHJcblxyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

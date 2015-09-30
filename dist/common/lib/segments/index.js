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
    value: function parse(path, pipeline) {
      var pathSegments = _lodash2["default"].filter(path.split("/"));

      return (0, _lodash2["default"])(pathSegments).transform(function (segments, pathSegment) {
        var segment = segments.length ? _lodash2["default"].last(segments).constructor.parse(pathSegment, segments, pipeline) : (0, _utilities.parsePathSegment)(pathSegment, rootSegmentClasses, segments, pipeline);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9zZWdtZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7MENBQStCLDhCQUE4Qjs7d0JBQy9CLFlBQVk7OzZCQUNkLG1CQUFtQjs7eUJBQ2hCLGFBQWE7O3NCQUM5QixRQUFROzs7O0FBR3RCLElBQU0sa0JBQWtCLEdBQUcsMkJBRTFCLENBQUM7O0lBS1csUUFBUTtXQUFSLFFBQVE7MEJBQVIsUUFBUTs7O2VBQVIsUUFBUTs7V0FLZCxlQUFFLElBQUksRUFBRSxRQUFRLEVBQUc7QUFHdEIsVUFBTSxZQUFZLEdBQUcsb0JBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFHL0MsYUFBTyx5QkFBRSxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUUsVUFBQyxRQUFRLEVBQUUsV0FBVyxFQUFNO0FBRzVELFlBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBRzdCLG9CQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFFLEdBR3JFLGlDQUFrQixXQUFXLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDOztBQUd6RSxZQUFJLENBQUMsT0FBTyxFQUFFO0FBQ1osZ0JBQU0sSUFBSSxLQUFLLDJCQUEwQixXQUFXLENBQUcsQ0FBQztTQUN6RDs7QUFHRCxnQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztPQUV4QixFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBRWhCOzs7U0FoQ1UsUUFBUSIsImZpbGUiOiJsaWIvc2VnbWVudHMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NpbmdsZXRvbixpbmplY3R9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XG5pbXBvcnQge0VudGl0aWVzU2VnbWVudH0gZnJvbSBcIi4vZW50aXRpZXNcIjtcbmltcG9ydCB7TW9kZWxNZXRhZGF0YX0gZnJvbSBcIi4uL21ldGFkYXRhL2luZGV4XCI7XG5pbXBvcnQge3BhcnNlUGF0aFNlZ21lbnR9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG4vLyB0cmFjayB0aGUgc2VnbWVudHMgdGhhdCBjYW4gYmUgYXQgdGhlIHJvb3RcbmNvbnN0IHJvb3RTZWdtZW50Q2xhc3NlcyA9IFtcbiAgRW50aXRpZXNTZWdtZW50XG5dO1xuXG4vKipcbiogVGhlIHNlZ21lbnRzIGNsYXNzXG4qL1xuZXhwb3J0IGNsYXNzIFNlZ21lbnRzIHtcblxuICAvKipcbiAgKiBQYXJzZSBhIHBhdGggc3RyaW5nIGFuZCByZXR1cm4gYW4gYXJyYXkgb2Ygc2VnbWVudCBvYmplY3RzXG4gICovXG4gIHBhcnNlKCBwYXRoLCBwaXBlbGluZSApIHtcblxuICAgIC8vIGJyZWFrIHRoZSBwYXRoIGFwYXJ0IGludG8gc2VnbWVudHMsIHNlcGFyYXRlZCBieSAvXG4gICAgY29uc3QgcGF0aFNlZ21lbnRzID0gXy5maWx0ZXIocGF0aC5zcGxpdChcIi9cIikpO1xuXG4gICAgLy8gcGFyc2UgYW5kIHJldHVybiBhbiBhcnJheSBvZiBzZWdtZW50IG9iamVjdHNcbiAgICByZXR1cm4gXyhwYXRoU2VnbWVudHMpLnRyYW5zZm9ybSggKHNlZ21lbnRzLCBwYXRoU2VnbWVudCApID0+IHtcblxuICAgICAgLy8gdHJ5IHRvIHBhcnNlIHRoZSBwYXRoIHNlZ21lbnQgaW50byBhIHNlZ21lbnQgb2JqZWN0XG4gICAgICBjb25zdCBzZWdtZW50ID0gc2VnbWVudHMubGVuZ3RoID9cblxuICAgICAgICAvLyBpZiB3ZSBoYXZlIGV4aXN0aW5nIHNlZ21lbnRzLCBjYWxsIGxhc3Qgb25lIGluIGNoYWluIHRvIHByb2Nlc3NcbiAgICAgICAgXy5sYXN0KHNlZ21lbnRzKS5jb25zdHJ1Y3Rvci5wYXJzZSggcGF0aFNlZ21lbnQsIHNlZ21lbnRzLCBwaXBlbGluZSApIDpcblxuICAgICAgICAvLyBpZiBubyBleGlzdGluZyBzZWdtZW50cywgdGhlbiBqdXN0IHByb2Nlc3Mgd2l0aCB0aGUgdG9wLWxldmVsIG9uZXNcbiAgICAgICAgcGFyc2VQYXRoU2VnbWVudCggcGF0aFNlZ21lbnQsIHJvb3RTZWdtZW50Q2xhc3Nlcywgc2VnbWVudHMsIHBpcGVsaW5lKTtcblxuICAgICAgLy8gdGhyb3cgZXJyb3IgaWYgdGhlIHNlZ21lbnQgaXMgdW5yZWNvZ25pemVkXG4gICAgICBpZiAoIXNlZ21lbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBgVW5yZWNvZ25pemVkIHNlZ21lbnQgJHtwYXRoU2VnbWVudH1gKTtcbiAgICAgIH1cblxuICAgICAgLy8gd2UgaGF2ZSBhIHZhbGlkIHNlZ21lbnQsIGFkZCBpdFxuICAgICAgc2VnbWVudHMucHVzaChzZWdtZW50KTtcblxuICAgIH0sIFtdKS52YWx1ZSgpO1xuXG4gIH1cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

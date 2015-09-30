"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _base = require("./base");

var _utilities = require("./utilities");

var regex = /(\w+)(\(([^)]+)\))?/;

exports.regex = regex;

var EntitiesSegment = (function (_Segment) {
  _inherits(EntitiesSegment, _Segment);

  function EntitiesSegment(metadata, key) {
    _classCallCheck(this, EntitiesSegment);

    _get(Object.getPrototypeOf(EntitiesSegment.prototype), "constructor", this).call(this);
    this.metadata = metadata;
    this.key = key;
  }

  _createClass(EntitiesSegment, null, [{
    key: "parse",
    value: function parse(pathSegment, segments, pipeline) {
      if (segments.length == 0) {
        var _regex$exec = regex.exec(pathSegment);

        var _regex$exec2 = _slicedToArray(_regex$exec, 3);

        var match = _regex$exec2[0];
        var collectionName = _regex$exec2[1];
        var key = _regex$exec2[2];

        if (match) {
          var entityMetadata = pipeline.modelMetadata.entityCollections[collectionName];
          if (entityMetadata) {
            return new EntitiesSegment(entityMetadata, key);
          }
        }
      }

      return null;
    }
  }]);

  return EntitiesSegment;
})(_base.Segment);

exports.EntitiesSegment = EntitiesSegment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9zZWdtZW50cy9lbnRpdGllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O29CQUFzQixRQUFROzt5QkFDQyxhQUFhOztBQUtyQyxJQUFNLEtBQUssR0FBRyxxQkFBcUIsQ0FBQzs7OztJQUs5QixlQUFlO1lBQWYsZUFBZTs7QUFlZixXQWZBLGVBQWUsQ0FlYixRQUFRLEVBQUUsR0FBRyxFQUFHOzBCQWZsQixlQUFlOztBQWdCeEIsK0JBaEJTLGVBQWUsNkNBZ0JqQjtBQUNQLFFBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLFFBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0dBQ2hCOztlQW5CVSxlQUFlOztXQXlCZCxlQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFHO0FBRzlDLFVBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7MEJBR2MsS0FBSyxDQUFDLElBQUksQ0FBRSxXQUFXLENBQUU7Ozs7WUFBeEQsS0FBSztZQUFFLGNBQWM7WUFBRSxHQUFHOztBQUNqQyxZQUFJLEtBQUssRUFBRTtBQUdULGNBQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUUsY0FBYyxDQUFFLENBQUM7QUFDbEYsY0FBSSxjQUFjLEVBQUU7QUFHbEIsbUJBQU8sSUFBSSxlQUFlLENBQUUsY0FBYyxFQUFFLEdBQUcsQ0FBRSxDQUFDO1dBRW5EO1NBRUY7T0FFRjs7QUFHRCxhQUFPLElBQUksQ0FBQztLQUNiOzs7U0FqRFUsZUFBZSIsImZpbGUiOiJsaWIvc2VnbWVudHMvZW50aXRpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlZ21lbnR9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7cGFyc2VQYXRoU2VnbWVudH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5cbi8qKlxuKiBUaGUgcmVnZXggdGhhdCB3ZSB1c2UsIGV4cG9zZWQgZm9yIHVuaXQgdGVzdGluZ1xuKi9cbmV4cG9ydCBjb25zdCByZWdleCA9IC8oXFx3KykoXFwoKFteKV0rKVxcKSk/LztcblxuLyoqXG4qIENsYXNzIGZvciBhbiBlbnRpdGllcyBzZWdtZW50XG4qL1xuZXhwb3J0IGNsYXNzIEVudGl0aWVzU2VnbWVudCBleHRlbmRzIFNlZ21lbnQge1xuXG4gIC8qKlxuICAqIFRoZSBtZXRhZGF0YSBmb3IgdGhpcyBlbnRpdHlcbiAgKi9cbiAgbWV0YWRhdGFcblxuICAvKipcbiAgKiBUaGUga2V5LCBpZiBvbmUgZXhpc3RzXG4gICovXG4gIGtleVxuXG4gIC8qKlxuICAqIEBjb25zdHJ1Y3RvclxuICAqL1xuICBjb25zdHJ1Y3RvciggbWV0YWRhdGEsIGtleSApIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICB9XG5cbiAgLyoqXG4gICogQ2FsbGVkIG9uIGVhY2ggc2VnbWVudCB0byBwYXJzZSB0aGUgbmV4dCBzZWdtZW50LFxuICAqIGFsbG93cyBlYWNoIHNlZ21lbnQgdG8gYmUgcGFyc2VkIGluIHRoZSBwcm9wZXIgY29udGV4dFxuICAqL1xuICBzdGF0aWMgcGFyc2UoIHBhdGhTZWdtZW50LCBzZWdtZW50cywgcGlwZWxpbmUgKSB7XG5cbiAgICAvLyBvbmx5IHByb2Nlc3MgYXQgcm9vdFxuICAgIGlmIChzZWdtZW50cy5sZW5ndGggPT0gMCkge1xuXG4gICAgICAvLyBsb29rIGZvciBhIG1hdGNoIG9uIGVudGl0eU5hbWUgd2l0aCBvcHRpb25hbCBrZXlcbiAgICAgIGNvbnN0IFttYXRjaCwgY29sbGVjdGlvbk5hbWUsIGtleSBdID0gcmVnZXguZXhlYyggcGF0aFNlZ21lbnQgKTtcbiAgICAgIGlmIChtYXRjaCkge1xuXG4gICAgICAgIC8vIGl0IGxvb2tzIGxpa2UgYW4gZW50aXR5LCBpcyBpdCBpbiB0aGUgbWV0YWRhdGE/XG4gICAgICAgIGNvbnN0IGVudGl0eU1ldGFkYXRhID0gcGlwZWxpbmUubW9kZWxNZXRhZGF0YS5lbnRpdHlDb2xsZWN0aW9uc1sgY29sbGVjdGlvbk5hbWUgXTtcbiAgICAgICAgaWYgKGVudGl0eU1ldGFkYXRhKSB7XG5cbiAgICAgICAgICAvLyB5ZXMsIGNyZWF0ZSB0aGUgc2VnbWVudFxuICAgICAgICAgIHJldHVybiBuZXcgRW50aXRpZXNTZWdtZW50KCBlbnRpdHlNZXRhZGF0YSwga2V5ICk7XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBub3QgdGhpcyB0eXBlIG9mIHNlZ21lbnRcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

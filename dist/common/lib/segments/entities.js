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

var EntitiesSegment = (function (_Segment) {
  _inherits(EntitiesSegment, _Segment);

  _createClass(EntitiesSegment, null, [{
    key: "regex",
    value: /(\w+)(\(([^)]+)\))?/,
    enumerable: true
  }]);

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
        var _regex$exec = this.regex.exec(pathSegment);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9zZWdtZW50cy9lbnRpdGllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O29CQUFzQixRQUFROzt5QkFDQyxhQUFhOztJQUsvQixlQUFlO1lBQWYsZUFBZTs7ZUFBZixlQUFlOztXQUtYLHFCQUFxQjs7OztBQWV6QixXQXBCQSxlQUFlLENBb0JiLFFBQVEsRUFBRSxHQUFHLEVBQUc7MEJBcEJsQixlQUFlOztBQXFCeEIsK0JBckJTLGVBQWUsNkNBcUJqQjtBQUNQLFFBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLFFBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0dBQ2hCOztlQXhCVSxlQUFlOztXQThCZCxlQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFHO0FBRzlDLFVBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7MEJBR2MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUUsV0FBVyxDQUFFOzs7O1lBQTdELEtBQUs7WUFBRSxjQUFjO1lBQUUsR0FBRzs7QUFDakMsWUFBSSxLQUFLLEVBQUU7QUFHVCxjQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFFLGNBQWMsQ0FBRSxDQUFDO0FBQ2xGLGNBQUksY0FBYyxFQUFFO0FBR2xCLG1CQUFPLElBQUksZUFBZSxDQUFFLGNBQWMsRUFBRSxHQUFHLENBQUUsQ0FBQztXQUVuRDtTQUVGO09BRUY7O0FBR0QsYUFBTyxJQUFJLENBQUM7S0FDYjs7O1NBdERVLGVBQWUiLCJmaWxlIjoibGliL3NlZ21lbnRzL2VudGl0aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZWdtZW50fSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQge3BhcnNlUGF0aFNlZ21lbnR9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuXG4vKipcbiogQ2xhc3MgZm9yIGFuIGVudGl0aWVzIHNlZ21lbnRcbiovXG5leHBvcnQgY2xhc3MgRW50aXRpZXNTZWdtZW50IGV4dGVuZHMgU2VnbWVudCB7XG5cbiAgLyoqXG4gICogVGhlIHJlZ2V4IHRoYXQgd2UgdXNlLCBleHBvc2VkIGZvciB1bml0IHRlc3RpbmdcbiAgKi9cbiAgc3RhdGljIHJlZ2V4ID0gLyhcXHcrKShcXCgoW14pXSspXFwpKT8vXG5cbiAgLyoqXG4gICogVGhlIG1ldGFkYXRhIGZvciB0aGlzIGVudGl0eVxuICAqL1xuICBtZXRhZGF0YVxuXG4gIC8qKlxuICAqIFRoZSBrZXksIGlmIG9uZSBleGlzdHNcbiAgKi9cbiAga2V5XG5cbiAgLyoqXG4gICogQGNvbnN0cnVjdG9yXG4gICovXG4gIGNvbnN0cnVjdG9yKCBtZXRhZGF0YSwga2V5ICkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLm1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gIH1cblxuICAvKipcbiAgKiBDYWxsZWQgb24gZWFjaCBzZWdtZW50IHRvIHBhcnNlIHRoZSBuZXh0IHNlZ21lbnQsXG4gICogYWxsb3dzIGVhY2ggc2VnbWVudCB0byBiZSBwYXJzZWQgaW4gdGhlIHByb3BlciBjb250ZXh0XG4gICovXG4gIHN0YXRpYyBwYXJzZSggcGF0aFNlZ21lbnQsIHNlZ21lbnRzLCBwaXBlbGluZSApIHtcblxuICAgIC8vIG9ubHkgcHJvY2VzcyBhdCByb290XG4gICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA9PSAwKSB7XG5cbiAgICAgIC8vIGxvb2sgZm9yIGEgbWF0Y2ggb24gZW50aXR5TmFtZSB3aXRoIG9wdGlvbmFsIGtleVxuICAgICAgY29uc3QgW21hdGNoLCBjb2xsZWN0aW9uTmFtZSwga2V5IF0gPSB0aGlzLnJlZ2V4LmV4ZWMoIHBhdGhTZWdtZW50ICk7XG4gICAgICBpZiAobWF0Y2gpIHtcblxuICAgICAgICAvLyBpdCBsb29rcyBsaWtlIGFuIGVudGl0eSwgaXMgaXQgaW4gdGhlIG1ldGFkYXRhP1xuICAgICAgICBjb25zdCBlbnRpdHlNZXRhZGF0YSA9IHBpcGVsaW5lLm1vZGVsTWV0YWRhdGEuZW50aXR5Q29sbGVjdGlvbnNbIGNvbGxlY3Rpb25OYW1lIF07XG4gICAgICAgIGlmIChlbnRpdHlNZXRhZGF0YSkge1xuXG4gICAgICAgICAgLy8geWVzLCBjcmVhdGUgdGhlIHNlZ21lbnRcbiAgICAgICAgICByZXR1cm4gbmV3IEVudGl0aWVzU2VnbWVudCggZW50aXR5TWV0YWRhdGEsIGtleSApO1xuXG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gbm90IHRoaXMgdHlwZSBvZiBzZWdtZW50XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

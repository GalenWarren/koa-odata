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
    value: function parse(pathSegment, segments, modelMetadata) {
      if (segments.length == 0) {
        var _regex$exec = this.regex.exec(pathSegment);

        var _regex$exec2 = _slicedToArray(_regex$exec, 3);

        var match = _regex$exec2[0];
        var collectionName = _regex$exec2[1];
        var key = _regex$exec2[2];

        if (match) {
          var entityMetadata = modelMetadata.entityCollections[collectionName];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9zZWdtZW50cy9lbnRpdGllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O29CQUFzQixRQUFROzt5QkFDQyxhQUFhOztJQUsvQixlQUFlO1lBQWYsZUFBZTs7ZUFBZixlQUFlOztXQUtYLHFCQUFxQjs7OztBQWV6QixXQXBCQSxlQUFlLENBb0JiLFFBQVEsRUFBRSxHQUFHLEVBQUc7MEJBcEJsQixlQUFlOztBQXFCeEIsK0JBckJTLGVBQWUsNkNBcUJqQjtBQUNQLFFBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLFFBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0dBQ2hCOztlQXhCVSxlQUFlOztXQThCZCxlQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFHO0FBR25ELFVBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7MEJBR2MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUUsV0FBVyxDQUFFOzs7O1lBQTdELEtBQUs7WUFBRSxjQUFjO1lBQUUsR0FBRzs7QUFDakMsWUFBSSxLQUFLLEVBQUU7QUFHVCxjQUFNLGNBQWMsR0FBRyxhQUFhLENBQUMsaUJBQWlCLENBQUUsY0FBYyxDQUFFLENBQUM7QUFDekUsY0FBSSxjQUFjLEVBQUU7QUFHbEIsbUJBQU8sSUFBSSxlQUFlLENBQUUsY0FBYyxFQUFFLEdBQUcsQ0FBRSxDQUFDO1dBRW5EO1NBRUY7T0FFRjs7QUFHRCxhQUFPLElBQUksQ0FBQztLQUNiOzs7U0F0RFUsZUFBZSIsImZpbGUiOiJsaWIvc2VnbWVudHMvZW50aXRpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlZ21lbnR9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7cGFyc2VQYXRoU2VnbWVudH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5cbi8qKlxuKiBDbGFzcyBmb3IgYW4gZW50aXRpZXMgc2VnbWVudFxuKi9cbmV4cG9ydCBjbGFzcyBFbnRpdGllc1NlZ21lbnQgZXh0ZW5kcyBTZWdtZW50IHtcblxuICAvKipcbiAgKiBUaGUgcmVnZXggdGhhdCB3ZSB1c2UsIGV4cG9zZWQgZm9yIHVuaXQgdGVzdGluZ1xuICAqL1xuICBzdGF0aWMgcmVnZXggPSAvKFxcdyspKFxcKChbXildKylcXCkpPy9cblxuICAvKipcbiAgKiBUaGUgbWV0YWRhdGEgZm9yIHRoaXMgZW50aXR5XG4gICovXG4gIG1ldGFkYXRhXG5cbiAgLyoqXG4gICogVGhlIGtleSwgaWYgb25lIGV4aXN0c1xuICAqL1xuICBrZXlcblxuICAvKipcbiAgKiBAY29uc3RydWN0b3JcbiAgKi9cbiAgY29uc3RydWN0b3IoIG1ldGFkYXRhLCBrZXkgKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMubWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgfVxuXG4gIC8qKlxuICAqIENhbGxlZCBvbiBlYWNoIHNlZ21lbnQgdG8gcGFyc2UgdGhlIG5leHQgc2VnbWVudCxcbiAgKiBhbGxvd3MgZWFjaCBzZWdtZW50IHRvIGJlIHBhcnNlZCBpbiB0aGUgcHJvcGVyIGNvbnRleHRcbiAgKi9cbiAgc3RhdGljIHBhcnNlKCBwYXRoU2VnbWVudCwgc2VnbWVudHMsIG1vZGVsTWV0YWRhdGEgKSB7XG5cbiAgICAvLyBvbmx5IHByb2Nlc3MgYXQgcm9vdFxuICAgIGlmIChzZWdtZW50cy5sZW5ndGggPT0gMCkge1xuXG4gICAgICAvLyBsb29rIGZvciBhIG1hdGNoIG9uIGVudGl0eU5hbWUgd2l0aCBvcHRpb25hbCBrZXlcbiAgICAgIGNvbnN0IFttYXRjaCwgY29sbGVjdGlvbk5hbWUsIGtleSBdID0gdGhpcy5yZWdleC5leGVjKCBwYXRoU2VnbWVudCApO1xuICAgICAgaWYgKG1hdGNoKSB7XG5cbiAgICAgICAgLy8gaXQgbG9va3MgbGlrZSBhbiBlbnRpdHksIGlzIGl0IGluIHRoZSBtZXRhZGF0YT9cbiAgICAgICAgY29uc3QgZW50aXR5TWV0YWRhdGEgPSBtb2RlbE1ldGFkYXRhLmVudGl0eUNvbGxlY3Rpb25zWyBjb2xsZWN0aW9uTmFtZSBdO1xuICAgICAgICBpZiAoZW50aXR5TWV0YWRhdGEpIHtcblxuICAgICAgICAgIC8vIHllcywgY3JlYXRlIHRoZSBzZWdtZW50XG4gICAgICAgICAgcmV0dXJuIG5ldyBFbnRpdGllc1NlZ21lbnQoIGVudGl0eU1ldGFkYXRhLCBrZXkgKTtcblxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIG5vdCB0aGlzIHR5cGUgb2Ygc2VnbWVudFxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

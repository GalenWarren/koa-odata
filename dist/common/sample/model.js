"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _libMetadataIndex = require("../lib/metadata/index");

var modelMetadata = new _libMetadataIndex.ModelMetadata();

exports.modelMetadata = modelMetadata;
_lodash2["default"].extend(modelMetadata.entityCollections, {

  users: new _libMetadataIndex.EntityMetadata({
    name: "user",
    model: modelMetadata,
    properties: []
  })

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZS9tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztzQkFBYyxRQUFROzs7O2dDQUNzQix1QkFBdUI7O0FBSzVELElBQU0sYUFBYSxHQUFHLHFDQUFtQixDQUFDOzs7QUFFakQsb0JBQUUsTUFBTSxDQUFFLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRTs7QUFFekMsT0FBSyxFQUFFLHFDQUFtQjtBQUN4QixRQUFJLEVBQUUsTUFBTTtBQUNaLFNBQUssRUFBRSxhQUFhO0FBQ3BCLGNBQVUsRUFBRSxFQUNYO0dBQ0YsQ0FBQzs7Q0FFSCxDQUFDLENBQUMiLCJmaWxlIjoic2FtcGxlL21vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHtNb2RlbE1ldGFkYXRhLCBFbnRpdHlNZXRhZGF0YX0gZnJvbSBcIi4uL2xpYi9tZXRhZGF0YS9pbmRleFwiO1xuXG4vKipcbiogQSBzZXQgb2YgbW9kZWwgbWV0YWRhdGEgd2UgdXNlIGZvciB0aGUgdW5pdCB0ZXN0c1xuKi9cbmV4cG9ydCBjb25zdCBtb2RlbE1ldGFkYXRhID0gbmV3IE1vZGVsTWV0YWRhdGEoKTtcblxuXy5leHRlbmQoIG1vZGVsTWV0YWRhdGEuZW50aXR5Q29sbGVjdGlvbnMsIHtcblxuICB1c2VyczogbmV3IEVudGl0eU1ldGFkYXRhKHtcbiAgICBuYW1lOiBcInVzZXJcIixcbiAgICBtb2RlbDogbW9kZWxNZXRhZGF0YSxcbiAgICBwcm9wZXJ0aWVzOiBbXG4gICAgXVxuICB9KVxuXG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

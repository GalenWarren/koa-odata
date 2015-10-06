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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZS9tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztzQkFBYyxRQUFROzs7O2dDQUNzQix1QkFBdUI7O0FBSzVELElBQU0sYUFBYSxHQUFHLHFDQUFtQixDQUFDOzs7QUFFakQsb0JBQUUsTUFBTSxDQUFFLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRTs7QUFFekMsT0FBSyxFQUFFLHFDQUFtQjtBQUN4QixRQUFJLEVBQUUsTUFBTTtBQUNaLFNBQUssRUFBRSxhQUFhO0FBQ3BCLGNBQVUsRUFBRSxFQUNYO0dBQ0YsQ0FBQzs7Q0FFSCxDQUFDLENBQUMiLCJmaWxlIjoic2FtcGxlL21vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge01vZGVsTWV0YWRhdGEsIEVudGl0eU1ldGFkYXRhfSBmcm9tIFwiLi4vbGliL21ldGFkYXRhL2luZGV4XCI7XHJcblxyXG4vKipcclxuKiBBIHNldCBvZiBtb2RlbCBtZXRhZGF0YSB3ZSB1c2UgZm9yIHRoZSB1bml0IHRlc3RzXHJcbiovXHJcbmV4cG9ydCBjb25zdCBtb2RlbE1ldGFkYXRhID0gbmV3IE1vZGVsTWV0YWRhdGEoKTtcclxuXHJcbl8uZXh0ZW5kKCBtb2RlbE1ldGFkYXRhLmVudGl0eUNvbGxlY3Rpb25zLCB7XHJcblxyXG4gIHVzZXJzOiBuZXcgRW50aXR5TWV0YWRhdGEoe1xyXG4gICAgbmFtZTogXCJ1c2VyXCIsXHJcbiAgICBtb2RlbDogbW9kZWxNZXRhZGF0YSxcclxuICAgIHByb3BlcnRpZXM6IFtcclxuICAgIF1cclxuICB9KVxyXG5cclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

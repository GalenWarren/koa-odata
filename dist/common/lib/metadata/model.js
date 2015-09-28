"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var models = {};

exports.models = models;

var ModelMetadata = (function () {
  function ModelMetadata() {
    _classCallCheck(this, ModelMetadata);

    this.entities = [];
  }

  _createClass(ModelMetadata, null, [{
    key: "getOrCreate",
    value: function getOrCreate(modelName) {

      var model = models[modelName];
      if (!model) {
        models[modelName] = model = new ModelMetadata(modelName);
      }
      return model;
    }
  }]);

  return ModelMetadata;
})();

exports.ModelMetadata = ModelMetadata;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9tZXRhZGF0YS9tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR08sSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDOzs7O0lBS1osYUFBYTtBQUViLFdBRkEsYUFBYSxHQUVWOzBCQUZILGFBQWE7O0FBR3RCLFFBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0dBQ3BCOztlQUpVLGFBQWE7O1dBU04scUJBQUUsU0FBUyxFQUFHOztBQUU5QixVQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUIsVUFBSSxDQUFDLEtBQUssRUFBRTtBQUNWLGNBQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7T0FDMUQ7QUFDRCxhQUFPLEtBQUssQ0FBQztLQUNkOzs7U0FoQlUsYUFBYSIsImZpbGUiOiJsaWIvbWV0YWRhdGEvbW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogVGhlIG1hcCBvZiBuYW1lcyB0byBtb2RlbCBtZXRhZGF0YVxuKi9cbmV4cG9ydCBjb25zdCBtb2RlbHMgPSB7fTtcblxuLyoqXG4qIFRoZSBtb2RlbCBtZXRhZGF0YSBjbGFzc1xuKi9cbmV4cG9ydCBjbGFzcyBNb2RlbE1ldGFkYXRhIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVudGl0aWVzID0gW107XG4gIH1cblxuICAvKipcbiAgKiBHZXRzIGEgbW9kZWwgYnkgbmFtZSwgY3JlYXRpbmcgaWYgbmVjZXNzYXJ5XG4gICovXG4gIHN0YXRpYyBnZXRPckNyZWF0ZSggbW9kZWxOYW1lICkge1xuXG4gICAgbGV0IG1vZGVsID0gbW9kZWxzW21vZGVsTmFtZV07XG4gICAgaWYgKCFtb2RlbCkge1xuICAgICAgbW9kZWxzW21vZGVsTmFtZV0gPSBtb2RlbCA9IG5ldyBNb2RlbE1ldGFkYXRhKG1vZGVsTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBtb2RlbDtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGFkYXRhL21vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHTyxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7Ozs7SUFLWixhQUFhO0FBSWIsV0FKQSxhQUFhLEdBSVY7MEJBSkgsYUFBYTs7U0FFeEIsUUFBUSxHQUFHLEVBQUU7R0FJWjs7ZUFOVSxhQUFhOztXQVdOLHFCQUFFLFNBQVMsRUFBRzs7QUFFOUIsVUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzlCLFVBQUksQ0FBQyxLQUFLLEVBQUU7QUFDVixjQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO09BQzFEO0FBQ0QsYUFBTyxLQUFLLENBQUM7S0FDZDs7O1NBbEJVLGFBQWEiLCJmaWxlIjoibWV0YWRhdGEvbW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogVGhlIG1hcCBvZiBuYW1lcyB0byBtb2RlbCBtZXRhZGF0YVxuKi9cbmV4cG9ydCBjb25zdCBtb2RlbHMgPSB7fTtcblxuLyoqXG4qIFRoZSBtb2RlbCBtZXRhZGF0YSBjbGFzc1xuKi9cbmV4cG9ydCBjbGFzcyBNb2RlbE1ldGFkYXRhIHtcblxuICBlbnRpdGllcyA9IFtdXG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAqIEdldHMgYSBtb2RlbCBieSBuYW1lLCBjcmVhdGluZyBpZiBuZWNlc3NhcnlcbiAgKi9cbiAgc3RhdGljIGdldE9yQ3JlYXRlKCBtb2RlbE5hbWUgKSB7XG5cbiAgICBsZXQgbW9kZWwgPSBtb2RlbHNbbW9kZWxOYW1lXTtcbiAgICBpZiAoIW1vZGVsKSB7XG4gICAgICBtb2RlbHNbbW9kZWxOYW1lXSA9IG1vZGVsID0gbmV3IE1vZGVsTWV0YWRhdGEobW9kZWxOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
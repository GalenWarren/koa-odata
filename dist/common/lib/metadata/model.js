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

    this.entityCollections = {};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9tZXRhZGF0YS9tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR08sSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDOzs7O0lBS1osYUFBYTtBQVViLFdBVkEsYUFBYSxHQVVWOzBCQVZILGFBQWE7O0FBV3RCLFFBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7R0FDN0I7O2VBWlUsYUFBYTs7V0FpQk4scUJBQUUsU0FBUyxFQUFHOztBQUU5QixVQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUIsVUFBSSxDQUFDLEtBQUssRUFBRTtBQUNWLGNBQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7T0FDMUQ7QUFDRCxhQUFPLEtBQUssQ0FBQztLQUNkOzs7U0F4QlUsYUFBYSIsImZpbGUiOiJsaWIvbWV0YWRhdGEvbW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogVGhlIG1hcCBvZiBuYW1lcyB0byBtb2RlbCBtZXRhZGF0YVxuKi9cbmV4cG9ydCBjb25zdCBtb2RlbHMgPSB7fTtcblxuLyoqXG4qIFRoZSBtb2RlbCBtZXRhZGF0YSBjbGFzc1xuKi9cbmV4cG9ydCBjbGFzcyBNb2RlbE1ldGFkYXRhIHtcblxuICAvKipcbiAgKiBUaGUgbWFwIG9mIGVudGl0eSBjb2xsZWN0aW9uIG5hbWVzIHRvIGVudGl0eSB0eXBlXG4gICovXG4gIGVudGl0eUNvbGxlY3Rpb25zXG5cbiAgLyoqXG4gICogQGNvbnN0cnVjdG9yXG4gICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZW50aXR5Q29sbGVjdGlvbnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAqIEdldHMgYSBtb2RlbCBieSBuYW1lLCBjcmVhdGluZyBpZiBuZWNlc3NhcnlcbiAgKi9cbiAgc3RhdGljIGdldE9yQ3JlYXRlKCBtb2RlbE5hbWUgKSB7XG5cbiAgICBsZXQgbW9kZWwgPSBtb2RlbHNbbW9kZWxOYW1lXTtcbiAgICBpZiAoIW1vZGVsKSB7XG4gICAgICBtb2RlbHNbbW9kZWxOYW1lXSA9IG1vZGVsID0gbmV3IE1vZGVsTWV0YWRhdGEobW9kZWxOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

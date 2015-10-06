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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9tZXRhZGF0YS9tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR08sSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDOzs7O0lBS1osYUFBYTtBQVViLFdBVkEsYUFBYSxHQVVWOzBCQVZILGFBQWE7O0FBV3RCLFFBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7R0FDN0I7O2VBWlUsYUFBYTs7V0FpQk4scUJBQUUsU0FBUyxFQUFHOztBQUU5QixVQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUIsVUFBSSxDQUFDLEtBQUssRUFBRTtBQUNWLGNBQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7T0FDMUQ7QUFDRCxhQUFPLEtBQUssQ0FBQztLQUNkOzs7U0F4QlUsYUFBYSIsImZpbGUiOiJsaWIvbWV0YWRhdGEvbW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuKiBUaGUgbWFwIG9mIG5hbWVzIHRvIG1vZGVsIG1ldGFkYXRhXHJcbiovXHJcbmV4cG9ydCBjb25zdCBtb2RlbHMgPSB7fTtcclxuXHJcbi8qKlxyXG4qIFRoZSBtb2RlbCBtZXRhZGF0YSBjbGFzc1xyXG4qL1xyXG5leHBvcnQgY2xhc3MgTW9kZWxNZXRhZGF0YSB7XHJcblxyXG4gIC8qKlxyXG4gICogVGhlIG1hcCBvZiBlbnRpdHkgY29sbGVjdGlvbiBuYW1lcyB0byBlbnRpdHkgdHlwZVxyXG4gICovXHJcbiAgZW50aXR5Q29sbGVjdGlvbnNcclxuXHJcbiAgLyoqXHJcbiAgKiBAY29uc3RydWN0b3JcclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5lbnRpdHlDb2xsZWN0aW9ucyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBHZXRzIGEgbW9kZWwgYnkgbmFtZSwgY3JlYXRpbmcgaWYgbmVjZXNzYXJ5XHJcbiAgKi9cclxuICBzdGF0aWMgZ2V0T3JDcmVhdGUoIG1vZGVsTmFtZSApIHtcclxuXHJcbiAgICBsZXQgbW9kZWwgPSBtb2RlbHNbbW9kZWxOYW1lXTtcclxuICAgIGlmICghbW9kZWwpIHtcclxuICAgICAgbW9kZWxzW21vZGVsTmFtZV0gPSBtb2RlbCA9IG5ldyBNb2RlbE1ldGFkYXRhKG1vZGVsTmFtZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbW9kZWw7XHJcbiAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

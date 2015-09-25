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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9tZXRhZGF0YS9tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR08sSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDOzs7O0lBS1osYUFBYTtBQUliLFdBSkEsYUFBYSxHQUlWOzBCQUpILGFBQWE7O1NBRXhCLFFBQVEsR0FBRyxFQUFFO0dBSVo7O2VBTlUsYUFBYTs7V0FXTixxQkFBRSxTQUFTLEVBQUc7O0FBRTlCLFVBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM5QixVQUFJLENBQUMsS0FBSyxFQUFFO0FBQ1YsY0FBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztPQUMxRDtBQUNELGFBQU8sS0FBSyxDQUFDO0tBQ2Q7OztTQWxCVSxhQUFhIiwiZmlsZSI6ImxpYi9tZXRhZGF0YS9tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuKiBUaGUgbWFwIG9mIG5hbWVzIHRvIG1vZGVsIG1ldGFkYXRhXG4qL1xuZXhwb3J0IGNvbnN0IG1vZGVscyA9IHt9O1xuXG4vKipcbiogVGhlIG1vZGVsIG1ldGFkYXRhIGNsYXNzXG4qL1xuZXhwb3J0IGNsYXNzIE1vZGVsTWV0YWRhdGEge1xuXG4gIGVudGl0aWVzID0gW11cblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgLyoqXG4gICogR2V0cyBhIG1vZGVsIGJ5IG5hbWUsIGNyZWF0aW5nIGlmIG5lY2Vzc2FyeVxuICAqL1xuICBzdGF0aWMgZ2V0T3JDcmVhdGUoIG1vZGVsTmFtZSApIHtcblxuICAgIGxldCBtb2RlbCA9IG1vZGVsc1ttb2RlbE5hbWVdO1xuICAgIGlmICghbW9kZWwpIHtcbiAgICAgIG1vZGVsc1ttb2RlbE5hbWVdID0gbW9kZWwgPSBuZXcgTW9kZWxNZXRhZGF0YShtb2RlbE5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
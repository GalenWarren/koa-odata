System.register(["./expressionVisitor"], function (_export) {
  "use strict";

  var ExpressionVisitor, ParameterizingVisitor;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_expressionVisitor) {
      ExpressionVisitor = _expressionVisitor.ExpressionVisitor;
    }],
    execute: function () {
      ParameterizingVisitor = (function (_ExpressionVisitor) {
        _inherits(ParameterizingVisitor, _ExpressionVisitor);

        function ParameterizingVisitor() {
          var parametersName = arguments.length <= 0 || arguments[0] === undefined ? "parms" : arguments[0];

          _classCallCheck(this, ParameterizingVisitor);

          _get(Object.getPrototypeOf(ParameterizingVisitor.prototype), "constructor", this).call(this);
          this.parameters = [];
          this.parametersName = parametersName;
        }

        _createClass(ParameterizingVisitor, [{
          key: "visitLiteral",
          value: function visitLiteral(node) {

            debugger;

            var index = this.parameters.length;
            this.parameters.push(node.value);

            return {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "name": this.parametersName
              },
              "property": {
                "type": "Literal",
                "value": index,
                "raw": index.toString()
              }
            };
          }
        }]);

        return ParameterizingVisitor;
      })(ExpressionVisitor);

      _export("ParameterizingVisitor", ParameterizingVisitor);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9leHByZXNzaW9ucy9wYXJhbWV0ZXJpemluZ1Zpc2l0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3lCQUVhLHFCQUFxQjs7Ozs7Ozs7Ozs7OzZDQUYxQixpQkFBaUI7OztBQUVaLDJCQUFxQjtrQkFBckIscUJBQXFCOztBQVVyQixpQkFWQSxxQkFBcUIsR0FVUTtjQUEzQixjQUFjLHlEQUFHLE9BQU87O2dDQVYxQixxQkFBcUI7O0FBVzlCLHFDQVhTLHFCQUFxQiw2Q0FXdEI7ZUFOVixVQUFVLEdBQUcsRUFBRTtBQU9iLGNBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1NBQ3RDOztxQkFiVSxxQkFBcUI7O2lCQWtCcEIsc0JBQUUsSUFBSSxFQUFHOztBQUVuQixxQkFBUzs7QUFHVCxnQkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7QUFDckMsZ0JBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFHakMsbUJBQU87QUFDTCxvQkFBTSxFQUFFLGtCQUFrQjtBQUMxQix3QkFBVSxFQUFFLElBQUk7QUFDaEIsc0JBQVEsRUFBRTtBQUNSLHNCQUFNLEVBQUUsWUFBWTtBQUNwQixzQkFBTSxFQUFFLElBQUksQ0FBQyxjQUFjO2VBQzVCO0FBQ0Qsd0JBQVUsRUFBRTtBQUNWLHNCQUFNLEVBQUUsU0FBUztBQUNqQix1QkFBTyxFQUFFLEtBQUs7QUFDZCxxQkFBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUU7ZUFDeEI7YUFDRixDQUFDO1dBQ0g7OztlQXhDVSxxQkFBcUI7U0FBUyxpQkFBaUIiLCJmaWxlIjoibGliL2V4cHJlc3Npb25zL3BhcmFtZXRlcml6aW5nVmlzaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXhwcmVzc2lvblZpc2l0b3J9IGZyb20gXCIuL2V4cHJlc3Npb25WaXNpdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyaXppbmdWaXNpdG9yIGV4dGVuZHMgRXhwcmVzc2lvblZpc2l0b3Ige1xyXG5cclxuICAvKipcclxuICAqIFRoZSBwYXJhbWV0ZXJzIHRoYXQgYXJlIGRldGVjdGVkXHJcbiAgKi9cclxuICBwYXJhbWV0ZXJzID0gW11cclxuXHJcbiAgLyoqXHJcbiAgKiBDb25zdHJ1Y3Qgd2l0aCB0aGUgbmFtZSBvZiB0aGUgZXhwcmVzc2lvbiB0aGF0IHdpbGwgaG9sZCB0aGUgcGFybXNcclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKCBwYXJhbWV0ZXJzTmFtZSA9IFwicGFybXNcIiApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnBhcmFtZXRlcnNOYW1lID0gcGFyYW1ldGVyc05hbWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFZpc2l0IGEgbGl0ZXJhbCBleHByZXNzaW9uXHJcbiAgKi9cclxuICB2aXNpdExpdGVyYWwoIG5vZGUgKSB7XHJcblxyXG4gICAgZGVidWdnZXI7XHJcblxyXG4gICAgLy8gY2FwdHVyZSB0aGUgcGFyYW1ldGVyXHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucGFyYW1ldGVycy5sZW5ndGg7XHJcbiAgICB0aGlzLnBhcmFtZXRlcnMucHVzaChub2RlLnZhbHVlKTtcclxuXHJcbiAgICAvLyByZXBsYWNlIHdpdGggYSBtZW1iZXIgZXhwcmVzc2lvbiBub2RlXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBcInR5cGVcIjogXCJNZW1iZXJFeHByZXNzaW9uXCIsXHJcbiAgICAgIFwiY29tcHV0ZWRcIjogdHJ1ZSxcclxuICAgICAgXCJvYmplY3RcIjoge1xyXG4gICAgICAgIFwidHlwZVwiOiBcIklkZW50aWZpZXJcIixcclxuICAgICAgICBcIm5hbWVcIjogdGhpcy5wYXJhbWV0ZXJzTmFtZVxyXG4gICAgICB9LFxyXG4gICAgICBcInByb3BlcnR5XCI6IHtcclxuICAgICAgICBcInR5cGVcIjogXCJMaXRlcmFsXCIsXHJcbiAgICAgICAgXCJ2YWx1ZVwiOiBpbmRleCxcclxuICAgICAgICBcInJhd1wiOiBpbmRleC50b1N0cmluZygpXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
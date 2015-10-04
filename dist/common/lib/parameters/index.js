"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _aureliaDependencyInjection = require("aurelia-dependency-injection");

var _odataParser = require("odata-parser");

var _odataParser2 = _interopRequireDefault(_odataParser);

var _top = require("./top");

var _select = require("./select");

var _filter = require("./filter");

var _expressionsUtilities = require("../expressions/utilities");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var Parameters = (function () {
  function Parameters() {
    _classCallCheck(this, _Parameters);

    for (var _len = arguments.length, parameters = Array(_len), _key = 0; _key < _len; _key++) {
      parameters[_key] = arguments[_key];
    }

    this.parameters = new Map((0, _lodash2["default"])(parameters).map(function (p) {
      return [p.key, p];
    }).value());
  }

  _createClass(Parameters, [{
    key: "parse",
    value: function parse(context, pipeline) {
      var _this = this;

      var expression = {
        "type": "Identifier",
        "name": _expressionsUtilities.collectionName
      };

      if (context.request.querystring) {
        var ast = _odataParser2["default"].parse(decodeURI(context.request.querystring));

        expression = (0, _lodash2["default"])(ast).pairs().map(function (tuple) {
          var _tuple = _slicedToArray(tuple, 2);

          var key = _tuple[0];
          var value = _tuple[1];

          var parameter = _this.parameters.get(key);
          if (!parameter) {
            throw new Error("Parameter " + key + " is not supported");
          }
          tuple.push(parameter);
          return tuple;
        }, this).sortBy(function (tuple) {
          return tuple[2].order;
        }).reduce(function (inputExpression, tuple) {
          var _tuple2 = _slicedToArray(tuple, 3);

          var key = _tuple2[0];
          var value = _tuple2[1];
          var parameter = _tuple2[2];

          return parameter.parse(value, inputExpression, context, pipeline);
        }, expression);
      }

      return expression;
    }
  }]);

  var _Parameters = Parameters;
  Parameters = (0, _aureliaDependencyInjection.inject)(_top.TopParameter, _select.SelectParameter, _filter.FilterParameter)(Parameters) || Parameters;
  return Parameters;
})();

exports.Parameters = Parameters;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9wYXJhbWV0ZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OzBDQUErQiw4QkFBOEI7OzJCQUMxQyxjQUFjOzs7O21CQUNOLE9BQU87O3NCQUNKLFVBQVU7O3NCQUNWLFVBQVU7O29DQUNHLDBCQUEwQjs7c0JBQ3ZELFFBQVE7Ozs7SUFVVCxVQUFVO0FBVVYsV0FWQSxVQUFVLEdBVVE7OztzQ0FBYixVQUFVO0FBQVYsZ0JBQVU7OztBQUN4QixRQUFJLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxDQUFFLHlCQUFFLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxVQUFBLENBQUM7YUFBSSxDQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFFO0tBQUEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7R0FDM0U7O2VBWlUsVUFBVTs7V0FpQmhCLGVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRzs7O0FBSXpCLFVBQUksVUFBVSxHQUFHO0FBQ2YsY0FBTSxFQUFFLFlBQVk7QUFDcEIsY0FBTSxzQ0FBZ0I7T0FDdkIsQ0FBQzs7QUFHRixVQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO0FBRy9CLFlBQUksR0FBRyxHQUFHLHlCQUFPLEtBQUssQ0FBRSxTQUFTLENBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUUsQ0FBQyxDQUFDOztBQUdsRSxrQkFBVSxHQUFHLHlCQUFFLEdBQUcsQ0FBQyxDQUNoQixLQUFLLEVBQUUsQ0FDUCxHQUFHLENBQUUsVUFBQSxLQUFLLEVBQUk7c0NBRVEsS0FBSzs7Y0FBbkIsR0FBRztjQUFFLEtBQUs7O0FBQ2pCLGNBQU0sU0FBUyxHQUFHLE1BQUssVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMzQyxjQUFJLENBQUMsU0FBUyxFQUFFO0FBQ2Qsa0JBQU0sSUFBSSxLQUFLLGdCQUFjLEdBQUcsdUJBQW9CLENBQUM7V0FDdEQ7QUFDRCxlQUFLLENBQUMsSUFBSSxDQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZCLGlCQUFPLEtBQUssQ0FBQztTQUVkLEVBQUUsSUFBSSxDQUFFLENBQ1IsTUFBTSxDQUFFLFVBQUEsS0FBSztpQkFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztTQUFBLENBQUUsQ0FDakMsTUFBTSxDQUFFLFVBQUUsZUFBZSxFQUFFLEtBQUssRUFBTTt1Q0FFTCxLQUFLOztjQUE5QixHQUFHO2NBQUUsS0FBSztjQUFFLFNBQVM7O0FBQzVCLGlCQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFFLENBQUM7U0FFckUsRUFBRSxVQUFVLENBQUUsQ0FBQztPQUNuQjs7QUFHRCxhQUFPLFVBQVUsQ0FBQztLQUVuQjs7O29CQTFEVSxVQUFVO0FBQVYsWUFBVSxHQUx0Qiw0R0FJQSxDQUNZLFVBQVUsS0FBVixVQUFVO1NBQVYsVUFBVSIsImZpbGUiOiJsaWIvcGFyYW1ldGVycy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2luZ2xldG9uLGluamVjdH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcbmltcG9ydCBwYXJzZXIgZnJvbSBcIm9kYXRhLXBhcnNlclwiO1xuaW1wb3J0IHtUb3BQYXJhbWV0ZXJ9IGZyb20gXCIuL3RvcFwiO1xuaW1wb3J0IHtTZWxlY3RQYXJhbWV0ZXJ9IGZyb20gXCIuL3NlbGVjdFwiO1xuaW1wb3J0IHtGaWx0ZXJQYXJhbWV0ZXJ9IGZyb20gXCIuL2ZpbHRlclwiO1xuaW1wb3J0IHtmdW5jdGlvbnNOYW1lLGNvbGxlY3Rpb25OYW1lfSBmcm9tIFwiLi4vZXhwcmVzc2lvbnMvdXRpbGl0aWVzXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbi8qKlxuKiBDbGFzcyB0byBmYWNpbGl0YXRlIHBhcmFtZXRlciBwcm9jZXNzaW5nXG4qL1xuQGluamVjdChcbiAgVG9wUGFyYW1ldGVyLFxuICBTZWxlY3RQYXJhbWV0ZXIsXG4gIEZpbHRlclBhcmFtZXRlclxuKVxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlcnMge1xuXG4gIC8qKlxuICAqIFRoZSBtYXAgb2Ygb2RhdGEgcGFyYW1ldGVycyB0aGF0IHdlIGNhbiBwYXJzZVxuICAqL1xuICBwYXJhbWV0ZXJzXG5cbiAgLyoqXG4gICogQ29uc3RydWN0aW9uXG4gICovXG4gIGNvbnN0cnVjdG9yKCAuLi5wYXJhbWV0ZXJzICkge1xuICAgIHRoaXMucGFyYW1ldGVycyA9IG5ldyBNYXAoIF8ocGFyYW1ldGVycykubWFwKCBwID0+IFsgcC5rZXksIHAgXSkudmFsdWUoKSk7XG4gIH1cblxuICAvKipcbiAgKiBDYWxsZWQgdG8gZ2VuZXJhdGUgYW4gZXhwcmVzc2lvbiBmcm9tIHRoZSByZXF1ZXN0IGNvbnRleHRcbiAgKi9cbiAgcGFyc2UoIGNvbnRleHQsIHBpcGVsaW5lICkge1xuXG4gICAgLy8gZ2VuZXJhdGUgdGhlIGluaXRpYWwgZXhwcmVzc2lvbiwgd2hpY2ggaXMganVzdCB0aGUgY29sbGVjdGlvblxuICAgIC8vIGlkZW50aWZpZXIgKHdoaWNoIGlzIGFzc3VtZWQgdG8gYmUgYSBsb2Rhc2ggd3JhcHBlcilcbiAgICBsZXQgZXhwcmVzc2lvbiA9IHtcbiAgICAgIFwidHlwZVwiOiBcIklkZW50aWZpZXJcIixcbiAgICAgIFwibmFtZVwiOiBjb2xsZWN0aW9uTmFtZVxuICAgIH07XG5cbiAgICAvLyBxdWVyeSBzdHJpbmcgZXhpc3RzP1xuICAgIGlmIChjb250ZXh0LnJlcXVlc3QucXVlcnlzdHJpbmcpIHtcblxuICAgICAgLy8geWVzLCBwYXJzZSB0aGUgcXVlcnkgc3RyaW5nIHVzaW5nIG9kYXRhLXBhcnNlciBsaWJyYXJ5IC4uLlxuICAgICAgbGV0IGFzdCA9IHBhcnNlci5wYXJzZSggZGVjb2RlVVJJKCBjb250ZXh0LnJlcXVlc3QucXVlcnlzdHJpbmcgKSk7XG5cbiAgICAgIC8vIGJ1aWxkIHVwIHRoZSBleHByZXNzaW9uIGZyb20gdGhlIHF1ZXJ5IHN0cmluZyBhc3RcbiAgICAgIGV4cHJlc3Npb24gPSBfKGFzdClcbiAgICAgICAgLnBhaXJzKClcbiAgICAgICAgLm1hcCggdHVwbGUgPT4ge1xuXG4gICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gdHVwbGU7XG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gdGhpcy5wYXJhbWV0ZXJzLmdldChrZXkpO1xuICAgICAgICAgIGlmICghcGFyYW1ldGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFBhcmFtZXRlciAke2tleX0gaXMgbm90IHN1cHBvcnRlZGApO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0dXBsZS5wdXNoKCBwYXJhbWV0ZXIpO1xuICAgICAgICAgIHJldHVybiB0dXBsZTtcblxuICAgICAgICB9LCB0aGlzIClcbiAgICAgICAgLnNvcnRCeSggdHVwbGUgPT4gdHVwbGVbMl0ub3JkZXIgKVxuICAgICAgICAucmVkdWNlKCAoIGlucHV0RXhwcmVzc2lvbiwgdHVwbGUgKSA9PiB7XG5cbiAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZSwgcGFyYW1ldGVyXSA9IHR1cGxlO1xuICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXIucGFyc2UoIHZhbHVlLCBpbnB1dEV4cHJlc3Npb24sIGNvbnRleHQsIHBpcGVsaW5lICk7XG5cbiAgICAgICAgfSwgZXhwcmVzc2lvbiApO1xuICAgIH1cblxuICAgIC8vIHJldHVybiB0aGUgZmluYWwgZXhwcmVzc2lvblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuXG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

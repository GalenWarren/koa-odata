"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _aureliaDependencyInjection = require("aurelia-dependency-injection");

var _base = require("./base");

var _state = require("./state");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _escodegen = require("escodegen");

var _escodegen2 = _interopRequireDefault(_escodegen);

var _expressionsUtilities = require("../expressions/utilities");

var _lruCache = require("lru-cache");

var _lruCache2 = _interopRequireDefault(_lruCache);

var PreparePipelineComponent = (function (_PipelineComponent) {
  _inherits(PreparePipelineComponent, _PipelineComponent);

  function PreparePipelineComponent(options, cache) {
    _classCallCheck(this, _PreparePipelineComponent);

    _get(Object.getPrototypeOf(_PreparePipelineComponent.prototype), "constructor", this).call(this, options);
    this.cache = cache;
  }

  _createClass(PreparePipelineComponent, [{
    key: "process",
    value: function* process(next, context, pipeline) {
      console.log(JSON.stringify(context.state.odata.expression, null, 5));

      var functionCode = _escodegen2["default"].generate({
        "type": "BlockStatement",
        "body": [{
          "type": "ExpressionStatement",
          "expression": {
            "type": "Literal",
            "value": "use strict",
            "raw": "\"use strict\""
          }
        }, {
          "type": "ReturnStatement",
          "argument": {

            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": _expressionsUtilities.functionsName
              },
              "property": {
                "type": "Identifier",
                "name": "getValue"
              }
            },
            "arguments": [context.state.odata.expression]
          }
        }]
      }, {
        format: {
          compact: true
        }
      });

      console.log(functionCode);

      var get = this.cache.get(functionCode);
      if (!get) {
        get = new Function(_expressionsUtilities.collectionName, _expressionsUtilities.parametersName, _expressionsUtilities.functionsName, functionCode);
        this.cache.set(functionCode, get);
      }

      context.state.odata.get = get;

      yield next;
    }
  }]);

  var _PreparePipelineComponent = PreparePipelineComponent;
  PreparePipelineComponent = (0, _aureliaDependencyInjection.inject)("options", _lruCache2["default"])(PreparePipelineComponent) || PreparePipelineComponent;
  return PreparePipelineComponent;
})(_base.PipelineComponent);

exports.PreparePipelineComponent = PreparePipelineComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9waXBlbGluZS9wcmVwYXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7MENBQXFCLDhCQUE4Qjs7b0JBQ25CLFFBQVE7O3FCQUNaLFNBQVM7O3NCQUN2QixRQUFROzs7O3lCQUNBLFdBQVc7Ozs7b0NBQ3lCLDBCQUEwQjs7d0JBQ2xFLFdBQVc7Ozs7SUFPaEIsd0JBQXdCO1lBQXhCLHdCQUF3Qjs7QUFLeEIsV0FMQSx3QkFBd0IsQ0FLdEIsT0FBTyxFQUFFLEtBQUssRUFBRzs7O0FBQzVCLHFHQUFNLE9BQU8sRUFBRTtBQUNmLFFBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0dBQ3BCOztlQVJVLHdCQUF3Qjs7V0FhM0Isa0JBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUc7QUFHbEMsYUFBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQzs7QUFHeEUsVUFBTSxZQUFZLEdBQUcsdUJBQVUsUUFBUSxDQUFDO0FBQ3RDLGNBQU0sRUFBRSxnQkFBZ0I7QUFDeEIsY0FBTSxFQUFFLENBQ0o7QUFDSSxnQkFBTSxFQUFFLHFCQUFxQjtBQUM3QixzQkFBWSxFQUFFO0FBQ1Ysa0JBQU0sRUFBRSxTQUFTO0FBQ2pCLG1CQUFPLEVBQUUsWUFBWTtBQUNyQixpQkFBSyxFQUFFLGdCQUFnQjtXQUMxQjtTQUNKLEVBQ0Q7QUFDSSxnQkFBTSxFQUFFLGlCQUFpQjtBQUN6QixvQkFBVSxFQUFFOztBQUVWLGtCQUFNLEVBQUUsZ0JBQWdCO0FBQ3hCLG9CQUFRLEVBQUU7QUFDTixvQkFBTSxFQUFFLGtCQUFrQjtBQUMxQix3QkFBVSxFQUFFLEtBQUs7QUFDakIsc0JBQVEsRUFBRTtBQUNOLHNCQUFNLEVBQUUsWUFBWTtBQUNwQixzQkFBTSxxQ0FBZTtlQUN4QjtBQUNELHdCQUFVLEVBQUU7QUFDUixzQkFBTSxFQUFFLFlBQVk7QUFDcEIsc0JBQU0sRUFBRSxVQUFVO2VBQ3JCO2FBQ0o7QUFDRCx1QkFBVyxFQUFFLENBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFFO1dBQ2hEO1NBQ0osQ0FDRjtPQUNGLEVBQ0Q7QUFDRSxjQUFNLEVBQUU7QUFDTixpQkFBTyxFQUFFLElBQUk7U0FDZDtPQUNGLENBQ0YsQ0FBQzs7QUFFRixhQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDOztBQUcxQixVQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxVQUFJLENBQUMsR0FBRyxFQUFFO0FBQ1IsV0FBRyxHQUFHLElBQUksUUFBUSxrSEFBaUQsWUFBWSxDQUFFLENBQUM7QUFDbEYsWUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsWUFBWSxFQUFFLEdBQUcsQ0FBRSxDQUFBO09BQ3BDOztBQUdELGFBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7O0FBRTlCLFlBQU0sSUFBSSxDQUFDO0tBRVo7OztrQ0F6RVUsd0JBQXdCO0FBQXhCLDBCQUF3QixHQURwQyx3Q0FBTyxTQUFTLHdCQUFRLENBQ1osd0JBQXdCLEtBQXhCLHdCQUF3QjtTQUF4Qix3QkFBd0IiLCJmaWxlIjoibGliL3BpcGVsaW5lL3ByZXBhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcbmltcG9ydCB7UGlwZWxpbmVDb21wb25lbnR9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7UGlwZWxpbmVTdGF0ZX0gZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBlc2NvZGVnZW4gZnJvbSBcImVzY29kZWdlblwiO1xuaW1wb3J0IHtwYXJhbWV0ZXJzTmFtZSxmdW5jdGlvbnNOYW1lLGNvbGxlY3Rpb25OYW1lfSBmcm9tIFwiLi4vZXhwcmVzc2lvbnMvdXRpbGl0aWVzXCI7XG5pbXBvcnQgQ2FjaGUgZnJvbSBcImxydS1jYWNoZVwiO1xuXG5cbi8qKlxuKiBUaGUgcGlwZWxpbmUgY29tcG9uZW50IHRvIHBhcnNlIHRoZSBvZGF0YSByZXF1ZXN0XG4qL1xuQGluamVjdChcIm9wdGlvbnNcIiwgQ2FjaGUpXG5leHBvcnQgY2xhc3MgUHJlcGFyZVBpcGVsaW5lQ29tcG9uZW50IGV4dGVuZHMgUGlwZWxpbmVDb21wb25lbnQge1xuXG4gIC8qKlxuICAqIENvbnN0cnVjdGlvblxuICAqL1xuICBjb25zdHJ1Y3Rvciggb3B0aW9ucywgY2FjaGUgKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICB9XG5cbiAgLyoqXG4gICogUmV0dXJucyBhIGtvYSBtaWRkbGV3YXJlIGZ1bmN0aW9uIHRoYXQgcGFyc2VzIHRoZSByZXF1ZXN0XG4gICovXG4gICpwcm9jZXNzKCBuZXh0LCBjb250ZXh0LCBwaXBlbGluZSApIHtcblxuICAgIC8vIHJlbW92ZSFcbiAgICBjb25zb2xlLmxvZyggSlNPTi5zdHJpbmdpZnkoIGNvbnRleHQuc3RhdGUub2RhdGEuZXhwcmVzc2lvbiwgbnVsbCwgNSApKTtcblxuICAgIC8vIHBhcnNlIHRoZSBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIGZ1bmN0aW9uIGNvZGVcbiAgICBjb25zdCBmdW5jdGlvbkNvZGUgPSBlc2NvZGVnZW4uZ2VuZXJhdGUoe1xuICAgICAgXCJ0eXBlXCI6IFwiQmxvY2tTdGF0ZW1lbnRcIixcbiAgICAgIFwiYm9keVwiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJFeHByZXNzaW9uU3RhdGVtZW50XCIsXG4gICAgICAgICAgICAgIFwiZXhwcmVzc2lvblwiOiB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJMaXRlcmFsXCIsXG4gICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwidXNlIHN0cmljdFwiLFxuICAgICAgICAgICAgICAgICAgXCJyYXdcIjogXCJcXFwidXNlIHN0cmljdFxcXCJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcIlJldHVyblN0YXRlbWVudFwiLFxuICAgICAgICAgICAgICBcImFyZ3VtZW50XCI6IHtcblxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkNhbGxFeHByZXNzaW9uXCIsXG4gICAgICAgICAgICAgICAgXCJjYWxsZWVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJNZW1iZXJFeHByZXNzaW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29tcHV0ZWRcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIklkZW50aWZpZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBmdW5jdGlvbnNOYW1lXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwicHJvcGVydHlcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiSWRlbnRpZmllclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZ2V0VmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImFyZ3VtZW50c1wiOiBbIGNvbnRleHQuc3RhdGUub2RhdGEuZXhwcmVzc2lvbiBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgIGNvbXBhY3Q6IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG5cbiAgICBjb25zb2xlLmxvZyhmdW5jdGlvbkNvZGUpO1xuXG4gICAgLy8gdHJ5IHRvIGZpbmQgYSBjYWNoZWQgZnVuY3Rpb25cbiAgICBsZXQgZ2V0ID0gdGhpcy5jYWNoZS5nZXQoZnVuY3Rpb25Db2RlKTtcbiAgICBpZiAoIWdldCkge1xuICAgICAgZ2V0ID0gbmV3IEZ1bmN0aW9uKCBjb2xsZWN0aW9uTmFtZSwgcGFyYW1ldGVyc05hbWUsIGZ1bmN0aW9uc05hbWUsIGZ1bmN0aW9uQ29kZSApO1xuICAgICAgdGhpcy5jYWNoZS5zZXQoIGZ1bmN0aW9uQ29kZSwgZ2V0IClcbiAgICB9XG5cbiAgICAvLyBhc3NpZ24gdGhlIGZ1bmN0aW9uIHRvIHRoZSBjb250ZXh0XG4gICAgY29udGV4dC5zdGF0ZS5vZGF0YS5nZXQgPSBnZXQ7XG5cbiAgICB5aWVsZCBuZXh0O1xuXG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

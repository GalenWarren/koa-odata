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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9waXBlbGluZS9wcmVwYXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7MENBQXFCLDhCQUE4Qjs7b0JBQ25CLFFBQVE7O3FCQUNaLFNBQVM7O3NCQUN2QixRQUFROzs7O3lCQUNBLFdBQVc7Ozs7b0NBQ3lCLDBCQUEwQjs7d0JBQ2xFLFdBQVc7Ozs7SUFPaEIsd0JBQXdCO2NBQXhCLHdCQUF3Qjs7QUFLeEIsYUFMQSx3QkFBd0IsQ0FLdEIsT0FBTyxFQUFFLEtBQUssRUFBRzs7O0FBQzVCLHlHQUFNLE9BQU8sRUFBRTtBQUNmLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3BCOztpQkFSVSx3QkFBd0I7O2VBYTNCLGtCQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFHO0FBR2xDLG1CQUFPLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUUsQ0FBQyxDQUFDOztBQUd4RSxnQkFBTSxZQUFZLEdBQUcsdUJBQVUsUUFBUSxDQUFDO0FBQ3RDLHNCQUFNLEVBQUUsZ0JBQWdCO0FBQ3hCLHNCQUFNLEVBQUUsQ0FDSjtBQUNJLDBCQUFNLEVBQUUscUJBQXFCO0FBQzdCLGdDQUFZLEVBQUU7QUFDViw4QkFBTSxFQUFFLFNBQVM7QUFDakIsK0JBQU8sRUFBRSxZQUFZO0FBQ3JCLDZCQUFLLEVBQUUsZ0JBQWdCO3FCQUMxQjtpQkFDSixFQUNEO0FBQ0ksMEJBQU0sRUFBRSxpQkFBaUI7QUFDekIsOEJBQVUsRUFBRTs7QUFFViw4QkFBTSxFQUFFLGdCQUFnQjtBQUN4QixnQ0FBUSxFQUFFO0FBQ04sa0NBQU0sRUFBRSxrQkFBa0I7QUFDMUIsc0NBQVUsRUFBRSxLQUFLO0FBQ2pCLG9DQUFRLEVBQUU7QUFDTixzQ0FBTSxFQUFFLFlBQVk7QUFDcEIsc0NBQU0scUNBQWU7NkJBQ3hCO0FBQ0Qsc0NBQVUsRUFBRTtBQUNSLHNDQUFNLEVBQUUsWUFBWTtBQUNwQixzQ0FBTSxFQUFFLFVBQVU7NkJBQ3JCO3lCQUNKO0FBQ0QsbUNBQVcsRUFBRSxDQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBRTtxQkFDaEQ7aUJBQ0osQ0FDRjthQUNGLEVBQ0Q7QUFDRSxzQkFBTSxFQUFFO0FBQ04sMkJBQU8sRUFBRSxJQUFJO2lCQUNkO2FBQ0YsQ0FDRixDQUFDOztBQUVGLG1CQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDOztBQUcxQixnQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdkMsZ0JBQUksQ0FBQyxHQUFHLEVBQUU7QUFDUixtQkFBRyxHQUFHLElBQUksUUFBUSxrSEFBaUQsWUFBWSxDQUFFLENBQUM7QUFDbEYsb0JBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFFLFlBQVksRUFBRSxHQUFHLENBQUUsQ0FBQTthQUNwQzs7QUFHRCxtQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzs7QUFFOUIsa0JBQU0sSUFBSSxDQUFDO1NBRVo7OztvQ0F6RVUsd0JBQXdCO0FBQXhCLDRCQUF3QixHQURwQyx3Q0FBTyxTQUFTLHdCQUFRLENBQ1osd0JBQXdCLEtBQXhCLHdCQUF3QjtXQUF4Qix3QkFBd0IiLCJmaWxlIjoibGliL3BpcGVsaW5lL3ByZXBhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSBcImF1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb25cIjtcclxuaW1wb3J0IHtQaXBlbGluZUNvbXBvbmVudH0gZnJvbSBcIi4vYmFzZVwiO1xyXG5pbXBvcnQge1BpcGVsaW5lU3RhdGV9IGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IGVzY29kZWdlbiBmcm9tIFwiZXNjb2RlZ2VuXCI7XHJcbmltcG9ydCB7cGFyYW1ldGVyc05hbWUsZnVuY3Rpb25zTmFtZSxjb2xsZWN0aW9uTmFtZX0gZnJvbSBcIi4uL2V4cHJlc3Npb25zL3V0aWxpdGllc1wiO1xyXG5pbXBvcnQgQ2FjaGUgZnJvbSBcImxydS1jYWNoZVwiO1xyXG5cclxuXHJcbi8qKlxyXG4qIFRoZSBwaXBlbGluZSBjb21wb25lbnQgdG8gcGFyc2UgdGhlIG9kYXRhIHJlcXVlc3RcclxuKi9cclxuQGluamVjdChcIm9wdGlvbnNcIiwgQ2FjaGUpXHJcbmV4cG9ydCBjbGFzcyBQcmVwYXJlUGlwZWxpbmVDb21wb25lbnQgZXh0ZW5kcyBQaXBlbGluZUNvbXBvbmVudCB7XHJcblxyXG4gIC8qKlxyXG4gICogQ29uc3RydWN0aW9uXHJcbiAgKi9cclxuICBjb25zdHJ1Y3Rvciggb3B0aW9ucywgY2FjaGUgKSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIHRoaXMuY2FjaGUgPSBjYWNoZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogUmV0dXJucyBhIGtvYSBtaWRkbGV3YXJlIGZ1bmN0aW9uIHRoYXQgcGFyc2VzIHRoZSByZXF1ZXN0XHJcbiAgKi9cclxuICAqcHJvY2VzcyggbmV4dCwgY29udGV4dCwgcGlwZWxpbmUgKSB7XHJcblxyXG4gICAgLy8gcmVtb3ZlIVxyXG4gICAgY29uc29sZS5sb2coIEpTT04uc3RyaW5naWZ5KCBjb250ZXh0LnN0YXRlLm9kYXRhLmV4cHJlc3Npb24sIG51bGwsIDUgKSk7XHJcblxyXG4gICAgLy8gcGFyc2UgdGhlIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgZnVuY3Rpb24gY29kZVxyXG4gICAgY29uc3QgZnVuY3Rpb25Db2RlID0gZXNjb2RlZ2VuLmdlbmVyYXRlKHtcclxuICAgICAgXCJ0eXBlXCI6IFwiQmxvY2tTdGF0ZW1lbnRcIixcclxuICAgICAgXCJib2R5XCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBcInR5cGVcIjogXCJFeHByZXNzaW9uU3RhdGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgXCJleHByZXNzaW9uXCI6IHtcclxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTGl0ZXJhbFwiLFxyXG4gICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwidXNlIHN0cmljdFwiLFxyXG4gICAgICAgICAgICAgICAgICBcInJhd1wiOiBcIlxcXCJ1c2Ugc3RyaWN0XFxcIlwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBcInR5cGVcIjogXCJSZXR1cm5TdGF0ZW1lbnRcIixcclxuICAgICAgICAgICAgICBcImFyZ3VtZW50XCI6IHtcclxuXHJcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJDYWxsRXhwcmVzc2lvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJjYWxsZWVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIk1lbWJlckV4cHJlc3Npb25cIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvbXB1dGVkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiSWRlbnRpZmllclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogZnVuY3Rpb25zTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9wZXJ0eVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIklkZW50aWZpZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZ2V0VmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcImFyZ3VtZW50c1wiOiBbIGNvbnRleHQuc3RhdGUub2RhdGEuZXhwcmVzc2lvbiBdXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGZvcm1hdDoge1xyXG4gICAgICAgICAgY29tcGFjdDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhmdW5jdGlvbkNvZGUpO1xyXG5cclxuICAgIC8vIHRyeSB0byBmaW5kIGEgY2FjaGVkIGZ1bmN0aW9uXHJcbiAgICBsZXQgZ2V0ID0gdGhpcy5jYWNoZS5nZXQoZnVuY3Rpb25Db2RlKTtcclxuICAgIGlmICghZ2V0KSB7XHJcbiAgICAgIGdldCA9IG5ldyBGdW5jdGlvbiggY29sbGVjdGlvbk5hbWUsIHBhcmFtZXRlcnNOYW1lLCBmdW5jdGlvbnNOYW1lLCBmdW5jdGlvbkNvZGUgKTtcclxuICAgICAgdGhpcy5jYWNoZS5zZXQoIGZ1bmN0aW9uQ29kZSwgZ2V0IClcclxuICAgIH1cclxuXHJcbiAgICAvLyBhc3NpZ24gdGhlIGZ1bmN0aW9uIHRvIHRoZSBjb250ZXh0XHJcbiAgICBjb250ZXh0LnN0YXRlLm9kYXRhLmdldCA9IGdldDtcclxuXHJcbiAgICB5aWVsZCBuZXh0O1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
                                "name": "value"
                            }
                        },
                        "arguments": [context.state.odata.expression]
                    }
                }]
            });

            debugger;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9waXBlbGluZS9wcmVwYXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7MENBQXFCLDhCQUE4Qjs7b0JBQ25CLFFBQVE7O3FCQUNaLFNBQVM7O3NCQUN2QixRQUFROzs7O3lCQUNBLFdBQVc7Ozs7b0NBQ3lCLDBCQUEwQjs7d0JBQ2xFLFdBQVc7Ozs7SUFPaEIsd0JBQXdCO2NBQXhCLHdCQUF3Qjs7QUFLeEIsYUFMQSx3QkFBd0IsQ0FLdEIsT0FBTyxFQUFFLEtBQUssRUFBRzs7O0FBQzVCLHlHQUFNLE9BQU8sRUFBRTtBQUNmLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3BCOztpQkFSVSx3QkFBd0I7O2VBYTNCLGtCQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFHO0FBR2xDLGdCQUFNLFlBQVksR0FBRyx1QkFBVSxRQUFRLENBQUM7QUFDdEMsc0JBQU0sRUFBRSxnQkFBZ0I7QUFDeEIsc0JBQU0sRUFBRSxDQUNKO0FBQ0ksMEJBQU0sRUFBRSxxQkFBcUI7QUFDN0IsZ0NBQVksRUFBRTtBQUNWLDhCQUFNLEVBQUUsU0FBUztBQUNqQiwrQkFBTyxFQUFFLFlBQVk7QUFDckIsNkJBQUssRUFBRSxnQkFBZ0I7cUJBQzFCO2lCQUNKLEVBQ0Q7QUFDSSwwQkFBTSxFQUFFLGlCQUFpQjtBQUN6Qiw4QkFBVSxFQUFFOztBQUVWLDhCQUFNLEVBQUUsZ0JBQWdCO0FBQ3hCLGdDQUFRLEVBQUU7QUFDTixrQ0FBTSxFQUFFLGtCQUFrQjtBQUMxQixzQ0FBVSxFQUFFLEtBQUs7QUFDakIsb0NBQVEsRUFBRTtBQUNOLHNDQUFNLEVBQUUsWUFBWTtBQUNwQixzQ0FBTSxxQ0FBZTs2QkFDeEI7QUFDRCxzQ0FBVSxFQUFFO0FBQ1Isc0NBQU0sRUFBRSxZQUFZO0FBQ3BCLHNDQUFNLEVBQUUsT0FBTzs2QkFDbEI7eUJBQ0o7QUFDRCxtQ0FBVyxFQUFFLENBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFFO3FCQUNoRDtpQkFDSixDQUNGO2FBQ0YsQ0FDRixDQUFDOztBQUVGLHFCQUFTOztBQUdULGdCQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxnQkFBSSxDQUFDLEdBQUcsRUFBRTtBQUNSLG1CQUFHLEdBQUcsSUFBSSxRQUFRLGtIQUFpRCxZQUFZLENBQUUsQ0FBQztBQUNsRixvQkFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUUsWUFBWSxFQUFFLEdBQUcsQ0FBRSxDQUFBO2FBQ3BDOztBQUdELG1CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDOztBQUU5QixrQkFBTSxJQUFJLENBQUM7U0FFWjs7O29DQWpFVSx3QkFBd0I7QUFBeEIsNEJBQXdCLEdBRHBDLHdDQUFPLFNBQVMsd0JBQVEsQ0FDWix3QkFBd0IsS0FBeEIsd0JBQXdCO1dBQXhCLHdCQUF3QiIsImZpbGUiOiJsaWIvcGlwZWxpbmUvcHJlcGFyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tIFwiYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvblwiO1xyXG5pbXBvcnQge1BpcGVsaW5lQ29tcG9uZW50fSBmcm9tIFwiLi9iYXNlXCI7XHJcbmltcG9ydCB7UGlwZWxpbmVTdGF0ZX0gZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgZXNjb2RlZ2VuIGZyb20gXCJlc2NvZGVnZW5cIjtcclxuaW1wb3J0IHtwYXJhbWV0ZXJzTmFtZSxmdW5jdGlvbnNOYW1lLGNvbGxlY3Rpb25OYW1lfSBmcm9tIFwiLi4vZXhwcmVzc2lvbnMvdXRpbGl0aWVzXCI7XHJcbmltcG9ydCBDYWNoZSBmcm9tIFwibHJ1LWNhY2hlXCI7XHJcblxyXG5cclxuLyoqXHJcbiogVGhlIHBpcGVsaW5lIGNvbXBvbmVudCB0byBwYXJzZSB0aGUgb2RhdGEgcmVxdWVzdFxyXG4qL1xyXG5AaW5qZWN0KFwib3B0aW9uc1wiLCBDYWNoZSlcclxuZXhwb3J0IGNsYXNzIFByZXBhcmVQaXBlbGluZUNvbXBvbmVudCBleHRlbmRzIFBpcGVsaW5lQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqXHJcbiAgKiBDb25zdHJ1Y3Rpb25cclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zLCBjYWNoZSApIHtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBSZXR1cm5zIGEga29hIG1pZGRsZXdhcmUgZnVuY3Rpb24gdGhhdCBwYXJzZXMgdGhlIHJlcXVlc3RcclxuICAqL1xyXG4gICpwcm9jZXNzKCBuZXh0LCBjb250ZXh0LCBwaXBlbGluZSApIHtcclxuXHJcbiAgICAvLyBwYXJzZSB0aGUgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBmdW5jdGlvbiBjb2RlXHJcbiAgICBjb25zdCBmdW5jdGlvbkNvZGUgPSBlc2NvZGVnZW4uZ2VuZXJhdGUoe1xyXG4gICAgICBcInR5cGVcIjogXCJCbG9ja1N0YXRlbWVudFwiLFxyXG4gICAgICBcImJvZHlcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcIkV4cHJlc3Npb25TdGF0ZW1lbnRcIixcclxuICAgICAgICAgICAgICBcImV4cHJlc3Npb25cIjoge1xyXG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJMaXRlcmFsXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJ1c2Ugc3RyaWN0XCIsXHJcbiAgICAgICAgICAgICAgICAgIFwicmF3XCI6IFwiXFxcInVzZSBzdHJpY3RcXFwiXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcIlJldHVyblN0YXRlbWVudFwiLFxyXG4gICAgICAgICAgICAgIFwiYXJndW1lbnRcIjoge1xyXG5cclxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkNhbGxFeHByZXNzaW9uXCIsXHJcbiAgICAgICAgICAgICAgICBcImNhbGxlZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiTWVtYmVyRXhwcmVzc2lvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY29tcHV0ZWRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJvYmplY3RcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJJZGVudGlmaWVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBmdW5jdGlvbnNOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcInByb3BlcnR5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiSWRlbnRpZmllclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiYXJndW1lbnRzXCI6IFsgY29udGV4dC5zdGF0ZS5vZGF0YS5leHByZXNzaW9uIF1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGRlYnVnZ2VyO1xyXG5cclxuICAgIC8vIHRyeSB0byBmaW5kIGEgY2FjaGVkIGZ1bmN0aW9uXHJcbiAgICBsZXQgZ2V0ID0gdGhpcy5jYWNoZS5nZXQoZnVuY3Rpb25Db2RlKTtcclxuICAgIGlmICghZ2V0KSB7XHJcbiAgICAgIGdldCA9IG5ldyBGdW5jdGlvbiggY29sbGVjdGlvbk5hbWUsIHBhcmFtZXRlcnNOYW1lLCBmdW5jdGlvbnNOYW1lLCBmdW5jdGlvbkNvZGUgKTtcclxuICAgICAgdGhpcy5jYWNoZS5zZXQoIGZ1bmN0aW9uQ29kZSwgZ2V0IClcclxuICAgIH1cclxuXHJcbiAgICAvLyBhc3NpZ24gdGhlIGZ1bmN0aW9uIHRvIHRoZSBjb250ZXh0XHJcbiAgICBjb250ZXh0LnN0YXRlLm9kYXRhLmdldCA9IGdldDtcclxuXHJcbiAgICB5aWVsZCBuZXh0O1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

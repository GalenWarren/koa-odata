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

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var ErrorPipelineComponent = (function (_PipelineComponent) {
  _inherits(ErrorPipelineComponent, _PipelineComponent);

  function ErrorPipelineComponent(options) {
    _classCallCheck(this, _ErrorPipelineComponent);

    _get(Object.getPrototypeOf(_ErrorPipelineComponent.prototype), "constructor", this).call(this, options);
  }

  _createClass(ErrorPipelineComponent, [{
    key: "process",
    value: function* process(next, context, pipeline) {

      try {
        yield next;
      } catch (err) {
        context.status = err.status || 500;
        context.body = err.message;
        context.app.emit('error', err, context);
      }
    }
  }]);

  var _ErrorPipelineComponent = ErrorPipelineComponent;
  ErrorPipelineComponent = (0, _aureliaDependencyInjection.inject)("options")(ErrorPipelineComponent) || ErrorPipelineComponent;
  return ErrorPipelineComponent;
})(_base.PipelineComponent);

exports.ErrorPipelineComponent = ErrorPipelineComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9waXBlbGluZS9lcnJvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUFxQiw4QkFBOEI7O29CQUNuQixRQUFROztzQkFDMUIsUUFBUTs7OztJQU1ULHNCQUFzQjtZQUF0QixzQkFBc0I7O0FBS3RCLFdBTEEsc0JBQXNCLENBS3BCLE9BQU8sRUFBRzs7O0FBQ3JCLG1HQUFNLE9BQU8sRUFBRTtHQUNoQjs7ZUFQVSxzQkFBc0I7O1dBWXpCLGtCQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFHOztBQUVsQyxVQUFJO0FBQ0YsY0FBTSxJQUFJLENBQUM7T0FDWixDQUNELE9BQU8sR0FBRyxFQUFFO0FBR1YsZUFBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQztBQUNuQyxlQUFPLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7QUFDM0IsZUFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztPQUV6QztLQUVGOzs7Z0NBMUJVLHNCQUFzQjtBQUF0Qix3QkFBc0IsR0FEbEMsd0NBQU8sU0FBUyxDQUFDLENBQ0wsc0JBQXNCLEtBQXRCLHNCQUFzQjtTQUF0QixzQkFBc0IiLCJmaWxlIjoibGliL3BpcGVsaW5lL2Vycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gXCJhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uXCI7XG5pbXBvcnQge1BpcGVsaW5lQ29tcG9uZW50fSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbi8qKlxuKiBUaGUgcGlwZWxpbmUgY29tcG9uZW50IHRvIHBhcnNlIHRoZSBvZGF0YSByZXF1ZXN0XG4qL1xuQGluamVjdChcIm9wdGlvbnNcIilcbmV4cG9ydCBjbGFzcyBFcnJvclBpcGVsaW5lQ29tcG9uZW50IGV4dGVuZHMgUGlwZWxpbmVDb21wb25lbnQge1xuXG4gIC8qKlxuICAqIENvbnN0cnVjdGlvblxuICAqL1xuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAqIFJldHVybnMgYSBrb2EgbWlkZGxld2FyZSBmdW5jdGlvbiB0aGF0IHBhcnNlcyB0aGUgcmVxdWVzdFxuICAqL1xuICAqcHJvY2VzcyggbmV4dCwgY29udGV4dCwgcGlwZWxpbmUgKSB7XG5cbiAgICB0cnkge1xuICAgICAgeWllbGQgbmV4dDtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuXG4gICAgICAvLyBzZXQgdGhlIGVycm9yIHJldHVyblxuICAgICAgY29udGV4dC5zdGF0dXMgPSBlcnIuc3RhdHVzIHx8IDUwMDtcbiAgICAgIGNvbnRleHQuYm9keSA9IGVyci5tZXNzYWdlO1xuICAgICAgY29udGV4dC5hcHAuZW1pdCgnZXJyb3InLCBlcnIsIGNvbnRleHQpO1xuXG4gICAgfVxuXG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

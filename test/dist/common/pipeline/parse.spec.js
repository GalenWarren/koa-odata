"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _bluebird = require("bluebird");

var _bluebird2 = _interopRequireDefault(_bluebird);

var _utilities = require("../utilities");

var _utilities2 = require("./utilities");

var _chai = require("chai");

var _sourceRequire = (0, _utilities.sourceRequire)("lib/pipeline/parse");

var ParsePipelineComponent = _sourceRequire.ParsePipelineComponent;

var _sourceRequire2 = (0, _utilities.sourceRequire)("lib/pipeline/state");

var PipelineState = _sourceRequire2.PipelineState;

var _sourceRequire3 = (0, _utilities.sourceRequire)("lib/segments/entities");

var EntitiesSegment = _sourceRequire3.EntitiesSegment;

var _sourceRequire4 = (0, _utilities.sourceRequire)("sample/model");

var modelMetadata = _sourceRequire4.modelMetadata;

debugger;

var _w$exec = /(\w+)(\(([^)]+)\))?/.exec("users");

var _w$exec2 = _slicedToArray(_w$exec, 3);

var match = _w$exec2[0];
var collectionName = _w$exec2[1];
var key = _w$exec2[2];

function prepareTest(path, querystring) {

  debugger;

  var parse = _utilities.container.get(ParsePipelineComponent);
  var context = {
    state: {
      odata: new PipelineState(modelMetadata)
    },
    request: {
      path: path,
      querystring: querystring
    }
  };
  return [parse, context];
}

describe("ParsePipelineComponent", function () {

  it("adds an instance of PipelineState to the context state", function (done) {

    debugger;

    var _prepareTest = prepareTest("/users");

    var _prepareTest2 = _slicedToArray(_prepareTest, 2);

    var parse = _prepareTest2[0];
    var context = _prepareTest2[1];

    (0, _utilities2.testPipelineProcess)(parse, context).then(function () {

      debugger;

      expect(context.state.odata.segments).to.be.instanceOf(Array);
      expect(context.state.odata.segments.length).to.equal(1);
      expect(context.state.odata.segments[1]).to.be.instanceOf(EntitiesSegment);
      expect(context.state.odata.segments[1].metadata.name).to.equal("user");
    }).then(done, done);
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVsaW5lL3BhcnNlLnNwZWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O3dCQUFvQixVQUFVOzs7O3lCQUNRLGNBQWM7OzBCQUNsQixhQUFhOztvQkFDNUIsTUFBTTs7cUJBRVEsOEJBQWMsb0JBQW9CLENBQUM7O0lBQTdELHNCQUFzQixrQkFBdEIsc0JBQXNCOztzQkFDTCw4QkFBYyxvQkFBb0IsQ0FBQzs7SUFBcEQsYUFBYSxtQkFBYixhQUFhOztzQkFDTSw4QkFBYyx1QkFBdUIsQ0FBQzs7SUFBekQsZUFBZSxtQkFBZixlQUFlOztzQkFDRSw4QkFBYyxjQUFjLENBQUM7O0lBQTlDLGFBQWEsbUJBQWIsYUFBYTs7QUFFcEIsU0FBUzs7Y0FFNkIscUJBQXFCLENBQUMsSUFBSSxDQUFFLE9BQU8sQ0FBRTs7OztJQUFwRSxLQUFLO0lBQUUsY0FBYztJQUFFLEdBQUc7O0FBS2pDLFNBQVMsV0FBVyxDQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7O0FBRXZDLFdBQVM7O0FBRVQsTUFBTSxLQUFLLEdBQUcscUJBQVUsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDcEQsTUFBTSxPQUFPLEdBQUc7QUFDZCxTQUFLLEVBQUU7QUFDTCxXQUFLLEVBQUUsSUFBSSxhQUFhLENBQUMsYUFBYSxDQUFDO0tBQ3hDO0FBQ0QsV0FBTyxFQUFFO0FBQ1AsVUFBSSxFQUFFLElBQUk7QUFDVixpQkFBVyxFQUFFLFdBQVc7S0FDekI7R0FDRixDQUFDO0FBQ0YsU0FBTyxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUMsQ0FBQztDQUN4Qjs7QUFHRCxRQUFRLENBQUMsd0JBQXdCLEVBQUUsWUFBVzs7QUFFNUMsSUFBRSxDQUFDLHdEQUF3RCxFQUFFLFVBQVUsSUFBSSxFQUFHOztBQUU1RSxhQUFTOzt1QkFFZ0IsV0FBVyxDQUFFLFFBQVEsQ0FBQzs7OztRQUF4QyxLQUFLO1FBQUUsT0FBTzs7QUFFckIseUNBQXFCLEtBQUssRUFBRSxPQUFPLENBQUUsQ0FBQyxJQUFJLENBQUUsWUFBVzs7QUFFckQsZUFBUzs7QUFFVCxZQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0QsWUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hELFlBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMxRSxZQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBRXhFLENBQUMsQ0FBQyxJQUFJLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBRSxDQUFDO0dBRXZCLENBQUMsQ0FBQztDQUVKLENBQUMsQ0FBQyIsImZpbGUiOiJwaXBlbGluZS9wYXJzZS5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb21pc2UgZnJvbSBcImJsdWViaXJkXCI7XG5pbXBvcnQge3NvdXJjZVJlcXVpcmUsY29udGFpbmVyfSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XG5pbXBvcnQge3Rlc3RQaXBlbGluZVByb2Nlc3N9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuaW1wb3J0IHtjaGFpfSBmcm9tIFwiY2hhaVwiO1xuXG5jb25zdCB7UGFyc2VQaXBlbGluZUNvbXBvbmVudH0gPSBzb3VyY2VSZXF1aXJlKFwibGliL3BpcGVsaW5lL3BhcnNlXCIpO1xuY29uc3Qge1BpcGVsaW5lU3RhdGV9ID0gc291cmNlUmVxdWlyZShcImxpYi9waXBlbGluZS9zdGF0ZVwiKTtcbmNvbnN0IHtFbnRpdGllc1NlZ21lbnR9ID0gc291cmNlUmVxdWlyZShcImxpYi9zZWdtZW50cy9lbnRpdGllc1wiKTtcbmNvbnN0IHttb2RlbE1ldGFkYXRhfSA9IHNvdXJjZVJlcXVpcmUoXCJzYW1wbGUvbW9kZWxcIik7XG5cbmRlYnVnZ2VyO1xuXG5jb25zdCBbbWF0Y2gsIGNvbGxlY3Rpb25OYW1lLCBrZXkgXSA9IC8oXFx3KykoXFwoKFteKV0rKVxcKSk/Ly5leGVjKCBcInVzZXJzXCIgKTtcblxuLyoqXG4qIEhlbHBlciB0byBwcmVwYXJlIGZvciBhIHRlc3RcbiovXG5mdW5jdGlvbiBwcmVwYXJlVGVzdCggcGF0aCwgcXVlcnlzdHJpbmcpIHtcblxuICBkZWJ1Z2dlcjtcblxuICBjb25zdCBwYXJzZSA9IGNvbnRhaW5lci5nZXQoUGFyc2VQaXBlbGluZUNvbXBvbmVudCk7XG4gIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgc3RhdGU6IHtcbiAgICAgIG9kYXRhOiBuZXcgUGlwZWxpbmVTdGF0ZShtb2RlbE1ldGFkYXRhKVxuICAgIH0sXG4gICAgcmVxdWVzdDoge1xuICAgICAgcGF0aDogcGF0aCxcbiAgICAgIHF1ZXJ5c3RyaW5nOiBxdWVyeXN0cmluZ1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIFtwYXJzZSxjb250ZXh0XTtcbn1cblxuXG5kZXNjcmliZShcIlBhcnNlUGlwZWxpbmVDb21wb25lbnRcIiwgZnVuY3Rpb24oKSB7XG5cbiAgaXQoXCJhZGRzIGFuIGluc3RhbmNlIG9mIFBpcGVsaW5lU3RhdGUgdG8gdGhlIGNvbnRleHQgc3RhdGVcIiwgZnVuY3Rpb24oIGRvbmUgKSB7XG5cbiAgICBkZWJ1Z2dlcjtcblxuICAgIGNvbnN0IFtwYXJzZSwgY29udGV4dF0gPSBwcmVwYXJlVGVzdCggXCIvdXNlcnNcIik7XG5cbiAgICB0ZXN0UGlwZWxpbmVQcm9jZXNzKCBwYXJzZSwgY29udGV4dCApLnRoZW4oIGZ1bmN0aW9uKCkge1xuXG4gICAgICBkZWJ1Z2dlcjtcblxuICAgICAgZXhwZWN0KGNvbnRleHQuc3RhdGUub2RhdGEuc2VnbWVudHMpLnRvLmJlLmluc3RhbmNlT2YoQXJyYXkpO1xuICAgICAgZXhwZWN0KGNvbnRleHQuc3RhdGUub2RhdGEuc2VnbWVudHMubGVuZ3RoKS50by5lcXVhbCgxKTtcbiAgICAgIGV4cGVjdChjb250ZXh0LnN0YXRlLm9kYXRhLnNlZ21lbnRzWzFdKS50by5iZS5pbnN0YW5jZU9mKEVudGl0aWVzU2VnbWVudCk7XG4gICAgICBleHBlY3QoY29udGV4dC5zdGF0ZS5vZGF0YS5zZWdtZW50c1sxXS5tZXRhZGF0YS5uYW1lKS50by5lcXVhbChcInVzZXJcIik7XG5cbiAgICB9KS50aGVuKCBkb25lLCBkb25lICk7XG5cbiAgfSk7XG5cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

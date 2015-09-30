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

var ODataState = _sourceRequire2.ODataState;

var _sourceRequire3 = (0, _utilities.sourceRequire)("lib/segments/entities");

var EntitiesSegment = _sourceRequire3.EntitiesSegment;

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
      odata: new ODataState(_utilities.modelMetadata)
    },
    request: {
      path: path,
      querystring: querystring
    }
  };
  return [parse, context];
}

describe("ParsePipelineComponent", function () {

  it("adds an instance of ODataState to the context state", function (done) {

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVsaW5lL3BhcnNlLnNwZWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O3dCQUFvQixVQUFVOzs7O3lCQUNzQixjQUFjOzswQkFDaEMsYUFBYTs7b0JBQzVCLE1BQU07O3FCQUVRLDhCQUFjLG9CQUFvQixDQUFDOztJQUE3RCxzQkFBc0Isa0JBQXRCLHNCQUFzQjs7c0JBQ1IsOEJBQWMsb0JBQW9CLENBQUM7O0lBQWpELFVBQVUsbUJBQVYsVUFBVTs7c0JBQ1MsOEJBQWMsdUJBQXVCLENBQUM7O0lBQXpELGVBQWUsbUJBQWYsZUFBZTs7QUFFdEIsU0FBUzs7Y0FFNkIscUJBQXFCLENBQUMsSUFBSSxDQUFFLE9BQU8sQ0FBRTs7OztJQUFwRSxLQUFLO0lBQUUsY0FBYztJQUFFLEdBQUc7O0FBS2pDLFNBQVMsV0FBVyxDQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7O0FBRXZDLFdBQVM7O0FBRVQsTUFBTSxLQUFLLEdBQUcscUJBQVUsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDcEQsTUFBTSxPQUFPLEdBQUc7QUFDZCxTQUFLLEVBQUU7QUFDTCxXQUFLLEVBQUUsSUFBSSxVQUFVLDBCQUFlO0tBQ3JDO0FBQ0QsV0FBTyxFQUFFO0FBQ1AsVUFBSSxFQUFFLElBQUk7QUFDVixpQkFBVyxFQUFFLFdBQVc7S0FDekI7R0FDRixDQUFDO0FBQ0YsU0FBTyxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUMsQ0FBQztDQUN4Qjs7QUFHRCxRQUFRLENBQUMsd0JBQXdCLEVBQUUsWUFBVzs7QUFFNUMsSUFBRSxDQUFDLHFEQUFxRCxFQUFFLFVBQVUsSUFBSSxFQUFHOztBQUV6RSxhQUFTOzt1QkFFZ0IsV0FBVyxDQUFFLFFBQVEsQ0FBQzs7OztRQUF4QyxLQUFLO1FBQUUsT0FBTzs7QUFFckIseUNBQXFCLEtBQUssRUFBRSxPQUFPLENBQUUsQ0FBQyxJQUFJLENBQUUsWUFBVzs7QUFFckQsZUFBUzs7QUFFVCxZQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0QsWUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hELFlBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMxRSxZQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBRXhFLENBQUMsQ0FBQyxJQUFJLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBRSxDQUFDO0dBRXZCLENBQUMsQ0FBQztDQUVKLENBQUMsQ0FBQyIsImZpbGUiOiJwaXBlbGluZS9wYXJzZS5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb21pc2UgZnJvbSBcImJsdWViaXJkXCI7XG5pbXBvcnQge3NvdXJjZVJlcXVpcmUsbW9kZWxNZXRhZGF0YSxjb250YWluZXJ9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcbmltcG9ydCB7dGVzdFBpcGVsaW5lUHJvY2Vzc30gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5pbXBvcnQge2NoYWl9IGZyb20gXCJjaGFpXCI7XG5cbmNvbnN0IHtQYXJzZVBpcGVsaW5lQ29tcG9uZW50fSA9IHNvdXJjZVJlcXVpcmUoXCJsaWIvcGlwZWxpbmUvcGFyc2VcIik7XG5jb25zdCB7T0RhdGFTdGF0ZX0gPSBzb3VyY2VSZXF1aXJlKFwibGliL3BpcGVsaW5lL3N0YXRlXCIpO1xuY29uc3Qge0VudGl0aWVzU2VnbWVudH0gPSBzb3VyY2VSZXF1aXJlKFwibGliL3NlZ21lbnRzL2VudGl0aWVzXCIpO1xuXG5kZWJ1Z2dlcjtcblxuY29uc3QgW21hdGNoLCBjb2xsZWN0aW9uTmFtZSwga2V5IF0gPSAvKFxcdyspKFxcKChbXildKylcXCkpPy8uZXhlYyggXCJ1c2Vyc1wiICk7XG5cbi8qKlxuKiBIZWxwZXIgdG8gcHJlcGFyZSBmb3IgYSB0ZXN0XG4qL1xuZnVuY3Rpb24gcHJlcGFyZVRlc3QoIHBhdGgsIHF1ZXJ5c3RyaW5nKSB7XG5cbiAgZGVidWdnZXI7XG5cbiAgY29uc3QgcGFyc2UgPSBjb250YWluZXIuZ2V0KFBhcnNlUGlwZWxpbmVDb21wb25lbnQpO1xuICBjb25zdCBjb250ZXh0ID0ge1xuICAgIHN0YXRlOiB7XG4gICAgICBvZGF0YTogbmV3IE9EYXRhU3RhdGUobW9kZWxNZXRhZGF0YSlcbiAgICB9LFxuICAgIHJlcXVlc3Q6IHtcbiAgICAgIHBhdGg6IHBhdGgsXG4gICAgICBxdWVyeXN0cmluZzogcXVlcnlzdHJpbmdcbiAgICB9XG4gIH07XG4gIHJldHVybiBbcGFyc2UsY29udGV4dF07XG59XG5cblxuZGVzY3JpYmUoXCJQYXJzZVBpcGVsaW5lQ29tcG9uZW50XCIsIGZ1bmN0aW9uKCkge1xuXG4gIGl0KFwiYWRkcyBhbiBpbnN0YW5jZSBvZiBPRGF0YVN0YXRlIHRvIHRoZSBjb250ZXh0IHN0YXRlXCIsIGZ1bmN0aW9uKCBkb25lICkge1xuXG4gICAgZGVidWdnZXI7XG5cbiAgICBjb25zdCBbcGFyc2UsIGNvbnRleHRdID0gcHJlcGFyZVRlc3QoIFwiL3VzZXJzXCIpO1xuXG4gICAgdGVzdFBpcGVsaW5lUHJvY2VzcyggcGFyc2UsIGNvbnRleHQgKS50aGVuKCBmdW5jdGlvbigpIHtcblxuICAgICAgZGVidWdnZXI7XG5cbiAgICAgIGV4cGVjdChjb250ZXh0LnN0YXRlLm9kYXRhLnNlZ21lbnRzKS50by5iZS5pbnN0YW5jZU9mKEFycmF5KTtcbiAgICAgIGV4cGVjdChjb250ZXh0LnN0YXRlLm9kYXRhLnNlZ21lbnRzLmxlbmd0aCkudG8uZXF1YWwoMSk7XG4gICAgICBleHBlY3QoY29udGV4dC5zdGF0ZS5vZGF0YS5zZWdtZW50c1sxXSkudG8uYmUuaW5zdGFuY2VPZihFbnRpdGllc1NlZ21lbnQpO1xuICAgICAgZXhwZWN0KGNvbnRleHQuc3RhdGUub2RhdGEuc2VnbWVudHNbMV0ubWV0YWRhdGEubmFtZSkudG8uZXF1YWwoXCJ1c2VyXCIpO1xuXG4gICAgfSkudGhlbiggZG9uZSwgZG9uZSApO1xuXG4gIH0pO1xuXG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

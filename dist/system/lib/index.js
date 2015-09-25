System.register(["koa", "./pipeline/index", "./metadata/index", "./providers/index"], function (_export) {
  "use strict";

  var koa, init, parse;

  _export("odata", odata);

  function odata(options) {

    debugger;

    var app = koa();

    app.use(init(options));
    app.use(parse(options));

    return app;
  }

  return {
    setters: [function (_koa) {
      koa = _koa["default"];
    }, function (_pipelineIndex) {
      init = _pipelineIndex.init;
      parse = _pipelineIndex.parse;
    }, function (_metadataIndex) {
      for (var _key in _metadataIndex) {
        if (_key !== "default") _export(_key, _metadataIndex[_key]);
      }
    }, function (_providersIndex) {
      for (var _key2 in _providersIndex) {
        if (_key2 !== "default") _export(_key2, _providersIndex[_key2]);
      }
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBVU8sV0FBUyxLQUFLLENBQUUsT0FBTyxFQUFHOztBQUUvQixhQUFTOztBQUVULFFBQU0sR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDOztBQUdsQixPQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLE9BQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7O0FBR3hCLFdBQU8sR0FBRyxDQUFDO0dBQ1o7Ozs7Ozs0QkFyQk8sSUFBSTs2QkFBQyxLQUFLIiwiZmlsZSI6ImxpYi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBrb2EgZnJvbSBcImtvYVwiO1xuaW1wb3J0IHtpbml0LHBhcnNlfSBmcm9tIFwiLi9waXBlbGluZS9pbmRleFwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi9tZXRhZGF0YS9pbmRleFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vcHJvdmlkZXJzL2luZGV4XCI7XG5cbi8qKlxuKiBUaGUgbWFpbiBvZGF0YSBmdW5jdGlvbiwgcmV0dXJucyBhIGtvYSBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCBkaXJlY3RseVxuKiBvciBtb3VudGVkIGludG8gYW5vdGhlciBhcHBsaWNhdGlvblxuKi9cbmV4cG9ydCBmdW5jdGlvbiBvZGF0YSggb3B0aW9ucyApIHtcblxuICBkZWJ1Z2dlcjtcblxuICBjb25zdCBhcHAgPSBrb2EoKTtcblxuICAvLyBidWlsZCB1cCB0aGUgcGlwZWxpbmVcbiAgYXBwLnVzZShpbml0KG9wdGlvbnMpKTtcbiAgYXBwLnVzZShwYXJzZShvcHRpb25zKSk7XG5cbiAgLy8gZG9uZVxuICByZXR1cm4gYXBwO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
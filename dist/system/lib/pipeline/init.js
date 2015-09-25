System.register(["./state"], function (_export) {
  "use strict";

  var ODataState;

  _export("init", init);

  function init(options) {

    return function* (next) {
      this.state.odata = new ODataState(options);
      yield next;
    };
  }

  return {
    setters: [function (_state) {
      ODataState = _state.ODataState;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9waXBlbGluZS9pbml0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLTyxXQUFTLElBQUksQ0FBRSxPQUFPLEVBQUc7O0FBRTlCLFdBQU8sV0FBVyxJQUFJLEVBQUU7QUFDdEIsVUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxVQUFVLENBQUUsT0FBTyxDQUFFLENBQUM7QUFDN0MsWUFBTSxJQUFJLENBQUM7S0FDWixDQUFDO0dBRUg7Ozs7MEJBWk8sVUFBVSIsImZpbGUiOiJsaWIvcGlwZWxpbmUvaW5pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T0RhdGFTdGF0ZX0gZnJvbSBcIi4vc3RhdGVcIjtcclxuXHJcbi8qKlxyXG4qIEluaXQgY29tcG9uZW50XHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCBvcHRpb25zICkge1xyXG5cclxuICByZXR1cm4gZnVuY3Rpb24gKihuZXh0KSB7XHJcbiAgICB0aGlzLnN0YXRlLm9kYXRhID0gbmV3IE9EYXRhU3RhdGUoIG9wdGlvbnMgKTtcclxuICAgIHlpZWxkIG5leHQ7XHJcbiAgfTtcclxuICBcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
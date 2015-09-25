System.register([], function (_export) {
  "use strict";

  _export("parse", parse);

  function parse(options) {
    return function* () {
      this.body = "request for path=" + this.request.path + " and querystring=" + this.request.querystring;
    };
  }

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9waXBlbGluZS9wYXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlPLFdBQVMsS0FBSyxDQUFFLE9BQU8sRUFBRztBQUMvQixXQUFPLGFBQWE7QUFDbEIsVUFBSSxDQUFDLElBQUkseUJBQXVCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSx5QkFBb0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEFBQUUsQ0FBQztLQUNqRyxDQUFDO0dBQ0giLCJmaWxlIjoibGliL3BpcGVsaW5lL3BhcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiogUGFyc2UgY29tcG9uZW50XHJcbiovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UoIG9wdGlvbnMgKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICooKSB7XHJcbiAgICB0aGlzLmJvZHkgPSBgcmVxdWVzdCBmb3IgcGF0aD0ke3RoaXMucmVxdWVzdC5wYXRofSBhbmQgcXVlcnlzdHJpbmc9JHt0aGlzLnJlcXVlc3QucXVlcnlzdHJpbmd9YDtcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

var _state = require("./state");

function init(options) {

  return function* (next) {
    this.state.odata = new _state.ODataState(options);
    yield next;
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVsaW5lL2luaXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztxQkFBeUIsU0FBUzs7QUFLM0IsU0FBUyxJQUFJLENBQUUsT0FBTyxFQUFHOztBQUU5QixTQUFPLFdBQVcsSUFBSSxFQUFFO0FBQ3RCLFFBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLHNCQUFnQixPQUFPLENBQUUsQ0FBQztBQUM3QyxVQUFNLElBQUksQ0FBQztHQUNaLENBQUM7Q0FFSCIsImZpbGUiOiJwaXBlbGluZS9pbml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPRGF0YVN0YXRlfSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5cclxuLyoqXHJcbiogSW5pdCBjb21wb25lbnRcclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoIG9wdGlvbnMgKSB7XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiAqKG5leHQpIHtcclxuICAgIHRoaXMuc3RhdGUub2RhdGEgPSBuZXcgT0RhdGFTdGF0ZSggb3B0aW9ucyApO1xyXG4gICAgeWllbGQgbmV4dDtcclxuICB9O1xyXG4gIFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

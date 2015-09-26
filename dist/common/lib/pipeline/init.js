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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9waXBlbGluZS9pbml0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7cUJBQXlCLFNBQVM7O0FBSzNCLFNBQVMsSUFBSSxDQUFFLE9BQU8sRUFBRzs7QUFFOUIsU0FBTyxXQUFXLElBQUksRUFBRTtBQUN0QixRQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxzQkFBZ0IsT0FBTyxDQUFFLENBQUM7QUFDN0MsVUFBTSxJQUFJLENBQUM7R0FDWixDQUFDO0NBRUgiLCJmaWxlIjoibGliL3BpcGVsaW5lL2luaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09EYXRhU3RhdGV9IGZyb20gXCIuL3N0YXRlXCI7XHJcblxyXG4vKipcclxuKiBJbml0IGNvbXBvbmVudFxyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCggb3B0aW9ucyApIHtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uICoobmV4dCkge1xyXG4gICAgdGhpcy5zdGF0ZS5vZGF0YSA9IG5ldyBPRGF0YVN0YXRlKCBvcHRpb25zICk7XHJcbiAgICB5aWVsZCBuZXh0O1xyXG4gIH07XHJcbiAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
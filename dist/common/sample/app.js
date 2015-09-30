"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _koaMount = require("koa-mount");

var _koaMount2 = _interopRequireDefault(_koaMount);

var _libIndex = require("../lib/index");

var _model = require("./model");

var app = (0, _koa2["default"])();

app.use((0, _koaMount2["default"])("/api", (0, _libIndex.odata)({
  model: _model.modelMetadata
})));

app.on("error", function (err) {
  console.log("An error occurred: " + err.message);
});

app.listen(3000);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZS9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzttQkFBZ0IsS0FBSzs7Ozt3QkFDSCxXQUFXOzs7O3dCQUNULGNBQWM7O3FCQUNOLFNBQVM7O0FBR3JDLElBQUksR0FBRyxHQUFHLHVCQUFLLENBQUM7O0FBR2hCLEdBQUcsQ0FBQyxHQUFHLENBQUUsMkJBQU8sTUFBTSxFQUFFLHFCQUFNO0FBQzVCLE9BQUssc0JBQWU7Q0FDckIsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFTCxHQUFHLENBQUMsRUFBRSxDQUFFLE9BQU8sRUFBRSxVQUFBLEdBQUcsRUFBSTtBQUN0QixTQUFPLENBQUMsR0FBRyx5QkFBd0IsR0FBRyxDQUFDLE9BQU8sQ0FBRyxDQUFDO0NBQ25ELENBQUMsQ0FBQTs7QUFFRixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDIiwiZmlsZSI6InNhbXBsZS9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQga29hIGZyb20gXCJrb2FcIjtcclxuaW1wb3J0IG1vdW50IGZyb20gXCJrb2EtbW91bnRcIjtcclxuaW1wb3J0IHtvZGF0YX0gZnJvbSBcIi4uL2xpYi9pbmRleFwiO1xyXG5pbXBvcnQge21vZGVsTWV0YWRhdGF9IGZyb20gXCIuL21vZGVsXCI7XHJcblxyXG4vLyBjcmVhdGUgdGhlIGFwcFxyXG52YXIgYXBwID0ga29hKCk7XHJcblxyXG4vLyBtb3VudGVyIHVuZGVyIFwiYXBpXCJcclxuYXBwLnVzZSggbW91bnQoIFwiL2FwaVwiLCBvZGF0YSh7XHJcbiAgbW9kZWw6IG1vZGVsTWV0YWRhdGFcclxufSkpKTtcclxuXHJcbmFwcC5vbiggXCJlcnJvclwiLCBlcnIgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCBgQW4gZXJyb3Igb2NjdXJyZWQ6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcbn0pXHJcblxyXG5hcHAubGlzdGVuKDMwMDApO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

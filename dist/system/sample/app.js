System.register(["../lib/index"], function (_export) {
  "use strict";

  var odata, app;
  return {
    setters: [function (_libIndex) {
      odata = _libIndex.odata;
    }],
    execute: function () {
      app = odata();

      app.listen(3000);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZS9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2FBRUksR0FBRzs7O3dCQUZDLEtBQUs7OztBQUVULFNBQUcsR0FBRyxLQUFLLEVBQUU7O0FBQ2pCLFNBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMiLCJmaWxlIjoic2FtcGxlL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7b2RhdGF9IGZyb20gXCIuLi9saWIvaW5kZXhcIjtcclxuXHJcbnZhciBhcHAgPSBvZGF0YSgpO1xyXG5hcHAubGlzdGVuKDMwMDApO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
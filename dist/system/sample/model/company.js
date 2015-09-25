System.register(["../../src/metadata/index", "./employee"], function (_export) {
  "use strict";

  var entity, property, Employee, Company;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [function (_srcMetadataIndex) {
      entity = _srcMetadataIndex.entity;
      property = _srcMetadataIndex.property;
    }, function (_employee) {
      Employee = _employee.Employee;
    }],
    execute: function () {
      Company = (function () {
        function Company() {
          _classCallCheck(this, _Company);
        }

        var _Company = Company;
        Company = entity()(Company) || Company;
        return Company;
      })();

      _export("Company", Company);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZS9tb2RlbC9jb21wYW55LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQ0FJYSxPQUFPOzs7Ozs7aUNBSlosTUFBTTttQ0FBQyxRQUFROzsyQkFDZixRQUFROzs7QUFHSCxhQUFPO2lCQUFQLE9BQU87Ozs7dUJBQVAsT0FBTztBQUFQLGVBQU8sR0FEbkIsTUFBTSxFQUFFLENBQ0ksT0FBTyxLQUFQLE9BQU87ZUFBUCxPQUFPIiwiZmlsZSI6InNhbXBsZS9tb2RlbC9jb21wYW55LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtlbnRpdHkscHJvcGVydHl9IGZyb20gXCIuLi8uLi9zcmMvbWV0YWRhdGEvaW5kZXhcIjtcbmltcG9ydCB7RW1wbG95ZWV9IGZyb20gXCIuL2VtcGxveWVlXCI7XG5cbkBlbnRpdHkoKVxuZXhwb3J0IGNsYXNzIENvbXBhbnkge1xuXG4gIC8vQHByb3BlcnR5KHByb3BlcnR5LnN0cmluZykgbmFtZVxuICAvL0BuYXZpZ2F0aW9uKG5hdmlnYXRpb24ubWFueShFbXBsb3llZSkpIGVtcGxveWVlc1xuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
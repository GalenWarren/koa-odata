System.register(["../../src/metadata/index"], function (_export) {
  "use strict";

  var entity, property, Employee;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_srcMetadataIndex) {
      entity = _srcMetadataIndex.entity;
      property = _srcMetadataIndex.property;
    }],
    execute: function () {
      Employee = (function () {
        var _instanceInitializers = {};

        function Employee() {
          _classCallCheck(this, _Employee);

          _defineDecoratedPropertyDescriptor(this, "name", _instanceInitializers);
        }

        _createDecoratedClass(Employee, [{
          key: "name",
          decorators: [property()],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        var _Employee = Employee;
        Employee = entity()(Employee) || Employee;
        return Employee;
      })();

      _export("Employee", Employee);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZS9tb2RlbC9lbXBsb3llZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7d0JBR2EsUUFBUTs7Ozs7Ozs7OztpQ0FIYixNQUFNO21DQUFDLFFBQVE7OztBQUdWLGNBQVE7OztpQkFBUixRQUFROzs7Ozs7OEJBQVIsUUFBUTs7dUJBRWxCLFFBQVEsRUFBRTs7Ozs7d0JBRkEsUUFBUTtBQUFSLGdCQUFRLEdBRHBCLE1BQU0sRUFBRSxDQUNJLFFBQVEsS0FBUixRQUFRO2VBQVIsUUFBUSIsImZpbGUiOiJzYW1wbGUvbW9kZWwvZW1wbG95ZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2VudGl0eSxwcm9wZXJ0eX0gZnJvbSBcIi4uLy4uL3NyYy9tZXRhZGF0YS9pbmRleFwiO1xuXG5AZW50aXR5KClcbmV4cG9ydCBjbGFzcyBFbXBsb3llZSB7XG5cbiAgQHByb3BlcnR5KCkgbmFtZVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _srcMetadataIndex = require("../../src/metadata/index");

var Employee = (function () {
  var _instanceInitializers = {};

  function Employee() {
    _classCallCheck(this, _Employee);

    _defineDecoratedPropertyDescriptor(this, "name", _instanceInitializers);
  }

  _createDecoratedClass(Employee, [{
    key: "name",
    decorators: [(0, _srcMetadataIndex.property)()],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  var _Employee = Employee;
  Employee = (0, _srcMetadataIndex.entity)()(Employee) || Employee;
  return Employee;
})();

exports.Employee = Employee;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZS9tb2RlbC9lbXBsb3llZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Z0NBQThCLDBCQUEwQjs7SUFHM0MsUUFBUTs7O1dBQVIsUUFBUTs7Ozs7O3dCQUFSLFFBQVE7O2lCQUVsQixpQ0FBVTs7Ozs7a0JBRkEsUUFBUTtBQUFSLFVBQVEsR0FEcEIsK0JBQVEsQ0FDSSxRQUFRLEtBQVIsUUFBUTtTQUFSLFFBQVEiLCJmaWxlIjoic2FtcGxlL21vZGVsL2VtcGxveWVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtlbnRpdHkscHJvcGVydHl9IGZyb20gXCIuLi8uLi9zcmMvbWV0YWRhdGEvaW5kZXhcIjtcblxuQGVudGl0eSgpXG5leHBvcnQgY2xhc3MgRW1wbG95ZWUge1xuXG4gIEBwcm9wZXJ0eSgpIG5hbWVcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

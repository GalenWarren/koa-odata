System.register(["lodash", "./model", "./entity", "./property"], function (_export) {
  "use strict";

  var _, ModelMetadata, EntityMetadata, PropertyMetadata, entityMetadata, propertiesMetadata;

  _export("entity", entity);

  _export("property", property);

  function entity() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return function (constructor) {
      if (_.isString(options)) {
        options = {
          name: options
        };
      }

      options = _.defaults({}, options || {}, {
        name: constructor.name,
        model: "default"
      });

      var model = ModelMetadata.getOrCreate(options.model);

      var properties = constructor.prototype[propertiesMetadata] || [];
      delete constructor.prototype[propertiesMetadata];

      var entity = new EntityMetadata({ name: options.name, model: model, properties: properties });
      model.entities.push(entity);

      constructor[entityMetadata] = entity;
    };
  }

  function property() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return function (prototype, name, descriptor) {
      if (_.isString(options)) {
        options = {
          name: options
        };
      }

      options = _.defaults({}, options || {}, {
        name: name
      });

      var properties = prototype[propertiesMetadata];
      if (!properties) {
        properties = prototype[propertiesMetadata] = [];
      }

      var property = new PropertyMetadata({ name: options.name });
      properties.push(property);
    };
  }

  return {
    setters: [function (_lodash) {
      _ = _lodash["default"];
    }, function (_model) {
      ModelMetadata = _model.ModelMetadata;
    }, function (_entity) {
      EntityMetadata = _entity.EntityMetadata;
    }, function (_property) {
      PropertyMetadata = _property.PropertyMetadata;
    }],
    execute: function () {
      entityMetadata = Symbol();

      _export("entityMetadata", entityMetadata);

      propertiesMetadata = Symbol();

      _export("propertiesMetadata", propertiesMetadata);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9tZXRhZGF0YS9kZWNvcmF0b3JzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswREFRYSxjQUFjLEVBQ2Qsa0JBQWtCOzs7Ozs7QUFLeEIsV0FBUyxNQUFNLEdBQWlCO1FBQWYsT0FBTyx5REFBRyxFQUFFOztBQUVsQyxXQUFPLFVBQVUsV0FBVyxFQUFHO0FBRzdCLFVBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBRSxPQUFPLENBQUUsRUFBRTtBQUN6QixlQUFPLEdBQUc7QUFDUixjQUFJLEVBQUUsT0FBTztTQUNkLENBQUE7T0FDRjs7QUFHRCxhQUFPLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBRSxFQUFFLEVBQUUsT0FBTyxJQUFJLEVBQUUsRUFBRTtBQUN2QyxZQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7QUFDdEIsYUFBSyxFQUFFLFNBQVM7T0FDakIsQ0FBQyxDQUFDOztBQUdILFVBQU0sS0FBSyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUUsT0FBTyxDQUFDLEtBQUssQ0FBRSxDQUFDOztBQUl6RCxVQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO0FBQ25FLGFBQU8sV0FBVyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDOztBQUdqRCxVQUFNLE1BQU0sR0FBRyxJQUFJLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDaEcsV0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUUsTUFBTSxDQUFFLENBQUM7O0FBRzlCLGlCQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsTUFBTSxDQUFDO0tBRXRDLENBQUE7R0FFRjs7QUFLTSxXQUFTLFFBQVEsR0FBa0I7UUFBaEIsT0FBTyx5REFBSSxFQUFFOztBQUVyQyxXQUFPLFVBQVUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUc7QUFHN0MsVUFBSSxDQUFDLENBQUMsUUFBUSxDQUFFLE9BQU8sQ0FBRSxFQUFFO0FBQ3pCLGVBQU8sR0FBRztBQUNSLGNBQUksRUFBRSxPQUFPO1NBQ2QsQ0FBQTtPQUNGOztBQUdELGFBQU8sR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFFLEVBQUUsRUFBRSxPQUFPLElBQUksRUFBRSxFQUFFO0FBQ3ZDLFlBQUksRUFBRSxJQUFJO09BQ1gsQ0FBQyxDQUFDOztBQUdILFVBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQy9DLFVBQUksQ0FBQyxVQUFVLEVBQUU7QUFDZixrQkFBVSxHQUFHLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztPQUNqRDs7QUFHRCxVQUFNLFFBQVEsR0FBRyxJQUFJLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELGdCQUFVLENBQUMsSUFBSSxDQUFFLFFBQVEsQ0FBRSxDQUFDO0tBRTdCLENBQUE7R0FFRjs7Ozs7OzZCQWhGTyxhQUFhOzsrQkFDYixjQUFjOzttQ0FDZCxnQkFBZ0I7OztBQUtYLG9CQUFjLEdBQUcsTUFBTSxFQUFFOzs7O0FBQ3pCLHdCQUFrQixHQUFHLE1BQU0sRUFBRSIsImZpbGUiOiJsaWIvbWV0YWRhdGEvZGVjb3JhdG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7TW9kZWxNZXRhZGF0YX0gZnJvbSBcIi4vbW9kZWxcIjtcbmltcG9ydCB7RW50aXR5TWV0YWRhdGF9IGZyb20gXCIuL2VudGl0eVwiO1xuaW1wb3J0IHtQcm9wZXJ0eU1ldGFkYXRhfSBmcm9tIFwiLi9wcm9wZXJ0eVwiO1xuXG4vKipcbiogU3ltYm9scyB1c2VkIHRvIGF0dGFjaCBtZXRhZGF0YVxuKi9cbmV4cG9ydCBjb25zdCBlbnRpdHlNZXRhZGF0YSA9IFN5bWJvbCgpO1xuZXhwb3J0IGNvbnN0IHByb3BlcnRpZXNNZXRhZGF0YSA9IFN5bWJvbCgpO1xuXG4vKipcbiogRGVjb3JhdG9yIHRoYXQgZGVzaWduYXRlcyBhbiBlbnRpdHkgdHlwZVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBlbnRpdHkoIG9wdGlvbnMgPSB7fSApIHtcblxuICByZXR1cm4gZnVuY3Rpb24oIGNvbnN0cnVjdG9yICkge1xuXG4gICAgLy8gaWYgc3RyaW5nIHBhc3NlZCBpbiwgdGhpcyBpcyB0aGUgbmFtZVxuICAgIGlmIChfLmlzU3RyaW5nKCBvcHRpb25zICkpIHtcbiAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIG5hbWU6IG9wdGlvbnNcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhc3NpZ24gZGVmYXVsdHNcbiAgICBvcHRpb25zID0gXy5kZWZhdWx0cygge30sIG9wdGlvbnMgfHwge30sIHtcbiAgICAgIG5hbWU6IGNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICBtb2RlbDogXCJkZWZhdWx0XCJcbiAgICB9KTtcblxuICAgIC8vIGFjY2VzcyB0aGUgbW9kZWwgb2JqZWN0XG4gICAgY29uc3QgbW9kZWwgPSBNb2RlbE1ldGFkYXRhLmdldE9yQ3JlYXRlKCBvcHRpb25zLm1vZGVsICk7XG5cbiAgICAvLyBmaW5kIGFueSBkaXNjb3ZlcmVkIHByb3BlcnRpZXMgKHRoZSBwcm9wZXJ5IGRlY29yYXRvcnMgcnVuIGZpcnN0LFxuICAgIC8vIHNvIHRoZXkgdGVtcG9yYXJpbHkgc3RvcmUgcHJvcGVydGllcyBoZXJlKVxuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGVbcHJvcGVydGllc01ldGFkYXRhXSB8fCBbXTtcbiAgICBkZWxldGUgY29uc3RydWN0b3IucHJvdG90eXBlW3Byb3BlcnRpZXNNZXRhZGF0YV07XG5cbiAgICAvLyBjcmVhdGUgdGhlIGVudGl0eSBvYmplY3QgYW5kIGFkZCB0byBtb2RlbCdzIGVudGl0aWVzXG4gICAgY29uc3QgZW50aXR5ID0gbmV3IEVudGl0eU1ldGFkYXRhKHsgbmFtZTogb3B0aW9ucy5uYW1lLCBtb2RlbDogbW9kZWwsIHByb3BlcnRpZXM6IHByb3BlcnRpZXMgfSk7XG4gICAgbW9kZWwuZW50aXRpZXMucHVzaCggZW50aXR5ICk7XG5cbiAgICAvLyBzdG9yZSB0aGUgbWV0YWRhdGEgb24gdGhlIGNvbnN0cnVjdG9yIHNvIHdlIGNhbiBmaW5kIGl0IGxhdGVyXG4gICAgY29uc3RydWN0b3JbZW50aXR5TWV0YWRhdGFdID0gZW50aXR5O1xuXG4gIH1cblxufVxuXG4vKipcbiogRGVjb3JhdG9yIHRoYXQgZGVzaWduYXRlcyBhIHByb3BlcnR5XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5KCBvcHRpb25zID0gIHt9ICkge1xuXG4gIHJldHVybiBmdW5jdGlvbiggcHJvdG90eXBlLCBuYW1lLCBkZXNjcmlwdG9yICkge1xuXG4gICAgLy8gaWYgc3RyaW5nIHBhc3NlZCBpbiwgdGhpcyBpcyB0aGUgbmFtZVxuICAgIGlmIChfLmlzU3RyaW5nKCBvcHRpb25zICkpIHtcbiAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIG5hbWU6IG9wdGlvbnNcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhc3NpZ24gZGVmYXVsdHNcbiAgICBvcHRpb25zID0gXy5kZWZhdWx0cygge30sIG9wdGlvbnMgfHwge30sIHtcbiAgICAgIG5hbWU6IG5hbWVcbiAgICB9KTtcblxuICAgIC8vIGFjY2VzcyB0aGUgcHJvcGVydHkgbWV0YWRhdGFcbiAgICBsZXQgcHJvcGVydGllcyA9IHByb3RvdHlwZVtwcm9wZXJ0aWVzTWV0YWRhdGFdO1xuICAgIGlmICghcHJvcGVydGllcykge1xuICAgICAgcHJvcGVydGllcyA9IHByb3RvdHlwZVtwcm9wZXJ0aWVzTWV0YWRhdGFdID0gW107XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIHRoZSBwcm9wZXJ0eSBvYmplY3QgYW5kIGFkZCB0byBjb2xsZWN0aW9uXG4gICAgY29uc3QgcHJvcGVydHkgPSBuZXcgUHJvcGVydHlNZXRhZGF0YSh7IG5hbWU6IG9wdGlvbnMubmFtZSB9KTtcbiAgICBwcm9wZXJ0aWVzLnB1c2goIHByb3BlcnR5ICk7XG5cbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
define(['backbone', '/src/models/dish.js'], function(Backbone, Dish) {
  
  // Dish collection
  return Backbone.Model.extend({
    model: Dish
  });
})
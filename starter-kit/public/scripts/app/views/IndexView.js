define([
  "ember",
  "controllers/indexController",
  "text!templates/indexTemplate.html"
], function(Ember, IndexController, template){
  var IndexView = Ember.View.extend({
    defaultTemplate: Ember.Handlebars.compile(template)
  });
  
  return IndexView;
});
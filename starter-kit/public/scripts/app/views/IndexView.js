define([
  "ember",
  "controllers/indexController",
  "text!templates/indexTemplate.html"
], function(Ember, IndexController, indexTemplate){
  var IndexView = Ember.View.extend({
    defaultTemplate: Ember.Handlebars.compile(indexTemplate)
  });
  
  return IndexView;
});
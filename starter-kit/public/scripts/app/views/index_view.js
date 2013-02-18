define([
  "ember",
  "text!templates/index_template.hbs"
], function(Ember, template){
  var IndexView = Ember.View.extend({
    defaultTemplate: Ember.Handlebars.compile(template)
  });
  
  return IndexView;
});
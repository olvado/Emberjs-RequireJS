define([
	"ember",
	"text!templates/applicationTemplate.html"
], function(Ember, template) {

	var ApplicationView = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(template)
	});
	return ApplicationView;
});
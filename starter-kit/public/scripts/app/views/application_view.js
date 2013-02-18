define([
	"ember",
	"text!templates/application_template.hbs"
], function(Ember, template) {

	var ApplicationView = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(template)
	});
	return ApplicationView;
});
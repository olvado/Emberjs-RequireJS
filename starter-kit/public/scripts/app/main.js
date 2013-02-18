define([
	"views/application_view",
	"views/index_view",
	"controllers/application_controller",
	"controllers/index_controller",
	"app/router",
	"app/routes/index_route"
], function(
     ApplicationView,
     IndexView,
     ApplicationController,
     IndexController,
     Router,
     IndexRoute
   ){
	/*Module Pattern*/
	var App = {
		ApplicationView: ApplicationView,
		IndexView: IndexView,
		ApplicationController: ApplicationController,
		IndexController: IndexController,
		Router: Router,
		IndexRoute: IndexRoute
	};

	return App;
});

define([
	"views/ApplicationView",
	"views/IndexView",
	"controllers/ApplicationController",
	"controllers/IndexController",
	"app/router",
	"app/routes/IndexRoute"
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

var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/',{
			controller: 'MainController',
			templateUrl: './js/partials/Home.html'
		})
		.otherwise({redirectTo: '/'});
});
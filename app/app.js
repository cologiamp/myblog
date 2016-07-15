angular.module('app', [
	'ngRoute',
	'app.controllers'
	])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/', {
		
			templateUrl: 'views/home.html',
			controller: 'HomeController'

		}).when('/posts', {
		
			templateUrl: 'views/posts.html',
			controller: 'PostController'
			
		}).when('/posts/:id', {
		
			templateUrl: 'views/singlepost.html',
			controller: 'SinglePostController'
			
		}).when('/projects/:id', {
		
			templateUrl: 'views/project.html',
			controller: 'SingleProjectController'
			
		}).otherwise({
		
			redirectTo: '/'
		
		});
	}]);
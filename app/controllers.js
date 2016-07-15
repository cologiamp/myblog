angular.module('app.controllers', [
	'app.directives'
	])
	.controller('HomeController', ['$scope', '$http', function ($scope, $http){
		$http.get('data/projects.json').success(function (data){
			$scope.projects = data;
		});
	}])
	.controller('PostController', ['$scope', '$http', function ($scope, $http){
		$http.get('data/posts.json').success(function (data){
			$scope.posts = data;
		});
	}])
	.controller('SinglePostController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		$http.get('data/posts.json').success(function (data){
			$scope.post = data[$routeParams.id];
		});
	}])
	.controller('SingleProjectController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		$http.get('data/projects.json').success(function (data){
			$scope.project = data[$routeParams.id];
		});
	}]);
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    
	.when('/aboutMe', {
        templateUrl : 'pages/aboutMe.html'
    })
    
    .when('/portfolio', {
        templateUrl : 'pages/portfolio.html'
    })
    
    .when('/resume', {
        templateUrl : 'pages/resume.html'
    })
	
	.when('/portfolio/cssAnimation', {
        templateUrl : 'pages/cssAnimation.html'
    })
	
	.when('/portfolio/javaScript', {
        templateUrl : 'pages/javaScript.html'
    })
	
	.when('/portfolio/java', {
        templateUrl : 'pages/java.html'
    })
    
    .otherwise({reidrectTo: '/aboutMe'});
});

app.controller('myCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
        var active = $location.path().indexOf(viewLocation) > -1;
        return active;
    }
}]);


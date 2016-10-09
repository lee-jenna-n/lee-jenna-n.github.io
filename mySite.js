var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    
	.when('/', {
        templateUrl : 'pages/home.html'
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
    
    .otherwise({reidrectTo: '/'});
});

app.controller('myCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
        var path = $location.path();
        var active = path.indexOf(viewLocation) > -1;
        if (viewLocation === '/') {
            active = $location.path() === viewLocation;
        }
        if (viewLocation === '/portfolio/java' && path === '/portfolio/javaScript') {
            active = false;
        }
        return active;
    }
}]);


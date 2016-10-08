var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    
	.when('/', {
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
    
    .otherwise({reidrectTo: '/'});
});


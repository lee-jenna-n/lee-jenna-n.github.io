var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    
	.when('/', {
        templateUrl : 'pages/home.html'
    })
    
    .when('/portfolio', {
        templateUrl : 'pages/portfolio.html'
    })
    
    .when('/aboutMe', {
        templateUrl : 'pages/aboutMe.html'
    })
	
	.when('/cssAnimation', {
        templateUrl : 'pages/cssAnimation.html'
    })
	
	.when('/javaScript', {
        templateUrl : 'pages/javaScript.html'
    })
	
	.when('/java', {
        templateUrl : 'pages/java.html'
    })
    
    .otherwise({reidrectTo: '/'});
});


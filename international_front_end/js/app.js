var app = angular.module("activityApp", ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "LoginController",
      templateUrl: "views/login.html"
    })
    .otherwise({
      redirectTo: '/'
    });
});
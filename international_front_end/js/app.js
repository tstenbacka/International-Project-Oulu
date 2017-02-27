var app = angular.module("activityApp", ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
$locationProvider.hashPrefix('');
  $routeProvider
    .when('/',{
      controller: "CardController",
      templateUrl: "views/activities.html"
    })
    .when('/login', {
      controller: "LoginController",
      templateUrl: "views/login.html"
    })
    .when('/signup', {
      controller: "SignUpController",
      templateUrl: "views/signup.html"
    })
    .when('/profile', {
      controller: "ProfileController",
      templateUrl: "views/profile.html"
    })
    .when('/newactivity', {
      controller: "NewActivityController",
      templateUrl: "views/newactivity.html"
    })
    .when('/rating', {
      controller: "RatingController",
      templateUrl: "views/rating.html"
    })
    .otherwise({
      redirectTo: '/'
    });
});



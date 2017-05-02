var app = angular.module("activityApp", ['ngRoute', 'ngCookies']);

        app.service('sharedProperties', function () {
            var searchKey = '';
            
            return {
                getProperty: function () {
                    return searchKey;
                },
                setProperty: function(value) {
                    searchKey = value;
                }            
            };
        });



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
    .when('/activity/:id', {
      controller: "ExpandedActivityController",
      templateUrl: "views/expandedActivity.html"
    })
    .when('/search', {
        controller: "SearchController",
        templateUrl: "views/search.html"
    })
    .when('/editactivity/:id', {
      controller: "EditActivityController",
      templateUrl: "views/editActivity.html"
    })
    .when('/joinedActivities', {
      controller: "JoinedActivitiesController",
      templateUrl: "views/joinedActivities.html"
    })
    .otherwise({
      redirectTo: '/'
    });
});



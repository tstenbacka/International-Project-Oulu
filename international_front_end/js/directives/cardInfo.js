app.directive('cardInfo', function() { 
    return { 
        restrict: 'E', 
        scope: { 
            info: '=' 
        }, 
        templateUrl: 'js/directives/cardInfo.html', 
    }; 
});
app.controller('NewActivityController', ['$scope', function ($scope) {
    $scope.viewTitle = 'Create a new activity';

    $scope.activityHints = {
        hintCategory: 'Category:',
        hintTitle: 'Title:',
        hintDate: 'Date:',
        hintTime: 'Time:',
        hintDuration: 'Duration:',
        hintLocation: 'Location:',
        hintZipCode: 'ZipCode:',
        hintDescription: 'Description:',
        hintParticipantAmount: 'Participants:',
        hintSkillLevel: 'Skill level:'
    };

    $scope.activityInformation = {
        activityId: 0,
        activityCategory: 'Running',
        activityTitle: 'Title',
        activityDate: 'Friday',
        activityTime: '11am',
        activityDuration: 2,
        activityLocation: 'Ainolanpuiston kesäteatteri',
        activityZipCode: '90100',
        activityDescription: 'This is a description of the activity.',
        activityParticipantAmount: 2,
        activitySkillLevel: 'Intermediate'
    };
}]);
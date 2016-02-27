angular.module('quizApp')

.controller('homeCtrl', function($scope, quizList, pastQuizList) {
    console.log(pastQuizList)
    $scope.quizzes = quizList;
    $scope.pastQuizzes = pastQuizList;
});

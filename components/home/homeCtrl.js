angular.module('quizApp')

.controller('homeCtrl', ['$scope', 'quizList', 'quizService', function($scope, quizList, quizService){
    //console.log(pastQuizList);
    $scope.quizzes = quizList;


}]);

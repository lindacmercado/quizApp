angular.module('quizApp')
.directive('fillBlank', function(){
    return {
      scope: {
        question: '=',
        save: '&',
        answers: '='
      },
      restrict: 'AE',
      replace: true,
      templateUrl: 'components/quiz/partials/fillBlankTmpl.html',
      controller: function($scope) {
        $scope.$watch('question', function(){
          if($scope.answers[$scope.question.id]) {
            $scope.answer = $scope.answer[$scope.question.id];
          } else {
            $scope.answer = " ";
          }
        })
        $scope.handleEnter = function(e, answer) {
            if(e.keyCode === 13) {
              $scope.saveAnswer(answer)
            }
        }
        $scope.saveAnswer = function (answer) {
            $scope.save({ id: $scope.question.id, answer: answer })
        }
      }
    }
})

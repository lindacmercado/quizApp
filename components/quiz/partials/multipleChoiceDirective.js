angular.module('quizApp')
.directive('multipleChoice', function(){
    return {
      scope: {
        question: '=',
        save: '&',
        answers: '='
      },
      templateUrl: "componenets/quiz/partials/multipleChoiceTmpl.html",
      restrict: "AE",
      replace: true,
      controller: function($scope) {
        $scope.$watch('question', function(){
          $scope.selected = " ";
        })
        $scope.update = function(choice) {
          if(choice) {
            $scope.selected = choice;
          }
        }
        $scope.saveAnswer = function(selected) {
            $scope.save({id: $scope.question.id, answer: $scope.selected});
        }
      }
    }
});

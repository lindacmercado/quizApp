angular.module('quizApp')

.controller('quizCtrl', function($scope, $stateParams, quizService, questions){

    $scope.questions = questions;
    $scope.answers = {};
    $scope.currentQuestion = $scope.questions[0];
    $scope.results = {};

    $scope.saveAnswer = function(answer) {
      $scope.answers[$scope.currentQuestion.id] = answer;
      $scope.nextQuestion();

      if($scope.results.done) {
        $scope.checkMyAnswers();
      }
    };

    $scope.setCurrentQuestion = function(question) {
      $scope.currentQuestion = question;
    }

    $scope.update = function(choice) {
      $scope.selected = choice;
    }

    $scope.nextQuestion = function() {
      var idx = $scope.questions.indexOf($scope.currentQuestion);
      if($scope.questions[idx + 1]) {
        $scope.currentQuestion = $scope.questions[idx + 1];
      } else {
        return;
      }
    }

    $scope.reset = function() {
      $scope.answers = {};
      $scope.currentQuestion = $scope.questions[0];
    }

});

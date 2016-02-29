angular.module('quizApp')

.controller('quizCtrl', function($scope, $stateParams, quizService, questions){

    //$scope.quizName = $stateParams.quizName;
    $scope.questions = questions;

    $scope.answers = {};
    $scope.currentQuestion = $scope.questions[0];
    $scope.results = {};

    $scope.saveAnswer = function(id, answer) {
      $scope.answers[id] = answer;
      $scope.nextQuestion();

      if($scope.results.done) {
        $scope.checkMyAnswers();
      }
    };

    $scope.setCurrentQuestion = function(question) {
      $scope.currentQuestion = question;
    }

    $scope.handleEnter = function (ev, answer) {
        if (ev.keyCode === 13) {
            $scope.saveAnswer(answer);
        }
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

    $scope.checkMyAnswers = function() {
      quizService.checkMyAnswers($scope.questions, $scope.answers).then(function(response){
        $scope.results = response;
      });
    }

    $scope.reset = function() {
      $scope.answers = {};
      $scope.currentQuestion = $scope.questions[0];
    }

});

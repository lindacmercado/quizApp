angular.module("quizApp")

.directive("questionList", function(){
  return {
    scope: {
      question: '=',
      answers: '=',
      results: '=',
      currentQuestion: '=',
      setCurrentQuestion: '&'
    },
    templateUrl: "components/quiz/partials/quizListView.html",
  }

});

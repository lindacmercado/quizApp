angular.module('quizApp', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider
    .otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'components/home/homeView.html',
      controller: 'homeCtrl',
      resolve: {
        quizList: function(quizService) {
          return quizService.getQuizNames();
        }
      }
    })
    // .state('quiz', {
    //   url: '/quiz/:quizName',
    //   templateUrl: 'components/quiz/views/quizContainerView.html',
    //   controller: 'quizCtrl',
    //   resolve: {
    //     questions: function(quizService, $stateParams) {
    //       return quizService.getQuestions($stateParams.quizName)
    //     }
    //   }
    // })
    // .state('results', {
    //   url: '/results',
    //   templateUrl: 'components/results/resultsView.html',
    //   controller: 'homeCtrl'
    // })

});

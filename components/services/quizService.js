angular.module('quizApp')
  .service("quizService", function($q) {

    this.getQuizNames = function($q) {
      var defer = $q.defer();
      defer.resolve([{
        name: 'Angular',
      }, {
        name: 'HTML',
      }
    ]);
    return defer.promise;
  }
});

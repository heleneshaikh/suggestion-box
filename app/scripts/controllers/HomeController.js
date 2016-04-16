'use strict';

(function (app) {


  app.controller('HomeController', ['$scope', 'suggestions', function ($scope, suggestions) {
    $scope.suggestions = suggestions.posts;
    $scope.addSuggestion = function () {
      if (!$scope.title || $scope.title === "") {
        return;
      } else {
        $scope.suggestions.push({
          title: $scope.title,
          upvotes: 0
        });
        $scope.title = '';
      }

    };
    $scope.upVote = function (index) {
      $scope.suggestions[index].upvotes += 1;
    };
    $scope.comments = [];
  }]);

})(app);

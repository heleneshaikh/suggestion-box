'use strict';

(function (app) {

  app.controller('CommentsController', ['$scope', 'suggestions', '$routeParams', function ($scope, suggestions, $routeParams) {
    $scope.suggestions = suggestions.posts;
    $scope.post = suggestions.posts[$routeParams.id];
    $scope.showComment = false;
    $scope.toggle = function () {
      $scope.showComment = !$scope.showComment;
    };
    $scope.addComment = function() {
      if (!$scope.body || $scope.body === '') {
        return ;
      } else {
        $scope.suggestions.push({
          body: $scope.body,
          upvotes: 0

        });
        $scope.body = '';
      }
    };
    $scope.upVoteComment = function(comment) {
      comment.upvotes += 1;
    };


  }]);


})(app);

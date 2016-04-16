'use strict';

(function (app) {

  app.controller('CommentsController', ['$scope', 'suggestions', '$routeParams', function ($scope, suggestions, $routeParams) {
    $scope.post = suggestions.posts[$routeParams.id];
    $scope.comments = $scope.post.comments;
    $scope.addComment = function() {
      if (!$scope.body || $scope.body === '') {
        return ;
      }
      $scope.post.push({
        body: $scope.body,
        upvote:$scope.upvote
      });
      $scope.body = '';
      $scope.upVote = function(comment) {
        comment.upvotes += 1;
      };

    };

  }]);


})(app);

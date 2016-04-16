'use strict';

var app;

(function () {
  app = angular.module('suggestionBox', ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider
      //.when('/', {
      //  controller: 'HomeController',
      //  templateUrl: 'views/home.html'
      //})
      .when('/home', {
        controller: 'HomeController',
        templateUrl: 'views/home.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });

    app.directive('suggestionForm', function() {
      return {
        restrict: 'E',
        templateUrl: 'views/suggestion-form.html'
      };

    });


})();


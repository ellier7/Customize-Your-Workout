angular.module('workouts', [
  // Other modules that will provide controllers and services.
  'workouts.videos',
   // Angular plugin that provides $routeProvider and the $routeChangeStart event.
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'app/main.html',
    controller: 'MainController'
  })
  .when('/videos', {
    templateUrl: 'app/videos/video.html',
    controller: 'VideoController'
  })
  .otherwise({
    redirectTo: '/'
  });
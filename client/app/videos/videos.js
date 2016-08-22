angular.module('workouts.videos', [])

.controller('VideoController', function ($scope, Videos) {
  $scope.data = {};
  $scope.getVideos = function () {
    Videos.getAll()
      .then(function (videos) {
        $scope.data.videos = videos.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  $scope.getVideos();
});

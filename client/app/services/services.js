angular.module('workouts.services', [])

.factory('Videos', function ($http) {
  // Your code here

  var getAll = function() {

    return $http({
      method: 'GET',
      url: '/videos'
    })
    .then(function(resp){
      return resp.data;
    });
  };


  // var addOne = function (link) {
  //   return $http({
  //     method: 'POST',
  //     url: '/api/links',
  //     data: link
  //   });
  // };
//
  return {
    getAll: getAll
    // addOne: addOne
  }
})
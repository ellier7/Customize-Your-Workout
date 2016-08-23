var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
 
   var refresh = function(){
  $http.get('/videoList').success(function(response) {
    // console.log("I got the data I requested");
    $scope.videoList = response;
  $scope.video = "";
  });
   };

   refresh();

  $scope.addContact = function(){
  	// console.log($scope.video);
  	$http.post('/videoList', $scope.video)
  	.success(function(res){
  		// console.log(res);
  		refresh();
  	});
  }

  $scope.remove = function(id){
  	// console.log(id);
  	$http.delete('/videoList/' + id)
  	.success(function(res){
  		refresh();
  	});
  };


  $scope.edit = function(id){
  	// console.log(id);
  	$http.get('/videoList/' + id)
  	.success(function(res){
  		$scope.video = res;
  	})
  };

  $scope.update = function(){
  	$http.put('/videoList/' + $scope.video._id, $scope.video)
  	.success(function(res){
  		refresh();
  	})
  };
}]);
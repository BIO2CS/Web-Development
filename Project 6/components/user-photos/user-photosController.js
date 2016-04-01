'use strict';

cs142App.controller('UserPhotosController', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    /*
     * Since the route is specified as '/photos/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;

  /*  console.log('window.cs142models.photoOfUserModel($routeParams.userId)',
       window.cs142models.photoOfUserModel(userId));

    $scope.main.chosenUserPhotos = window.cs142models.photoOfUserModel(userId);*/
    
    $scope.getPhotoPath = function(fileName) {
        return "images/" + fileName;
    };
    $scope.main.userPhotoComments = [];
    $scope.photoCallback = function(response) {
        var parsedResponse = JSON.parse(response);
        $scope.$apply(function() {
            $scope.main.userPhotos = parsedResponse;
            for (var i = 0; i < $scope.main.userPhotos.length; i++)
                console.log($scope.main.userPhotos[i].file_name);
            for (var i = 0; i < $scope.main.userPhotos.length; i++) {
                $scope.main.userPhotoComments.push("");
            }
        });
    }
    if (userId) {
         console.log('UserPhoto of ', userId);
         $scope.main.FetchModel("/photosOfUser/"+userId, $scope.photoCallback);
    }    
  }]);

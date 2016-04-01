'use strict';

cs142App.controller('UserDetailController', ['$scope', '$routeParams', '$http',
  function ($scope, $routeParams, $http) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;

    /*console.log('window.cs142models.userModel($routeParams.userId)',
        window.cs142models.userModel(userId));
    
    $scope.main.userChosen = window.cs142models.userModel(userId);
    var firstName = $scope.main.userChosen.first_name;
    console.log("Use chosen is", firstName);*/
    
    $scope.userDetailCallback = function(response) {
        var parsedResponse = JSON.parse(response);
            $scope.$apply(function(){
                $scope.main.userChosen = parsedResponse;
                console.log("****user chosen is***** ", $scope.main.userChosen.first_name);
                console.log("****user chosen id is***** ", userId);
            });      
    }
    if (userId) {
         console.log('UserDetail of ', userId);
         $scope.main.FetchModel("/user/"+userId, $scope.userDetailCallback);
    }    
  }]);

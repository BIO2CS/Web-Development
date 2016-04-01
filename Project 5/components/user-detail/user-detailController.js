'use strict';

cs142App.controller('UserDetailController', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = Number($routeParams.userId);
    console.log('UserDetail of ', userId);

    console.log('window.cs142models.userModel($routeParams.userId)',
        window.cs142models.userModel(userId));
    
    $scope.main.userChosen = window.cs142models.userModel(userId);
    var firstName = $scope.main.userChosen.first_name;
    console.log("Use chosen is", firstName);
  }]);

'use strict';


cs142App.controller('UserListController', ['$scope', '$http',
    function ($scope, $http) {
        $scope.main.title = 'Users';
        
        $scope.userListCallback = function(response) {
            var parsedResponse = JSON.parse(response);
            $scope.$apply(function(){
                $scope.main.users = parsedResponse;
                console.log($scope.main.users);
            });
        }
        
       // console.log('window.cs142models.userListModel()', $scope.main.users);
        $scope.main.FetchModel("/user/list", $scope.userListCallback);
        
    }]);


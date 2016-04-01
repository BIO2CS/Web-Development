'use strict';

var cs142App = angular.module('cs142App', ['ngRoute', 'ngMaterial']);

cs142App.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/users', {
                templateUrl: 'components/user-list/user-listTemplate.html',
                controller: 'UserListController'
            }).
            when('/users/:userId', {
                templateUrl: 'components/user-detail/user-detailTemplate.html',
                controller: 'UserDetailController'
            }).
            when('/photosOfUser/:userId', {
                templateUrl: 'components/user-photos/user-photosTemplate.html',
                controller: 'UserPhotosController'
            }).
            otherwise({
                redirectTo: '/users'
            });
    }]);

cs142App.controller('MainController', ['$scope', '$http',
    function ($scope, $http) {
        $scope.main = {};
        $scope.main.title = {title: 'Users'};
        $scope.main.userClicked = false;
        $scope.main.userPhotoClicked = false;
        $scope.main.userChosen = {};
        
        $scope.main.onUserClicked = function() {
            $scope.main.userClicked = true;
        };
        $scope.main.onPhotoClicked = function() {
            $scope.main.userClicked = false;
            $scope.main.userPhotoClicked = true;
        }
        
        $scope.main.users = {};
        $scope.main.userPhotos = {};
        
        $scope.main.response = "";
        
        $scope.main.mainCallback = function(response) {
            var parsedResponse = JSON.parse(response);
            $scope.$apply(function(){
                $scope.main.response = parsedResponse;
            });
        }
        
        $scope.main.FetchModel = function(url, doneCallback) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        doneCallback(this.responseText);
                    }
                    else {
                        console.log(this.statusText);
                    }
                }
            }
            xhttp.open("GET", url, true);
            xhttp.send();
        }
        $scope.main.FetchModel("/test/info", $scope.main.mainCallback);
    }]);

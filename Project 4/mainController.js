"use strict";

/**
 * Create an angular module called 'cs142App' and assign it to a DOM property with the same name.
 * The [] argument specifies module is to be created and doesn't require any other module.
 */
var cs142App = angular.module('cs142App', []);

/**
 * Create a controller named 'MainController'.  The array argument specifies the controller
 * function and what dependencies it has.  We specify the '$scope' service so we can have access
 * to the angular scope of view template.
 */
cs142App.controller('MainController', ['$scope', function($scope) {
   // We defined an object called 'main' with a single property 'title' that is used
   // by the html view template to get the page's title in the browser tab.
   $scope.main = {};
   $scope.main.title = 'CS142 Project #4';
   $scope.main.mottoInput = 'main motto';
   $scope.main.name = '';
   $scope.main.onMottoChange = function(value) {
       $scope.main.mottoInput = value;
   }
   $scope.main.viewURL = 'components/example/exampleTemplate.html';
  // $scope.main.controller = "ExampleController";
   /*$scope.main.isFirst = true;
   $scope.main.changeDirective = function() {
       if ($scope.main.isFirst == true) {
           $scope.main.viewURL = 'components/states/statesTemplate.html';
          // $scope.main.controller = "StatesController";
           $scope.main.isFirst = false;
       }
       else {
           $scope.main.viewURL = 'components/example/exampleTemplate.html';
           //$scope.main.controller = "ExampleController";
           $scope.main.isFirst = true;
       }
   }*/
   $scope.main.buttonClicked = true;
   $scope.main.buttonNotClicked = false;
   $scope.main.clickButton = function() {
       $scope.main.buttonClicked = !$scope.main.buttonClicked;
       $scope.main.buttonNotClicked = !$scope.main.buttonNotClicked;
   }
}]);
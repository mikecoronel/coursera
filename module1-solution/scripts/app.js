(function (){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController ($scope){
    $scope.message = "";
    $scope.checkMyHungry = function () {
      $scope.customStyle = {};
      var menuLength = 0;

      if ($scope.myLunch != undefined)
        menuLength = $scope.myLunch.split(',').length;
        $scope.customStyle.colorClass = "green";

      switch(true){
        case menuLength == 0:
          $scope.message = "Please enter data first";
          $scope.customStyle.colorClass = "red";
          break;
        case menuLength <= 3:
          $scope.message = "Enjoy!";
          break;
        default:
          $scope.message = "Too much!";
      }
    }
  }
})();

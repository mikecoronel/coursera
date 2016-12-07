(function(){
  angular.module('app', [])
  .controller('ctl', ctl);

  ctl.$inject = ['$scope'];

  function ctl($scope){
    $scope.firstName = "mike";
    // $scope.fullName = "";

    $scope.showNumberOfWatchers = function (){
      console.log("# of watchers: ", $scope.$$watchersCount);
    }

    $scope.setFullName = function () {
      $scope.fullName = $scope.firstName + " " + "Coronel";
    }

    $scope.logFirstName = function () {
      console.log("First Name is: ", $scope.firstName);
    }

    $scope.logFullName = function () {
      console.log("Full Name is: ", $scope.fullName);
    }
  }

})();

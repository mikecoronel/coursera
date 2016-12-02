(function (){
  angular.aplication('app', [])
  .controller('ctlController', ctlController);

  ctlController.$inject = ["$scope"];

  function ctlController($scope){
      console.log($scope);
  }

})();

(function (){
  angular.module('app', [])
  .controller('ctl', DITesting);

  DITesting.$inject = ['$scope'];

  function DITesting($scope){
      console.log($scope);
  }

})();

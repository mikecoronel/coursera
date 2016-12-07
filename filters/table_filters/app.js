(function (){
  'use strict';

  var nombres = ['mike coronel', 'alfredo corona', 'oscar rojas', 'raul gutierrez', 'norma rios', 'claudia soliz', 'roberto luna', 'raul solares'];

  angular.module('app', [])
  .controller('ctl', ctl);

  ctl.$inject = ['$scope'];

  function ctl($scope){
      $scope.nombres = nombres;
  }

})();

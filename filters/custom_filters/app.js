(function (){
  'use-strict';

  angular.module('filters', [])
  .controller('myFilters', myFilters)
  .filter('binary', BinaryFilter);

  myFilters.$inject = ['$scope', '$filter', 'binaryFilter'];

  function myFilters($scope, $filter, binaryFilter){
    $scope.cost = 123.56;

    $scope.convertToUpper = function (){
      var upper = $filter('uppercase')($scope.name);
      $scope.binary = binaryFilter($scope.name);
      $scope.name = upper;
    }
  }

  function BinaryFilter() {
    return function (input) {
      var output = "";
      input = input || "";

      for (let i = 0; i < input.length; i++) {
        output += input[i].charCodeAt(0).toString(2) + " ";
      }

      return output;
    };
  }

})();

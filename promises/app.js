(function(){
  angular.module("app", [])
  .controller("controller", controller)
  .service("ShoppingListService", ShoppingListService)
  .service("WeigthLostFilterService", WeigthLostFilterService);

  controller.$inject = ["ShoppingListService"];
  function controller(ShoppingListService){
    var ctl = this;

    ctl.items = ShoppingListService.getItems();

    ctl.itemName = "";
    ctl.itemQuantity = "";

    ctl.addItem = function(){
      ShoppingListService.addItem(ctl.itemName, ctl.itemQuantity);
    };
  };

  ShoppingListService.$inject = ["$q", "WeigthLostFilterService"];
  function ShoppingListService($q, WeigthLostFilterService){
    var service = this;

    var items = [];

    // service.addItem = function (name, quantity) {
    //   var promise = WeigthLostFilterService.checkName(name);
    //
    //   promise.then(function (response){
    //     var nexPromise = WeigthLostFilterService.checkQuantity(quantity);
    //
    //     nexPromise.then(function (result){
    //       var item = {
    //         name: name,
    //         quantity: quantity
    //       };
    //
    //       items.push(item);
    //     }, function (errorResponse){
    //       console.log(errorResponse.message);
    //     });
    //   }, function (errorResponse){
    //     console.log(errorResponse.message);
    //   });
    // };

    // service.addItem = function (name, quantity) {
    //   var promise = WeigthLostFilterService.checkName(name);
    //
    //   promise
    //   .then(function (response){
    //     return WeigthLostFilterService.checkQuantity(quantity);
    //   })
    //   .then(function (response){
    //     var item = {
    //       name: name,
    //       quantity: quantity
    //     };
    //
    //     items.push(item);
    //   }).catch(function (errorResponse) {
    //     console.log (errorResponse.message);
    //   });
    // }

    service.addItem = function (name, quantity) {
      var namePromise = WeigthLostFilterService.checkName(name);
      var quantityPromise = WeigthLostFilterService.checkQuantity(quantity);

      $q.all([namePromise, quantityPromise])
      .then(function (response){
        var item = {
          name: name,
          quantity: quantity
        };

        items.push(item);
      }).catch(function (errorResponse) {
        console.log (errorResponse.message);
      });
    };

    service.getItems = function () {
      return items;
    };
  };

  WeigthLostFilterService.$inject = ["$q", "$timeout"];
  function WeigthLostFilterService($q, $timeout){
    var service = this;

    service.checkName = function(name){
      var deferred = $q.defer();

      var result = {
        message: ""
      };

      $timeout(function(){
        if(name.toLowerCase().indexOf('cookie') === -1){
          deferred.resolve(result);
        } else {
          result.message = "Stay Away from cookies, Mike!!!";
          deferred.reject(result);
        }
      }, 3000);

      return deferred.promise;
    };

    service.checkQuantity = function(quantity){
      var deferred = $q.defer();

      var result = {
        message: ""
      };

      $timeout(function(){
        if(quantity < 6){
          deferred.resolve(result);
        } else {
          result.message = "That`s too much, Mike!!!";
          deferred.reject(result);
        }
      }, 1000);

      return deferred.promise;
    };
  };
})();

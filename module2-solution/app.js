(function(){
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var buyList = this;

      buyList.items = ShoppingListCheckOffService.getBuyList();

      buyList.bought = function (itemIndex) {
        ShoppingListCheckOffService.bought(itemIndex);
      }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
      var boughtList = this;
      
      boughtList.items = ShoppingListCheckOffService.getBougthList();
    }

    function ShoppingListCheckOffService(){
      var service = this;

      var buyList = [{name: "cookies", quantity: 10}, {name: "apples", quantity: 20}, {name: "ice cream", quantity: 3}, {name: "suggar", quantity: 30}, {name: "rice", quantity: 2}];
      var boughtList = [];

      service.bought = function (itemIndex) {
        boughtList.push(buyList[itemIndex]);
        buyList.splice(itemIndex, 1);
      }

      service.getBuyList = function () {
        return buyList;
      }

      service.getBougthList = function () {
        return boughtList;
      }
    }

})();

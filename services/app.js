
  angular.module('shoppingList', [])
  .controller('shoppingListAddController', shoppingListAddController)
  .controller('shoppingListShowController', shoppingListShowController)
  .service('shoppingListService', shoppingListService);

    shoppingListAddController.$inject = ['shoppingListService'];
    function shoppingListAddController(shoppingListService) {
      var itemAdder = this;

      itemAdder.itemName = "";
      itemAdder.itemQuantity = "";

      itemAdder.addItem = function () {
        shoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
      }
    }

    shoppingListShowController.$inject = ['shoppingListService'];
    function shoppingListShowController(shoppingListService){
      var showList = this;

      showList.items = shoppingListService.showItems();

      showList.deleteItem = function (indexItem) {
        shoppingListService.delete(indexItem);
      }
    }

    function shoppingListService(){
      var service = this;

      var items = [];

      service.addItem = function (itemName, quantity) {
        let item = {
          name: itemName,
          quantity: quantity
        };

        items.push(item);
      }

      service.showItems = function () {
        return items;
      }

      service.delete = function (indexItem) {
        items.splice (indexItem, 1);
      }
    }

(function(){
  angular.module('shoppingList', [])
  .controller('shoppingListController1', shoppingListController1)
  .controller('shoppingListController2', shoppingListController2)
  .factory('shoppingListFactory', shoppingListFactory);

    shoppingListController1.$inject = ['shoppingListFactory'];
    function shoppingListController1(shoppingListFactory) {
      var list1 = this;

      var shoppingList = shoppingListFactory();

      list1.items = shoppingList.showItems();

      list1.itemName = "";
      list1.itemQuantity = "";

      list1.addItem = function () {
        shoppingList.addItem(list1.itemName, list1.itemQuantity);
      }

      list1.deleteItem = function (indexItem) {
        shoppingList.delete(indexItem);
      }
    }

    shoppingListController2.$inject = ['shoppingListFactory'];
    function shoppingListController2(shoppingListFactory){
      var list2 = this;

      var shoppingList = shoppingListFactory(3);

      list2.items = shoppingList.showItems();

      list2.itemName = "";
      list2.itemQuantity = "";

      list2.addItem = function () {
        try{
          shoppingList.addItem(list2.itemName, list2.itemQuantity);
        }catch(error){
          list2.errorMessage = error.message;
        }
      }

      list2.deleteItem = function (indexItem) {
        shoppingList.delete(indexItem);
      }
    }

    function shoppingListService(maxItems){
      var service = this;

      var items = [];

      service.addItem = function (itemName, quantity) {
        if ((maxItems === undefined) || (maxItems !== undefined) && (items.length < maxItems)) {
          let item = {
            name: itemName,
            quantity: quantity
          };

          items.push(item);
        }else{
          throw new Error('Max items (' + maxItems + ') reached.');
        }
      }

      service.showItems = function () {
        return items;
      }

      service.delete = function (indexItem) {
        items.splice (indexItem, 1);
      }
    }

    function shoppingListFactory(){
      var factory = function (maxItems) {
        return new shoppingListService(maxItems);
      };

      return factory;
    }
})();

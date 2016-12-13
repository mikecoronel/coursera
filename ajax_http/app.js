(function(){
  angular.module("MenuCategories", [])
  .controller("MenuCategoriesController", MenuCategoriesController)
  .service("MenuCategoriesService", MenuCategoriesService);

  MenuCategoriesController.$inject = ["MenuCategoriesService"];
  function MenuCategoriesController(MenuCategoriesService){
    var menu = this;

    var promise = MenuCategoriesService.getMenuCategories();

    promise.then(function (response){
      menu.categories = response.data;
    })
    .catch(function (error){
      console.log("Something went terribly wrong!!!");
    });

    menu.logItemMenu = function(shortName){
      var promise = MenuCategoriesService.getMenuForCategory(shortName);

      promise.then(function(response){
        console.log(response.data);
      })
      .catch(function(error){
        console.log(error);
      });
    };
  };

  MenuCategoriesService.$inject = ["$http"];
  function MenuCategoriesService($http){
    var service = this;

    service.getMenuCategories = function (){
      var response = $http({
        method: "GET",
        url: ("http://davids-restaurant.herokuapp.com/categories.json")
      });

      return response;
    };

    service.getMenuForCategory = function (shortName){
      var response = $http({
        method: "GET",
        url: ("http://davids-restaurant.herokuapp.com/menu_items.json"),
        params: {
          category: shortName
        }
      });

      return response;
    };
  };
})();

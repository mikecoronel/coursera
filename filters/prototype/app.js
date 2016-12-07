(function () {
  'use strict';

  var parent = {
    name: "parentObject",
    obj: {
      objValue: "parentObjectValue"
    },
    walk: function(){
      console.log("walking!!!");
    }
  };

  var child = Object.create(parent);

  console.log("CHILD:  child.name ==>", child.name);
  console.log("CHILD:  child.obj.objValue ==>", child.obj.objValue);
  console.log("PARENT: parent.name ==>", parent.name);
  console.log("PARENT: parent.obj.objValue ==>", parent.obj.objValue);
  console.log("parent:", parent);
  console.log("child:", child);

  child.name = "childObject";
  child.obj.objValue = "childObjectValue";

  console.log("=== VALUES CHANGED ===");
  console.log("CHILD:  child.name ==>", child.name);
  console.log("CHILD:  child.obj.objValue ==>", child.obj.objValue);
  console.log("PARENT: parent.name ==>", parent.name);
  console.log("PARENT: parent.obj.objValue ==>", parent.obj.objValue);
  console.log("parent:", parent);
  console.log("child:", child);

  console.log("parent.obj === child.obj: ", parent.obj === child.obj);

  function Dog(name){
    this.name = name;
    console.log('this is: ', this);
  }

  var myDog = new Dog("Gustragon");
  console.log("my Dog:", myDog);

  //Dog("Gus2");
})();

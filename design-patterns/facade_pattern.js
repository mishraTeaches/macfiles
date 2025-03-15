var NameDescription = function (name) {
  this.name = name;
};

NameDescription.prototype = {
  description: function () {
    switch (this.name) {
      case "TajMahal":
        return TajMahal();
      case "NandiHills":
        return NandiHills();
      default:
        return "default";
    }
  },
};

var TajMahal = function () {
  return { location: "Agra", bestThing: "1 of 7 wonders" };
};
var NandiHills = function () {
  return { location: "Bengaluru", bestThing: "Hilly Reigion" };
};
var inst = new NameDescription("TajMahal");
console.log(inst.description());

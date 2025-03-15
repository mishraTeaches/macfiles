class Identity {
  constructor(name, place, developer) {
    this.name = name;
    this.place = place;
    this.developer = developer;
  }

  //   fullIdentification() {
  //     return `${this.name} is from ${this.place} and he is ${
  //       this.developer ? "developer" : "normal person"
  //     }`;
  //   }
}

Identity.prototype.fullIdentification = function () {
  return `${this.name} is from ${this.place} and he is ${
    this.developer ? "developer" : "normal person from prototype"
  }`;
};

let person1 = new Identity("ishu", "varanasi", true);
let person2 = new Identity("xyz", "bangalore", false);

person1.fullIdentification = function () {
  return `${this.name} is from ${this.place} and he is ${
    this.developer ? "developer" : "normal person"
  }`;
};
console.log(person2.fullIdentification());

let person1 = {
  first: "ishu",
  last: "mishra",
  fullName(address, pincode) {
    return this.first + " " + this.last + " " + address + " " + pincode;
  },
};

let person2 = {
  first: "xyz",
  last: "oplo",
};

console.log(person1.fullName.call(person2, "bangalore", 232322));

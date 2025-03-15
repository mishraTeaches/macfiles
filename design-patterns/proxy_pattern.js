const person = {
  name: "Messi",
  age: 38,
  email: "messi@gm.com",
  country: "Barcelona",
};

const personProxy = new Proxy(person, {
  get: (target, prop) => {
    return target[prop];
  },
  set: (target, prop, value) => {
    return (target[prop] = value);
  },
});
//personProxy.age = 43;
console.log(personProxy.age);

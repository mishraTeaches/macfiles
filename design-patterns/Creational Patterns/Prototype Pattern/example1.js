const HumanBeing = {
  getlocation() {
    console.log(`from - ${this.location}`);
  },
};

const humanInstance = Object.create(HumanBeing, {
  id: {
    value: 45,
  },
  location: {
    value: "varanasi",
  },
});
humanInstance.getlocation();

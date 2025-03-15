import { baker } from "./staff.mjs";

let ovenCount = 0; // PRIVATE
const oven = {
  makeCupCake(toppings) {
    baker.bake("cupcake", toppings);
  },
  makeMuffin(mSize) {
    baker.bake("muffin", mSize);
  },
  chooseColorOfCake(color) {
    baker.bake("color", color);
  },
};

export { oven };

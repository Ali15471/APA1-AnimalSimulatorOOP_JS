import { Mammal } from "./Mammal.js";

export class Cat extends Mammal {
  constructor(weight) {
    super(weight);
  }

  pregnancyPeriod() {
    return "My pregnancy period is about 2.5 months";
  }

  size() {
    return "Big cat size";
  }

  swim() {
    return "Some cats can swim";
  }
}

import { Mammal } from "./Mammal.js";

export class BlueWhale extends Mammal {
  constructor(weight) {
    super(weight);
  }

  pregnancyPeriod() {
    return "My pregnancy period is 16 months";
  }

  size() {
    return "Very big size";
  }

  swim() {
    return "All blue whales swim";
  }
}

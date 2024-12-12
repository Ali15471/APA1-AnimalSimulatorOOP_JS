import { Bird } from "./Bird.js";

export class Ostrich extends Bird {
  constructor(weight) {
    super(weight);
  }

  fly() {
    return "I'm flying like an Ostrich";
  }

  noise() {
    return "*Makes Ostrich Noises*";
  }

  swim() {
    return "All Ostriches can float";
  }
}

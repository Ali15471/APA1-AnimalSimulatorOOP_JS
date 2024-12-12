import { Cat } from "./Cat.js";

export class MallardDuck extends Cat {
  constructor(weight) {
    super(weight);
  }

  display() {
    return "I'm a real Jaguar";
  }

  feed() {
    return "I hunt to feed.";
  }
}

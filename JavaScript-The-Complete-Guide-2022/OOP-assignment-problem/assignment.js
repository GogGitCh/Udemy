// 1
console.log("-------------------------");
class Course {
    #_price;
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.#_price = price;
  }
  get () {
      return "$" + this.#_price;
  }
  set (value) {
      if (value > 0) {
          throw "invalid value";
      }
      this.#_price = value;
  }

  lengthPrice() {
    return `${this.#_price} / ${this.length} = ${
      this.price / this.length
    } per month`;
  }

  summary() {
    console.log(`The ${this.title} course has a length of ${this.length} months and you pay only \$${this.price}`);
  }
}

const courseOne = new Course("JavaScript", 18, 99);
const courseTwo = new Course("PHP", 8, 89);

console.log(courseOne);
console.log(courseTwo);

// 2
console.log("-------------------------");

console.log(courseOne.summary("JavaScript", 18, 99));
console.log(courseOne.lengthPrice(18, 99));
console.log(courseTwo.summary("PHP", 8, 89));
console.log(courseTwo.lengthPrice(8, 89));

console.log("-------------------------");

// 3
class PracticalCourse extends Course {
  constructor(title, length, priceTRY, numOfExercises) {
    super(title, priceTRY, length);
    this.exercisesNum = numOfExercises;
  }
}

class TheoreticalCourse extends Course {
  publish() {
    console.log(`This offer is within limited amount of time $`);
  }
}

let practical = new PracticalCourse("Angular",65,50,69);
let theoretical = new TheoreticalCourse("Veu",56,66,83);

console.log(practical);
practical.summary();
// practical.publish();

console.log(theoretical);
// theoretical.summary();
theoretical.publish();


// 4

// adding Getters and Setters

// 5
// theoretical._price = -1; // Check if the private propperty works  
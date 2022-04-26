// 1
console.log("-------------------------");
class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  lengthPrice() {
    return `${this.price} / ${this.length} = ${
      this.price / this.length
    } per month`;
  }

  summary() {
    return `The ${this.title} course has a length of ${this.length} months and you pay only \$${this.price}`;
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
    return `This offer is within limited amount of time $`;
  }
}

let practical = new PracticalCourse("Angular",65,50,69);
let theoretical = new TheoreticalCourse("Veu",56,66,83);

console.log(practical);
console.log(practical.summary());;
console.log(practical.publish());;

console.log(theoretical);
console.log(theoretical.summary());;
console.log(theoretical.publish());;

// 4

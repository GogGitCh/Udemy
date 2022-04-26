// 1
console.log('-------------------------');
class Course {
    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }

    lengthPrice() {
        return `${this.price} / ${this.length} = ${this.price / this.length} per month`;
    }

    summary() {
        return `The ${this.title} course has a length of ${this.length} months and you pay only \$${this.price}`
    }

}

const courseOne = new Course("JavaScript", 18, 99);
const courseTwo = new Course("PHP", 8, 89);

console.log(courseOne);
console.log(courseTwo);

// 2 
console.log('-------------------------');

console.log(courseOne.summary("JavaScript", 18, 99));
console.log(courseOne.lengthPrice(18, 99));
console.log(courseTwo.summary("PHP", 8, 89));
console.log(courseTwo.lengthPrice(8, 89));

console.log('-------------------------');




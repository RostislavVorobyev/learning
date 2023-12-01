'use strict';

const Person = function (firstName, bitrhYear) {
  this.firstName = firstName;
  this.bitrhYear = bitrhYear;
};

Person.prototype.calcAge = function () {
  console.log(`${2023 - this.bitrhYear}`);
};

const sudentProto = Object.create(Person.prototype);

// const Student = function (firstName, bitrhYear, course) {
//   Person.call(this, firstName, bitrhYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.introduce = function () {
//   console.log(`Hi, i am ${this.firstName} from ${this.course} course.`);
// };

// var m = new Student('Mike', 1998, 'JS');

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speedUS) {
    this.speed = speedUS * 1.6;
  }
  accelerate() {
    this.speed += 20;
    console.log(`Going at ${this.speed} km/h`);
  }

  break() {
    this.speed -= 20;
    console.log(`Going at ${this.speed} km/h`);
  }
}

class ECar extends Car {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeTo(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(`Going at ${this.speed} km/h and have ${this.#charge} % `);
  }
}

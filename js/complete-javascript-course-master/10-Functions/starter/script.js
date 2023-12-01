'use strict';

const book = function (num, name) {
  console.log(`You booked ${num} - ${name}`);
  this.bookings.push(`${this.iataCode} : ${num} - ${name}`);
};

const lufthnassa = {
  airlin: 'lufthnassa',
  iataCode: 'LH',
  bookings: [],
  book,
};

const ew = {
  airlin: 'ew',
  iataCode: 'ew',
  bookings: [],
  book,
};

lufthnassa.book('123', 'to mid');

const addtax = (rate, value) => value + value * rate;

console.log(addtax(0.1, 200));

const addvat = addtax.bind(null, 0.23);

const constructTaxcalc = function (rate, taxFunc) {
  return () => taxFunc(rate);

  //   return taxFunc.bind(null, rate);
};

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount++} pasangers`);
  };
};

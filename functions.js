'use strict'
const bookings = [];
const checkbooking = function (flightName, passengers = 1, price = 200) {
  const booking = {
    flightName,
    passengers,
    price,
  };
  bookings.push = booking;
  console.log(booking);
};
checkbooking('ln88e');

// passing argument, woek value and vs refrence

const flight = 'LHT8797';
const gaderz = {
  name: 'NELSON GADERZ',
  passport: 1785648383567,
};
const checkin = function (flightNum, passenger) {
  if (passenger.passport === 1785648383567) {
    alert('checked in');
  } else {
    alert('wrong passport number!');
  }
};

checkin(flight, gaderz);
checkin(flight);
checkin(gaderz);
log;
// javascript does not pass in reference but instead pass in values

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random()) * 1000000000;
};
newPassport(gaderz);
checkin(flight, gaderz);


 // functions accept call back functions
const oneWord = function (hnh) {
  return hnh.replaceAll(' ', '').toLowerCase();
};
const upperFirstWord = function (hnh) {
  const [first, ...others] = hnh.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//  HIGHER ORDER FUNCTION
const transform = function (hnh, fn) {
  console.log(`original string: ${hnh} `);
  console.log(`transformed string: ${fn(hnh)} `);
  console.log(`trnsformed by: ${fn.name}`);
};
transform('javascript is the best', upperFirstWord);
transform('what can i do for you', oneWord);

const high5 = function () {
  console.log('🧡');
};

document.body.addEventListener('CLICK', high5);
['JONAS', 'MARTHER', 'ADA'].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greathey = greet('Hey');
greathey('Nelson');
greathey('Nelson');

greet('Hello')('Nelson');

const gretArr = greeting => name => console.log(`${greeting} ${name}`);
gretArr('Hello Mr')('Nelson');

const nigeria = {
  airline: 'Green Africa',
  iatacode: 'GA',
  booking: [],
  book(flightnumber, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightnumber}`
    );
    this.booking.push({ flight: `${this.iatacode} ${flightnumber}`, name });
  },
};
nigeria.book(187, 'nelson gaderz');
nigeria.book(166, 'victor chinonso');
console.log(nigeria.booking);

// call method

const arik = {
  airline: 'Airik wings',
  iatacode: 'AK',
  booking: [],
};

const book = nigeria.book;
book.call(arik, 188, 'Nelson Gaderz');
console.log(arik);

book.call(nigeria, 188, 'Nelson Gaderz');
console.log(nigeria);

const swiss = {
  airline: 'swiss wings',
  iatacode: 'AK',
  booking: [],
};

book.call(swiss, 285, 'tochukwu agada');
console.log(swiss);

// apply method

const flightData = [244, 'Collins Agaga'];
book.apply(swiss, flightData);
console.log(swiss);
// call
book.call(swiss, ...flightData);
console.log();

// bind method
const bookEw = book.bind(nigeria);
const bookAr = book.bind(arik);
const bookSw = book.bind(swiss);
bookEw(234, 'benjamin elviz');

const bookEw2 = book.bind(nigeria, 23);
bookEw2('CHARITY UGWU');

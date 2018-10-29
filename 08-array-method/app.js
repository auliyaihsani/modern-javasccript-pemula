// create array
const number = [54,23,20,1,60];
const number2 = new Array(90,7,43,100,300);
const fruit = ['apple', 'banana', 'chery', 'orange', 'pear'];
const mix = [30, 'hello',true, undefined, null, {a: 1, b: 2,}, new Date()];

let val;

// get length
val = number.length;
// cek tipe data array
val = Array.isArray(number2);

// get single value
val = fruit[3];
val = fruit[0];

// insert into array
fruit[2] = 'Grape';
// find index of value
val = mix.indexOf(undefined);

// mutating

// add on to end
number.push(200);
// add on to front
number.unshift(7);
// take off from end
number.pop();
// take off from front
number.shift();
// splice value
number.splice(1,1);

// reverse memutarbalikan array
fruit.reverse();

console.log(number);

console.log(fruit);
console.log(val);































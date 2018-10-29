const firstName = 'peter';
const lasName = 'parker';
const Age = 23;
const phar = 'hello-friends-my-name-is-' + firstName + '-and-im-' + Age;
const tags = 'html, css, php, javascript';

let val;
val = firstName + lasName;
// concation
val = firstName + ' ' +lasName;
val = 'hello, friends my name is ' + firstName + ' and iam ' + Age;

// append
// val = 'Marshal ';
// val += 'Mathers';

// escaping
val = 'That\'s awesome, I can\'t wait';
val = "That's awesome, I can't wait it";
// length
val = firstName.length;

// method concate
val = firstName.concat(' ', ' ')

// change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[3];

// indexOf()
val = firstName.indexOf('t');
// charAt()
val = firstName.charAt('3');
val = firstName.charAt(firstName.length - 1);

// substring();
val = firstName.substring(0,4);

// slice
val = firstName.slice(0, 4);
// menampilkan karakter terakhir
val = firstName.slice(-1);

// method split untuk memisahkan array
val = phar.split('-');
val = tags.split(',');

// method replace()
val = phar.replace('hello', 'hai');
// method includes digunakan untuk validasi yg bernilai boolean
val = phar.includes('hai');



console.log(val);




























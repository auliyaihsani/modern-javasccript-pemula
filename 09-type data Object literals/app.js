const person = {
    firstName: 'steve',
    lastName: 'job',
    age: 39,
    email: 'steve@job.com',
    hobbies: ['music', 'sport'],
    address : {
        city: 'Arizona',
        zipcode: '86029'
    },
    getBirthYear: function () {
        return 2018 - this.age;
    }
}
let val;
val = person;
// mengambil nilai property
val = person.firstName;
// mengambil nilai spesifik
val = person['firstName'];
val = person.age;
val = person.hobbies[0];
val = person.address.zipcode;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);












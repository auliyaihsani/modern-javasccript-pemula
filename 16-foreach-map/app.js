// for
const cars = ['mazda', 'bmw', 'nissan', 'toyota'];

// perulangan dengan array
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// foreach
// memanggil argumen dari function dan variabel ke dua(index)
// didalam foreach juga dapat memannggil tipe data array
// cars.forEach(function(car, index, array){
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });

// Map
// memanggil perulangan didalam objek pada array
// const users = [
//     {id: 1, name: 'viviyona'},
//     {id: 2, name: 'veranda'},
//     {id: 3, name: 'gracia'},
// ];

// const ids = users.map(function(user){
//     return user.id
// });

// console.log(ids);



// mencari nilai key dan value di dalam perulangan

const user = {
    firsName : 'viviyona',
    lastName : 'apriani',
    age : 24
 }

for(let x in user ){
    console.log(`${x} : ${user[x]}`);
}





















// expression
// default value
function greet(firstname = 'sani', lastname = 'auliya') {
    // if(typeof firstname === 'undefined' ){firstname = 'sani'}
    // if(typeof lastname === 'undefined') {lastname = 'auliya'}
   return `hello, ${firstname} ${lastname}`;
}
// kita bisa memberi nilai argumen yg diberikan walaupun berbeda dari default value
console.log(greet('boriel', 'lukman'));

// declaratif
const square = function(x = 2) {
    return x*x;
}
console.log(square());

// memanggil function yang sedang dibaca

(function (name) {
    console.log(`hello ${name}`);
}) ('ihsani');
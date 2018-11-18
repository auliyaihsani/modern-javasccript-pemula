var a = 1;
let b = 2;
const c =3;

// function local(){
//     // local scope
//     var a = 4;
//     let b = 5;
//     const c = 6;

//     console.log('local scope : ', a,b,c);
// }
// local();

// if (true) {
//     // block scope
// variabel var akan mengoverwrite nilai yg lama dengan nilai yg baru
//    var a = 4;
//    let b = 5;
//    const c = 6;
// }
for(let a = 0; a <10; a++){
    console.log(`loop: ${a}`);
}
console.log('global scope: ', a, b, c);

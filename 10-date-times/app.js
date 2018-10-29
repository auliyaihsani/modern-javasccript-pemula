let val;

const today = new Date();
let birthday = new Date('8-16-1995 23:30:25');
birthday = new Date('Augustus 16 1995');
birthday = new Date('8/16/1995');
// menggunkan tipe data tgl,bulan,tahun,jam,menit dan detik
val = today.toString();
val = today.getFullYear();
val = today.getMonth();
val = today.getDate();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setDate(20);
birthday.setMonth(1);
birthday.setFullYear(1998);
birthday.setHours(12);
birthday.setMinutes(45);
birthday.setSeconds(50);
birthday.setMilliseconds(4);
birthday.setTime(12);

console.log(birthday );



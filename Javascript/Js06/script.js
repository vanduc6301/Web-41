let number = 10;

console.log(number.toString(2));
console.log(number.toString(8));
console.log(number.toString(16));
console.log(number);

console.log(NaN == NaN);
console.log(isNaN(NaN));

console.log(Number("123"));
console.log(Number("123a"));
console.log(parseInt("123a"));
console.log(parseFloat("123a"));

//cac phuong thuc hay dung math
//math.min
console.log(Math.min(1, 2, 3, 4, 5, 6, -1, 5));
console.log(Math.max(1, 2, 3, 4, 5, 6, -1, 5));
console.log(Math.floor(1.2324));
console.log(Math.ceil(1.2324));
console.log(Math.round(1.6));

// truong hop dac biet
// 0 < 1
console.log(Math.random());
// n - 10
console.log(Math.floor(Math.random() * 10));
//a - b
console.log(Math.floor(Math.random() * 10) + 10);

const now = new Date();

console.log(now);

// ISO YYYY-DDTHH:MM:SS
const date0fbrith = new Date("2001-03-06");

console.log(date0fbrith);
/// tu dong bu tru
console.log(new Date(2024, 11, 30));

//Thang (dang so ) 0-11

console.log(now.getMonth());

//mui gio

const date = new date(2024-10-10)
console.log(date)
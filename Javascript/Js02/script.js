// const x = 10;

// console.log(x + "10" - 10);
// console.log(x + Number(10) - 10);
// console.log(typeof 10);
// console.log(String(123));

// let a = 1;
// let b = 1;

// console.log(a++ + 1);
// console.log(++b + 1);
// console.log(a);
// console.log(b);

// //a++ +1 => thuc hien phep tinh truoc roi tang a sau
// // ++a + 1=> tang a roi thuc hien phep tinh sau
// // Luon luon cap nhat gia tri


// // == so sanh ===
// console.log(2==2);
// console.log(2 == '2');
// console.log(2 === '2');
// console.log(2 === 2);

// console.log(1==1);
// console.log(1 == NaN);
// console.log(1 < NaN);
// console.log(1 > NaN);
// console.log(1 != NaN);


// // toan tu logical "! not"

// let isRicky = true;
// console.log(isRicky);
// console.log(!isRicky); // dao nguoc gia tri

// let m = 1; 
// console.log(!!1); // chuyen doi sang kieu boolean
// console.log(Boolean(x)); // giong nhu o tren khac nhau ve cach  dung 


// // toan tu logical "and -&&"
// //tim va tra ve gia tri sai(false) trong bieu thuc dau tien
// //neu khogn co thi tra ve gia tri cuoi cung 

// true && false && true;
// console.log(1 && "" && 5);

// let ab = undefined;
// let cd = ab || 5;

// // input => tham so 
// //khai bao ham 
// // paramters - tham so 
// function calculateBillwithVAT(subtotal,VAT){
//     return subtotal * (1 + VAT/100);
// }

// //goi ham
// // arguments - doi so 
// console.log(calculateBillwithVAT(1_500_000,10));
// console.log(calculateBillwithVAT(2_500_000, 15));
// console.log(calculateBillwithVAT(3_500_000, 20));

// function calcBMT (weight , height){
//     const BMT = weight / ( height **2);
//     return BMT;
// }
// console.log(calcBMT(70,1.75));
// console.log(calcBMT(52,1.63));



// function sayhello(name){
//     console.log('hello' , name);
//     console.log('hello' + name);
//     console.log(`hello ${name}`);
// }

// console.log(sayhello('duc'));
// console.log(sayhello('khue'));


// //global variable - truy cap o bat ky cho nao 

// let name = 'Khue';

// function hello(){
//     let age = 24;

//     console.log('hello',name);
//     console.log(age);
// }

// {
//     console.log(name);
//     hello();
// }

//bai tap 
//bai 1
function sum(a,b){
    const tong= a + b;
    return tong;
}
console.log(`tong cua 2 so bat ky la : ${sum(5,6)}`);
//bai 2
function square(x){
    const binhphuong = x**2;
    return binhphuong;
}
console.log(`binh phuong cua 1 so bat ky la : ${square(12)}`);
//bai 3
function century(year){
    const theky = Math.ceil(year /100);
    return theky;
}
console.log(`nam 2024 la the ky thu ${century(2024)}`);
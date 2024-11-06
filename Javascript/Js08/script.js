// const arr=[1,2,3,4,5]

// arr.indexOf(2);
// arr.push(6);

// arr.sort()//
// arr.filter()
// arr.find()
// arr.findIndex()
// arr.some()
// arr.every()
// arr.forEach()


// let x = function(){
// }
// function demo(){
//     return function(){
//     };
// }
// function sum(){
// }
// sum(function () {},function () {})


const  names = ['duc' , 'ba' , 'tram', 'binh'];
//sap xep theo thu tu chu cai 
// names.sort(function(a,b){
//     return a.length - b.length
//     // if(a.length < b.length){
//     //     return -1;
//     // }else{
//     //     return 1;
//     // }
// });
names.sort((a, b) => {
  return a.length - b.length;
});
//neu chi co duy nhat 1 cau lenh trong ham 
names.sort((a, b) => a.length - b.length);
console.log(names);


const number = [5 , 3, 33,13,7, 4 ,1,11];
number.sort((a,b)=> a-b);
console.log(number);

const student = [
    {name : 'duc' , age :23},
    {name : 'binh' , age : 19},
    {name : 'ba', age : 32}
];

student.sort((a,b) => {
    if(a.name < b.name){
        return -1;
    }
    return 1;
});
student.sort((a, b) => a.age - b.age);
console.log(student);
// no se duy het cac phan tu trong mang 
names.forEach((name) => console.log(`xin chao ${name}`));

//forEach() khong the ngat break , return


//filter tra ve mot mang cac phan tu "khop" voi dieu kien chi dinh
const students = [
  { name: "duc", age: 23, gender: "male" },
  { name: "binh", age: 19, gender: "male" },
  { name: "ba", age: 32, gender: "male" },
  { name: "tram", age: 18, gender: "female" },
];
const felalestudent = students.filter((students) => students.gender === 'female');
console.log(felalestudent);

const tuoi= students.filter((student) => student.age < 20)
console.log(tuoi);

const result = students.map((student) =>({ 
    name: student.name ,
    age: student.age , 
    gender: student.gender === 'male' ? 'M' : 'F'
}));
console.log(result);

const results = students.map((student) => ({
  name: student.name,
  age: student.age,
  isAdult:student.age >= 20 ? true : false,
  gender: student.gender 
}));
console.log(results);




//map  NV: bien doi cai  nay thanh cai kia , vd bien doi a thanh b  or co cac ham 10,20,30,40 muon cong tat ca len 1 thanh 11,21,31,41
// thuogn dung : chuyen tu du lieu thanh cac thanh phan hien thi len man hinh 
// Vi du :


//reduce // thuc hien tinh toans tong hop 
// 3. Viết hàm getMax nhận vào một mảng các object bất kỳ và một key
// Ví dụ: [ { name: "Ba", age: 31 }, { name: "Mai Anh", age: 30 } ]
// Trả về giá trị cao nhất của key tương ứng
// Ví dụ: getMax(arr, "age") => 31
function getMax(arr, key) {
    let Max = 0;

    arr.forEach(obj => {
        if(obj[key] > Max){
            Max= obj[key]
        }
    });
    return Max;
}

const students = [
  { name: "duc", age: 23, score: "8" },
  { name: "binh", age: 18, score: "9" },
  { name: "tram", age: 18, score: "9" },
];
console.log(getMax(students,'age'));
// console.log(getMax(students,'score'));



// 6. Viết hàm countValues nhận vào một mảng các object bất kỳ và một key
// Ví dụ: [ { name: "Ba", age: 31 }, { name: "Mai Anh", age: 30 }, { name: "Minh Đức", age: 30 } ]
// Trả về một object với tổng số lần xuất hiện giá trị của key
// Ví dụ: countValues(arr, "age") => { 31: 1, 30: 2 }
// function countValues(arr, key) {
//   const result = {};

//   arr.forEach(obj => {
//     if (obj[key] in result) {
//         result[obj[key]]+= 1;
//     } else {
//         result[obj[key]] = 1;
//     }
//   });
//   return result;
// }
function countValues(arr, key) {
   return arr.reduce((acc , obj) =>{
        if(obj[key] in acc){
            acc[obj[key]] += 1;
        }else{
            acc[obj[key]] =1 ;
        }
        return acc;
    },{});//nhan vao 4 tham so // 
};
console.log(countValues(students,'age'));
//some ()
//every()
//find()
//findIndex()


// 7. Viết hàm groupBy nhận vào một mảng object bất kỳ và một key
// Ví dụ: [ { name: "Ba", gender: "Male" }, { name: "Mai Anh", gender: "Female" }, { name: "Đức", gender: "Male" } ]
// Trả về một object với các object được nhóm theo key
// Ví dụ: groupBy(arr, "gender") => { male: [ { name: "Ba", gender: "Male" }, { name: "Đức", gender: "Male" } ], female: [ { name: "Mai Anh", gender: "Female" } ]}
function groupBy(arr, key) {
  // Code

  return; // Kết quả
}
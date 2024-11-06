//bai 1 : kierm tra mang co phair la mang tang dan hay khong

// function checkArrAsc(arr){
//     for( let i = 0 ; i < arr.length - 1; i++){
//         if(arr[i] >= arr[i+1]){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(checkArrAsc([1, 3,3, 5, 6, 8]));
// console.log(checkArrAsc([1,3,5,6,8]));
// console.log(checkArrAsc([1,4,6,7,3,8]));

//bai 2: viet chuowng trinh truyen vao 1 mang cac so , va 1 gia tri bat ky . tra ve mang moi voiw cac gia trij lon hon gia tri truyen vao

function arrAsc(arr, number) {
  let arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > number) {
      arrNew.push(arr[i]);
    }
  }
  return arrNew;
}
console.log(arrAsc([1, 2, 3, 4, 5], 6));
console.log(arrAsc([1, 2, 3, 4, 5], 8));
console.log(arrAsc([1, 2, 3, 4, 5], 3));

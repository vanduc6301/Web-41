// Bài 7: Viết hàm tìm bội số chung nhỏ nhất (LCM) của hai số nguyên dương.

// function bscnn(a,b){
//     if(a == 0 || b == 0){
//         return a + b ;
//     }
//     const min = a < b ? a : b;
//    for( i = min; i >= 1; i--){
//       if(a % i == 0 && b % i == 0){
//          return i;
//       }
//    }
//    return 1;
// }
// console.log(`bội chung nhỏ nhât của hai số 4 và 6 là  ${bscnn(4, 6)}`);
// console.log(`bội chung nhỏ nhất của hai số 10 và 15 là   ${bscnn(10, 15)}`);

// Hàm tính ƯCLN
// function calculateGCD(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }
// // Hàm tính BCNN
// function calculateLCM(a, b){
//     return (a * b) / calculateGCD(a, b);
// }
// console.log(`bội chung nhỏ nhât của hai số 4 và 6 là  ${calculateLCM(4, 6)}`);
// console.log(`bội chung nhỏ nhất của hai số 10 và 15 là   ${calculateLCM(10, 15)}`);
// console.log(
//   `bội chung nhỏ nhất của hai số 6 và 20 là   ${calculateLCM(6, 20)}`
// );

// bài 6
// function isPerfectNumber(num) {
//   if (num <= 1) return false; // Số hoàn hảo phải là số nguyên dương lớn hơn 1
//   let sum = 0;
//   // Tính tổng các ước số của num, ngoại trừ chính nó
//   for (let i = 1; i <= num / 2; i++) {
//     if (num % i === 0) {
//       sum += i;
//     }
//   }
//   // Kiểm tra xem tổng các ước số có bằng số đó không
//   return sum === num;
// }
// console.log(`số 12 có phải là số hoàn hảo không : ${isPerfectNumber(12)}`);
// console.log(`số 6 có phải là số hoàn hảo không: ${isPerfectNumber(6)}`);
// console.log(`số 24 có phải là số hoàn hảo không: ${isPerfectNumber(24)}`);
// console.log(`số 36 có phải là số hoàn hảo không: ${isPerfectNumber(36)}`);
// console.log(`số 28 có phải là số hoàn hảo không: ${isPerfectNumber(28)}`);
// bai 2

// function findNumbers(text) {
//     const parts = text.split(/[^0-9]+/);
    
//     const numbers = parts.filter(part => part !== "");

//     return numbers;
// }
// let str =findNumbers();
// let text = "năm nay tôi 23 tuổi , tôi đã tốt nghiệp sau 4 năm học đại học";
// console.log(Array.from(str));
//     const cart = [
//       { name: "Áo thun", price: 200000, quantity: 2 },
//       { name: "Quần jeans", price: 500000, quantity: 1 },
//       { name: "Giày thể thao", price: 1500000, quantity: 1 },
//       { name: "Áo khoác", price: 1000000, quantity: 1 },
//       { name: "Mũ lưỡi trai", price: 300000, quantity: 3 },
//       { name: "Tất vớ", price: 50000, quantity: 5 },
//     ];

// function calculateTotal(cart, discountPercentage) {
//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   const discountAmount = (discountPercentage / 100) * total;
//   const totalAfterDiscount = total - discountAmount;

//   return totalAfterDiscount;
// }
// console.log('Tổng số tiền phải trả sau khi giảm giá:',calculateTotal(cart,20), 'VND');  // Kết quả: Tổng số tiền phải trả sau khi giảm giá: ...

//bai 3 
function isAlphabe(char) {
  // a-zA-Z
  return ("a" <= char && char <= "z") || ("A" <= char && char <= "Z");
}

function shiftCharacter(char, shift) {
    if(shift === 0 ) return char;
  //a -z : 97 -122
  //A - Z : 65 -90
  let code = char.chatCodeAt(0);
  
    if( shift > 0){
        for (let i = 0 ; i < shift ;i++){
        code ++;
        if( "a" <= char && char<= "z" && code < 90){
            code = 97;
        }
        if("A" <= char && char <= "Z" && code < 122){
            code = 65;
        }
    } else {
        
    }
    }
//   if (code > 122) {
//     code = (122 - code + 1) + 97;
//   } else if(code > 90){
//     code = (90 - code + 1) + 65;
//   }else if(code < 65){
//     code = 90 - ( 65 - code -1 );
//   }else if(code < 90 ){
//     code = 122 - (97 - code -1 ); 
//   }

  return String.fromCodePoint(code + shift);
}
function caesarCipher(str, shift) {
  let result = "";

  for (let char of str) {
    if (isAlphabe(char)) {
      result += char;
    } else {
      result += shiftCharacter(char, shift);
    }
  }
  return result;
}
console.log(caesarCipher("Hello, World!", 3));
//1 . Viết hàm tạo một số tự nhiên ngẫu nhiên từ 0 đén n 
// function rdnumber(n){
//     return Math.floor(Math.random() * n);
// }
// console.log("so ngau nhien tu 0 den  50 la :"+ rdnumber(50));

// //2.Viết hàm chuyển đổi một số từ hệ cơ số này sang hệ cơ số khác 
// function converRadix(a , targetRadix){
//     return a.toString(targetRadix);
// }
// console.log(converRadix(0b11 , 10))
// //3. Viết hàm tạo một số nguyên ngẫu nhiên trong koang từ a - b 
// function getRandomInt(a, b) {
//   if (a > b) {
//     [a, b] = [b, a];
//   }
//   return Math.floor(Math.random() * (b - a + 1)) + a;
// }
// console.log("số nguyên ngẫu nhiên trong khoang từ 1 đến 10 là "+getRandomInt(1,10));
// console.log("số nguyên ngẫu nhiên trong khoang từ 5 đến 15là "+getRandomInt(5, 15));
// console.log("số nguyên ngẫu nhiên trong khoang từ 18 đến 6 là "+getRandomInt(18,6));


//4.Viết hàm tạo mã màu HEX ngẫu nhiên
// bao gom 6 ky tu 0 -9a- f
// function getRandomHexColor() {
//   const randomNumber = Math.floor(Math.random() * 10_000_000);
//   // Chuyển đổi số đó thành chuỗi HEX và thêm dấu # ở đầu
//   const hexColor = "#" + randomNumber.toString(16).padStart(6, "0");
//   return hexColor.toUpperCase(); // Chuyển đổi thành chữ hoa
// }

// function radomHex() {
//     let results = "#";

//     for(let i = 0 ; i < 6 ; i++){
//         results += Math.floor(Math.random() * 16) .toString(16);
//     }
//     return results;
// }
// console.log(radomHex());


// let str = "hello work!"// neu la bieu tuong thi se tu dong tinh la 2 ky tu 

// console.log(str[0]);//H
// console.log(str[5]);//" "
// console.log(str.length);

// for( let i = 0 ; i < str ; i++){
//     console.log(str[i]);
// }

//1.Viết hàm cắt chuỗi từ vị trí đầu tiên , tới vị trí chỉ định 
function cutString(str, endIndex) {
  return str.substring(0, endIndex);
}
console.log(cutString("Manchester City", 10));




//2. Viết hàm chuyển đổi một tên thành tên viết tắt 
function convertToInitials(fullName) {
  const nameParts = fullName.trim().split(" ");
  const initials = nameParts.map((part) => part.charAt(0).toUpperCase()).join(".");
  return initials + ".";
}
console.log(convertToInitials("Phung Van Duc"));
console.log(convertToInitials("Nguyen Thi Trang Khue"));


//c2
// function convertToin(name){

// }

// let name = "Phung Duc";

// let spaceIndex = name.latsIndex0f('');
// let namePrefix = name.slice(0 , spaceIndex + 2);

// console.log(namePrefix + '.');
//3.viết hàm ẩn địa chỉ email 

let email = "duc2001@gmail.com";

let atriskindex = email.indexOf('@');
console.log(email.slice(0,2)+ "..." + email.slice(atriskindex));


function checkmail(email){
    let atriskindex = email.indexOf("@");

    console.log(email.slice(0, 2) + "..." + email.slice(atriskindex));
}
checkmail("trangkhue@gmail.com")


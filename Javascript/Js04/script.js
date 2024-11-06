// i j k 
// for (let i = 1 ; i <= 10 ; i++){
//     console.log('Lan lap thu ',i)
// }


//Thuong lap tren so lan cu the 
// for (let i = 1; i <= 30; i++){
//     console.log('Doc sach ngay thu ',i)
// }


// // Thuong dung voi so lan lap khong chinh xac
// while (condition) {
    
// }


// //Thuc hien truoc khoi lenh 1 lan => ktra dieu kien 
// do {
    
// } while (condition);

//continue => bo qua lan lap hien tai chuyen sang lan lap tiep theo
// break => ngatluoon vong lap 
// doc sach lien tuc 30 nagy 
//cuon sach co 300 trang 
// moi ngay doc dc 20trang 

// let totalpage= 300;
// let readedpage = 0;
// for (let i = 1; i <= 30; i++) {
//     console.log("doc sach ngay thu",i);

//     readedpage += 20;
//     console.log('hom nay da doc duoc tong cong la',readedpage);

//     if(readedpage >= totalpage){
//         console.log('da doc xong')
//         break;
//     }
// }


//exemple
// for (let a = 1 ; a <= 30; a++){
//     if(a % 6 == 0 || a % 7== 0){
//         console.log('hom nay la cuoi tuan , toi day luc 9 h sang')
//     }else{
//         console.log("hom nay la ngay thu trong tuan ,toi day vao luc 6gio sang ")
//     }
// }

//bt thuc hanh 
//bai 1
// const string = a;
// function repeatstring(a){
//     for (let string = 1; string <= 10; string++) {
//         string += string
//       console.log(`ket qua la ${repeatstring(a)}`);
//     }
// }
// function repeatstring(str,reapeatTime) {
//   let ketQua = ""; // Khởi tạo chuỗi kết quả rỗng

//   for (let i = 0; i < reapeatTime; i++) {
//     ketQua += str; // Nối chuỗi vào kết quả
//   }
//   return ketQua; // Trả về chuỗi đã sao chép
// }
// console.log(repeatstring('khue xinh gai' , 5))



// bai 2 
function repeatstring(str, reapeatTime,saperator) {
  let ketQua = ""; // Khởi tạo chuỗi kết quả rỗng

  for (let i = 0; i < reapeatTime; i++) {
    ketQua += str; // Nối chuỗi vào kết quả
    if(i < reapeatTime -1){
        ketQua += saperator;
    }
  }
  return ketQua; // Trả về chuỗi đã sao chép
}
console.log(repeatstring("khue xinh gai", 5,"-"));

//bai 4

function tinhTongChiaHetCho5(a) {
  let tong = 0; // Khởi tạo biến tổng
  for (let i = 0; i <= a; i++) {
    // for (let i = 5; i <= a; i + 5)
    //sum += i
    if (i % 5 === 0) {
      // Kiểm tra nếu số chia hết cho 5
      tong += i; // Cộng số vào tổng
    }
  }
  return tong; // Trả về tổng
}
console.log(` tong so chia het cho 5 la :${tinhTongChiaHetCho5(100)}`);
console.log(` tong so chia het cho 5 la :${tinhTongChiaHetCho5(100)}`);

//bai 5 
function songuyen(a,b){
    let tong = 0;
    // condition ? a : b ; muon gan hoac tra ve gia tri trong ham 
    let min = a < b ? a : b;
    let max = a > b ? a : b;
    for(let i = min+1 ; i <= max-1; i++){
        tong += i;
    }
    return tong;
}

console.log(`tong tat ca cac so nguyen nam giua chung la ${songuyen(3,8)}`);
console.log(`tong tat ca cac so nguyen nam giua chung la ${songuyen(8, 3)}`);
console.log(`tong tat ca cac so nguyen nam giua chung la ${songuyen(8, 8)}`);
console.log(`tong tat ca cac so nguyen nam giua chung la ${songuyen(6, 7)}`);
//bai 6  va baif 7
function kiemTraSoNguyenTo(n) {
  if (n <= 1) 
    return false; // Các số <= 1 không phải là số nguyên tố
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // Kiểm tra từ 2 đến căn bậc hai của n
    if (n % i === 0) {
      // Nếu n chia hết cho i
      return false; // N không phải là số nguyên tố
    }
  }
  return true; // Nếu không có ước nào khác ngoài 1 và n, thì n là số nguyên tố
}
console.log

function isPrime(){

}

function sumPrime(){

}
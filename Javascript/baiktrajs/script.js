// Bài 1:
// Viết hàm kiểm tra xem một chuỗi có phải là palindrome hay không

// Chuỗi palindrome là chuỗi đọc xuôi hay đọc ngược đều giống nhau (bỏ qua khoảng trắng, phân biệt chữ hoa chữ thường).
// Hàm nhận vào tham số:
// Chuỗi cần kiểm tra
// Kết quả là giá trị logic cho biết chuỗi có phải palindrome hay không.

//cách lam bỏ hêt các phần khoảng trăng và đảo nguọcw khi loại bỏ khoảng trăng
// Ví dụ:
// isPalindrome("Able was I saw Elba")  // Kết quả: true
// isPalindrome("Hello World")  // Kết quả: false
function isPalindrome(str) {
  const cleanedStr = str.replace(/\s+/g, "").toLowerCase();

  const reversedStr = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedStr;
}
console.log("bài 1:");
console.log(isPalindrome("Able was I saw Elba"));
console.log(isPalindrome("Hello World"));

// Bài 2:
// Viết hàm tìm tất cả các số xuất hiện trong chuỗi văn bản và trả về danh sách các số đó

// Nếu chuỗi không có số thì trả về danh sách rỗng.
// Hàm nhận vào tham số:
// Chuỗi văn bản chứa số và ký tự khác
// Kết quả là danh sách các số xuất hiện trong chuỗi dưới dạng chuỗi.
//split
// Ví dụ:
// findNumbers("There are 3 apples and 12 oranges.")  // Kết quả: ["3", "12"]
// findNumbers("No numbers here!")  // Kết quả: []

// Bài 3:
// Viết hàm mã hóa văn bản bằng thuật toán Caesar Cipher

// Caesar Cipher là phương pháp mã hóa dịch từng ký tự trong văn bản theo một khoảng cách cho trước.
// Với mỗi ký tự trong chuỗi, thay nó bằng ký tự khác nằm cách nó shift vị trí trong bảng chữ cái.
// Nếu ký tự là chữ hoa thì kết quả cũng phải là chữ hoa, tương tự cho chữ thường.
// Ký tự không phải chữ cái giữ nguyên.
// Hàm nhận vào tham số:
// Chuỗi cần mã hóa
// Shift: Số bước dịch (nguyên dương)
// Kết quả là chuỗi đã được mã hóa.
function isAlphabe(char) {
  // a-zA-Z
  return ("a" <= char && char <= "z") || ("A" <= char && char <= "Z");
}

function shiftCharacter(char, shift) {
  //a -z : 97 -122
  //A - Z : 65 -90
  let code = char.chatCodeAt(0);
  code += shift;

  if (code > 122) {
    code = 122 - code + 97;
  }

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

// Ví dụ:
// caesarCipher("Hello, World!", 3)
// // Kết quả: "Khoor, Zruog!"

// Bài 4: Viết hàm tính xem còn bao nhiêu tuần (làm tròn) từ ngày hiện tại đến Tết Nguyên đán Ất Tỵ.
function tinhSoTuanDenTet() {
  const ngayTet = new Date("2025-01-29");
  const ngayHienTai = new Date();
  const soNgayConLai = Math.floor(
    (ngayTet - ngayHienTai) / (1000 * 60 * 60 * 24)
  );
  const soTuanConLai = Math.floor(soNgayConLai / 7);

  return soTuanConLai;
}
const soTuan = tinhSoTuanDenTet();
console.log("bài 4");
console.log("Còn ", soTuan, " tuần đến Tết Nguyên đán Ất Tỵ");

// Bài 5: Viết hàm tính căn bậc hai của một số bất kỳ và làm tròn kết quả đến 2 chữ số thập phân.
function tinhcanbachai(num) {
  if (num < 0) {
    return "không thể tính căn bậc hai cho số âm ";
  } else {
    canbachai = Math.sqrt(num);
    return parseFloat(canbachai.toFixed(2));
  }
}
console.log("bai 5");
console.log(`Căn bậc hai của 10 bằng ${tinhcanbachai(10)}`);
console.log(`Căn bậc hai của 16 bằng ${tinhcanbachai(16)}`);
console.log(`Căn bậc hai của 24 bằng ${tinhcanbachai(24)}`);
console.log(`Căn bậc hai của 121 bằng ${tinhcanbachai(121)}`);
console.log(`Căn bậc hai của 440 bằng ${tinhcanbachai(440)}`);

// Bài 6: Kiểm tra số hoàn hảo (Perfect Number)
// Viết hàm kiểm tra xem một số có phải là số hoàn hảo hay không biết rằng số hoàn hảo là số nguyên dương bằng tổng các ước số của nó, ngoại trừ chính nó.
function isPerfectNumber(num) {
  if (num <= 1) return false;
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}
console.log("bài 6:");
console.log(`số 1 có phải là số hoàn hảo không : ${isPerfectNumber(1)}`);
console.log(`số 12 có phải là số hoàn hảo không : ${isPerfectNumber(12)}`);
console.log(`số 6 có phải là số hoàn hảo không: ${isPerfectNumber(6)}`);
console.log(`số 24 có phải là số hoàn hảo không: ${isPerfectNumber(24)}`);
console.log(`số 36 có phải là số hoàn hảo không: ${isPerfectNumber(36)}`);
console.log(`số 28 có phải là số hoàn hảo không: ${isPerfectNumber(28)}`);
// Ví dụ:
// isPerfect(6) ➝ true (6 = 1 + 2 + 3)
// isPerfect(28) ➝ true (28 = 1 + 2 + 4 + 7 + 14)
// isPerfect(12) ➝ false

// Bài 7: Viết hàm tìm bội số chung nhỏ nhất (LCM) của hai số nguyên dương.
// Hàm tính ƯCLN
function calculateGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
// Hàm tính BCNN
function calculateLCM(a, b) {
  return (a * b) / calculateGCD(a, b);
}
console.log("bài 7:");
console.log(`bội chung nhỏ nhât của hai số 4 và 6 là  ${calculateLCM(4, 6)}`);
console.log(
  `bội chung nhỏ nhất của hai số 10 và 15 là   ${calculateLCM(10, 15)}`
);
console.log(
  `bội chung nhỏ nhất của hai số 6 và 20 là   ${calculateLCM(6, 20)}`
);

// Ví dụ:
// lcm(4, 6) ➝ 12
// lcm(10, 15) ➝ 30

// Sử dụng mảng dữ liệu sau để làm bài 8, 9, 10:
const cart = [
  { name: "Áo thun", price: 200000, quantity: 2 },
  { name: "Quần jeans", price: 500000, quantity: 1 },
  { name: "Giày thể thao", price: 1500000, quantity: 1 },
  { name: "Áo khoác", price: 1000000, quantity: 1 },
  { name: "Mũ lưỡi trai", price: 300000, quantity: 3 },
  { name: "Tất vớ", price: 50000, quantity: 5 },
];

// Bài 8:
// Viết hàm tính tổng số tiền phải trả sau khi áp dụng mã giảm giá

// Mã giảm giá là phần trăm giảm trên tổng tiền.
// Hàm nhận vào tham số:
// Mảng sản phẩm (danh sách giỏ hàng)
// Phần trăm giảm giá (giá trị từ 0 đến 100)
// Kết quả là tổng số tiền sau khi giảm giá.
function calculateTotal(cart, discountPercentage) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (discountPercentage / 100) * total;
  const totalAfterDiscount = total - discountAmount;

  return totalAfterDiscount;
}
console.log("bài 8:");
console.log(
  "Tổng số tiền phải trả sau khi giảm giá 20%:",
  calculateTotal(cart, 20),
  "VND"
);
console.log(
  "Tổng số tiền phải trả sau khi giảm giá 30%:",
  calculateTotal(cart, 30),
  "VND"
);
console.log(
  "Tổng số tiền phải trả sau khi giảm giá 50%:",
  calculateTotal(cart, 50),
  "VND"
);
console.log(
  "Tổng số tiền phải trả sau khi giảm giá 10%:",
  calculateTotal(cart, 10),
  "VND"
);

// Ví dụ:
// calculateDiscount(cart, 10)
// // Kết quả: 4095000(Tổng tiền 4550000, giảm 10%)

// Bài 9:
// Viết hàm tìm tổng số tiền của các sản phẩm có giá trị nhỏ hơn 1 triệu

// Hàm nhận vào tham số:
// Mảng sản phẩm
// Kết quả là tổng số tiền của các sản phẩm có giá nhỏ hơn 1 triệu.
function tinhTongSanPhamDuoiTrieu(cart) {
  let tong = 0;

  for (let i = 0; i < cart.length; i++) {
    const giaTriSanPham = cart[i].price * cart[i].quantity;

    if (giaTriSanPham < 1000000) {
      tong += giaTriSanPham;
    }
  }
  return tong;
}
const ketQua = tinhTongSanPhamDuoiTrieu(cart);
console.log("bai 9:");
console.log(
  "Tổng số tiền của các sản phẩm có giá nhỏ hơn 1 triệu là: ",
  ketQua
);

// Bài 10:
// Viết hàm nhóm các sản phẩm trong giỏ hàng theo giá trị price (dưới 500000 và từ 500000 trở lên)

// Hàm nhận vào:
// Mảng sản phẩm
// Kết quả là object với 2 mảng:
// cheapItems: Sản phẩm có giá dưới 500000
// expensiveItems: Sản phẩm có giá từ 500000 trở lên
function nhomSanPhamTheoGia(cart) {
  const ketQua = {
    cheapItems: [],
    expensiveItems: [],
  };
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].price < 500000) {
      ketQua.cheapItems.push(cart[i]);
    } else {
      ketQua.expensiveItems.push(cart[i]);
    }
  }
  return ketQua;
}
const ketQuaNhom = nhomSanPhamTheoGia(cart);
console.log("bai 10:");
console.log("Sản phẩm giá trị dưới 500_000 là: ", ketQuaNhom.cheapItems);
console.log("Sản phẩm giá trị trên 500_000 là: ", ketQuaNhom.expensiveItems);

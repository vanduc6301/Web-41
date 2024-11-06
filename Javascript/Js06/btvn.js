// Bài 1

// Viết hàm đếm số ký tự nguyên âm trong chuỗi

// Nguyên âm là các ký tự aeiou

// Hàm nhận vào tham số:
// - Chuỗi cần kiểm tra (tiếng Anh)
// Kết quả: Số ký tự nguyên xuất hiện trong chuỗi (lưu ý chữ hoa chữ thường)
function countVowels(str) {
  const vowels = "manchestercity";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Hello World"));
console.log(countVowels("CHESTER"));
console.log(countVowels("abc"));
// Bài 2

// Viết hàm kiểm tra xem số thẻ tín dụng có hợp lệ (số thẻ tín dụng phải là chuỗi bao gồm 16 chữ số và phù hợp với thuật toán Luhn)

// Thuật toán Luhn:
// Tính tổng chữ số từ phải sang trái
// Với các số ở vị trí chẵn thì nhân đôi lên, nếu kết quả nhân đôi lớn hơn 9 thì trừ đi 9
// Nếu tổng các chữ số chia hết cho 10 thì số thẻ hợp lệ
function isValidCardNumber(number) {
  if (number.length !== 16) {
    return false;
  }
  let sum = 0;
  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number[i]);
    if (i % 2 === 0) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }
  return sum % 10 === 0;
}
console.log(isValidCardNumber("4553720187798166"));
console.log(isValidCardNumber("8898720187798166"));

// Hàm nhận vào tham số:
// - Số thẻ (chuỗi bao gồm 16 chữ số)
// Kết quả: Giá trị logic cho biết số thẻ có hợp lệ hay không

// Bài 3

// Viết hàm tìm ký tự xuất hiện nhiều lần nhất trong văn bản (không tính ký tự khoảng trắng)

// Hàm nhận vào tham số:
// - Văn bản
// Kết quả: Object có key là ký tự xuất hiện nhiều nhất và value là số lần xuất hiện tương ứng
//  function fincharater(texts){
//     let charCounts = {};
//     let max = 0;
//     for(let i = 0 ; i <texts.length ; i++){
//         let char = texts[i].toLowerCase();

//         if (char ===' '){
//             continue;
//         }
//         if(charCounts[char]){
//             charCounts[char]++;
//         }else{
//             charCounts[char]= 1;
//         }
//         if(charCounts[char] > max){
//             max = charCounts[char];
//         }
// //     }
//     let result = {};
//     for(let char in charCounts){
//         if(charCounts[char] === max){
//             result[char = charCounts[char]]
//         }
//     }
//     return result;
//  }
function mostFrequentChar(text) {
  const charCount = {};
  let maxChar = "";
  let maxCount = 0;

  for (let char of text) {
    if (char !== " ") {
      charCount[char] = (charCount[char] || 0) + 1;

      if (charCount[char] > maxCount) {
        maxCount = charCount[char];
        maxChar = char;
      }
    }
  }

  return { [maxChar]: maxCount };
}

console.log(mostFrequentChar("Manchester city"));
console.log(mostFrequentChar("Ha Noi FC"));
console.log(mostFrequentChar("Phungvanduc"));
// Bài 1

// Viết hàm định dạng thời gian đã trôi qua từ một thời điểm cụ thể
function timeAgo(date) {
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) return interval + " years ago";

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) return interval + " months ago";

  interval = Math.floor(seconds / 86400);
  if (interval > 1) return interval + " days ago";

  interval = Math.floor(seconds / 3600);
  if (interval > 1) return interval + " hours ago";

  interval = Math.floor(seconds / 60);
  if (interval > 1) return interval + " minutes ago";

  return seconds === 1 ? "1 second ago" : "just now";
}

console.log(timeAgo(new Date(Date.now() - 5000)));
console.log(timeAgo(new Date(Date.now() - 60000)));
console.log(timeAgo(new Date(Date.now() - 3600000)));
console.log(timeAgo(new Date(Date.now() - 86400000)));
console.log(timeAgo(new Date(Date.now() - 31536000000)));

function formatTimeago(timestr) {
  let date = new Date(timestr);
  let now = new Date();

  let diff = Math.floor((now.getTime() - date.getTime()) / (60 * 1000));

  if (diff < 1) {
    return "vua xong";
  }
  if (diff < 60) {
    return `${diff} phut truoc`;
  }
  if (diff < 60 * 24) {
    return `${Math.floor(diff / 60)} gio truoc `;
  }
  if (diff < 60 * 24 * 30) {
    return `${Math.floor(diff / (60 * 24))} ngay truoc`;
  }
  return date.toDateString();
}
console.log(formatTimeago("2024-10-09 18:00:00"));
console.log(formatTimeago("2024-09-01 18:00:00"));

// Ví dụ:
// - Nhỏ hơn 1 phút: Vừa xong
// - Nhỏ hơn 1 giờ: X phút trước
// - Nhỏ hơn 1 ngày: X giờ trước
// - Nhỏ hơn 1 tháng: X ngày trước
// - Lớn hơn 1 tháng: Ngày cụ thể

// Hàm nhận vào tham số:
// - Thời gian cần định dạng (chuỗi định dạng YYYY-MM-DD, nhỏ hơn hoặc bằng thời gian hiện tại)
// Kết quả: Trả về chuỗi định dạng thời gian đã trôi qua từ thời gian nhận vào cho đến hiện tại

// Bài 2

// Tính tuổi chính xác dựa trên ngày sinh

// Ví dụ: Ngày hiện tại là 01-10-2024
// Ngày sinh 01-09-1992: 32 tuổi
// Ngày sinh 01-10-1992: 32 tuổi (đúng sinh nhật)
// Ngày sinh 15-10-1992: 31 tuổi (chưa qua sinh nhật)

// Hàm nhận vào tham số:
// - Ngày sinh cần kiểm tra (chuỗi định dạng YYYY-MM-DD, nhỏ hơn ngày hiện tại)
// Kết quả: Số tuổi tương ứng
function calculateAge(birthDateStr) {
  const birthDate = new Date(birthDateStr);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

console.log(calculateAge("1982-07-15"));
console.log(calculateAge("2001-03-06"));
console.log(calculateAge("2012-10-15"));

// Bài 3

// Một cửa khởi động một chương trình khuyến mãi trong một khoảng thời gian, viết hàm in ra ngày kết thúc khuyến mãi

// Hàm nhận vào các tham số:
// - Ngày bắt đầu (chuỗi thời gian)
// - Số ngày khuyến mãi
// Kết quả: Ngày kết thúc khuyến mãi
function calculatePromoEndDate(startDateStr, promoDays) {
  const startDate = new Date(startDateStr);
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + promoDays);

  const year = endDate.getFullYear();
  const month = String(endDate.getMonth() + 1).padStart(2, "0");
  const day = String(endDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

console.log(calculatePromoEndDate("2024-10-01", 32));
console.log(calculatePromoEndDate("2024-10-01", 15));
console.log(calculatePromoEndDate("2024-09-28", 5));

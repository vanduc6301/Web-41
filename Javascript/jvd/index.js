// Bài 1

// Viết hàm tính số lần gấp đôi một tờ giấy có độ dày X để đạt được độ dày Y

// Hàm nhận vào các tham số:
// - Độ dày của tờ giấy (đơn vị mm)
// - Độ dày cần đạt được (đơn vị m)
// Kết quả: Trả về số lần gấp tờ giấy
function countDoublings(X, Y) {
  // Chuyển đổi Y từ mét sang mm
  const Y_mm = Y * 1000;
  if (X >= Y_mm) {
    return 0;
  }
  let count = 0;
  while (X < Y_mm) {
    X *= 2;
    count++;
  }
  return count;
}
console.log("Bài 1 :");
console.log(`Số lần gấp tờ giấy là :${countDoublings(0.1, 0.002)}`);
console.log(`Số lần gấp tờ giấy là :${countDoublings(0.2, 0.03)}`);
console.log(`Số lần gấp tờ giấy là :${countDoublings(0.4, 0.03)}`);

// Gợi ý: Mỗi lần gấp đôi thì độ dày của tờ giấy tăng gấp đôi

// Bài 2

// Viết hàm tính xem sau bao nhiêu năm nữa thì tuổi cha gấp 2 lần tuổi con

// Hàm nhận vào các tham số:
// - Tuổi con (số nguyên dương)
// - Tuổi cha (số nguyên dương, lớn hơn tuổi con ít nhất 20 tuổi)
// Kết quả: Sau bao nhiêu năm nữa thì tuổi cha sẽ bằng 2 lần tuổi con
function yearsUntilDoubleSonAge(sonAge, fatherAge) {
  if (sonAge <= 0 || fatherAge <= sonAge || fatherAge - sonAge < 20) {
    throw new Error(
      "Tuổi cha phải lớn hơn tuổi con ít nhất 20 tuổi và cả hai phải là số nguyên dương."
    );
  }

  let years = 0;

  while (fatherAge !== 2 * sonAge) {
    sonAge++;
    fatherAge++;
    years++;
  }

  return years;
}
console.log(`Bài 2:`);
console.log(
  `Tuổi cha sẽ bằng 2 lần tuổi con khi con 12 tuổi và bố 36 tuổi là  ${yearsUntilDoubleSonAge(
    12,
    36
  )} năm`
);
console.log(
  `Tuổi cha sẽ bằng 2 lần tuổi con con 8 tuổi và bố 29 tuổi là   ${yearsUntilDoubleSonAge(
    8,
    29
  )} năm`
);
console.log(
  `Tuổi cha sẽ bằng 2 lần tuổi con con 20 tuổi và bố 45 tuổi là  ${yearsUntilDoubleSonAge(
    20,
    45
  )} năm`
);
console.log(
  `Tuổi cha sẽ bằng 2 lần tuổi con con 23 tuổi và bố 45 tuổi là   ${yearsUntilDoubleSonAge(
    23,
    45
  )} năm`
);

// Gợi ý: Sau mỗi năm thì tuổi con và cha đều tăng 1 :)

// Bài 3

// Viết hàm tính toán thời gian cần thiết khi gửi một khoản tiền tiết kiệm với lãi suất cố định để nhận được số tiền lãi mong muốn (không tính lãi suất kép)

// Hàm nhận vào các tham số:
// - Số tiền gửi ban đầu (số nguyên dương)
// - Lãi suất hàng năm (phần trăm, số thực dương)
// - Số tiền lãi muốn nhận được (số nguyên dương)
// Kết quả: Trả về số tháng cần gửi để nhận được số tiền lãi mong muốn
function calculateMonthsToReachInterest(
  principal,
  annualInterestRate,
  desiredInterest
) {
  // Kiểm tra điều kiện đầu vào
  if (principal <= 0 || annualInterestRate <= 0 || desiredInterest <= 0) {
    throw new Error("Tất cả các tham số phải là số dương.");
  }

  // Chuyển đổi lãi suất từ phần trăm sang tỷ lệ
  const monthlyInterestRate = annualInterestRate / 100 / 12;

  // Tính số tháng cần thiết
  let months = 0;
  let earnedInterest = 0;

  while (earnedInterest < desiredInterest) {
    earnedInterest += principal * monthlyInterestRate;
    months++;
  }

  return months;
}

console.log(
  `Số tháng cần gửi để được số lãi mong muốn là${calculateMonthsToReachInterest(
    1000,
    5,
    100
  )}`
);
console.log(
  `Số tháng cần gửi để được số lãi mong muốn là${calculateMonthsToReachInterest(
    10_000_000,
    0.05,
    1_000_000
  )}`
);
console.log(
  `Số tháng cần gửi để được số lãi mong muốn là${calculateMonthsToReachInterest(
    50_000_000,
    0.06,
    100_000_000
  )}`
); // Kết quả
// Bài 4

// Viết hàm in ra hình tam giác sao với số hàng bất kỳ

// Ví dụ tam giác sao có số hàng là 4
// *
// * *
// * * *
// * * * *

// Hàm nhận vào tham số:
// - Số hàng của tam giác
// Kết quả: In ra hình tam giác với số hàng tương ứng
function printStarTriangle(rows) {
  if (rows <= 0) {
    console.log("Số hàng phải là số nguyên dương.");
    return;
  }

  for (let i = 1; i <= rows; i++) {
    let stars = "* ".repeat(i);
    console.log(stars.trim());
  }
}
console.log(`Bài 4:`);
console.log(`Hình tam giác với số hàng tương ứng là ${printStarTriangle(5)}`);
console.log(`Hình tam giác với số hàng tương ứng là ${printStarTriangle(8)}`);
console.log(`Hình tam giác với số hàng tương ứng là ${printStarTriangle(11)}`);
console.log(`Hình tam giác với số hàng tương ứng là ${printStarTriangle(2)}`);
console.log(`Hình tam giác với số hàng tương ứng là ${printStarTriangle(3)}`);

// Gợi ý:
// - Số sao trên mỗi hàng tương ứng với số hàng
// - Sử dụng vòng lặp lồng nhau hoặc tách thành 2 hàm



// function gcd(a, b) {
//   if (b !== 0) {
//     const temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// }
// function lcm(x, y) {
//   if (x <= 0 || y <= 0) {
//     return " hai số nguyên dương";
//   }
//   return (x * y) / gcd(x, y);
// }
// console.log(`bội chung nhỏ nhât của hai số 4 và 6 là  ${lcm(4,6)}`); 
// console.log(`bội chung nhỏ nhất của hai số 10 và 15 là   ${lcm(10, 15)}`);

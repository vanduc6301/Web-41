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

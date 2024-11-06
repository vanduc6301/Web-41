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

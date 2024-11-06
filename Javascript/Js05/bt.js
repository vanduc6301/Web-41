// Bài 1

// Viết hàm kiểm tra xem một object là rỗng hay không

// Object rỗng là object không chứa bất kỳ thuộc tính nào. VD: {}

// Hàm nhận vào tham số
// - Object cần kiểm tra
// Kết quả: Trả về giá trị logic cho biết object là rỗng hay không
function isEmpty(obj) {
  if (typeof obj === "object" && obj !== null) {

    return Object.keys(obj).length === 0;
  }

  return false;
}
console.log(isEmpty({})); 
console.log(isEmpty({ a: 1 })); 
console.log(isEmpty(null)); 
console.log(isEmpty([])); 

// Bài 2

// Viết hàm kiểm tra xem 2 object có bằng nhau hay không?

// 2 object được coi là bằng nhau nếu có số lượng thuộc tính và giá trị là giống hệt nhau

// Ví dụ:
// Object A: {x: 1, y: 2}
// Object B: {x: 1, y: 2}
// Object C: {x: 1, y: 2, z: 3}
// Object D: {x: 2, y: 1}
// A == B => true
// A == C => false (vì thừa z)
// A == D => false (vì giá trị không bằng nhau)

// Hàm nhận vào các tham số:
// - Object A
// - Object B
// Kết quả: Trả về giá trị logic cho biết 2 object có được coi là bằng nhau hay không
function deepEqual(obj1, obj2) {
    if (typeof obj1 !== 'object' || obj1 === null || 
        typeof obj2 !== 'object' || obj2 === null) {
        return false; 
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (!deepEqual(obj1[key], obj2[key])) {
            return false; 
        }
    }

    return true; 
}

const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
const objC = { a: 1, b: { c: 3 } };

console.log(deepEqual(objA, objB)); 
console.log(deepEqual(objA, objC)); 


// Bài 3

// Viết hàm sao chép tất cả thuộc tính của một object (source) sang một object khác (target), nếu thuộc tính đã tồn tại trong target object thì giữ nguyên

// Ví dụ:
// Target: {x: 10, i: "Hello"}
// Source: {x: 1, y: 2, z: 3}
// Kết quả: {x: 10, i: "Hello", y: 2, z: 3}

// Hàm nhận vào các tham số
// - Target object
// - Source object
// Kết quả: Trả về target object sau khi sao chép
function copyProperties(target, source) {
    for (let key in source) {
        if (!(key in target)) {
            target[key] = source[key]; 
        }
    }
    return target;
}

const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

const result = copyProperties(target, source);

console.log(result);


// Bài 4

// Viết hàm mô phỏng máy ATM, tìm số lượng các mệnh giá tiền khác nhau sao cho khớp với số tiền muốn rút. Giả sử các mệnh giá tiền bao gồm: $1, $2, $5, $10 và ưu tiên các mệnh giá tiền lớn hơn trước

function withdraw(money) {
  let total = 0;
  let result = {
    $10: 0,
    $5: 0,
    $2: 0,
    $1: 0,
  };
  while (total != money) {
    if (money - total >= 10) {
      total += 10;
      result.$10++;
    } else if (money - total >= 5) {
      total += 5;
      result.$5++;
    } else if (money - total >= 2) {
      total += 2;
      result.$2++;
    } else {
      total += 1;
      result.$1++;
    }
  }

  return result;
}
console.log(withdraw(48));
console.log(withdraw(50));
console.log(withdraw(59));

// Ví dụ: Số tiền muốn rút: $48
// Kết quả:
// - $10: 4
// - $5: 1
// - $2: 1
// - $1: 1

// Hàm nhận vào tham số:
// - Số tiền muốn rút, số nguyên dương
// Kết quả: Trả về object với key là mệnh giá tiền và value là số lượng tương ứng với tổng bằng số tiền muốn rút

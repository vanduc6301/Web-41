// Cho một mảng các sản phẩm trong giỏ hàng, mỗi sản phẩm là một object có các thông tin như tên, giá, số lượng

// Ví dụ
// const cart = [
//   { name: 'Áo thun', price: 200000, quantity: 2 },
//   { name: 'Quần jeans', price: 500000, quantity: 1 },
// ];
// Tổng số lượng các sản phẩm: 3
// Tổng số tiền: 900000

// Bài 1:

// Viết hàm tính tổng số lượng các sản phẩm có trong giỏ hàng
// Hàm nhận vào tham số:
// - Mảng (danh sách) sản phẩm trong giỏ hàng (như ví dụ trên)
// Kết quả: Tổng số lượng các sản phẩm trong giỏ hàng
const cart = [
  { name: "Áo thun", price: 200000, quantity: 2 },
  { name: "Quần jeans", price: 500000, quantity: 1 },
  { name: "ao so mi", price: 700000, quantity: 2 },
];

function calculateCart(cart) {
  let totalQuantity = 0;
  let totalPrice = 0;

  cart.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  return {
    totalQuantity,
    totalPrice,
  };
}
const result = calculateCart(cart);
console.log(`bai 1:`);
console.log(`Tổng số lượng các sản phẩm: ${result.totalQuantity}`);
console.log(`Tổng số tiền: ${result.totalPrice}`);

// Bài 2:

// Viết hàm tính tổng tiền sản phẩm trong giỏ hàng

// Hàm nhận vào tham số:
// - Mảng (Danh sách) sản phẩm trong giỏ hàng (như ví dụ trên)
// Kết quả: Tổng số tiền các mặt hàng
function calculateTotalPrice(cart) {
  let totalPrice = 0;

  cart.forEach((items) => {
    totalPrice += items.price * items.quantity;
  });

  return totalPrice;
}

const totalPrice = calculateTotalPrice(cart);
console.log(`bai 2:`);
console.log(`Tổng số tiền các sản phẩm trong giỏ hàng: ${totalPrice}`);

// Bài 3:

// Viết hàm kiểm tra xem khách hàng có được miễn phí ship hay không, nếu tổng tiền sản phẩm là lớn hơn 2000000

// Hàm nhận vào tham số:
// - Mảng (Danh sách) sản phẩm trong giỏ hàng (như ví dụ trên)
// Kết quả: Giá trị logic cho biết có được miễn phí ship hay không
function isFreeShipping(cart) {
  let totalsumPrice = 0;

  cart.forEach((itemn) => {
    totalsumPrice += itemn.price * itemn.quantity;
  });

  return totalsumPrice > 2000000;
}



const freeShipping = isFreeShipping(cart);
console.log(`bai 3:`);
console.log(
  `Khách hàng có được miễn phí ship không? ${freeShipping ? "Có" : "Không"}`
);

// Tí và Tèo chơi oẳn tù tì, kết quả mỗi lần chơi là một mảng 2 phần tử, với phần tử đầu tiên đại diện cho Tí, phần tử thứ 2 đại diện cho Tèo

// Búa: "H"
// Kéo: "S"
// Giấy: "P"

// Ví dụ: ["H", "S"] => Tí thắng

// Bài 4

// Viết hàm kiểm tra xem Tí thắng hay thua

// Hàm nhận vào tham số:
// - Kết quả lượt chơi (một mảng 2 phần tử là chuỗi như ví dụ trên)
// Kết quả: Giá trị logic cho biết Tí thắng hay thua
function isTiWin(result) {
    const tiMove = result[0]; 
    const teoMove = result[1]; 

    if (tiMove === teoMove) {
        return false; 
    }
    if (
        (tiMove === 'H' && teoMove === 'S') || 
        (tiMove === 'S' && teoMove === 'P') || 
        (tiMove === 'P' && teoMove === 'H')    
    ) {
        return true; 
    }

    return false; 
}

const result1 = ['H', 'S']; 
const result2 = ['S', 'P'];  
const result3 = ['P', 'H'];  
const result4 = ['H', 'H'];   
const result5 = ['S', 'H'];   
console.log('bai 4:');
console.log(`Tí thắng không? ${isTiWin(result1) ? 'Có' : 'Không'}`); 
console.log(`Tí thắng không? ${isTiWin(result2) ? 'Có' : 'Không'}`); 
console.log(`Tí thắng không? ${isTiWin(result3) ? 'Có' : 'Không'}`); 
console.log(`Tí thắng không? ${isTiWin(result4) ? 'Có' : 'Không'}`); 
console.log(`Tí thắng không? ${isTiWin(result5) ? 'Có' : 'Không'}`); 


// Bài 5

// Viết hàm kiểm tra xem ai là người thắng nhiều hơn dựa trên một mảng (danh sách) lượt chơi của Tí và Tèo

// Ví dụ:
// const games = [
//   ["H", "S"],
//   ["P", "H"]
// ]
// Kết quả: Hoà

// Hàm nhận vào tham số:
// - Một mảng (danh sách) kết quả chơi (mảng 2D như ví dụ trên)
// Kết quả: In ra Tí thắng hay Tèo thắng nhiều hơn, nếu hoà thì in ra "Hoà"
function checkWinner(games) {
    let tiWins = 0;
    let teoWins = 0;

    games.forEach(results => {
        const tiMove = results[0]; 
        const teoMove = results[1]; 

        if (tiMove === teoMove) {
            
            return;
        }
        if (
            (tiMove === 'H' && teoMove === 'S') || 
            (tiMove === 'S' && teoMove === 'P') || 
            (tiMove === 'P' && teoMove === 'H')     
        ) {
            tiWins++;
        } else {
            teoWins++; 
        }
    });

    if (tiWins > teoWins) {
        return "Tí thắng nhiều hơn";
    } else if (teoWins > tiWins) {
        return "Tèo thắng nhiều hơn";
    } else {
        return "Hòa";
    }
}

const games = [
    ['H', 'S'], 
    ['S', 'P'], 
    ['P', 'H'], 
    ['H', 'H'], 
    ['S', 'H'], 
    ['H', 'P'], 
];

console.log('bai 5:');
const results = checkWinner(games);
console.log(results); 


// Du lieu ban dau
const quotes = [
  "Hãy tin tưởng vào bản thân.",
  "Thành công không phải là điểm đến, mà là hành trình.",
  "Cuộc sống là một cuộc phiêu lưu, hãy sống nó hết mình.",
  "Tương lai thuộc về những người tin vào vẻ đẹp của ước mơ.",
  "Hãy làm những gì bạn yêu thích, và bạn sẽ không bao giờ phải làm việc một ngày nào trong đời.",
];

//truy van cac phan tu can thiet
const button1 = document.querySelector("#btn-1");

//ham cap nhat va hien thi du lieu tren DOM
function randomQuotes(quotes) {
  const randomQuotesIndex = Math.floor(Math.random() * quotes.length);

  return quotes[randomQuotesIndex];
}

function showRandomQuote() {
  const quote = randomQuotes(quotes);
  text.textContent = quote;
}

//hien thi du lieu ban dau len giao dien
showRandomQuote(quotes);

//Cac ham su ly su  kien
button1.addEventListener("click", (eventObject) => {
  showRandomQuote(quotes);
});

// const button2 = document.querySelector("#btn-2");
// function randomHex() {
//   let result = "#";
//   const randomcolor = "#" + Math.floor(Math.random() * 16).toString(16);
//   return randomcolor;
// }
// function showRandomColor() {
//   const colorRandom = randomHex();
//   text.style.color = colorRandom;
// }
// showRandomColor();
// button2.addEventListener("click", (eventObject) => {
//   showRandomColor();
// });
const btn2 = document.querySelector("#btn-2");
function randomHex() {
  let result = "#";
  for (let i = 0; i < 6; i++) {
    result += Math.floor(Math.random() * 16).toString(16);
  }
  return result;
}
function showRandomColor() {
  const colorRandom = randomHex();
  text.style.color = colorRandom;
}
showRandomColor();
btn2.addEventListener("click", (eventObject) => {
  showRandomColor();
});

const button3 = document.querySelector("#btn-3");
function showRandomBackgroundColor() {
  const colorRandom = randomHex();
  text.style.backgroundColor = colorRandom;
}
showRandomBackgroundColor();
button3.addEventListener("click", (eventObject) => {
  showRandomBackgroundColor();

  console.log(eventObject.target);
  console.log(eventObject.clientX);
  console.log(eventObject.clientY);
});

// document.addEventListener("click", function (event) {
//   // Tạo một hình tròn mới
//   const circle = document.createElement("div");
//   circle.className = "circle";
//   // Đặt vị trí cho hình tròn
//   circle.style.left = `${event.pageX - 25}px`; // Giảm 25 để hình tròn nằm giữa điểm nhấn
//   circle.style.top = `${event.pageY - 25}px`; // Giảm 25 để hình tròn nằm giữa điểm nhấn
//   // Thêm hình tròn vào body
//   document.body.appendChild(circle);
// });

//du lieu ban dau
let prevCircle = null;

//truy van cac phan tu

//ham de tinh toan  cap nhat giao dien
function showCircle(position) {
  if (prevCircle) prevCircle.remove();
  const circle = document.createElement("div");
  circle.style.cssText = `
    width: 50px; 
    height: 50px; 
    background-color; red;  
    border-radius: 50%;
    color : red; 
    pointer-events, none; 
    top :${position.y - 15}px;
    left: ${position.x - 15}px;
    `;
  document.body.appendChild(circle);

  prevCircle = circle;
}
window.addEventListener("click", (e) => {
  console.log("click");
  const position = {
    x: e.clientX,
    y: e.clientY,
  };

  showCircle(position);
});

//1.Kiểm tra console
//2.kiểm tra event
//3.Them console để kiểm tra => hàm xử lý sự kiện co đươc không

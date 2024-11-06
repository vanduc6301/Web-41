// const div = document.querySelector(".wrapper");
// const h1 = div.querySelector(".heading"); //hay dung
// const p = div.querySelector(".description"); //thuong dung

// // console.log(div, h1, p);

// const all = document.querySelectorAll(".wrapper, .heading , .description");
// // console.log(all);

// //querySelector -> Node | null
// //querySelectorAll -> Nodelist | [rong]

// console.log(div.innerHTML); // chỉ bao gồm các phần từ bên trong thẻ div : h1 và p
// console.log(div.outerHTML); // bao gồm cả thẻ div

// console.log(div.innerText);
// console.log(div.textContent);

// p.innerHTML =
//   "Thay dổi nội dung phần tư thông qua thuộc tính  <b>textContent</b>"; //inner.html thay doi chinh sua noi dung cua doan text
// // p.textContent = "Thay dổi nội dung phần tư thông qua thuộc tính textContent";

// // Thêm bớt các class => thay đổi style
// // p.classList.add("text-red");
// // sử dụng inline style => dùng với các hiệu ứng động
// // p.style.fontSize = "20px";
// p.style.Color = "red";
// // p.style.lineheight = "red";

// p.style.cssText = `
// color : red;
// fontSize : 20px;
// line-height : 40px;
// `;

// console.log(h1.hasAttribute("lang"));
// console.log(h1.getAttribute("lang"));
// h1.setAttribute("lang", "en");
// console.log(h1.getAttribute("lang"));
// h1.removeAttribute("lang");

// DOM => mô hình đối tượng tài liệu liệu=> truy cập cập
// và thao tác với các nội dung trên trang web
// để truy cập DOM DOM=> document
// document.querySelector() | document.querySeletorAll()
//node.textContenr | node.innerText
//node.innerHTML
//node.style | node.style.cssText
//node.classList (contains, add , remove , toggle)

const heading = document.querySelector("#heading");

console.log(heading.getAttribute("id"));
console.log(heading.getAttribute("title"));
console.log(heading.getAttribute("class"));

heading.setAttribute("class", "text-red");
heading.setAttribute("title", "Day la tieu de");

heading.hasAttribute("class");
heading.removeAttribute("class");

function createContainer() {
  const div = document.createElement("div");
  div.classList.add("container");
  div.setAttribute("title", "container");
  div.style.cssText = `
      max-width: 1000px;
      margin-inline :auto;
      `;
  div.innerHTML = `
      <p> Day la noi dung duoc tao thong qua Js </p>
      `;
  return div;
}
// append (tren vao sau thang so 2 cua the div)
// prepend (tren vao truoc thang so mot cua the div)
// after(tren vao sau)
// before(tren vao truoc)
// appendChild(tren vao sau thang so 2 cua the div)
//insert.....

const content = document.querySelector(".content");

if (content != null) {
  content.after(createContainer());
  content.after(createContainer());
  content.after(createContainer());
  content.after(createContainer());
  //muon them va hien thi the div dung (div.cloneNode(true))
} else {
  console.log("content not found");
}
// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
function createlink(href, text, isblank) {
  const a = document.createElement("a");
  // a.href
  a.setAttribute("href", href);
  a.style.display = "block";
  a.textContent = text;
  if (isblank) {
    a.setAttribute("target", "blank");
  }
  return a;
}

const para_3 = document.querySelector(".para-3");

if (para_3 != null) {
  para_3.after(createlink("https://facebook.com", "Facebook", true));
  para_3.after(createlink("https://google.com", "Google", true));
} else {
  console.log("a not false");
}

// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
const title = document.querySelector("#title");

if (title != null) {
  title.textContent = "Day la the tieu de ";
}
// Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
const description = document.querySelector(".description");

if (description != null) {
  description.classList.add("text-bold");
}
// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
// const para_3 = document.querySelector(".para-3");
const button = document.createElement("button");
button.textContent = "Click me";
//para_3.before(button);
//para_3.remove();
//replaceChild , replaceWith
//para_3.replaceWith(button);
document.body.replaceChild(button, para_3);
// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
const p2 = document.querySelector(".para-2");
p2.after(p2.cloneNode(true));
// Xóa thẻ có class=“para-1”
const p1 = document.querySelector(".para-1");
p1.remove();

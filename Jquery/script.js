// $ vừa là hàm vừa là object

// function add(a, b) {
//   return a + b;
// }
// add(1, 2);

// add.name;

// add.custom = "custom";

// hamf $ truy van cacs phan tu dom
// tao cac phan tu dom
// gắn một vài sự kiện đặc biệt
// $(); //doi tuong jquery

// // Thêm sửa xóa nội dung , thuộc tính
// // gán hàm các sử lý sự kiện

// //Namespace
// //chứa các hàm tiện ích của jquery : each , map , ....
// $.abcxyz;
// delay trước khi tải xong h1 . khi dặt câu lệnh script ỏ trên phần head .... thường là để script của cuối html
// để script
// window.addEventListener("DOMContentLoaded", () => {
//   const h1 = document.querySelector("h1");
//   console.log(h1.textContent);
// });

// //đối với jquery
// //khi mình truyền vào muốn hàm thực hiện đoạn code ấy khi trang load xong
// $(() => {
//   const h1 = document.querySelector("h1");
//   console.log(h1.textContent);
// });

// $(() => {
//   const h1 = $("h1");
//   console.log(h1.text());
// });

// $(function () {
//   // truy van phan tu
//   //$(selecto)
//   const $h1 = $("h1");
//   const $btn = $(".btn");
//   const $body = $(document.body);
//   const $check = $("#check");
//   const $name = $("#name");

//   //   const $div = $(".container");

//   //ham xu ly
//   // luôn in ra ket qua chỉ tính cái leght
//   if ($h1.length > 0) {
//   } else {
//   }

//   //tao phan tu DOM
//   //   const div = document.createElement('div');
//   //     div.classList.add = "container";
//   //     div.innerHTML.add = `<p> xin chao</p>`;

//   const $div = $(`<div class = "container"> <p> xin chao</p></div>`);

//   //setter - getter
//   console.log($h1.text()); //h1.Text content
//   $h1.text("Xin chao Jquery"); //h1.textcontent = ""

//   console.log($h1.html()); //h1.innerHTML
//   $h1.html("<i> Hello jquery</i>"); //h1.innerHTML = ""

//   console.log($h1.attr("lang")); //h1.getAttribute("lang")// thuoc tinh binh thuong thoi
//   $h1.attr("lang", "vi"); //h1.setAttribute ("lang","vi")

//   console.log($h1.css("color")); //getComputedStyle(h1).color
//   $h1.css("color", "green");

//   //dung cho class
//   $h1.hasClass("heading"); //h1.classList.contains("heading")
//   $h1.addClass("heading"); //h1.classList.add("headig")
//   $h1.removeClass("heading"); //h1.classList.remove("heading")
//   $h1.toggleClass("heading"); //h1.classList.toggle("heading")
//   //thuoc tinh logic
//   //   $btn.prop("disabled", true); //btn.disabled = true
//   console.log($check.prop("checked")); //check.checked
//   console.log($name.val()); //name.value// lay gia tri ben trong phan tu

//   //xu ly su kien
//   $btn.on("click", function (e) {
//     // btn.addEventlistener
//     console.log("AbCd");
//   });
//   $btn.off("click", function () {
//     // btn.removeEnventlistener
//   });

//   $name.on("change", function (e) {
//     console.log($name.val());
//   });

//   $check.on("change", function (e) {
//     console.log($check.prop("checked"));
//   });
// });

// dữ liệu
///truy vấn
// hàm tiện ích
//render
//xử lý sự kiện

const todos = [
  {
    id: 1,
    completed: true,
    title: "Learn Javascript",
  },
  {
    id: 2,
    completed: false,
    title: "Learn FontEnd",
  },
  {
    id: 3,
    completed: true,
    title: "Leanr Java",
  },
];

function updateStatus(e) {
  console.log(e.data);
}

function addTodo(e) {}
function removeTodo(e) {
  console.log(e.data);
}

function renderTodos(todos, $el) {
  //   $el.empty();

  todos.map((todo) => {
    $(`<li class="todo-item">
        <input class="todo-status" type="checkbox">
        <span class="todo-title">${todo.title}</span>
        <button class="btn-remove" > Remove</button>
        </li>`)
      .find(".todo-status") //item.querySelector
      //   .data("todo", todo) //gan du lieu voi phan tu nay
      .prop("check", todo.completed)
      .change(todo, updateStatus)
      .end() // reset bo chon => item
      .find(".btn-remove")
      .click(todo, removeTodo)
      .end()
      .appendTo($el);
  });
}
$(function () {
  const $form = $("todo-form");
  const $input = $("#todo-input");
  const $list = $(".todo-list");

  renderTodos(todos, $list);
});

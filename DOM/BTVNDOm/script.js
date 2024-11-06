function changeContent() {
  // Thay đổi nội dung của đoạn văn có id là text-content
  const el = document.querySelector("#text-content");
  if (el != null) {
    el.textContent =
      " Xin chào tôi là một câu thủ bóng đá chuyên nghiệp , tôi tên là Phil Foden";
  }
}

function replaceText() {
  // Thay thế nội dung của đoạn văn có class là intro
  const pl = document.querySelector(".intro");
  if (pl != null) {
    pl.innerText = "Thông tin về Phil Foden ";
  }
}

function highlightText() {
  // Tìm tất cả các đoạn văn (<p>) và thêm class highlight vào chúng để tô màu nền.
  const paragraphs = document.querySelectorAll("p");

  paragraphs.forEach((paragraph) => {
    paragraph.classList.add("highlight");
  });
}

function addCss() {
  // Thay đổi màu chữ, kích thước và trọng lượng của tiêu đề có id là main-title.
  const ad = document.querySelector("#main-title");
  if (ad != null) {
    ad.style.cssText = `
     color : red;
     font-size : 40px;
     font-weight: bold;
      text-transform: uppercase;
    `;
  }
}

function addListItem() {
  // Thêm một mục mới vào cuối danh sách có id là list.
  const newli = document.createElement("li");
  newli.textContent = "Học DOM";
  const list = document.getElementById("list");
  if (list != null) {
    list.appendChild(newli);
  }
}

function removeLastItem() {
  // Xóa mục cuối cùng trong danh sách có id là list.
  const Remove = document.getElementById("list");

  const last = list.lastElemenChild;

  if (last != null) {
    last.remove();
    //list.removeChild(last);
  }
  if (Remove && Remove.lastElementChild) {
    // Xóa mục cuối cùng
    Remove.removeChild(Remove.lastElementChild);
  }
  //   const remove = document.getElementById("list");
  //   if (remove != null) {
  //     remove.removeChild(newli);
  //   }
}

function toggleClass() {
  // Bật hoặc tắt class new-class cho đoạn văn có class là intro.
  const onOff = document.querySelector(".intro");
  if (onOff != null) {
    onOff.classList.toggle("new-class");
  }
}

function countParagraphs() {
  // Đếm số lượng đoạn văn (<p>) trên trang và hiển thị thông báo với số lượng đó.
  const paragraphs = document.querySelectorAll("p");

  // Đếm số lượng đoạn văn
  const count = paragraphs.length;

  alert(`Số lượng đoạn văn trên trang là: ${count}`);
}

function replaceListItems() {
  // Thay thế tất cả các mục trong danh sách có id là list bằng các mục mới.
  const list = document.getElementById("list");

  for (let item of list.children) {
    const newitem = document.createElement("li");
    newitem.textContent = "phan tu dc tao boi javascript";
    item.replaceWith(newitem);
  }
  
  // Kiểm tra xem danh sách có tồn tại không
  if (list != null) {
    // Xóa tất cả các mục hiện tại
    list.innerHTML = "";
    // Tạo các mục mới
    const newItems = ["Học Python", "Học Node.js", "Học Angular"];
    // Thêm từng mục mới vào danh sách
    newItems.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      list.appendChild(listItem);
    });
  }
}

function moveTitle() {
  // Di chuyển tiêu đề có id là main-title xuống cuối trang.
  const title = document.getElementById("main-title");
  // Kiểm tra xem tiêu đề có tồn tại không
  if (title != null) {
    // Tìm phần tử body để thêm tiêu đề vào cuối
    document.body.appendChild(title);
  }
}

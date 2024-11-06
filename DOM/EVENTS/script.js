//Dữ kiệu ban đầu
let clicked = 0;

// Truy vấn các phần tử cần thiết
const button = document.querySelector("button");

// Hàm cập nhật , hiển thị  dữ liệu trên DOM
function updateClicked(clicked) {
  const count = document.querySelector(".count");
  if (count != null) {
    count.textContent = clicked;
  }
}

//Hiển thị dữ liệu ban đầu lên trên giao diện ( nếu cần )
updateClicked(clicked);

//Các hàm sử lý sự kiện
button.addEventListener("click", (eventObject) => {
  //Cập nhật dữ liệu
  clicked++;

  //Cập nhật , hiển thị dữ liệu mới trên giao diện
  updateClicked(clicked);
});
//ting => eventType => nhan duoc thong bao
//cac thong tin cu the
//  - App nao thong bao( zalo)
//  -Thong bao cai gi (tin nhan moi )
//  -Tu ai den
//  - Tin nhan la gi
//  -Nhan vao dau

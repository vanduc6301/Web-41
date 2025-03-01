//Imperative API - lap trinh menh lenh
// du lieu ban dau
// let count = 0;
// //truy van cac phan tu
// const countEL = document.querySelector(".count");
// const incrementEL = document.querySelector(".increment");
// const decrementEL = document.querySelector(".decrement");
// // ham render
// const render = () => {
//   countEL.innerText = count;
// };
// //main
// //-xu ly du lieu ban dau
// function main() {
//   render();
//     //xu ly su kien
//   incrementEL.addEventListener("click", () => {
//     count++;
//     render();
//   });
//   decrementEL.addEventListener("click", () => {
//     count--;
//     render();
//   });
// }
// main();
//Declarative Programming - lap trinh khai bao
//khai báo cái mà mình muôn  , tâp trung vào quản lý dư liệu
//các bước cập nhật ,cách thức cập nhật => framework lo
document.addEventListener("alpine:init", () => {
  Alpine.data("counter", () => {
    return {
      count: 0,
      //các dữ liệu được tính toán dựa trên trạng thái
      get showMessage() {
        return this.count > 5;
      },
      get message() {
        return "you  clicked to much";
        // if (this.count > 5) {
        //   return "Greaterthan <b>5</b>!";
        // } else if (this.count < -5) {
        //   return "less than <b>-5</b>!";
        // } else {
        //   return "Between <b>-5</b> and <b>5</b>";
        // }
      },

      //getter - setter
      increment() {
        this.count++;
      },
      decrement() {
        this.count--;
      },
    };
  });
});

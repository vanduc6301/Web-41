// du lieu
/**
 * Get products from API
 * @returns {Promise<GetProductResponse>}
 */

function getProducts() {
  return fetch("https://dummyjson.com/products") // gửi dữ liêu tới sever
    .then((res) => res.json()); // thực hiện thực thi khi nhận được kết quả từ câu lệnh trên
  // .then((data) => {
  //     console.log(data);
  // })
  //   .catch((error) => {
  //     // khi hành động khôgn thực hiện đc
  //     console.error(error);
  //   }) // cả cụm này trả về kế quả đều là prommit
}

//truy van cac phan tu can thiet
const productLoading = document.querySelector(".product-list-wrapper .loading");
const productError = document.querySelector(".product-list-wrapper .error");
const productList = document.querySelector(
  ".product-list-wrapper .product-list"
);
const productAddcart = document.querySelector(".add-cart");
// ham xu ly

//ham render

function showLoading() {
  productLoading.style.display = "block";
  productError.style.display = "none";
  productList.style.display = "none";
}
function showProducts() {
  productLoading.style.display = "none";
  productError.style.display = "none";
  productList.style.display = "grid";
}
function showError() {
  productLoading.style.display = "none";
  productError.style.display = "block";
  productList.style.display = "none";
}

/**
 *
 * @param {GetProductResponse} data
 */
function renderProducts(data) {
  productLoading.style.display = "none";
  productList.innerHTML = data.products
    .map(
      (p) => `
        <div class="product">
            <div class="product-img">
                <img src="${p.thumbnail}" alt="${p.title}">
            </div>
            <a class="heading-4" href="product.html?product-id=${p.id}">
                <h4 class="product-title">${p.title}</h4>
            </a>
            <p class="product-description">${p.description}</p>
            <div class="button" >
                <a href="cart.html">
                <button class="add-cart" data-product-id="${p.id}">Mua </button>
                </a>
                <button class="add-cart" data-product-id="${
                  p.id
                }">Xem Thêm </button>
            </div>
            <div class="product-rating">${renderStars(p.rating)}</div> 
            <p class="product-price">$${p.price}</p>
        </div>
        `
    )
    .join("");
}
function renderStars(rating) {
  const fullStar = '<span class="star">★</span>';
  const emptyStar = '<span class="star">☆</span>';
  const roundedRating = Math.round(rating);

  return fullStar.repeat(roundedRating) + emptyStar.repeat(5 - roundedRating);
}

//ham xu ly su kien
//-cap nhat du lieu
//-cap nhat giao dien

function main() {
  showLoading();
  getProducts().then(renderProducts).then(showProducts).catch(showError);
}
main();
// update loading , error xin hon
//layout ,css

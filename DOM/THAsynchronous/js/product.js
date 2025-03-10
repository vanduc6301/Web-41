//Dữ liệu
/**
 * @typedef {Product}
 */
let product;
/**
 * @returns {Promise<Product>}
 */
function getProductInfor(id) {
  return fetch("https://dummyjson.com/products/" + id)
    .then((res) => {
      if (!res.ok) {
        throw res;
      } else {
        return res.json();
      }
    })
    .then((json) => {
      product = json;
      return product;
    });
}
//Query element(truy vấn phần tử)
const productInfor = document.querySelector(".product-infor");
const productImage = document.querySelector(".product-image");
const productLoading = document.querySelector(".loading");
const productError = document.querySelector(".error");
const productWarpper = document.querySelector(".product-wrapper");
const productTitle = document.querySelector(".product-title");
const productDescription = document.querySelector(".product-description");
const productRating = document.querySelector(".product-rating");
const productPrice = document.querySelector(".product-price");
const producDiscountPrice = document.querySelector(".product-discount-price");
const productNumber = document.querySelector(".number");
const productReduce = document.querySelector(".add-reduce");
const productIncrease = document.querySelector(".add-increase");
const productAddcart = document.querySelector(".add-cart");
//Render(Hiển thị dữ liệu)
function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

function showLoading() {
  productLoading.style.display = "block";
  productError.style.display = "none";
  productWarpper.style.display = "none";
}
function showProducts() {
  productLoading.style.display = "none";
  productError.style.display = "none";
  productWarpper.style.display = "block";
}
function showError() {
  productLoading.style.display = "none";
  productError.style.display = "block";
  productWarpper.style.display = "none";
}
/**
 * @param {Product} product
 */
function renderProducts(product) {
  productLoading.style.display = "none";
  productTitle.textContent = product.title;
  productRating.textContent = product.rating;
  productImage.innerHTML = product.images
    .map((img) => `<img src="${img}" alt ="${product.title}" />`)
    .join("");
  producDiscountPrice.textContent = formatPrice(
    product.price - (product.price * product.discountPercentage) / 100
  );
  productPrice.textContent = product.price;
  productDescription.textContent = product.description;
}
//Event
function setupQuantily() {
  productReduce.addEventListener("click", () => {
    if (Number(productNumber.value) > 1) {
      productNumber.value = Number(productNumber.value) - 1;
    }
  });
  productIncrease.addEventListener("click", () => {
    if (Number(productNumber.value) < product.stock) {
      productNumber.value = Number(productNumber.value) + 1;
    }
  });
}

function main() {
  const searchParam = new URLSearchParams(location.search);
  const productId = searchParam.get("product-id");

  // getProductInfor(productId)
  // .then((data)=>console.log(data))
  // .catch((error)=>{
  //     console.e(error);
  // });
  showLoading();
  getProductInfor(productId)
    .then(renderProducts)
    .then(showProducts)
    .then(setupQuantily)
    .then(setupAddToCart)
    .catch(showError);
}
main();

let cart = null;

const cartIcon = document.querySelector(".cart");
const cartQuantity = document.querySelector(".quantity");
const cartEmpty = document.querySelector(".cart-empty");
const cartInfo = document.querySelector(".cart-info");
const cartList = document.querySelector(".cart-list");

if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
  cartQuantity.textContent = cart.totalQuantity;
  cartQuantity.style.display = "flex";
  if (window.location.pathname.includes("/cart.html")) {
    renderCart(cart);
    setupRemoveFromCart();
    setupQuantity();
  }
} else {
  fetch("https://dummyjson.com/carts/1")
    .then((res) => res.json())
    .then((data) => {
      cart = data;
      localStorage.setItem("cart", JSON.stringify(data));
      cartQuantity.textContent = cart.totalQuantity;
      cartQuantity.style.display = "flex";
      if (window.location.pathname.includes("/cart.html")) {
        renderCart(cart);
        setupRemoveFromCart();
        setupQuantity();
      }
    });
}

// function renderCartQuantity(cart){
//     cartQuantity.textContent = cart.totalQuantity
// }
function setupAddToCart() {
  productAddcart.addEventListener("click", () => {
    const quanity = Number(productNumber.value);

    const newProducts = cart.products.map((p) => ({
      id: p.id,
      quantity: p.quantity,
    }));

    if ((newProducts, find((p) => p.id === product.id))) {
      newProducts.find((p) => p.id === product.id).quanity += quanity;
    } else {
      newProducts.push({
        id: product.id,
        quanity,
      });
    }
    fetch("https://dummyjson.com/carts/1", {
      // duong dan
      method: "PUT", // cho phep du lieu gui len server
      headers: {
        "Content-Type": "application/json", //MIME type // cac thong tin
      },
      body: JSON.stringify({
        // lấy dữ liệu trong giỏ hàng hiện tại
        products: newProducts,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        cart = data;
        console.log(data);
        localStorage.setItem("cart", JSON.stringify(data));
      })
      .then(() => {
        window.location.href = "cart.html";
        // window.history.pushState({})
      });
  });
}
function renderCart(cart) {
  if (cart.products.length == 0) {
    cartEmpty.style.display = "block";
    cartInfo.style.display = "none";
  } else {
    cartEmpty.style.display = "none";
    cartInfo.style.display = "flex";
    cartList.innerHTML = cart.products
      .map(
        (p) => `<div class="cart-item">
                  <div class="cart-item-info">
                    <div class="cart-item-image">
                      <img
                        src="${p.thumbnail}"
                        alt="${p.title}" />
                    </div>
                    <div class="cart-item-details">
                      <div class="cart-item-title">${p.title}</div>
                      <div class="cart-item-price">$${p.price}</div>
                      <div class="cart-item-remove">
                        <button data-id="${p.id}" class="cart-item-remove-button">Remove</button>
                      </div>
                    </div>
                  </div>
                  <div class="cart-item-quantity" data-id="${p.id}">
                    <button class="cart-item-quantity-decrease">-</button>
                    <input
                      type="number"
                      readonly
                      id="cart-item-quantity"
                      value="${p.quantity}"
                      min="1" />
                    <button class="cart-item-quantity-increase">+</button>
                  </div>
                </div>`
      )
      .join("");
  }
}
function setupRemoveFromCart() {
  const removeButtons = document.querySelectorAll(".cart-item-remove-button");

  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");

      const newProducts = cart.products.filter((p) => p.id != id);

      fetch("https://dummyjson.com/carts/1", {
        method: "PUT", // cho phép gửi dữ liệu lên server
        headers: {
          "Content-Type": "application/json", // MIME type
        },
        body: JSON.stringify({
          products: newProducts,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          cart = data;
          localStorage.setItem("cart", JSON.stringify(data));
          // Render lai cart page
          renderCart(cart);
          setupRemoveFromCart();
          setupQuantity();
          cartQuantity.textContent = cart.totalQuantity;
          cartQuantity.style.display = "flex";
        });
    });
  });
}
function setupQuantity() {
  const quantity = document.querySelectorAll(".cart-item-quantity");

  quantity.forEach((item) => {
    const id = item.getAttribute("data-id");
    const decreaseButton = item.querySelector(".cart-item-quantity-decrease");
    const increaseButton = item.querySelector(".cart-item-quantity-increase");
    const input = item.querySelector("#cart-item-quantity");

    decreaseButton.addEventListener("click", () => {
      if (Number(input.value) > 1) {
        input.value = Number(input.value) - 1;
        input.dispatchEvent(new Event("change"));
      }
    });

    increaseButton.addEventListener("click", () => {
      input.value = Number(input.value) + 1;
      input.dispatchEvent(new Event("change"));
    });

    input.addEventListener("change", () => {
      const newProducts = cart.products.map((p) => ({
        id: p.id,
        quantity: p.quantity,
      }));

      if (newProducts.find((p) => p.id == id)) {
        console.log("????");
        newProducts.find((p) => p.id == id).quantity = Number(input.value);
      }

      fetch("https://dummyjson.com/carts/1", {
        method: "PUT", // cho phép gửi dữ liệu lên server
        headers: {
          "Content-Type": "application/json", // MIME type
        },
        body: JSON.stringify({
          products: newProducts,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          cart = data;
          localStorage.setItem("cart", JSON.stringify(data));
          // Render lai cart page
          renderCart(cart);
          setupRemoveFromCart();
          setupQuantity();
          cartQuantity.textContent = cart.totalQuantity;
          cartQuantity.style.display = "flex";
        });
    });
  });
}

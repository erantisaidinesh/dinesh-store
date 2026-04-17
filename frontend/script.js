// LOGIN
function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email && password) {
    window.location.href = "products.html";
  } else {
    alert("Enter Email & Password");
  }
}

// PRODUCTS DATA
const products = [
  { name: "Men T-Shirt", price: 499, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" },
  { name: "Women Dress", price: 899, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c" },
  { name: "Shoes", price: 1299, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
  { name: "Watch", price: 999, image: "https://images.unsplash.com/photo-1519741497674-611481863552" },
  { name: "Backpack", price: 699, image: "https://images.unsplash.com/photo-1509762774605-f07235a08f1f" },
  { name: "Jeans", price: 1199, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246" },
  { name: "Shirt", price: 799, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf" },
  { name: "Sunglasses", price: 499, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083" },
  { name: "Jacket", price: 1499, image: "https://images.unsplash.com/photo-1520975916090-3105956dac38" },
  { name: "Cap", price: 299, image: "https://images.unsplash.com/photo-1521369909029-2afed882baee" }
];

// SHOW PRODUCTS
const container = document.getElementById("products");

if (container) {
  products.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.image}">
        <h4>${p.name}</h4>
        <p class="price">₹${p.price}</p>
        <button onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
      </div>
    `;
  });
}

// ADD TO CART
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let item = cart.find(p => p.name === name);

  if (item) item.qty++;
  else cart.push({ name, price, qty: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));

  window.location.href = "cart.html";
}

// GO TO CART
function goToCart() {
  window.location.href = "cart.html";
}

// LOAD CART
function loadCart() {
  let container = document.getElementById("cartItems");
  if (!container) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  container.innerHTML = "";

  cart.forEach(item => {
    total += item.price * item.qty;

    container.innerHTML += `
      <div class="cart-item">
        <img src="https://via.placeholder.com/80">
        <div>
          <h4>${item.name}</h4>
          <p>₹${item.price} x ${item.qty}</p>
        </div>
      </div>
    `;
  });

  document.getElementById("totalPrice").innerText = total;
  document.getElementById("totalItems").innerText = cart.length;
}

loadCart();
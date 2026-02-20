/* ==========================================
   OUTSEEE PRO - MAIN.JS
   Core Logic: Products, Cart, LocalStorage
========================================== */

/* -----------------------------
   DEFAULT PRODUCTS DATABASE
------------------------------ */

const defaultProducts = [
  {
    id: 1,
    name: "Outseee Premium Sneakers",
    price: 79.99,
    category: "Fashion",
    tag: "Best Seller",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    desc: "Premium sneakers designed for comfort, style, and durability. Perfect for daily wear."
  },
  {
    id: 2,
    name: "Luxury Analog Watch",
    price: 149.99,
    category: "Accessories",
    tag: "New",
    image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
    desc: "Elegant luxury analog watch with premium finishing and long-lasting battery performance."
  },
  {
    id: 3,
    name: "Wireless Bluetooth Headphones",
    price: 99.99,
    category: "Electronics",
    tag: "Trending",
    image: "https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg",
    desc: "High bass wireless headphones with noise cancellation and crystal clear sound quality."
  },
  {
    id: 4,
    name: "Men's Casual Jacket",
    price: 59.99,
    category: "Fashion",
    tag: "Sale",
    image: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
    desc: "Stylish and warm casual jacket for men. Designed for winter fashion and comfort."
  },
  {
    id: 5,
    name: "Smart Fitness Band",
    price: 39.99,
    category: "Electronics",
    tag: "Hot",
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
    desc: "Track your health, steps, heart rate, and sleep cycle with this smart fitness band."
  },
  {
    id: 6,
    name: "Premium Leather Backpack",
    price: 69.99,
    category: "Accessories",
    tag: "Premium",
    image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
    desc: "High quality leather backpack suitable for college, office, and travel purposes."
  }
];

/* -----------------------------
   INIT PRODUCTS STORAGE
------------------------------ */

function initProducts() {
  let stored = JSON.parse(localStorage.getItem("outseee_products"));
  if (!stored || stored.length === 0) {
    localStorage.setItem("outseee_products", JSON.stringify(defaultProducts));
  }
}

/* -----------------------------
   GET PRODUCTS
------------------------------ */

function getProducts() {
  return JSON.parse(localStorage.getItem("outseee_products")) || [];
}

/* -----------------------------
   CART FUNCTIONS
------------------------------ */

function getCart() {
  return JSON.parse(localStorage.getItem("outseee_cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("outseee_cart", JSON.stringify(cart));
}

function updateCartCount() {
  let cart = getCart();
  let totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  let cartCount = document.getElementById("cartCount");
  if (cartCount) cartCount.innerText = totalItems;
}

/* -----------------------------
   ADD TO CART
------------------------------ */

function addToCart(productId) {
  let products =

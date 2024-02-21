// Initialize an empty cart object
let cart = {};

// Function to add an item to the cart
function orderNow(productName, productPrice) {
  // Encode product name and price for a URL
  const encodedProductName = encodeURIComponent(productName);
  const encodedProductPrice = encodeURIComponent(productPrice);

  // Build the WhatsApp link with the product information
  const whatsappLink = `https://wa.me/+201060411598?text=can%20i%20order%20this%0AProduct:%20${encodedProductName}%0APrice:%20${encodedProductPrice}`;

  // Open the WhatsApp link
  window.location.href = whatsappLink;
}

// Function to reset the cart
function resetCart() {
  cart = {};
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// Event listener for page load
document.addEventListener("DOMContentLoaded", () => {
  cart = JSON.parse(localStorage.getItem("cart")) || {};
  displayCart();
});

// Function to navigate to the index page
function goToIndex() {
  window.location.href = "index.html";
}
function GoTocustomize() {
  window.location.href = "customize.html";
}

function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.transform =
    sidebar.style.transform === "translateX(0)"
      ? "translateX(-100%)"
      : "translateX(0)";
}

function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var openBtn = document.querySelector(".open-btn");

  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
    openBtn.innerHTML =
      '<div class="hamburger"></div><div class="hamburger"></div><div class="hamburger"></div>';
  } else {
    sidebar.style.width = "250px";
    openBtn.innerHTML =
      '<div class="hamburger"></div><div class="hamburger"></div><div class="hamburger"></div>';
  }
}

src =
  "https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js" >
  class Product {
    constructor(element) {
      this.element = element;
      this.initGallery();
    }

    initGallery() {
      const image = this.element.querySelector("a");

      image.addEventListener("click", (event) => {
        event.preventDefault();
        lightbox.start(image);
      });
    }
  };

// Initialize Products
document.addEventListener("DOMContentLoaded", () => {
  const productElements = document.querySelectorAll(".product");
  const products = Array.from(productElements).map(
    (element) => new Product(element)
  );
});

let toTopBtn = document.getElementById("toTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  // document.body.scrollTop = 0; // For Safari
  // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera\
  window.scrollTo({
    top:0,
    behavior:"smooth",
  })
  
}

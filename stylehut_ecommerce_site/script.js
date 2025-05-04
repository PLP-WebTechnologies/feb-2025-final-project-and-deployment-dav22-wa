let cart = [];

function addToCart(product, price) {
  cart.push({ product, price, quantity: 1 });
  alert(`${product} added to cart.`);
  updateCart();
  updateCartCounter();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
  updateCartCounter();
}

function clearCart() {
  cart = [];
  updateCart();
  updateCartCounter();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  if (cartItems && cartTotal) {
    cartItems.innerHTML = cart.length > 0 ? '' : '<p class="text-gray-600 text-center">Your cart is empty.</p>';
    if (cart.length > 0) {
      cartItems.innerHTML = `
        <div class="hidden sm:grid sm:grid-cols-4 gap-4 font-medium text-gray-700 border-b pb-2 mb-4">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Action</span>
        </div>
      `;
    }
    let total = 0;
    cart.forEach((item, index) => {
      const itemElement = document.createElement("div");
      itemElement.className = "grid grid-cols-1 sm:grid-cols-4 gap-4 items-center py-2 border-b";
      itemElement.innerHTML = `
        <span class="font-medium">${item.product}</span>
        <span>$${item.price.toFixed(2)}</span>
        <span>${item.quantity}</span>
        <button onclick="removeFromCart(${index})" class="text-red-600 hover:text-red-800 transition text-sm sm:text-base">Remove</button>
      `;
      cartItems.appendChild(itemElement);
      total += item.price * item.quantity;
    });
    cartTotal.textContent = total.toFixed(2);
  }
}

function updateCartCounter() {
  const counters = document.querySelectorAll("#cart-counter");
  counters.forEach(counter => {
    counter.textContent = cart.length;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      if (name && email && message) {
        alert("Thank you for contacting us!");
        contactForm.reset();
      }
    });
  }

  const paymentForm = document.getElementById("payment-form");
  const paymentMethodSelect = document.getElementById("payment-method");
  const creditCardDetails = document.getElementById("credit-card-details");
  const paypalDetails = document.getElementById("paypal-details");
  const bankTransferDetails = document.getElementById("bank-transfer-details");
  const clearCartButton = document.getElementById("clear-cart");

  if (clearCartButton) {
    clearCartButton.addEventListener("click", clearCart);
  }

  if (paymentForm) {
    paymentMethodSelect.addEventListener("change", () => {
      creditCardDetails.classList.add("hidden");
      paypalDetails.classList.add("hidden");
      bankTransferDetails.classList.add("hidden");
      if (paymentMethodSelect.value === "credit-card") {
        creditCardDetails.classList.remove("hidden");
      } else if (paymentMethodSelect.value === "paypal") {
        paypalDetails.classList.remove("hidden");
      } else if (paymentMethodSelect.value === "bank-transfer") {
        bankTransferDetails.classList.remove("hidden");
      }
    });

    paymentForm.addEventListener("submit", e => {
      e.preventDefault();
      const total = parseFloat(document.getElementById("cart-total").textContent);
      if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
      }
      if (paymentMethodSelect.value === "credit-card") {
        const cardNumber = document.getElementById("card-number").value;
        const expiryDate = document.getElementById("expiry-date").value;
        const cvv = document.getElementById("cvv").value;
        if (cardNumber && expiryDate && cvv) {
          alert(`Payment of $${total.toFixed(2)} processed successfully via Credit Card!`);
          cart = [];
          updateCart();
          updateCartCounter();
          paymentForm.reset();
        } else {
          alert("Please fill in all credit card details.");
        }
      } else if (paymentMethodSelect.value === "paypal") {
        alert(`Payment of $${total.toFixed(2)} will be processed via PayPal. Redirecting...`);
        cart = [];
        updateCart();
        updateCartCounter();
      } else if (paymentMethodSelect.value === "bank-transfer") {
        alert(`Payment of $${total.toFixed(2)} initiated via Bank Transfer. Please use the provided bank details.`);
        cart = [];
        updateCart();
        updateCartCounter();
      }
    });
  }

  updateCart();
  updateCartCounter();
});
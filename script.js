let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Optional: Auto slide every 5 seconds
setInterval(() => moveSlide(1), 5000);


// Get the button
var mybutton = document.getElementById("backToTop");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

// When the user clicks the button, scroll to the top of the document
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// cart.js

function changeQuantity(button, change) {
    const input = button.parentElement.querySelector('.quantity-input');
    let currentQuantity = parseInt(input.value);

    // Update the quantity
    currentQuantity += change;
    if (currentQuantity < 1) currentQuantity = 1; // Prevent quantity going below 1
    input.value = currentQuantity;

    updateTotal(input); // Update total price for this item
    updateCartSummary(); // Update the overall cart total
}

function updateTotal(input) {
    const cartItem = input.closest('.cart-item');
    const price = parseFloat(cartItem.dataset.price);
    const quantity = parseInt(input.value);
    const total = price * quantity;

    // Update the total price for the individual item
    cartItem.querySelector('.item-total').textContent = total.toFixed(2);

    updateCartSummary(); // Update the overall cart total
}

function updateCartSummary() {
    let totalItems = 0;
    let totalAmount = 0;

    const items = document.querySelectorAll('.cart-item');
    items.forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity-input').value);
        const price = parseFloat(item.dataset.price);
        totalItems += quantity;
        totalAmount += quantity * price;
    });

    // Update the summary values
    document.getElementById('total-items').textContent = totalItems;
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

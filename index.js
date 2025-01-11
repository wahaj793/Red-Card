let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
   
}

window.onscroll = () => {
    navbar.classList.remove('active');
   


}

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 10,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
      },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });


  var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 10,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
      },

    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });

  document.querySelectorAll('.brand-link').forEach(function(brandLink) {
    brandLink.addEventListener('click', function(event) {
        event.preventDefault();
        var selectedBrand = this.getAttribute('data-brand');
        var products = document.querySelectorAll('.card');
        products.forEach(function(product) {
            if (selectedBrand === 'all' || product.getAttribute('data-brand') === selectedBrand) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});



 // Get all "Buy Now" buttons
 const buyNowButtons = document.querySelectorAll('.Buy-now');

 // Get modal and form elements
 const orderFormModal = document.getElementById('order-form-modal');
 const closeModal = document.getElementById('close-modal');
 const orderForm = document.getElementById('order-form');
 const submitOrderButton = document.getElementById('submit-order');
 const orderConfirmation = document.getElementById('order-confirmation');
 const orderDetails = document.getElementById('order-details');

 // Function to open the order form modal
 buyNowButtons.forEach(button => {
     button.addEventListener('click', () => {
         // Show the modal, reset form and clear order details
         orderFormModal.style.display = 'flex';
         orderForm.style.display = 'block';
         orderConfirmation.style.display = 'none'; // Hide confirmation
         orderForm.reset(); // Reset the form fields
         document.getElementById('error-message').style.display = 'none'; // Hide error message
         orderDetails.innerHTML = ''; // Clear previous order details
     });
 });

 // Function to close the modal when the "fa-times" icon is clicked
 closeModal.addEventListener('click', () => {
     orderFormModal.style.display = 'none'; // Hide the modal
 });

 // Function to handle form submission
 submitOrderButton.addEventListener('click', (e) => {
     e.preventDefault(); // Prevent form from refreshing the page

     // Get form values
     const name = document.getElementById('name').value;
     const address = document.getElementById('address').value;
     const phone = document.getElementById('phone').value;
     const email = document.getElementById('email').value;

     // Get error message element
     const errorMessage = document.getElementById('error-message');

     // Check if any field is empty
     if (!name || !address || !phone || !email) {
         // If any field is empty, show the error message
         errorMessage.style.display = 'block';
     } else {
         // If all fields are filled, hide the error message
         errorMessage.style.display = 'none';

         // Update the order confirmation details
         orderDetails.innerHTML = `Name: ${name}<br>Address: ${address}<br>Phone: ${phone}<br>Email: ${email}`;
         orderConfirmation.style.display = 'block'; // Show confirmation

         // Hide the order form and show the confirmation
         orderForm.style.display = 'none';

         // Reset the form fields
         orderForm.reset();
     }
 });


// JavaScript Code for Login and Create Account Logic
document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const errorMessage = document.getElementById("error-message");
  const createAccountForm = document.getElementById('createAccountForm');
  const createAccountLink = document.getElementById('create-account-link');
  const backToLoginLink = document.getElementById('back-to-login-link');
  const newEmailInput = document.getElementById("new-email");
  const newPasswordInput = document.getElementById("new-password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const createErrorMessage = document.getElementById("create-error-message");
  const successMessage = document.getElementById("success-message");
  const loginBtn = document.getElementById("login-btn");

  const savedEmail = localStorage.getItem('email');
  const savedPassword = localStorage.getItem('password');

  if (!savedEmail || !savedPassword) {
      loginForm.style.display = 'none';
      createAccountForm.style.display = 'block';
  } else {
      loginForm.style.display = 'block';
      createAccountForm.style.display = 'none';
  }

  // Toggle the login form visibility
  loginBtn.addEventListener("click", function() {
      if (loginForm.style.display === 'none') {
          loginForm.style.display = 'block';  // Show login form
          createAccountForm.style.display = 'none';  // Hide create account form
      } else {
          loginForm.style.display = 'none';  // Hide login form
      }
  });

  // Handle login form submit
  loginForm.addEventListener("submit", function(e) {
      e.preventDefault(); 

      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      // Clear previous error message and success message
      errorMessage.style.display = 'none';
      successMessage.style.display = 'none';

      // Check if email and password match saved details
      if (email === savedEmail && password === savedPassword) {
          successMessage.innerHTML = "<p>Login successful!</p>"; // Update success message
          successMessage.style.display = 'block';
      } else {
          errorMessage.textContent = "Incorrect email or password!";
          errorMessage.style.display = 'block';
      }
  });

  // Handle create account form submit
  createAccountForm.addEventListener("submit", function(e) {
      e.preventDefault(); 

      const newEmail = newEmailInput.value.trim();
      const newPassword = newPasswordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();

      createErrorMessage.style.display = 'none';

      if (!newEmail || !newPassword || !confirmPassword) {
          createErrorMessage.textContent = "Please fill in all fields!";
          createErrorMessage.style.display = 'block';
          return;
      }

      if (newPassword !== confirmPassword) {
          createErrorMessage.textContent = "Passwords do not match!";
          createErrorMessage.style.display = 'block';
          return;
      }

      localStorage.setItem('email', newEmail);
      localStorage.setItem('password', newPassword);

      createAccountForm.style.display = 'none';
      loginForm.style.display = 'block';

      successMessage.style.display = 'none';
      successMessage.innerHTML = "<p>Account created successfully! Please login.</p>"; // Update success message
      successMessage.style.display = 'block';
  });

  // Show the create account form
  createAccountLink.addEventListener("click", function(e) {
      e.preventDefault();
      loginForm.style.display = 'none';
      createAccountForm.style.display = 'block';
  });

  // Show the login form
  backToLoginLink.addEventListener("click", function(e) {
      e.preventDefault();
      createAccountForm.style.display = 'none';
      loginForm.style.display = 'block';
  });
});
document.getElementById('showAllProducts').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent page reload
  const productCards = document.querySelectorAll('.card');
  productCards.forEach(card => card.style.display = 'inline-block'); // Show all product cards
}); document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const successMessage = document.getElementById('successMessage');

  let errorMessage = "";

  if (!name) errorMessage += "Please enter your name.\n";
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) errorMessage += "Please enter a valid email.\n";
  if (!subject) errorMessage += "Please enter a subject.\n";
  if (!message) errorMessage += "Please enter a message.\n";

  if (errorMessage) {
      alert(errorMessage);
  } else {
      successMessage.style.display = "block"; // Display the success message
      successMessage.scrollIntoView({ behavior: 'smooth' }); // Scroll to the success message
      this.reset(); // Clear form fields
  }
});







document.getElementById("subscribeBtn").addEventListener("click", function() {
  var emailInput = document.getElementById("emailInput").value;

  // ای میل کی موجودگی چیک کریں
  if (emailInput) {
      // سبسکرپشن کا کامیاب پیغام دکھائیں
      document.getElementById("successMessage").style.display = "block";
      // ای میل انپٹ کو خالی کر دیں
      document.getElementById("emailInput").value = "";
  } else {
    document.getElementById("errorMessage").style.display = "block";  }
});

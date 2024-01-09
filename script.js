  //////////////// Reusable Hamburger Menu Navigation Bar function//////////////////////// 
  document.querySelector('.menu-toggle').addEventListener('click', function () {
       const navLinks = document.querySelector('.nav-links ul');
       navLinks.classList.toggle('active');
       const navLinks1 = document.querySelector('.nav-links');
       navLinks1.classList.toggle('active');
       const navLinks2 = document.querySelector('.nav-links ul li');
       navLinks2.classList.toggle('active');


       // Toggle between hamburger and close icons
       const barsIcon = document.querySelector('.menu-toggle i.fa-bars');
       const timesIcon = document.querySelector('.menu-toggle i.fa-times');
       barsIcon.style.display = navLinks.classList.contains('active') ? 'none' : 'block';
       timesIcon.style.display = navLinks.classList.contains('active') ? 'block' : 'none';
  });

  ////////////////////////Contact Form/////////////////////////////////////////////////////////
  document.addEventListener("DOMContentLoaded", function () {
       // Select the contact form popup and close button
       const contactFormPopup = document.getElementById("contact-form");
       const closeButton = contactFormPopup.querySelector(".screen-header-right.close");

       // Close the contact form when the close button is clicked
       closeButton.addEventListener("click", function () {
            contactFormPopup.style.display = "none";
       });

       // Handle button click to show the contact form
       const showContactFormBtn = document.getElementById("showContactFormBtn");
       showContactFormBtn.addEventListener("click", function (event) {
            event.preventDefault();
            contactFormPopup.style.display = "flex";
       });

       // Handle anchor click to show the contact form
       const showContactFormBtnAnchor = document.getElementById("showContactFormBtnAnchor");
       showContactFormBtnAnchor.addEventListener("click", function (event) {
            event.preventDefault();
            contactFormPopup.style.display = "flex";
       });

  });
  ////Clear Buttton Function 
  function clearForm() {
       var form = document.getElementById('submit-form');

       for (var i = 0; i < form.elements.length; i++) {
            var element = form.elements[i];

            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
                 element.value = '';
            }
       }
  }

  ///////////////////////////////////////Google Link Script/////////////////////////////////////////////////////////
  $("#submit-form").submit((e) => {
       e.preventDefault();
       // Show loading icon
       $("#loading-icon").show();
       $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxbUjNMT0TW9KW13uSAt7O49nHimdIbgz-g7vnG0TytqSYrX11PJYePeLFgAkyvKkVD/exec",
            data: $("#submit-form").serialize(),
            method: "post",
            success: function (response) {
                 // Hide loading icon on success
                 $("#loading-icon").hide();
                 // Show success message or take other actions
                 showSuccessMessage();
            },
            error: function (err) {
                 // Hide loading icon on error
                 $("#loading-icon").hide();
                 alert("Something went wrong. Please try again.");
            }
       });
  });

  // Function to show success message
  function showSuccessMessage() {
       // Show success message
       $("#success-message").css({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 9999
       }).fadeIn();
  }

  // Manual hiding of success message and contact form when clicking the "Done" button
  $("#done-button").click(function () {
       $("#success-message, #contact-form").fadeOut();
  });
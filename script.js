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
       var form = document.getElementById('contactForm');

       for (var i = 0; i < form.elements.length; i++) {
            var element = form.elements[i];

            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
                 element.value = '';
            }
       }
  }

  ///////////////////////////////////////Google Link Script/////////////////////////////////////////////////////////
  $("#submit-form").submit((e) => {
       e.preventDefault()
       $.ajax({
            url: "https://script.google.com/macros/s/AKfycbzdx4es6n_eGww9zZ2LNi3wow7X397OpIFWarDgLo2lKXkbOkn2M5WrCmH2jN6Mx-Fr/exec",
            data: $("#submit-form").serialize(),
            method: "post",
            success: function (response) {
                 alert("Form submitted successfully")
                 window.location.reload()
                 window.location.href = "./index.html"
            },
            error: function (err) {
                 alert("Something Error")

            }
       })
  })
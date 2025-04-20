document.addEventListener("DOMContentLoaded", function() {
    var descriptionButton = document.querySelector(".description-btn");
    var descriptionButton2 = document.querySelector(".description-btn2");
    var descriptionButton3 = document.querySelector(".description-btn3");

    var descriptionDetail = document.querySelector(".projectDescription");
    var descriptionDetail2 = document.querySelector(".projectDescription2");
    var descriptionDetail3 = document.querySelector(".projectDescription3");

    var display = 0;

    function descriptionDetails(buttons, detail) {
        if (display === 1) {
            detail.style.display = "block";
            buttons.textContent = "Hide";
            display = 0;
         }
         else {
            detail.style.display = "";
            buttons.textContent = "Show Description";
            display = 1;
         }
      }

      descriptionButton.addEventListener("click", function() {
        descriptionDetails(descriptionButton, descriptionDetail);
      })

      descriptionButton2.addEventListener("click", function() {
        descriptionDetails(descriptionButton2, descriptionDetail2);
      })

      descriptionButton3.addEventListener("click", function() {
        descriptionDetails(descriptionButton3, descriptionDetail3);
      })
});

//For the validation of the contact information form
const form = document.getElementById('formRegistration');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const confirmEmailInput = document.getElementById('confirmEmail');
const usernameInput = document.getElementById('username');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const confirmEmailError = document.getElementById('confirmEmailError');
const usernameError = document.getElementById('usernameError')

const successMessage = document.getElementById('successMessage');
const clearMessage = document.getElementById('clear-btn');

form.addEventListener('submit', function(event) {
    nameError.textContent = '';
    usernameError.textContent = '';
    emailError.textContent = '';
    confirmEmailError.textContent = '';
    successMessage.textContent = ''; 

    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name';
        event.preventDefault();  //Prevents form submission
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Please enter your email';
        event.preventDefault();
        isValid = false;
    }
    else if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        event.preventDefault();
        isValid = false;
    }

    if (confirmEmailInput.value.trim() === '') {
        confirmEmailError.textContent = 'You need to confirm your email';
        event.preventDefault();
        isValid = false;
    }
    else if (emailInput.value.trim() !== confirmEmailInput.value.trim()) {
        confirmEmailError.textContent = 'The email should be the same';
        event.preventDefault();
        isValid = false;
    }

    if (usernameInput.value.trim() === '') {
        usernameError.textContent = 'Please enter a message';
        event.preventDefault();  //Prevents form submission
    isValid = false;
    }

    //If all inputs are valid, show success message
    if (isValid) {
        successMessage.textContent = 'The information has been saved and the form submitted successfully!';
    }

    event.preventDefault(); 
});

//Function to validate email format
function validateEmail(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
     return re.test(String(email));
     }

const darkMode = document.getElementById("darkMode-btn");

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle("dark-mode");
});
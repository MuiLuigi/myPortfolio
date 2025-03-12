document.addEventListener("DOMContentLoaded", function() {
    var descriptionButton = document.querySelector(".description-btn");
    var descriptionButton2 = document.querySelector(".description-btn2");
    var descriptionButton3 = document.querySelector(".description-btn3");

    var descriptionDetail = document.querySelector(".projectDescription");
    var descriptionDetail2 = document.querySelector(".projectDescription2");
    var descriptionDetail3 = document.querySelector(".projectDescription3");

    function descriptionDetails(buttons, detail) {
        if (detail.style.display === "") {
            detail.style.display = "block";
            buttons.textContent = "Hide";
         }
         else {
            detail.style.display = "";
            buttons.textContent = "Show Description";
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
const passwordInput = document.getElementById('password');
const confirmEmailInput = document.getElementById('confirmEmail');
const confirmPasswordInput = document.getElementById('confirmPassword');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const confirmEmailError = document.getElementById('confirmEmailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

const successMessage = document.getElementById('successMessage');
const clearMessage = document.getElementById('clear-btn');

form.addEventListener('submit', function(event) {
    nameError.textContent = '';
    emailError.textContent = '';
    confirmEmailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
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

    if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Please enter your password';
        event.preventDefault();
        isValid = false;
    }
    else if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        event.preventDefault
        isValid = false;
    }

    if (confirmPasswordInput.value.trim() === '') {
        confirmPasswordError.textContent = 'Please confirm your password';
        event.preventDefault();
        isValid = false;
    }
    else if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
        confirmPasswordError.textContent = 'The password should be the same';
        event.preventDefault();
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

//Function to make sure the password is strong
passwordInput.addEventListener("input", function() {
    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password is too short';
        passwordError.style.color = 'red';
    }
    else {
        passwordError.textContent = 'Password is strong enough';
        passwordError.style.color = 'green';  //Turn green if the password is strong enough
    }
});

//Function to make sure that the password confirmationn is the same
confirmPasswordInput.addEventListener("input", function() {
    if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
        confirmPasswordError.textContent = 'Password is not the same';
        confirmPasswordError.style.color = 'red';
    }
    else {
        confirmPasswordError.textContent = 'Password is the same';
        confirmPasswordError.style.color = 'green';  //Turn green if the password is strong enough
    }
});
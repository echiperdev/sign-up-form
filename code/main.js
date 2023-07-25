// CONSTANTS */
/* Store DOM elements */
const form = document.querySelector('form');
const password = document.querySelector('#password');
const passwordStrength = document.querySelector('#password-strength');
const strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
const mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
const confirm = document.querySelector('#confirmation');
const passwordMatch = document.querySelector('#password-match');
let timeout;

// VALIDATOR */
/* @Object Constructor Function
/* Handles password strength display behavior */
function Validator(password) {
    this.password = password;
}

// CHECK */
/* @ObjectPrototype
/* Checks password strength */
Validator.prototype.check = function (password) {
    if (strongPassword.test(password)) {
        passwordStrength.style.color = 'green';
        passwordStrength.textContent = 'Strong';
    } else if (mediumPassword.test(password)) {
        passwordStrength.style.color = 'blue';
        passwordStrength.textContent = 'Medium';
    } else {
        passwordStrength.style.color = 'red';
        passwordStrength.textContent = 'Weak';
    }
}

// Create new instance of VALIDATOR object
const passwordValidator = new Validator(password.value);

// EVENT LISTENERS */
/* Handle form and input behavior */
form.addEventListener('submit', e => {
    if (!form.checkValidity()) {
        e.preventDefault();
    }
    form.classList.add('was-validated');
});

password.addEventListener('input', () => {
    passwordStrength.style.display = 'block';
    clearTimeout(timeout);
    timeout = setTimeout(() => passwordValidator.check(password.value), 500);
    if (password.value.length !== 0) {
        passwordStrength.style.display != 'block';
    } else {
        passwordStrength.innerText = '';
        passwordStrength.style.color = '';
    }
});

confirm.addEventListener('input', () => {
    if (confirm.value != password.value) {
        passwordMatch.style.color = 'red';
        passwordMatch.innerText = 'Passwords do not match!';
    } else if (confirm.value === password.value) {
        passwordMatch.style.color = 'green';
        passwordMatch.innerText = 'Passwords match!'
    }
})
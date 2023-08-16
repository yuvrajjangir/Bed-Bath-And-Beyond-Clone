// Function to show a custom modal with the provided message
function showModal(message) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <p>${message}</p>
        <button class="modal-close">Close</button>
      </div>
    `;
  
    document.body.appendChild(modal);
  
    const modalCloseButton = modal.querySelector('.modal-close');
    modalCloseButton.addEventListener('click', function() {
      document.body.removeChild(modal);
    });
  }

  // Get stored user data from local storage
let usersData = JSON.parse(localStorage.getItem('users')) || [];

// Get references to the signup and signin forms
const signUpForm = document.querySelector('.signUp form');
const signInForm = document.querySelector('.signIn form');

// Handle Create Account form submission
signUpForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get input values
  const email = signUpForm.querySelector('#email').value;
  const password = signUpForm.querySelector('#password').value;
  const confirmPassword = signUpForm.querySelector('#confirmPassword').value;

// Password validation using regular expression
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
if (!passwordPattern.test(password)) {
  showModal('Password must contain at least one uppercase letter, one lowercase letter, and one number.');
  return;
}

  // Check if the user already exists
  const existingUser = usersData.find(user => user.email === email);
  if (existingUser) {
    showModal('User already exists');
    return;
  }

  // Perform validation
  if (password !== confirmPassword) {
    showModal('Passwords do not match');
    return;
  }

  // Store data in local storage
  const userData = { email, password };
  usersData.push(userData);
  localStorage.setItem('users', JSON.stringify(usersData));
  showModal('Account created successfully');

  // Clear the input fields
  signUpForm.reset();
});

// Handle Sign In form submission
signInForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get input values
  const signInEmail = signInForm.querySelector('#inputEmail').value;
  const signInPassword = signInForm.querySelector('#inputPassword').value;
  
  // Retrieve stored user data from local storage
  const foundUser = usersData.find(user => user.email === signInEmail && user.password === signInPassword);
  if (foundUser) {
    showModal('Sign in successful');
    // Redirect to another page
    setTimeout(function() {
      window.location.href = '../index.html'; // Replace with your page URL
    }, 1500); // Delay for 1.5 seconds before redirecting
  } else if (!foundUser) {
    showModal('User not found');
  } else {
    showModal('Invalid email or password');
  }
});





document.getElementById('login-submit').addEventListener('click', function () {
   // get email
   const emailField = document.getElementById('user-email');
   const userEmail = emailField.value;
   // get password
   const passwordField = document.getElementById('user-password');
   const userPassword = passwordField.value;
   // check email and password
   if (userEmail == 'sontan@baap.com' && userPassword == 'secrete') {
      window.location.href = 'banking.html'
   }
});




// I need to attach an EVENT LISTENER to the form's submit event.
    document.getElementById('styledForm').addEventListener('submit', function(event) {
        // `event.preventDefault()` STOPS the form from being submitted, 
        // allowing the custom validation logic to run first.
          event.preventDefault();
          console.log('check')
  
          // I need to get input values and trim whitespace
          // trim GETS RID OF empty space that the function WOULD HAVE considered to be a valid entry
          const firstName = document.getElementById('firstName').value.trim();
          console.log('firstName' + firstName + 'x')
          const lastName = document.getElementById('lastName').value.trim();
          console.log('lastName' + lastName + 'x')
          const email = document.getElementById('email').value.trim();
          const password = document.getElementById('password').value.trim();
  
          // I need to check each field individually. If a field is empty, 
          // set the `errorMessage.textContent` to the specific message for that field.
          const errorMessage = document.getElementById('errorMessage');
          // I need to clear the previous error message.
          errorMessage.textContent = '';
  
          // I need to VALIDATE each field individually and set specific error messages for each field.
          // I need to check for an EMPTY string
          // I could say firstName == ""
          // This is checking if firstName is equal to an empty string
          // `if (!firstName)` is another way to say `if (firstName == "")`
          if (firstName == "") {
            console.log('empty firstName')
              errorMessage.textContent = 'First Name cannot be empty';
              return;
          }
  
          if (!lastName) {
            console.log('empty lastName')
              errorMessage.textContent = 'Last Name cannot be empty';
              return;
          }
  
          if (!email) {
              errorMessage.textContent = 'Email cannot be empty';
              return;
          }
  
          // The email input should be checked against a pattern to ensure it follows the correct format.
          // The pattern /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ensures the email format is correct.
          const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!emailPattern.test(email)) {
            // If it doesn't, a specific error message should be displayed.
              errorMessage.textContent = 'Looks like this is not an email';
              return;
          }
  
          if (!password) {
            errorMessage.textContent = 'Password cannot be empty';
            return;
          }
  
          // If all validations pass, a success message is displayed.
          alert('Form submitted successfully!');
      });
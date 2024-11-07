// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const form = document.querySelector('form');
  
    // Add an event listener for form submission
    form.addEventListener('submit', function (event) {
      // Prevent the form from submitting and refreshing the page
      event.preventDefault();
  
      // Get the values of the form fields
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
  
      // Display the form data in the console (you can replace this with an AJAX request)
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Subject:', subject);
      console.log('Message:', message);
  
      // You can display the values on the page, send them to a server, etc.
      alert('Form submitted successfully!');
    });
  });
  
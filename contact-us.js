// contact-us.js

$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();  // Prevent form submission

        // Clear previous errors
        $('.error').hide();

        // Get form data
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var isValid = true;

        // Validate Name
        if (name === '') {
            $('#nameError').text('Name is required').show();
            isValid = false;
        }

        // Validate Email
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email === '') {
            $('#emailError').text('Email is required').show();
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $('#emailError').text('Please enter a valid email').show();
            isValid = false;
        }

        // Validate Message
        if (message === '') {
            $('#messageError').text('Message is required').show();
            isValid = false;
        }

        // If all validations pass, submit the form
        if (isValid) {
            alert('Your message has been sent!');
            $('#contactForm')[0].reset();
        }
    });
});

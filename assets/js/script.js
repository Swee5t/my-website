document.addEventListener('DOMContentLoaded', function() {
    // Get all close buttons
    const closeButtons = document.querySelectorAll('.close-button');

    // Add click event listener to each close button
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Hide the popup by setting its display property to 'none'
            document.querySelector('.popup').style.display = 'none';
            document.querySelector('body').style.overflow = 'visible';
        });
    });
});
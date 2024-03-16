document.addEventListener('DOMContentLoaded', function() {
    const closeButtons = document.querySelectorAll('.close-button');
    const developerBadge = document.querySelector('.title .badge');

    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            document.querySelector('.popup-container').style.display = 'none';
        });
    });

    developerBadge.addEventListener('click', function() {
        document.querySelector('.popup-container').style.display = 'flex';
        document.querySelector('.popup .logo').style.display = 'flex';
        document.querySelector('.popup .text').textContent = 'Certified Developer Badge';
        document.querySelector('.popup .description').textContent = "Given to individuals possessing profound expertise and considerable experience, this emblem signifies the community's respect and acknowledgment of their contributions and accomplishments.";
        const buttons = document.querySelectorAll('.close-button');
        buttons.forEach((element) => {
            buttons[0].textContent = 'Okey';
            buttons[1].textContent = 'Claim your badge';
        });
    });
});
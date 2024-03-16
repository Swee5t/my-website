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
        document.querySelector('.popup .description').textContent = 'Được trao cho những cá nhân có kiến thức sâu rộng và kinh nghiệm đáng kể, huy hiệu này là một dấu hiệu của sự tôn trọng và công nhận từ cộng đồng đối với những đóng góp và thành tựu của họ.';
        document.querySelectorAll('.close-button').forEach(element => {
            element.style.display = 'flex';
        });
    });
});
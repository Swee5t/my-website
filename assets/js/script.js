document.addEventListener('DOMContentLoaded', () => {
    const badge = document.querySelector('.title .badge');
    const popup = document.querySelector('.popup-container');
    const popupLogo = document.querySelector('.popup .contents .logo');
    const popupText = document.querySelector('.popup .contents .text');
    const popupDescription = document.querySelector('.popup .contents .description');
    const buttons = document.querySelectorAll('.popup .contents .button');

    if (popup) {
        popup.style.display = 'flex';
        popupLogo.style.display = 'none';
        popupText.textContent = 'o/ Hi';
        popupDescription.textContent = 'Vì nhà phát triển trang này quá lười, các tính năng có thể không hoạt động trên iOS hoặc Android.';
    }

    buttons.forEach((element) => {
        buttons[0].textContent = 'Okey';
        buttons[0].onclick = () => {
            popup.style.display = 'none';
        };
        buttons[1].textContent = 'Xem source code (GitHub)';
        buttons[1].onclick = () => {
            popup.style.display = 'none';
            window.open('https://github.com/Swee5t/my-website', '_blank');
        };
    });

    badge.onclick = () => {
        popup.style.display = 'flex';
        popupLogo.style.display = 'flex';
        popupText.textContent = 'Certified Developer Badge';
        popupDescription.textContent = 'This account has been certified since February 17, 2024.';
        buttons.forEach((element) => {
            buttons[0].textContent = 'OK';
            buttons[0].onclick = () => {
                popup.style.display = 'none';
            };
            buttons[1].textContent = 'Claim your badge';
            buttons[1].onclick = () => {
                popup.style.display = 'none';
                window.open('https://youtu.be/dQw4w9WgXcQ?si=7TIxLwsimzDqoHC7', '_blank'); // hehe
            };
        });
    }
});
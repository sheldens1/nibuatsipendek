// Data akun yang diizinkan
const akunList = [
    { username: "reni", password: "12345" },
    { username: "lucky", password: "67890" },
    { username: "admin", password: "admin123" }
];

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.inputBx input[type="submit"]');

    // Bikin elemen error message
    const errorMsg = document.createElement('p');
    errorMsg.style.color = 'red';
    errorMsg.style.textAlign = 'center';
    errorMsg.style.opacity = '0';
    errorMsg.style.transition = 'opacity 0.5s';
    errorMsg.innerText = "Username atau Password salah!";
    document.querySelector('.login').appendChild(errorMsg);

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();

        const usernameInput = document.querySelectorAll('.inputBx input')[0].value;
        const passwordInput = document.querySelectorAll('.inputBx input')[1].value;

        const validUser = akunList.find(akun => akun.username === usernameInput && akun.password === passwordInput);

        if (validUser) {
            window.location.href = "lobi.html"; // arahkan ke halaman berikutnya
        } else {
            // Fade in
            errorMsg.style.opacity = '1';
            // Fade out setelah 2 detik
            setTimeout(() => {
                errorMsg.style.opacity = '0';
            }, 5000);
        }
    });
});
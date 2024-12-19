const signButton = document.getElementById('signbtn');
const signPage = document.querySelector('.full-screen-div'); 
const opensign = document.querySelector('.signup');
const exitButton = document.querySelector('.exit'); 
const closelogin = document.querySelector('.login');
const logbutton = document.getElementById('logbtn');


signButton.addEventListener('click', () => {
    signPage.style.display = 'flex'; 
    closelogin.style.display = 'none';
});

exitButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    signPage.style.display = 'none'; 
});


logbutton.addEventListener('click', (event) => {
    event.preventDefault(); 
    signPage.style.display = 'flex'; 
    opensign.style.display = 'none';
    closelogin.style.display = 'flex';
});

//!  Login şifre gösterme ve gizleme 

// Şifre giriş alanını ve checkbox'ı seç
const passwordInput = document.getElementById('sifregir');
const showPasswordCheckbox = document.getElementById('sifregoster1');

// Checkbox durumuna göre şifreyi göster veya gizle
showPasswordCheckbox.addEventListener('change', () => {
    if (showPasswordCheckbox.checked) {
        passwordInput.type = 'text'; // Şifreyi göster
    } else {
        passwordInput.type = 'password'; // Şifreyi gizle
    }
});

//!  SignUp şifre gösterme ve gizleme 

// Şifre giriş alanlarını ve checkbox'ı seç
const passwordInput1 = document.getElementById('sifre');
const passwordInput2 = document.getElementById('sifre2');
const showPasswordCheckbox2 = document.getElementById('sifregoster'); // Yeni değişken adı

// Checkbox durumuna göre şifre alanlarını göster veya gizle
showPasswordCheckbox2.addEventListener('change', () => {
    const type = showPasswordCheckbox2.checked ? 'text' : 'password';
    passwordInput1.type = type; // İlk şifre alanını güncelle
    passwordInput2.type = type; // İkinci şifre alanını güncelle
});






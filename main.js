var sepetUrunSayisi = 0;
function tikla() {
    alert("Sepete eklendi...");
    sepetUrunSayisi++;
    var sepetDurumuElementi = document.getElementById("sepet");
    sepetDurumuElementi.textContent = "Sepetteki Ürün Sayısı: " + sepetUrunSayisi;
}
function selam(){
    alert("***Hijab Fashion'a Hoş Geldiniz***")
}

function giris(){
    open("giris.html")
}

document.addEventListener('DOMContentLoaded', function () {
    var mobileMenuBtn = document.getElementById('mobile-menu-btn');
    var menu = document.querySelector('.menu');
    var sepetButton = document.getElementById('sepet');
    var kargoLink = document.getElementById('kargo');
    var destekLink = document.getElementById('destek');
    var girisYapbtn = document.getElementById('girisYap');

    mobileMenuBtn.addEventListener('click', function () {
        toggleMobileMenu();
    });

    function toggleMobileMenu() {
        if (menu.style.display === 'block') {
            hideMobileMenu();
        } else {
            showMobileMenu();
        }
    }

    function showMobileMenu() {
        menu.style.display = 'block';
        sepetButton.style.display = 'none';
        girisYapbtn.style.display = 'none';
        document.getElementById('phone').style.display = 'none';
        document.getElementById('truck').style.display = 'none';
        kargoLink.style.display = 'none';
        destekLink.style.display = 'none';
        mobileMenuBtn.style.position = 'absolute';

        // Add an event listener to close the menu when clicking outside of it
        document.addEventListener('click', closeMobileMenu);
    }

    function hideMobileMenu() {
        menu.style.display = 'none';
        sepetButton.style.display = 'block'; // Keep the button visible
        kargoLink.style.display = 'block';
        destekLink.style.display = 'block';
        mobileMenuBtn.style.position = 'absolute';
        girisYapbtn.style.display = 'block';
        document.getElementById('phone').style.display = 'none';
        document.getElementById('truck').style.display = 'block';

        // Remove the event listener to close the menu when clicking outside of it
        document.removeEventListener('click', closeMobileMenu);
    }

    function closeMobileMenu(event) {
        // Check if the click is outside the menu and button
        if (!menu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            hideMobileMenu();
        }
    }
});


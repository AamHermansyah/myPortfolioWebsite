// navbar fixed
window.addEventListener('scroll', function () {
    this.document.querySelector('header').classList.toggle('navbar-fix', window.pageYOffset > 0);
});

// hamburger
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

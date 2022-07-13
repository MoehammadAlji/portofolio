// navigation
const getHamburger = document.querySelector('[alt="menu"]'); //mengambil tag img html yang memiliki alt="menu"
const getMobileNav = document.querySelector('.side-bar-mobile'); //buat ngambil tag html(dan child-nya kalau ada) sesuai yang di-select
const xButton = document.querySelector('[alt="silang"]'); //sama aja kayak menu

//================
// toggle nav
function toggleNav() {
    getMobileNav.classList.toggle('side-bar-mobile-toggle');
}

getHamburger.addEventListener('click', toggleNav);
xButton.addEventListener('click', toggleNav);




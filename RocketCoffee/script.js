var dropdown = document.getElementById("dropdown");
var header = document.getElementById("header");
var hamburgerMenu = document.getElementById("hamburger-menu");
var closeMenu = document.getElementById("close-menu");

function showNav() {
    
    dropdown.classList.toggle("open");
    header.classList.toggle("open-menu");
    hamburgerMenu.classList.toggle("hide");
    closeMenu.classList.toggle("show");
    
    function noScroll() {
        window.scrollTo(0, 0);
      }
      
    
      window.addEventListener('scroll', noScroll);
      
}

function closeHamburgerMenu() {

    showNav();
}


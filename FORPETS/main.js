//menu
const menu = document.querySelector(".navbar__links")
const menuBotton = document.querySelector(".navbar__icons")

    menuBotton.addEventListener('click', ()=>{
        menu.classList.toggle("navbar__open");
        menuBotton.classList.toggle("open")
    });
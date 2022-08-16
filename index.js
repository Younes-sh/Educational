// menu burger
var sideBar = document.querySelector('.sideBar');
var btnBurgerMenu = document.querySelector('.btnSide');
btnBurgerMenu.addEventListener('click',btnBurgerHandler);
function btnBurgerHandler () {
    btnBurgerMenu.classList.toggle('open')
    sideBar.classList.toggle('hidden')
    sideBar.classList.toggle('width')
}
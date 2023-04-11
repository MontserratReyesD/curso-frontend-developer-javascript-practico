//Hacemos esto para poder mostrar el menu chiquito cuando se seleccione el correo
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

//Funcion que nos ayuda a mostrar o quitar el menu chiquito 
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
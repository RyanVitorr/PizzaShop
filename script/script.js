
const listaMenu = document.getElementById('menu-list');
const menu = document.querySelector('.menu');
const barra = document.querySelector('.barra-menu');
const html = document.getElementById('body');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    listaMenu.classList.toggle('ativo');
    html.classList.toggle('ativo');
})

const listaMenu = document.getElementById('menu-list');
const menu = document.querySelector('.menu');
const barra = document.querySelector('.barra-menu');
const html = document.getElementById('body');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    listaMenu.classList.toggle('ativo');
});


const botao1 = document.getElementById('botao1');
const botao2 = document.getElementById('botao2');

botao1.addEventListener('mouseover', ()=> {
    botao1.style.backgroundColor = 'transparent';
    botao1.style.color = 'var(--yello)';
    botao1.style.border =  '1px solid black';  
})


botao1.addEventListener('mouseout', ()=> {
    botao1.style.backgroundColor = '';
    botao1.style.color = '';
    botao1.style.border =  '';  
})

botao2.addEventListener('mouseover', ()=> {
    botao2.style.backgroundColor = 'transparent';
    botao2.style.color = 'var(--yello)';
    botao2.style.border =  '1px solid black';  
})


botao2.addEventListener('mouseout', ()=> {
    botao2.style.backgroundColor = '';
    botao2.style.color = '';
    botao2.style.border =  '';  
})





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
const botao = document.querySelectorAll(".botao");

botao.forEach((botoes) => {
    botoes.addEventListener("mouseover", () => {
        const reserve = botoes.classList.contains("reserve");
        if(reserve == true) {
            botao1.style.backgroundColor = 'transparent';
            botao1.style.color = 'var(--yello)';
            botao1.style.border =  '1px solid black'; 
        } else {
            botao2.style.backgroundColor = 'transparent';
            botao2.style.color = 'var(--yello)';
            botao2.style.border =  '1px solid black'; 
        }
    })
})

botao.forEach((botoes) => {
    botoes.addEventListener("mouseout", () => {
        const reserve = botoes.classList.contains("reserve");
        if(reserve == true) {
            botao1.style.backgroundColor = '';
            botao1.style.color = '';
            botao1.style.border =  ''; 
        } else {
            botao2.style.backgroundColor = '';
            botao2.style.color = '';
            botao2.style.border =  ''; 
        }
    })
})



const cardapioPizzas = [
    {
        imagem:"calabresa-removebg-preview.png",
        sabor:"Calabresa"
    },
    {
        imagem:"frango-removebg-preview.png",
        sabor:"Frango"
    },
    {
        imagem:"portuguesa-removebg-preview.png",
        sabor:"Portuguesa"
    },
    {
        imagem:"strogonoff-removebg-preview.png",
        sabor:"Strogonoff"
    },
    {
        imagem:"chocolate-removebg-preview.png",
        sabor:"Chocolate"
    },
    {
        imagem:"confete-removebg-preview.png",
        sabor:"Confete"
    },
    {
        imagem:"prestigio-removebg-preview.png",
        sabor:"Prestígio"
    },
    {
        imagem:"sensacao-removebg-preview.png",
        sabor:"Sensação"
    }
];


for(pizzas of cardapioPizzas) {
    const pizzasHtml = 
    `<div class="card-pizza-infos">                   
        <div class="card-img-pizzas">
            <img class="img" src="img/${pizzas.imagem}" alt="Imagem da pizza">
        </div>
        <div class="list-card-pizza">
            <h3>${pizzas.sabor}</h3>
            <h4>6 fatias<span>R$35,00</span></h4>
            <h4>8 fatias<span>R$45,00</span></h4>
            <h4>12 fatias<span>R$55,00</span></h4>
            <button class="btn-card">Pedir Agora</button>
        </div>
    </div>`;

    document.getElementById("cards").innerHTML += pizzasHtml;
}



//Pegando os elementos html
let formulario = document.querySelector('form');
let valorDigitado = document.getElementById('amount');
let moeda = document.getElementById('currency');
let footer = document.querySelector('footer');
let descricao = document.getElementById('description');
let resultado = document.getElementById('result');

//Cotação
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

//Permitindo apenas números no input
valorDigitado.addEventListener("input", ()=>{
    const regex = /\D+/g
    valorDigitado.value = valorDigitado.value.replace(regex, '');
});

formulario.onsubmit = (event) => {
    event.preventDefault();

   switch(moeda.value){
        case 'USD':
            converterMoeda(valorDigitado.value, USD, 'US$');
            break;
        case 'EUR':
            converterMoeda(valorDigitado.value, EUR, "€");
            break;
        case 'GBP':
            converterMoeda(valorDigitado.value, GBP, "£");
            break;
   }
};

function converterMoeda(moeda, preco, simbolo){
    //mostrando o footer
    footer.style.display = 'block';

    //Atualizando a descrição com as informações selecionadas
    descricao.innerText = `${simbolo}1 = ${moedaFormatada(preco)}`;
    
    let total = valorDigitado.value * preco;
    resultado.textContent = `${moedaFormatada(total)}`;
}

function moedaFormatada (valor) {
    return Number(valor).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })
}
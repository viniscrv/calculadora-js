botoes = document.querySelectorAll('button');

spanResultado = document.querySelector('span');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        if (botao.classList.contains('calculadora__botoes-operador')){
            numeroAnterior = parseFloat(spanResultado.innerHTML);
            spanResultado.innerHTML = botao.innerHTML;      
            if (spanResultado.innerHTML === '+'){
                operacao = '+';
            } else if(spanResultado.innerHTML === '-'){
                operacao = '-';
            } else if(spanResultado.innerHTML === '×'){
                operacao = '×';
            } else if(spanResultado.innerHTML === '÷'){
                operacao = '÷';
            }
        }
        if (botao.classList.contains('decimal')){
            spanResultado.innerHTML = spanResultado.innerHTML + '.';
        }
        numeroAtual = parseFloat(spanResultado.innerHTML);
        if (botao.classList.contains('resultado')){
            let calcular = (numeroAnterior, operacao, numeroAtual) => {
                switch(operacao){
                    case '+':
                        return numeroAnterior + numeroAtual;
                        break;
                    case '-':
                        return numeroAnterior - numeroAtual;
                        break;
                    case '×':
                        return numeroAnterior * numeroAtual;
                        break;
                    case '÷':
                        return numeroAnterior / numeroAtual;
                        break;
                    default:
                        console.log('erro');
                }
            }
            spanResultado.innerHTML = calcular(numeroAnterior,operacao,numeroAtual);
        }
        if (botao.classList.contains('limpar')){
            spanResultado.innerHTML = 0;
        }
        if (botao.classList.contains('num')){
            if (spanResultado.innerHTML === '0' || spanResultado.innerHTML === operacao){
                spanResultado.innerHTML = botao.innerHTML;
            } else {
                spanResultado.innerHTML = spanResultado.innerHTML + botao.innerHTML;
            }
        }
    })
})

const ligaLampada = document.getElementById('lampadaOn');
const desligaLampada = document.getElementById('lampadaOff');
const lampada = document.getElementById('lampada');

function lampadaQuebrada() {
    return lampada.src.indexOf('quebrada') > -1 // verificar se a imagem 'quebrada' está sendo renderizada na tela, se ela estiver sendo rederizada, valor = (> -1)
}

function quebrada() { // função que muda a imagem para imagem da lampada quebrada
    lampada.src = './img/quebrada.jpg';
}

function lampadaOn() { // função que muda a imagem para imagem da lampada ligada
    if ( !lampadaQuebrada() ) { // SE NÃO CHAMAR FUNCTION LAMPADAQUEBRADA, PODE EXECUTAR LAMPADA
    lampada.src = './img/ligada.jpg';
    }
}

function lampadaOff() { // função que muda a imagem para imagem da lampada desligada
    if ( !lampadaQuebrada()) { // SE NÃO CHAMAR FUNCTION LAMPADAQUEBRADA, PODE EXECUTAR LAMPADAOFF
    lampada.src = './img/desligada.jpg';
}
}

ligaLampada.addEventListener('click', lampadaOn);// se eu der um clique no botão 'Ligar' chama a função lampadaOn
desligaLampada.addEventListener('click', lampadaOff); // se eu der um clique no botão 'Desligar' chama a função lampadaOff
lampada.addEventListener('dblclick', quebrada); // Se der dois cliques, chama a função, quebrada.
lampada.addEventListener('mouseover', lampadaOn); //Se mouse passar por cima da lampada, chama lampadaOn
lampada.addEventListener('mouseleave', lampadaOff);// se mouse sair de cima da lampada, chama lampadaOff
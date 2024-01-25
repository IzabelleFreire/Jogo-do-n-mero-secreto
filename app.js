let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numerSecreto = gerarNumeroAleatorio ();
let tentativas = 1; 

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto
    responsivevoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
exibirTextoNaTela ('h1', 'Jogo do número secreto');
exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector ('input').value;
    
    if (chute == numerSecreto){
        exibirTextoNaTela ('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute ('disabled')
    } else {
        if (chute > numerSecreto) {
            exibirTextoNaTela ('p', 'O número secreto é menor');
            
        } else {
            exibirTextoNaTela ('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}
function gerarNumeroAleatorio () {
   let numeroEscolhido = parseInt(Math.random () * numeroLimite);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
   if (quantidadeDeElementosNaLista == 3); {
    listaDeNumerosSorteados = [];
   }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio;
   }else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log (listaDeNumerosSorteados)
    return numeroEscolhido;
   }
}
function limparCampo() {
    chute = document.querySelector ('input');
    chute.value = '';

}

function reiniciarJogo (){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo ();
    tentativas = 1;
    exibirTextoNaTela ('h1' , 'Jogo do número secreto');
    exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');
}
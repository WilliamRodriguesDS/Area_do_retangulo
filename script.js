function escrever(mensagem){
    let output = document.querySelector("#output");
    output.innerHTML = mensagem;
}

function iniciarCalculo(largura, altura){
    altura = parseFloat(prompt("Digite o número da altura"));
    largura = parseFloat(prompt("Digite o número da largura"));
    
    if(isNaN(altura) || isNaN(largura)){
        throw new Error("Apenas números");
    }
    else{
        let msg = calcular(altura, largura);
        escrever(msg);
    }
}

function calcular(altura, largura){
    let calculo = altura * largura;
    return calculo;
}
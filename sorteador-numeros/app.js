function sortear() {
    let quantity = parseInt(document.getElementById("quantidade").value);
    
    let from = parseInt(document.getElementById("de").value);
    
    let to = parseInt(document.getElementById("ate").value);

    if(from > to) {
        alert(`Campo "do número" deve ser inferior ao campo "até o número".`);
        return;
    }
    else if(quantity > (to - from + 1)) {
        alert(`Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número"`);
        return;
    }

    let sorteados = [];

    for(let i = 0; i < quantity; i++) {
        let numero = obterNumeroAleatorio(from, to);
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(from, to);
        }
        sorteados[i] = numero;
    }

    let result = document.getElementById("resultado");
    result.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

    changeButtonState();
}

function obterNumeroAleatorio(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

function changeButtonState() {
    let button = document.getElementById("btn-reiniciar");
    if (button.classList.contains("container__botao-desabilitado")) {
        button.classList.remove("container__botao-desabilitado");
        button.classList.add("container__botao");
    }
    else {
        button.classList.remove("container__botao");
        button.classList.add("container__botao-desabilitado");
    }
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    
    document.getElementById("de").value = "";
    
    document.getElementById("ate").value = "";
    
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;

    changeButtonState();    
}
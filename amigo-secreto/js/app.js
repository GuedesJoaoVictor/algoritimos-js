let arrayNames = [];
function adicionar() {
    let upper = document.getElementById("nome-amigo").value.toUpperCase();
    let arrayUpper = arrayNames.map(name => name.toUpperCase());
    if(arrayUpper.includes(upper)) {
        alert("Não podemos adicionar nomes duplicados.");
        return;
    }

    if (document.getElementById("nome-amigo").value != "") {
        let friendName = document.getElementById("nome-amigo").value;
        arrayNames.push(friendName);
        let pElement = document.getElementById("lista-amigos");
        pElement.innerText = arrayNames.join(", ");
    
        document.getElementById("nome-amigo").value = "";
    }
    else {
        alert("Não podemos adicionar 'nada' ao array.")
}
}

function limpaAmigos() {
    document.getElementById("lista-amigos").innerText = "";
}

function limpaSorteio() {
    document.getElementById("lista-sorteio").innerText = "";
}

function verificaSorteio() {
    if(arrayNames.length < 4) {
        alert("Para fazer um sorteio minímo, precisamos de 4 participantes.");
        return false;
    }
    else {
        return true;
    }
}

function sortear() {
    let confirm = verificaSorteio();
    if (confirm) {
        limpaSorteio();
        let length = arrayNames.length, i, j;
    
        while (length) {
            i = Math.floor(Math.random() * length--);
    
            j = arrayNames[length];
            arrayNames[length] = arrayNames[i];
            arrayNames[i] = j;
        }
        j = 1;
        let pSorteio = document.getElementById("lista-sorteio");
        for(i = 0; i < arrayNames.length; i++) {
            if(i == arrayNames.length - 1) {
                pSorteio.innerText+= `${arrayNames[i]} -> ${arrayNames[0]}`
                break;
            }
            else {
                pSorteio.innerText += `${arrayNames[i]} -> ${arrayNames[j]}\n`
            }
            j++;
        }
    }
}

function reiniciar() {
    limpaAmigos();
    limpaSorteio();
    arrayNames = [];
}
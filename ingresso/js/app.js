let pista = 100;
let cadeiraSuperior = 200;
let cadeiraInferior = 400;

function comprar() {
    let option = document.querySelector("select[name='tipo-ingresso'] option:checked").value;
    let quantity = Number(document.getElementById("qtd").value);

    let confirm;

    switch (option) {
        case "pista":
            confirm = verify(pista, quantity, option);
            if (confirm) {
                pista-=quantity;
                removeQuantity(option, pista);
            }
            break;
        case "superior":
            confirm = verify(cadeiraSuperior, quantity, option);
            if (confirm) {
                cadeiraSuperior-=quantity;
                removeQuantity(option, cadeiraSuperior);
            }
            break;
        case "inferior":
            confirm = verify(cadeiraInferior, quantity, option);
            if(confirm) {
                cadeiraInferior-=quantity;
                removeQuantity(option, cadeiraInferior);                
            }
            break;
    }
}


function removeQuantity(option, quantity) {
    let spanElement = document.getElementById(`qtd-${option}`);
    spanElement.textContent = quantity;
}

function verify(option, quantity, name) {
    if (option - quantity < 0) {
        alert(`Quantidade indisponível para ${name}`);
        return false;
    }
    else {
        return true;
    }
}
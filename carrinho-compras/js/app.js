let total = 1400;
function adicionar() {
    let option = document.querySelector("select[name='produto'] option:checked").value;

    let quantity = document.getElementById("quantidade").value;

    let productPrice;

    let temporary;

    switch (option) {
        case "Fone de ouvido - R$100":
            productPrice = 100;
            temporary = newTotal(productPrice, quantity, "Fone de ouvido");
            break;
        case "Celular - R$1400":
            productPrice = 1400;
            temporary = newTotal(productPrice, quantity, "Celular");
            break;
        case "Oculus VR - R$5000":
            productPrice = 5000;
            temporary = newTotal(productPrice, quantity, "Oculos VR");
            break;
    }

    total+= temporary;

    document.getElementById("valor-total").innerHTML = `R$ ${total}`
}

function newTotal(productPrice, quantity, productName) {
    if (quantity > "0") {
        let total = quantity * productPrice;
        let section = document.createElement("section");
        section.classList.add("carrinho__produtos__produto");
    
        let spanQuantity = document.createElement("span");
        spanQuantity.classList.add("texto-azul");
        spanQuantity.innerHTML = `${quantity}x`;
    
        let product = document.createTextNode(` ${productName} `);
    
        let spanTotal = document.createElement("span");
        spanTotal.classList.add("texto-azul");
        spanTotal.innerHTML = `R$${total}`
    
        section.appendChild(spanQuantity);
        section.appendChild(product);
        section.appendChild(spanTotal);
    
        document.getElementById("lista-produtos").appendChild(section);
        
        return quantity * productPrice;
    }
    else {
        alert("A quantidade deve ser maior que 0");
        return;
    }
}

function limpar() {
    total = 0;
    let mainSection = document.getElementById("lista-produtos");
    mainSection.innerHTML = "";
    document.getElementById("valor-total").innerHTML = `R$ ${total}`
}
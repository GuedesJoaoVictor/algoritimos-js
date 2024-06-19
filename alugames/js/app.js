function alterarStatus(number) {
    const liElement = document.getElementById(`game-${number}`);
    let aToChange = liElement.children.item(2);
    let divToChange = liElement.children.item(0);

    if (aToChange.classList.contains("dashboard__item__button--return")) {
        aToChange.classList.remove("dashboard__item__button--return");
        aToChange.innerHTML = "Alugar"
        divToChange.classList.remove("dashboard__item__img--rented");
    }
    else {
        aToChange.classList.add("dashboard__item__button--return");
        aToChange.innerHTML = "Devolver"
        divToChange.classList.add("dashboard__item__img--rented")
    }
}
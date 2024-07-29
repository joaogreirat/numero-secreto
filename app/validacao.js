function verificarValorValido(chute) {
    const numero = +chute
    if (chuteInvalido(numero)) {
        elementoChute.innerHTML +='<div>Valor Inválido</div>'
        return
    }

    if (numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML +=`<div>Valor Inválido: O número precisa estar entre ${menorValor} e ${maiorValor}.</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>VOCÊ ACERTOU!</h2>
        <h3>O número secreto era ${numeroSecreto}.</h3>
        <button id="jogar-novamente" class="btn_jogar_novamente">JOGAR NOVAMENTE</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})

function contar() {
    var inicio = document.getElementById('numInicio')
    var fim = document.getElementById('numFim')
    var passo = document.getElementById('numPasso')
    var resultado = document.getElementById('resultado')


    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.style.color = "red"
        resultado.innerHTML = 'Preencha todos os campos!'
    } else if(Number(passo.value) <= 0){
            resultado.style.color = "red"
            resultado.innerHTML = 'Passo inválido!'
    } else {
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)

        resultado.innerHTML = `Contando: </br>`
        if(inicio < fim) {
            for(inicio; inicio < fim; inicio += passo) {
                resultado.innerHTML += `${inicio} \u{1F449} `
            }
        } else {
            for(inicio; inicio > fim; inicio -= passo) {
                resultado.innerHTML += `${inicio} \u{1F449} `
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}
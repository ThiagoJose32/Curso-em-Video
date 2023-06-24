function contar() {
    var inicio = Number(document.getElementById('numInicio').value)
    var fim = Number(document.getElementById('numFim').value)
    var passo = Number(document.getElementById('numPasso').value)
    var resultado = document.getElementById('resultado')

    var icon = document.createElement('i')
    icon.setAttribute('class', 'fa fa-hand-o-right')

    var p = document.createElement('p')
    var node

    resultado.innerHTML = `Contando: `
    for(inicio; inicio < fim; inicio+=passo) {
        resultado.innerHTML += `${inicio} \u{1F449} `
    }
    resultado.innerHTML += `\u{1F60E}`
}
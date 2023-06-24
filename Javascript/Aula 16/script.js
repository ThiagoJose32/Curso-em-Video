function surgirImagem() {
    var idade = document.getElementById('idade')
    var res = document.getElementById('res')
    var img = document.createElement('img')

    if(idade.value < 10) {
        img.setAttribute('src', 'media/moaninha.png')
    } else if (idade.value < 20) {
        img.setAttribute('src', 'media/moana-braba.png')
    } else if (idade.value < 60) {
        img.setAttribute('src', 'media/galinho.png')
    }
    img.setAttribute('style', 'width: 250px; height: 250px; background-color: red')
    res.appendChild(img)
}

function mudarFundo() {
    var botao = document.getElementById("botao")
    botao.setAttribute('style', 'background-color: red')
}
function mudarFundo2() {
    var botao = document.getElementById("botao")
    botao.setAttribute('style', 'background-color: blue')
}
function defineTema() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = 18//data.getHours()
    if(hora > 5 && hora < 12) {
        msg.innerHTML = "Bom dia"
        img.src = "img/manha.jpg"
    } else if(hora > 11 && hora < 18) {
        msg.innerHTML = "Boa tarde"
        img.src = "img/tarde.jpg"
    } else {
        msg.innerHTML = "Boa noite"
        img.src = "img/noite.jpg"
    }
}
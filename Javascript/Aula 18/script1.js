function gerarTabuada() {
    var numero = document.getElementById('numero')
    var selectList = document.getElementById('lista')
    var placeholder = document.getElementById('placeholder')
    var tipo = document.getElementById('tipo')
    let item

    if(numero.value.length == 0) {
        selectList.innerHTML = "<option>Digite um número acima</option>"
        selectList.style.color = "red"
    } else {
        selectList.style.color = "black"
        numero = Number(numero.value)
        selectList.innerHTML = ""
        for(var i = 1; i <= 10; i++) {
            item = document.createElement('option') // Para cada execução ele cria um elemento option
            switch(tipo.value) {
                case "+":
                    item.text = `${numero} + ${i} = ${(numero+i).toFixed(2)}`
                break
                case "-":
                    item.text = `${numero} - ${i} = ${(numero-i).toFixed(2)}`
                break
                case "*":
                    item.text = `${numero} * ${i} = ${(numero*i).toFixed(2)}`
                break
                case "/":
                    item.text = `${numero} / ${i} = ${(numero/i).toFixed(2)}`
                break
            }
            selectList.appendChild(item)
        }
    }
}
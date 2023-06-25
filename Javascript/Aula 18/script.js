function gerarTabuada() {
    var numero = document.getElementById('numero')
    var selectList = document.getElementById('lista')
    var placeholder = document.getElementById('placeholder')
    var tipo = document.getElementById('tipo')

    if(numero.value.length == 0) {
        selectList.innerHTML = "<option>Digite um número acima</option>"
        selectList.style.color = "red"
    } else {
        selectList.style.color = "black"
        numero = Number(numero.value)
        selectList.innerHTML = ""
        for(var i = 1; i <= 10; i++) {
            switch(tipo.value) {
                case "+":
                    selectList.innerHTML += `<option>${numero} + ${i} = ${(numero+i).toFixed(2)}</option>`
                break;
                case "-":
                    selectList.innerHTML += `<option>${numero} - ${i} = ${(numero-i).toFixed(2)}</option>`
                break;
                case "*":
                    selectList.innerHTML += `<option>${numero} * ${i} = ${(numero*i).toFixed(2)}</option>`
                break;
                case "/":
                    selectList.innerHTML += `<option>${numero} / ${i} = ${(numero/i).toFixed(2)}</option>`
                break;
            }
        }
    }
}
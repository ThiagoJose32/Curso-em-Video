function gerarOptions() {
    var select = document.getElementById('x')
    select.innerHTML = ""
    for(var i = 0; i < 10; i++) {
        var option = document.createElement('option')
        option.text = `${i} -> item`
        select.appendChild(option)
    }
}
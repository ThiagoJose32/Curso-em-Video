document.getElementById("submit").onclick = function() {
    var radios = document.getElementsByName("sexo");
    for(var i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            var dataNascimento = document.getElementById("dataNascimento").value
            var dias = (Date.now().value - dataNascimento)
            var hoje = Date.now() / (1000 * 3600 * 24)
            var img = document.createElement("img")

            img.setAttribute("id", "foto")
            switch(radios[i].value) {
                case "masculino":
                        alert(`${dataNascimento} - ${hoje}`)
                    break;
                case "feminino":
                    alert("Feminino");
                break;
            }
        }
    }
}
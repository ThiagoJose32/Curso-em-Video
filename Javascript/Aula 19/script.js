let array = []

function Adicionar() {
    let n = document.getElementById('numero')
    num = StringToNumber(n.value)
    if(num == "") {
        alert("Digite um valor!")
    } else if(array.indexOf(num) != -1) {
        alert(`Valor já digitado! Index[${array.indexOf(num)}]`)
    } else if(num < 1 || num > 100) {
        alert("Digite um valor entre 1 e 100!")
    }
    else {
        let resultados = document.getElementById('resultados')
        resultados.innerHTML = ""
        AddNumberToArray(num)
        addElementToSelect(num)
    }
    n.value = ""
    n.focus()
}
function StringToNumber(num) {
    return Number(num)
}
function AddNumberToArray(num) {
    array.push(num)
}
function addElementToSelect(num) {
    let select = document.getElementById('select')
    let option = document.createElement('option')
    option.innerHTML = `Valor ${num} adicionado.`
    select.appendChild(option)
}


function Verificar() {
    if(array.length == 0){
        alert("Adicione valores para verificar!")
    } else {
        let resultados = document.getElementById('resultados')
    resultados.innerHTML = ""
    let countNumbers = CountNumbers(array)
    CreateElementsP(`Ao todo, temos ${countNumbers} número(s) cadastrado(s).`)

    let largestNumber = LargestNumber(array)
    CreateElementsP(`O maior valor informado foi ${largestNumber}.`)

    let smallerNumber = SmallerNumber(array)
    CreateElementsP(`O menor valor informado foi ${smallerNumber}.`)

    let sumNumbers = SumNumbers(array)
    CreateElementsP(`Somando todos os valores, temos ${sumNumbers}.`)

    let averageNumbers = AverageNumbers(array)
    CreateElementsP(`O média dos valores digitados é ${averageNumbers}.`)
    }
}




function CountNumbers(array) {
    return array.length
}

function LargestNumber(array) {
    return Math.max.apply(null, array)
}

function SmallerNumber(array) {
    return Math.min.apply(null, array)
}

function SumNumbers(array) {
    let sum = 0;
    for (let x in array) {
        sum += array[x]
    }
    return sum
}

function AverageNumbers(array) {
    return SumNumbers(array) / CountNumbers(array)
}

function CreateElementsP(item) {
    let resultados = document.getElementById('resultados')
    let elementP = document.createElement('p')
    elementP.innerHTML += item
    resultados.appendChild(elementP)
}
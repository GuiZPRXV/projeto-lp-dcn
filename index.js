var setaDireita = window.document.getElementById("setaDireita")
var leonardo = window.document.getElementById("leonardo")
var bruna = window.document.getElementById("bruna")
var samantha = window.document.getElementById("samantha")
var setaEsqueda = window.document.getElementById("setaEsquerda")

function ScrollRight() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setaDireita.style ="display:none"
    setaEsqueda.style ="display:flex"
}

function ScrollLeft(){

    leonardo.style ="display:flex"
    bruna.style ="display:none"
    setaDireita.style ="display:flex"
    setaEsquerda.style ="display:none"
}
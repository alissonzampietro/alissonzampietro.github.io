var anoAtual = new Date().getFullYear();
var tempoMercado = anoAtual - 2012;
var idade = anoAtual - 1994;
document.getElementById("anoAtual").innerHTML = anoAtual;
document.getElementById("idade").innerHTML = idade;
var elemento = document.getElementsByClassName("tempoMercado");
for(var i = 0; i < elemento.length; i++)
{
    elemento[i].innerHTML = tempoMercado;
}


$(function(){
    $(".name").typed({
        strings: ["Alisson Zampietro.", "Desenvolvedor.", "Curioso."],
        typeSpeed: 200,
        backDelay: 1000,
        loop: true
    });
});
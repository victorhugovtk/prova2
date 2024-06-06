let nome = document.getElementById("nome");
let resposta = document.getElementById("resposta");

function aperte()
{
    resposta.innerHTML ="olá ," + nome.value + " tudo bem ?? ";
}

var m = document.getElementById("metros")

function converter ()
{
    resposta.innerHTML = parseFloat (m.value) * 100;
}

let pegarNumero = document.getElementById("valor")
let n1maisUm = document.getElementById("sucessor")
let n1menosUm = document.getElementById("antecessor")

function descobrir()
{
    n1maisUm.innerHTML = parseInt() 
}

let v = 4;
let c = 11;

if(v > 5 || c > 10)
    {
        console.log("f é maior que 5 ou g é maior que 10")
    }
    else
    {
        console.log("f não é maior que 5 ou g é maior que 10")
    }

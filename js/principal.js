var paciente = document.querySelector("#primer-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = parseInt(tdPeso.textContent);

var tdAltura = paciente.querySelector(".info-altura");
var altura = parseInt(tdAltura.textContent);

var tdIMC = paciente.querySelector(".info-imc");
var imc = peso / (altura * altura);
tdIMC.textContent = imc;

pesoEsValido = true;
alturaEsValida = true;

if(peso < 0 || peso > 1000)
{
    tdIMC.textContent = ("Peso incorrecto");
    pesoEsValido = false;
}
if(altura < 0 || altura > 4)
{
    tdIMC.textContent = ("Altura incorrecta");
    alturaEsValida = false;
}
if(pesoEsValido && alturaEsValida)
{
    var imc = peso / (altura * altura);
    tdIMC.textContent = imc;
}
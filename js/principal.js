var paciente = document.querySelector("#primer-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = parseInt(tdPeso.textContent);

var tdAltura = paciente.querySelector(".info-altura");
var altura = parseInt(tdAltura.textContent);

var tdIMC = paciente.querySelector(".info-imc");
var imc = peso / (altura * altura);
tdIMC.textContent = imc;
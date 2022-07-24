var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);
for(var i=0; i<pacientes.length; i++)
{
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = parseFloat(tdPeso.textContent);
    var tdNombre = paciente.querySelector(".info-nombre");
    var nombre = tdNombre.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = parseFloat(tdAltura.textContent);

    var tdIMC = paciente.querySelector(".info-imc");
    var imc = peso / (altura * altura);
    tdIMC.textContent = imc;

    pesoEsValido = true;
    alturaEsValida = true;

    if(peso < 0 || peso > 1000)
    {
        tdIMC.textContent = ("Peso incorrecto");
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto");
    }
    if(altura < 0 || altura > 4)
    {
        tdIMC.textContent = ("Altura incorrecta");
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto");
    }
    if(pesoEsValido && alturaEsValida)
    {
        console.log("Paciente " + nombre);
        console.log(peso);
        console.log(altura);
        var imc = peso / (altura * altura);
        console.log(imc);
        tdIMC.textContent = imc.toFixed(1);
    }
}

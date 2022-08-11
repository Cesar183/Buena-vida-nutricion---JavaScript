var pacientes = document.querySelectorAll(".paciente");  
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

    pesoEsValido = validarPeso(peso);
    alturaEsValida = validarAltura(altura);

    if(pesoEsValido)
    {
        tdIMC.textContent = ("Peso incorrecto");
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto");
    }
    if(alturaEsValida)
    {
        tdIMC.textContent = ("Altura incorrecta");
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto");
    }
    if(pesoEsValido && alturaEsValida)
    {
        tdIMC.textContent = CalcularIMC(peso,altura);
    }
}
function CalcularIMC(peso,altura)
{
    var imc = peso / (altura * altura);
    return imc.toFixed(1)
}
function validarPeso(peso)
{
    if(peso < 0 || peso > 1000)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function validarAltura(altura)
{
    if(altura < 0 || altura > 4)
    {
        return true;
    }
    else
    {
        return false;
    }
}


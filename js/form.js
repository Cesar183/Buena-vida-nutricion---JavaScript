var botonAdicionar = document.querySelector("#adicionar-paciente");
botonAdicionar.addEventListener("click", Mostrarmensaje);
function Mostrarmensaje()
{
    event.preventDefault();
    var form = document.querySelector("#form-adicionar");
    var tabla = document.querySelector("#tabla-pacientes");
    var paciente = CapturarDatosPaciente(form);
    var pacienteTr = ConstruirTr(paciente);

    tabla.appendChild(pacienteTr);
    form.reset();
}
function CapturarDatosPaciente(form)
{
    var paciente = {
        nombre : form.nombre.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : CalcularIMC(peso,altura)
    }
    return paciente
    
}
function ConstruirTr(paciente)
{
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    var nombreTd = ConstruirTd(paciente.nombre, "info-nombre");
    var pesoTd = ConstruirTd(paciente.peso,"info-peso");
    var alturaTd = ConstruirTd(paciente.altura, "info-altura");
    var gorduraTd = ConstruirTd(paciente.gordura, "info-gordura");
    var imcTd = ConstruirTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr
}
function ConstruirTd(dato, clase)
{
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td
}
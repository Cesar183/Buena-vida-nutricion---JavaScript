var botonAdicionar = document.querySelector("#adicionar-paciente");
botonAdicionar.addEventListener("click", Mostrarmensaje);
function Mostrarmensaje()
{
    event.preventDefault();
    var form = document.querySelector("#form-adicionar");
    var tabla = document.querySelector("#tabla-pacientes");
    var paciente = CapturarDatosPaciente(form);
    var pacienteTr = ConstruirTr(paciente);
    var errores = validarPaciente(paciente);
    var mensajesErrores = document.querySelector("#mensajes-errores");

    if(errores.length > 0)
    {
        exhibirMensajesErrores(errores);
        return
    }
    tabla.appendChild(pacienteTr);
    form.reset();
    mensajesErrores.innerHTML = "";
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
function validarPaciente(paciente)
{
    var errores = [];
    if(!validarPeso(paciente.peso))
    {
        errores.push("El peso es incorrecto");
    }
    if(!validarAltura(paciente.altura))
    {
        errores.push("La altura es incorrecta");
    }
    if(paciente.nombre.length == 0)
    {
        errores.push("El nombre no puede estar vacio.");
    }
    if(paciente.peso.length == 0)
    {
        errores.push("El peso no puede estar vacio.");
    }
    if(paciente.altura.length == 0)
    {
        errores.push("La altura no puede estar vacia.");
    }
    if(paciente.gordura.length == 0)
    {
        errores.push("El porcentaje de gordura no puede estar vacio.");
    }
    return errores
}
function exhibirMensajesErrores(errores)
{
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = "";
    
    errores.forEach(function(error)
    {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}
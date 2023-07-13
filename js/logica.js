function nombre() {

    let nombreUser = prompt("Ingresar un Nombre")

    while (isFinite(nombreUser)) {
        console.log("Reingrese")
        nombreUser = prompt("No se aceptan números. Ingrese un nombre válido")
    }

    console.log("¡Bienvenido, " + nombreUser + "!")
    return nombreUser
}

//aqui va el apellido
function apellido() {

    let apellidoUser = prompt("Ingrese su Apellido")

    while (isFinite(apellidoUser)) {
        console.error("Reingrese su Apellido")
        apellidoUser = prompt("No deben contener numeros y otros caracteres, solo palabras")
    }

    console.log("su apellido ingreso con exito ")

    return apellidoUser
}

let Nombre = nombre()
let Apellido = apellido()

console.log("bienvenido " + Nombre + " " + Apellido);

function pedirCargo() {
    let cargo = prompt(Nombre + ", ¿cuál es tu cargo?");

    while (!cargo.match(/[0-9]/)) {
        console.error("Error! Ingresa tu cargo nuevamente.");
        cargo = prompt(Nombre + ", ¿cuál es tu cargo?");
    }

    console.log("Cargo cargado correctamente");
    return cargo;
}

let Cargo = pedirCargo();
console.log(Nombre + " " + Apellido + " tu cargo Nº: " + Cargo + " fue cargado exitosamente");

// solicitar las licencias disponibles 

let ultimaLic = prompt("¿Cuándo fue el ultimo año que te tomaste tus vacaciones?.Indícala en años.");

function calcularVacaciones(ultimaLic) {
    let añosDesdeUltimaLic = 2023 - ultimaLic ;
    switch (añosDesdeUltimaLic - 1) {
        case 4:
            return "dispones desde el año 2019 y tienes derecho a 12 días de vacaciones.";
        case 3:
            return "dispones desde el año 2020 y tienes derecho a 14 días de vacaciones.";
        case 2:
            return "dispones desde el año 2021 y tienes derecho a 16 días de vacaciones.";
        case 1:
            return "dispones desde el año 2022 y tienes derecho a 18 días de vacaciones.";
        case 0:
            return "dispones desde el año 2023 y tienes derecho a 20 días de vacaciones.";
        default:
            while (ultimaLic <= 2017) {
            ultimaLic = prompt("¿Cuándo fue el ultimo año que te tomaste tus vacaciones?.Indícala en años.");
            }
    }
}

let vacaciones = calcularVacaciones(ultimaLic);
console.log(vacaciones);
alert("Conclusión: " + Nombre + " " + Apellido + ", Cargo Nº: " + Cargo + ". Indicaste que te tomaste la licencia del año: " + ultimaLic + " y " + vacaciones + "!!!");

let confirmacion = prompt("¿Desea tomar la licencia? Ingrese Si o No");
let mesElegido;

// Repetimos hasta que se ingresa "si" o "no"
while (confirmacion.toLowerCase() !== "si" && confirmacion.toLowerCase() !== "no") {
    alert("Opción inválida. Por favor, ingrese Si o No.");
    confirmacion = prompt("¿Desea tomar la licencia? Ingrese Si o No");
}
function finDelProceso() {
    if (confirmacion.toLowerCase() === "no"){
       alert(Nombre + " " + Apellido + " haz indicado que no deseas tomarte tu licencia y es por ello que se acumularan en tus licencias anteriores a partir del  " + ultimaLic + " . Damos por finalizada esta consulta.");
    }
}
function resultado() {
    if (mesElegido) {
        alert(Nombre + " " + Apellido + " haz indicado que te tomaras las licencias disponibles desde el mes de " + mesElegido + " del año " + ultimaLic + " . Damos por Finalizada esta Consulta")
        return;
    }
}
function elegirMes() {
    if (confirmacion.toLowerCase() === "si") {
        mesElegido = prompt("Elija un mes");
        if (
            mesElegido === "enero" ||
            mesElegido === "febrero" ||
            mesElegido === "marzo" ||
            mesElegido === "abril" ||
            mesElegido === "mayo" ||
            mesElegido === "junio" ||
            mesElegido === "julio" ||
            mesElegido === "agosto" ||
            mesElegido === "septiembre" ||
            mesElegido === "octubre" ||
            mesElegido === "noviembre" ||
            mesElegido === "diciembre"
        ) {
            console.log("haz elejido " + mesElegido)
            resultado();
            return mesElegido;
        } else {
            return elegirMes();
        }
    }
}

mesElegido = elegirMes(confirmacion==="si");


finDelProceso(confirmacion==="no");


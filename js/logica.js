// function imprimirFormulario () {
//     let nombre = document.getElementById("nombre-y-apellido").value;
//     let edad = document.getElementById("edad").value;
//     let email = document.getElementById("correo").value;
//     let contraseña = document.getElementById("contraseña1").value;
//     let repetirContraseña = document.getElementById("contraseña2").value;
//     let servicio = document.getElementById("servicio").value;
//     console.log("Hola " + nombre + " tienes : " + edad + " años." + " Tu Email es " + email  + " y tu contraseña es " + contraseña + " con el medidor numero: " + servicio);
// }
// function contraseñas() {
//     let contraseña = document.getElementById("contraseña1").value;
//     let repetirContraseña = document.getElementById("contraseña2").value;

//     if (contraseña !== repetirContraseña) {
//         console.log("No Coinciden las contraseñas");
//     } else {
//         console.log("Puedes avanzar");
//     }
// }
//     function mostrarFormulario (){

//     }
//  imprimirFormulario();
//  contraseñas();


// AQUI HARE UNOS CALCULOS DE LICENCIAS

// esta funcion es para iniciar agregando los datos principales.Aqui va el nombre

// function nombre() {

//     let nombreUser = prompt("Ingresar un Nombre")

//     while (isFinite(nombreUser)) {
//         console.log("Reingrese")
//         nombreUser = prompt("No se aceptan números. Ingrese un nombre válido")
//     }

//     console.log("¡Bienvenido, " + nombreUser + "!")
//     return nombreUser
// }

// //aqui va el apellido
// function apellido() {

//     let apellidoUser = prompt("Ingrese su Apellido")

//     while (isFinite(apellidoUser)) {
//         console.error("Reingrese su Apellido")
//         apellidoUser = prompt("No deben contener numeros y otros caracteres, solo palabras")
//     }

//     console.log("su apellido ingreso con exito ")

//     return apellidoUser
// }

// let Nombre = nombre()
// let Apellido = apellido()

// console.log("bienvenido " + Nombre + " " + Apellido);

// function pedirCargo() {
//     let cargo = prompt(Nombre + ", ¿cuál es tu cargo?");

//     while (!cargo.match(/[0-9]/)) {
//         console.error("Error! Ingresa tu cargo nuevamente.");
//         cargo = prompt(Nombre + ", ¿cuál es tu cargo?");
//     }

//     console.log("Cargo cargado correctamente");
//     return cargo;
// }

// let Cargo = pedirCargo();
// console.log(Nombre + " " + Apellido + " tu cargo Nº: " + Cargo + " fue cargado exitosamente");

// // solicitar las licencias disponibles 

// let ultimaLic = prompt("¿Cuándo fue el ultimo año que te tomaste tus vacaciones?.Indícala en años.");

// function calcularVacaciones(ultimaLic) {
//     let añosDesdeUltimaLic = 2023 - ultimaLic ;
//     switch (añosDesdeUltimaLic - 1) {
//         case 4:
//             return "dispones desde el año 2019 y tienes derecho a 12 días de vacaciones.";
//         case 3:
//             return "dispones desde el año 2020 y tienes derecho a 14 días de vacaciones.";
//         case 2:
//             return "dispones desde el año 2021 y tienes derecho a 16 días de vacaciones.";
//         case 1:
//             return "dispones desde el año 2022 y tienes derecho a 18 días de vacaciones.";
//         case 0:
//             return "dispones desde el año 2023 y tienes derecho a 20 días de vacaciones.";
//         default:
//             return "No se pudo determinar la cantidad de días de vacaciones. ten en cuenta que las licencias disponibles son a partir de 2018 las anteriores estan vencidas";
//     }
// }
// let vacaciones = calcularVacaciones(ultimaLic);
// console.log(vacaciones);
// alert("Conclusion " + Nombre + " " + Apellido + " Cargo Nº: " + Cargo + " Indicaste que te tomaste la licencia del año: " + ultimaLic + " y " + vacaciones + "!!!");


// let confirmacion = prompt("¿Desea tomar la licencia? Ingrese Si o No");
// let mesElejido;
// // Repetimos hasta que se ingresa "si" o "no"
// while (confirmacion !== "si" && confirmacion !== "no") 
// {
//     alert("Opción inválida. Por favor, ingrese Si o No.");
//     confirmacion = prompt("¿Desea tomar la licencia? Ingrese Si o No");
// }
// function terminar(confirmacion) {
//     if(confirmacion === "no"){
//         console.log("Fin del proceso");
//     }
// }
// function elegirMes(confirmacion){
//     if (confirmacion == "si") {
//         mesElejido = prompt("elejir mes")
//         if (mesElejido === "enero" || mesElejido === "febrero" || mesElejido === "marzo" || mesElejido === "abril" ||
//         mesElejido === "mayo" || mesElejido === "junio" || mesElejido === "julio" || mesElejido === "agosto"   ||
//         mesElejido === "septiembre" || mesElejido === "octubre" || mesElejido === "noviembre" || mesElejido === "diciembre")  {  
//         switch (mesElejido) {
//             case "enero" :    
//             return "enero"
//             case "febrero" :
//                 return "febrero"
//             case "marzo" :   
//             return "marzo";
//             case "abril" :
//                 return "abril";
//             case "mayo" :
//                 return "mayo";
//             case "junio" : 
//             return "junio";
//             case "julio" :
//                 return "julio";
//             case "agosto" :
//                 return "agosto";
//             case "septiembre" :
//                 return "septiembre";
//             case "octubre" :
//                 return "octubre";
//             case "noviembre" :
//                 return "noviembre";
//             case "diciembre" :
//                 return "diciembre";
//             default: prompt (elegirMes())
//             return;}
//         }
//     }
// }    
// mesElejido = elegirMes();
// terminar();
// console.log("tu confirmacion es " + confirmacion + " para hacer uso de tus licencias, " + vacaciones);


// console.log("perfecto, elejiste el mes de " + mesElejido);
// console.log("vas a salir de licencia el mes de "+ mesElejido + vacaciones)

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

// let letra = "c" // Le asignamos con un string que va con comillas
// let letras = "d"

// letra = "e"
// letra = "f"
// let g = "Hola"
// letra = 5 // 5 es un Number y no lleva comillas - Eso lo diferencia de un String como por ejemplo "5"

// const numerito = '0'

// const numerito5 = 0



//console.log(letra)
//console.log(numerito)


// let nombreUsuario = prompt("Ingrese su nombre")

// console.log(nombreUsuario)


// let nombreUsuario1 = "Su nombre es Pirulo"

// console.log(nombreUsuario1)

// alert("Hola Gente " + nombreUsuario)

// let nombreUsuario = prompt("Ingrese su nombre")
// alert("Su nombre es: " + nombreUsuario)

// let usuario = prompt("Ingrese su nombre y apellido")

// alert("hola! bienvenido " + usuario)
// let añoActual = new Date().getFullYear();

// let añoNacimiento = prompt("¿En que año naciste?");

// let edad = añoActual - añoNacimiento;
// alert("Tienes " + edad + " años.");

// let user = prompt("¿quien eres?");
// console.log("Hola ," + user);

// let año_actual = new Date().getFullYear();
// let nacimiento = prompt("indica tu año de nacimiento (sin puntos)")
// let edad_actual = año_actual - nacimiento ;
// console.log("tienes " + edad_actual + " años.");
// let correo_electronico = prompt ("ahora " + user + " indica tu correo electronico");
// console.log ("muy bien " + user + " su registro finalizo con el correo " + correo_electronico + ".")
// let nombre = prompt("Bienvenido, ingrese su nombre para comenzar su registro")
// let apellido = prompt("Bienvenido " + nombre + ", ingrese su apellido")
// let correoElectronico = prompt("Muy bien " + nombre + ", ingrese su correo electronico para finalizar su registro")
// alert("Su registro se ha realizado con exito, en instantes recibira la confirmacion en su correo electronico:" + correoElectronico)


// CLASE 02

// if (true){
//     console.log("Es verdadero") // Este codigo si se va a ejecutar
// }

// if (false){
//     console.log("Esto es Falso") // Este codigo no se va a ejecutar
// }

// const numero = 0 // Un solo = Significa Asignacion
// console.log(numero)

// if ( numero != 0 ){ // Dos == Significa Igual
//     console.log("Es verdadero, a Vale: " + numero)
// } else {
//     console.log("Es Falso, numero Vale = " + numero)
// }

// let nombreUsuario = prompt("Ingrese su Nombre")

// if ( nombreUsuario != "" ) {
//     alert("Bienvenido " + nombreUsuario)
// } else {
//     alert("No ha ingresado nada.!")
// }

// const number = prompt("Ingrese un Numero")

// if ( number == 0 ){
//     console.log("Usted ingreso el Numero " + number)
// } else if ( number < 0 ) {
//     console.log("Usted ingreso un Numero negativo")
// } else if ( number > 0 ) {
//     console.log("Usted ingreso un Numero positivo")
// } else {
//     console.log("Usted no ingreso un Numero Valido")
// }

// Ejercicio 1:
// Escribe un script que solicite al usuario un número e imprima en la consola si ese número es positivo, negativo o cero.
// Ejercicio 2:
// Escribe un script que solicite al usuario dos números e imprima en la consola el número mayor de los dos.
// Ejercicio 3:
// Escribe un script que solicite al usuario su edad e imprima en la consola si es mayor de edad o no (considerando 18 años como la mayoría de edad).
// Ejercicio 4:
// Escribe un script que solicite al usuario un número e imprima en la consola si ese número es par o impar.
// Ejercicio 5:
// Escribe un script que solicite al usuario tres números e imprima en la consola el número más grande de los tres.


// Ejercicio 1:

// const number = prompt("Ingrese un numero")

// if (number == 0) {
//     console.log("Ustede eligió el número " + number)
// } else if (number > 0){
//     console.log ("Usted eligió un número positivo")
// } else {
//     console.log ("Usted eligió un número negativo")
// }

// if (number === null) {
//     console.log("Usted canceló la operación");
// } else if (number === "") {
//     console.log("Usted no ingresó ningún número");
// } else if (isNaN(number)) {
//     console.log("Usted ingresó un valor no numérico");
// } else if (number == 0) {
//     console.log("Usted ingresó el número 0");
// } else if (number < 0) {
//     console.log("Usted ingresó un número negativo");
// } else if (number > 0) {
//     console.log("Usted ingresó un número positivo");
// } else {
//     console.log("Usted ingresó un número inválido");
// }



// const number1 = 0
// const number2 = 2

// if ( number1 == 0 && number2 == 1 ) { // las 2 && Significan y
//     console.log("Se cumplieron Ambas condiciones.!")
// } else {
//     console.log("La condicion es Falsa.!")
// }

// if ( number1 == 0 || number2 == 1 ) { // Las || Significan o
//     console.log("Se cumplio una o Ambas condiciones.!")
// } else {
//     console.log("La condicion es Falsa.!")
// }

// if ( !(number1 == 0) || number2 == 1 ) { // Las || Significan o
//     console.log("Se cumplio una o Ambas condiciones.!")
// } else {
//     console.log("La condicion es Falsa.!")
// }


// let nombre = prompt("Ingrese un Nombre")
// if ((nombre != "") && (nombre == "ANA") || (nombre == "ana")){
//     alert("El nombre ingresado es Ana")
// } else {
//     alert("Error al ingresar el Nombre")
// }

// let numero = parseInt("5")
// console.log(numero)

// let number = parseInt(prompt("Ingrese un numero"))
// if (isNaN(number)){
//     console.log(number + " Esto no es un numero")
// } else {
//     console.log(number)
// }


// CLASE 03

// for ( let i = 10; i >= 0; i-- ) {
//     console.log(i)
// }

// let nombre = "Alejandro Di Stefano" // Variable Global

// // console.log(nombre.length)

// for ( let i = 0; i < nombre.length; i++ ) { // i es una Variable Local
//     console.log(i)
// }

// let i = "dfdfgdfg"
// console.log(i)


// let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// // En cada repetición, calculamos el número ingresado x el número de repetición (i)
// for (let i = 0; i <= 10; i+=2) {
//     let resultado = ingresarNumero * i ;
//     console.log(ingresarNumero +" x "+ i +" = "+ resultado);
// }


// for (let i = 1; i <= 5; i++) {
//     // En cada repetición solicitamos un nombre.
//     let ingresarNombre = prompt("Ingresar nombre");
//     // Informamos el turno asignado usando el número de repetición (i).
//     console.log(" Turno  N° " + i + " Nombre: " + ingresarNombre);
// }

// for (let i = 1; i <= 10; i++) {
//     //Si la variable i es igual 5 interrumpo el for.
//     if(i == 5){
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     //Si la variable i es igual 5 interrumpo el for.
//     if(i == 5){
//         continue;
//     }
//     console.log(i);
// }

// let repetir = false

// while(repetir){
//     console.log("Imprimo hasta el Infinito.!!!!!")
// }

// let entrada = prompt("Ingresar un dato");
// //Repetimos con While hasta que el usuario ingresa "ESC"
// while (entrada != "ESC") {
//     console.log("El usuario ingresó " + entrada);
//     //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
//     entrada = prompt("Ingresar otro dato");
// }


// let numero

// do {
//     numero = parseInt(prompt("Ingresar un Numero"))
// }
// while(isNaN(numero))
// console.log("El numero ingresado es: " + numero)

// let repetir = false;
// do {
//     console.log("¡Solo una vez!");
// } while (repetir)

// let numero = 0;
// do {
//     //Repetimos con do...while mientras el usuario ingresa un n°
//     numero = prompt("Ingresar Número");
//     console.log(numero);
//     //Si el parseo no resulta un número se interrumpe el bucle.
// } while (parseInt(numero));

// let entrada = prompt("Ingresar un nombre");
// //Repetimos hasta que se ingresa "ESC"
// while (entrada != "ESC") {
//     switch (entrada) {
//         case "":
//             alert("HOLA " + entrada);
//             break;
//         case "JUAN":
//             alert("HOLA JUAN");
//             break;
//         default:
//             alert("¿QUIÉN SOS?")
//             break;
//     }
//     entrada = prompt("Ingresar un nombre");
// }

//  CLASE 04


// function consologueo() {
//     console.log("Hola Coders.!!!")
// }

// Las Funciones declaradas de esta forma tienen un Scope Global

//consologueo()

// function solicitarNombreDeUsuario() {
//     let nombreDeUsuario = prompt("Ingrese su Nombre de Usuario")
//     console.log("El nombre del Usuario es: " + nombreDeUsuario)
// }


// console.log(nombreDeUsuario) // nombreDeUsuario Tiene un Scope Local
//solicitarNombreDeUsuario()

// for (i = 0; i <= 5; i++) {
//     solicitarNombreDeUsuario()
// }

// const num1 = 5
// const num2 = 6
// const num3 = 12

// const resultado = num1 + num2 + num3

// console.log(resultado)

// function funcionConParametros( parametro1, parametro2, parametro3 ){
//     console.log( parametro1 + " " + parametro2  + " " + parametro3)
// }

// funcionConParametros("Hola", false , 5 )

// let resultado  // Tiene Scope Global
//console.log(resultado) // resultado No tiene valor asignado

// function suma( num1 , num2 ){
//     resultado = num1 + num2
// }
// //console.log(resultado) // resultado No tiene valor asignado, porque para que funcione hay que llamar 1ro a la funcion suma()


// suma(4 , 8) // Llamo a la funcion y le asigno valores a cada uno de sus parametros

// console.log(resultado) // Imprime el resultado de suma()


// function sumar( num1 , num2 ){
//     return num1 + num2 // Retorname el resultado de esta Suma
// }

// let resultado = sumar( 10 , 25 )

// console.log(resultado)
// ------------------------------------------------------------

// let añoActual = 2023
// let lic = prompt("introduzca el año de su ultima licencia, sin puntos");
// function licencias(añoActual) {
//     switch (lic) {
//         case "2018":
//             return añoActual <= lic;
//             break;
//         case "2019":
//             return añoActual <= lic;
//             break;
//         case "2020":
//             return añoActual <= lic;
//             break;
//         case "2021":
//             return añoActual <= lic;
//             break;
//         case "2022":
//             return añoActual <= lic;
//         case "2023": añoActual == lic;
//         default:
//             return "No tienes";
//             break;
//     }
// }

// console.log(licencias(añoActual,lic))

// const suma = function ( a, b ) { return a + b } // Funcion Anonima > Se asigna a una Variable Globla o Local
// const resta = function ( a , b ) { return a - b }
// console.log(suma(22,35))
// console.log(resta(22,35))


// Funcion Flecha > Nace a partir de ES6

// const suma = (a ,b) => { return a + b }
// console.log(suma(22,35))
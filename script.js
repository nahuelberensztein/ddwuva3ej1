let nombre = prompt("Ingrese su nombre:");
let edad = prompt("Ingrese su edad:");
let fechaDeNacimiento = prompt("Ingrese su año de nacimiento:");

fechaDeNacimiento = (2024 - fechaDeNacimiento) * 365;

alert("Nombre: " + nombre + "\nEdad: " + edad + "\nFecha de Nacimiento: " + fechaDeNacimiento + "\nDías vividos aproximados: " + fechaDeNacimiento);
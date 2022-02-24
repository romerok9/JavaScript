let nombre = prompt("Cual es tu Nombre");
let apellido = prompt("Cual es tu Apellido");
const SPACE = ' ';

let fullName = nombre + SPACE + apellido;
let fnacimiento = parseInt(prompt("Hola " + fullName + " ¿En que año naciste?"));
let fecha = parseInt(prompt("Hola " + fullName + ", Ahora se que naciste en el año " + fnacimiento + ", Me podrias decir en que año estamos"));
let edad = fecha - fnacimiento;


if (edad < 0 || edad == "" || edad > 2021 || isNaN(edad)) {
    console.log("Corrija los datos ingresados, no debe dejar campos vacios o el año de nacimiento no puede ser superior al año actual");
} else {
    console.log("Bienvenido al primer curso de Js " + fullName + ", Naciste hace aproximadamente " + edad + " años!");

    if (edad < 12) {
        console.log("Te encuentras en la etapa de la niñez, tienes " + edad + " años");
    } else {

        if (edad >= 12 && edad < 18) {
            console.log("Te encuentras en la etapa de la adolescencia, tienes " + edad + " años");
        } else {

            if (edad >= 18 && edad < 50) {
                console.log("Eres un adulto joven, tienes " + edad + " años");
            } else {

                if (edad >= 50 && edad < 100) {
                    console.log("Eres un adulto mayor, tienes " + edad + " años");

                } else {
                    console.log("Es posible que seas una persona muy mayor o ya no estas en este mundo porque tienes " + edad + " años");

                }
            }
        }
    }
}
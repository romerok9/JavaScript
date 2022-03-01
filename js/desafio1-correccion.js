let nombre = prompt("Hola, Cual es tu nombre y apellido");
let fnacimiento = parseInt(prompt(`${nombre}, ¿En que año naciste?`));
let fecha = new Date();
let year = fecha.getFullYear();
let edad = year - fnacimiento;

// Con el primer IF valido los datos
if (edad <= 0 || edad == "" || edad > 2021 || isNaN(edad)) {
    console.log("Corrija los datos ingresados, no debe dejar campos vacios o el año de nacimiento no puede ser superior al año actual");
    // Con el Else ejectudo las demas condiciones
} else {
    if (edad < 12) {
        console.log(`Felicitaciones ${nombre} Te encuentras en la etapa de la niñez, tienes ${edad} años`);
    }
    if (edad >= 12 && edad < 18) {
        console.log(`Felicitaciones ${nombre} Te encuentras en la etapa de la adolescencia, tienes ${edad} años`);
    }

    if (edad >= 18 && edad < 50) {
        console.log(`Felicitaciones ${nombre} Eres un adulto joven, tienes ${edad} años`);
    }

    if (edad >= 50 && edad < 100) {
        console.log(`Felicitaciones ${nombre} Eres un adulto mayor, tienes ${edad} años`);
    }
    if (edad >= 100) {
        console.log(`Increible ${nombre} Es Posible que estes Rompiendo el libro de Records Guinnes porque tienes ${edad} años`);
    }
}
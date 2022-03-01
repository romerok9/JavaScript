alert("Buenas Tardes \nEn ConsoleLog se mostrarar los cursos disponibles a seleccionar");

console.log("1 - CLOUD COMPUTING OPEN STACK ");
console.log("2 - INTRODUCCIÓN A LA FILOSOFIA DEVOPS ");
console.log("3 - MICROSOFT AZURE FUNDAMENTALS ");
console.log("4 - AWS CLOUD PRACTITIONER ESSENTIALS");

let curso = parseInt(prompt("Ingrese el numero del curso que desea comprar"));

if (curso < 1 || curso > 4 || isNaN(curso))
    alert("Seleccione una opcion correcta");
else {
    if (curso == 1)
        console.log("Bienvenido al curso CLOUD COMPUTING OPEN STACK");
    else
        console.log("Otro curso");
}
// Ejercicio 1: Operaciones básicas con dos números
const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));

if (isNaN(num1) || isNaN(num2)) {
  console.log("Ingrese números válidos.");
} else {
  const suma = num1 + num2;
  const resta = num1 - num2;
  const multiplicacion = num1 * num2;
  const division = num2 !== 0 ? num1 / num2 : "No se puede dividir por 0";

  console.log(`Suma: ${suma}`);
  console.log(`Resta: ${resta}`);
  console.log(`Multiplicación: ${multiplicacion}`);
  console.log(`División: ${division}`);
}

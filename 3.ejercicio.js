// Ejercicio 3: Suma de N números
const n = parseInt(prompt("Ingrese la cantidad de números a sumar:"));
let sumaTotal = 0;

if (isNaN(n) || n <= 0) {
  console.log("Ingrese un número válido y mayor a cero.");
} else {
  for (let i = 0; i < n; i++) {
    const numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
    if (!isNaN(numero)) {
      sumaTotal += numero;
    } else {
      console.log(`Ingrese un valor numérico válido para el número ${i + 1}.`);
      i--; // Decrementar el contador para repetir la iteración
    }
  }
  console.log(`La suma total de los ${n} números ingresados es: ${sumaTotal}`);
}

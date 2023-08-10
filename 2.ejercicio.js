// Ejercicio 2: Calcular sueldo de un trabajador
const horasTrabajadas = parseFloat(prompt("Ingrese cantidad de horas trabajadas:"));
const valorHora = parseFloat(prompt("Ingrese valor de la hora en pesos:"));

if (isNaN(horasTrabajadas) || isNaN(valorHora)) {
  console.log("Ingrese valores numéricos válidos.");
} else {
  const sueldo = horasTrabajadas * valorHora;
  console.log(`El sueldo a pagar es: ${sueldo} pesos.`);
}

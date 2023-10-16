// Crearemos Calculadora de edad
// A continuación, crea un archivo JavaScript (por ejemplo, calcularDias.js) y coloca el siguiente código en él:

const moment = require("moment");

// Obtener la fecha actual
const fechaActual = moment();

// Especifica tu fecha de nacimiento (cambia esto a tu fecha real)
const fechaNacimiento = moment("1983-08-19"); // Cambia esta fecha a tu fecha de nacimiento

// Validar si la fecha de nacimiento es válida
if (fechaNacimiento.isValid()) {
  // Calcular la diferencia de días entre la fecha actual y la fecha de nacimiento
  const diasTranscurridos = fechaActual.diff(fechaNacimiento, "days");

  console.log(
    `Han pasado ${diasTranscurridos} días desde tu nacimiento hasta hoy.`
  );
} else {
  console.log("La fecha de nacimiento no es válida.");
}

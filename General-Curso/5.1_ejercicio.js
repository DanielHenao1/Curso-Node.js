// // Crear un objeto para almacenar la cuenta de cada número
// const contadorNumeros = {};

// // Generar 10,000 números aleatorios en el rango de 1 a 20
// for (let i = 0; i < 10000; i++) {
//   const numeroAleatorio = Math.floor(Math.random() * 20) + 1;

//   // Verificar si el número ya está en el objeto contadorNumeros
//   if (contadorNumeros[numeroAleatorio]) {
//     contadorNumeros[numeroAleatorio]++;
//   } else {
//     contadorNumeros[numeroAleatorio] = 1;
//   }
// }

// // Mostrar los resultados en la consola
// for (let numero in contadorNumeros) {
//   console.log(`Número ${numero}: ${contadorNumeros[numero]} veces`);
// }



// Función para generar números aleatorios en un rango dado
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Objeto para contar la frecuencia de los números generados
  const conteoNumeros = {};
  
  // Generar 10,000 números aleatorios en un rango de 1 a 20
  const cantidadNumeros = 10000;
  const rangoMin = 1;
  const rangoMax = 20;
  
  for (let i = 0; i < cantidadNumeros; i++) {
    const numeroAleatorio = generarNumeroAleatorio(rangoMin, rangoMax);
  
    // Incrementar el conteo del número en el objeto
    if (conteoNumeros[numeroAleatorio]) {
      conteoNumeros[numeroAleatorio]++;
    } else {
      conteoNumeros[numeroAleatorio] = 1;
    }
  }
  
  // Mostrar el conteo por consola
  console.log("Resultados del conteo de números aleatorios:");
  for (const numero in conteoNumeros) {
    if (conteoNumeros.hasOwnProperty(numero)) {
      console.log(`Número ${numero}: ${conteoNumeros[numero]} veces.`);
    }
  }
  
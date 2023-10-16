// Crear un objeto para almacenar la cuenta de cada número
const contadorNumeros = {};

// Generar 10,000 números aleatorios en el rango de 1 a 20
for (let i = 0; i < 10000; i++) {
  const numeroAleatorio = Math.floor(Math.random() * 20) + 1;

  // Verificar si el número ya está en el objeto contadorNumeros
  if (contadorNumeros[numeroAleatorio]) {
    contadorNumeros[numeroAleatorio]++;
  } else {
    contadorNumeros[numeroAleatorio] = 1;
  }
}

// Mostrar los resultados en la consola
for (let numero in contadorNumeros) {
  console.log(`Número ${numero}: ${contadorNumeros[numero]} veces`);
}

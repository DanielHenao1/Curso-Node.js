// Promesa o Función genérica para operaciones
const operacion = (numero1, numero2, operador) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numero1 === 0 || numero2 === 0) {
        reject("Operación innecesaria");
      } else {
        const resultado = operador(numero1, numero2);
        if (resultado < 0) {
          reject("La calculadora solo debe devolver valores positivos");
        } else {
          resolve(`El resultado de la operación es: ${resultado}`);
        }
      }
    }, 1000);
  });
};

// Funciones específicas de cada operación
const suma = (numero1, numero2) => operacion(numero1, numero2, (a, b) => a + b);
const resta = (numero1, numero2) => operacion(numero1, numero2, (a, b) => a - b);
const multiplicacion = (numero1, numero2) => operacion(numero1, numero2, (a, b) => a * b);
const division = (numero1, numero2) => operacion(numero1, numero2, (a, b) => a / b);

// Funcion Asincronica para calculos
const calcular = async () => {
  try {
    console.log("Iniciando proceso.......");

    const resultados = await Promise.all([
      suma(10, 10),
      resta(300, 100),
      multiplicacion(50, 5),
      division(100, 2),
    ]);
    resultados.forEach((element) => {
      console.log(element);
    });
  } catch (error) {
    console.log("Error", error);
  }
};

calcular();

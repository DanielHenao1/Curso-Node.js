// Promesa o Funcion generica para operaciones

const operacion = (numero1, numero2, operador) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numero1 && numero2 === 0) {
        reject("Operacion innecesaria");
      } else {
        const resultado = operador(numero1, numero2);
        if (resultado < 0) {
          reject("La calculadora solo debe devolver valores positivos");
        } else {
          resolve(`El resultado de la operacion es: ${resultado}`);
        }
      }
    }, 1000);
  });
};

// Funciones especificas de cada operacion

const suma = (numero1, numero2) => {
  return operacion(numero1, numero2, (a, b) => a + b);
};
const resta = (numero1, numero2) => {
  return operacion(numero1, numero2, (a, b) => a - b);
};
const multiplicacion = (numero1, numero2) => {
  return operacion(numero1, numero2, (a, b) => a * b);
};
const division = (numero1, numero2) => {
  return operacion(numero1, numero2, (a, b) => a / b);
};
// De la siguiente forma eliminamos el return y funcionaria igual

// const suma = (numero1, numero2) => operacion(numero1, numero2, (a, b) => a + b);
// const resta = (numero1, numero2) => operacion(numero1, numero2, (a, b) => a - b);
// const multiplicacion = (numero1, numero2) => operacion(numero1, numero2, (a, b) => a * b);
// const division = (numero1, numero2) => operacion(numero1, numero2, (a, b) => a / b);

// Funcion asincronica para calculos
const calcular = async () => {
  try {
    console.log("Iniciando proceso.......");

    const resultadoSuma1 = await suma(10, 10);
    console.log(resultadoSuma1);

    const resultadoResta1 = await resta(300, 100);
    console.log(resultadoResta1);

    const resultadoMultiplicacion1 = await multiplicacion(50, 5);
    console.log(resultadoMultiplicacion1);

    const resultadoDivision = await division(100, 2);
    console.log(resultadoDivision);
  } catch (error) {
    console.log("Error", error);
  }
};

calcular();

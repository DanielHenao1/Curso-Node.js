// ******************************** SUMA ******************************* //

//Creamos una promesa suma()
const suma = (numero1, numero2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numero1 && numero2 === 0) {
        reject("“Operación innecesaria”.");
      } else {
        const resultado1 = numero1 + numero2;
        if (resultado1 < 0) {
          reject("“La calculadora sólo debe devolver valores positivos");
        } else {
          resolve(`El resultado de la suma es: ${resultado1}`);
        }
      }
    }, 1000);
  });
};

// Creamos una funcion para ejecutar nuestra promesa suma()
const sumaAsincronica = async () => {
  try {
    const resultadoSuma1 = await suma(10, 10);
    console.log(resultadoSuma1);
    // // cuando ocurra la primera excepción el codigo se detiene
    // // Error de numero cero
    // const resultadoSuma2 = await suma(10, 0);
    // console.log(resultadoSuma2);
    // // Error de resultado negativo
    // const resultadoSuma3 = await suma(10, -11);
    // console.log(resultadoSuma3);
  } catch (error) {
    console.log(error);
  }
};

sumaAsincronica();

// ******************************** RESTA ******************************* //

//Creamos una promesa resta()
const resta = (minuendo, sustraendo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (minuendo && sustraendo === 0) {
        reject("“Operación inválida”.");
      } else {
        const resultado2 = minuendo - sustraendo;
        if (resultado2 < 0) {
          reject("La calculadora sólo debe devolver valores positivos");
        } else {
          resolve(`El resultado de la resta es: ${resultado2}`);
        }
      }
    }, 2000);
  });
};

// Creamos una funcion para ejecutar nuestra promesa resta()
const restaAsincronica = async () => {
  try {
    const resultadoResta1 = await resta(300, 100);
    console.log(resultadoResta1);
    // const resultadoResta2 = await resta(-1000, 100);
    // console.log(resultadoResta2);
    // const resultadoResta3 = await resta(100,0);
    // console.log(resultadoResta3);
  } catch (error) {
    console.log(error);
  }
};
restaAsincronica();

// ******************************** MULTIPLICACION ******************************* //

//Creamos una promesa multiplicacion()
const multiplicacion = (multiplicando, multiplicador) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (multiplicando && multiplicador === 0) {
        reject("“Operación inválida”.");
      } else {
        const resultado3 = multiplicando * multiplicador;
        if (resultado3 < 0) {
          reject("La calculadora sólo debe devolver valores positivos");
        } else {
          resolve(`El resultado de la multiplicacion es: ${resultado3}`);
        }
      }
    }, 3000);
  });
};

// Creamos una funcion para ejecutar nuestra promesa multiplicacion()
const multiplicacionAsincronica = async () => {
  try {
    const resultadoMultiplicacion1 = await multiplicacion(50, 5);
    console.log(resultadoMultiplicacion1);
    // const resultadoMultiplicacion2 = await multiplicacion(50, -5);
    // console.log(resultadoMultiplicacion2);
    // const resultadoMultiplicacion3 = await multiplicacion(50, 0);
    // console.log(resultadoMultiplicacion3);
  } catch (error) {
    console.log(error);
  }
};
multiplicacionAsincronica();

// ******************************** DIVISION ******************************* //

//Creamos una promesa division()

const division = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (dividendo && divisor === 0) {
        reject("“Operación inválida”.");
      } else {
        const resultado4 = dividendo / divisor;
        if (resultado4 < 0) {
          reject("La calculadora sólo debe devolver valores positivos");
        } else {
          resolve(`El resultado de la division es: ${resultado4}`);
        }
      }
    }, 4000);
  });
};

const divisionAsincronica = async () => {
  try {
    const resultadoDivision1 = await division(100, 2);
    console.log(resultadoDivision1);
    // const resultadoDivision2 = await division(100, -1000);
    // console.log(resultadoDivision2);
    // const resultadoDivision3 = await division(100, 0);
    // console.log(resultadoDivision3);
  } catch (error) {
    console.log(error);
  }
};
divisionAsincronica();


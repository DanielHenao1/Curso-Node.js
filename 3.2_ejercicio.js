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

// Creamos una funcion asincronica y probar todo los resultados

const calcular = async () => {
    try {
      const resultadoSuma1 = await suma(10, 10);
      console.log(resultadoSuma1);
  
      const resultadoResta1 = await resta(300, 100);
      console.log(resultadoResta1);
  
      const resultadoMultiplicacion1 = await multiplicacion(50, 5);
      console.log(resultadoMultiplicacion1);
  
      const resultadoDivision1 = await division(100, 2);
      console.log(resultadoDivision1);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  calcular();
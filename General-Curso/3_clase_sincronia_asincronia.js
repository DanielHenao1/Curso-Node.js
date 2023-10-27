// Si queremos que la funcion se ejecute sobre el mismo arreglo **** NO DE DEBE USAR *****

Array.prototype.miPropiaFuncionMap4 = function (callback) {
  let nuevoArreglo4 = [];
  for (let index = 0; index < this.length; index++) {
    const nuevoValor4 = callback(this[index]);
    nuevoArreglo4.push(nuevoValor4);
  }
  return nuevoArreglo4;
};

let arrayDePrueba4 = [1, 2, 3, 4, 5];
let nuevosValores4 = arrayDePrueba4.miPropiaFuncionMap4((x) => x * 2);
console.log(nuevosValores4);

// ************************* ESTO SERIA UN FUNCION MAP INTERNAMENTE *********************\\

//Array que vamos a recorrer
let arrayDePrueba = [1, 2, 3, 4, 5];

//Creamos una funcion que tenga como parametro un callback
const miFuncionMap = (array, callback) => {
  let nuevoArray = [];
  for (let index = 0; index < array.length; index++) {
    let nuevoValor = callback(array[index]);
    nuevoArray.push(nuevoValor);
  }
  return nuevoArray;
};

// Creamos una variable y le pasamos la funcion al array y el parametro callback
let nuevoArregloPropio = miFuncionMap(arrayDePrueba, (x) => x * 2);
console.log(nuevoArregloPropio);

//********************************* FORMA CORRECTA DE RECORRER UN ARRAY ************************** */
//Ahora vamos a hacer el mismo ejercicio pero con una funcion Mpa()
let arrayDePrueba2 = [1, 2, 3, 4, 5];

//Hacemos lo mismo pero que se hizo arriba pero con map
let nuevoArregloConMap = arrayDePrueba2.map((x) => x * 2);
console.log(nuevoArregloConMap);

// ************************* FIN DE UNA FUNCION MAP INTERNAMENTE *********************\\

/* // *********** Estructura 1 de callback interno *********************** \\
let valoresOriginales1 = [1, 2, 3, 4, 5];
let valoresNuevos = valoresOriginales1.map((x) => x + 1);
console.log(valoresNuevos);

// *********** Estructura 2 de callback con operador ternario *********************** \\
let valoresOriginales2 = [2, 2, 2, 2, 2];
const evaluacionDePares2 = valoresOriginales2.map((valor) => {
    return valor === 2 ? `${valor} es par`:`${valor} no es par`
  });
  console.log(evaluacionDePares2);

// *********** Estructura 3 de callback por fuera *********************** \\
let valoresOriginales3 = [2, 2, 2, 2, 2];

const funcionCallback = (valor) => {
  if (valor % 2 === 0) {
    // si el valor es par devuelva el valor
    return valor;
  } else {
    return "no es par"; // si no devuelva no es par
  }
};
const evaluacionDePares3 = valoresOriginales3.map(funcionCallback);
console.log(evaluacionDePares3);

// *********** Estructura 4 de callback interno *********************** \\
let valoresOriginales4 = [2, 2, 2, 2, 2];
const evaluacionDePares4 = valoresOriginales4.map((valor) => {
  if (valor === 1) {
    return valor;
  } else {
    return "No es Par";
  }
});
console.log(evaluacionDePares4);
 */

//************** JEMPLO DE CALLBACK ANIDADO o CALLBACK HELL ****************************** */
// Tambien se conoce como callback hell, esto no es una buena practica(debemos utilizar (PROMESAS))

const copiarArchivo = (nombreArchivo, callback) => {
  buscarArchivo(nombreArchivo, (error, archivo) => {
    if (error) {
      callback(error);
    } else {
      leerArchivo(nombreArchivo, "utf-8", (error, texto) => {
        if (error) {
          callback(error);
        } else {
          const nombreCopia = nombreArchivo + ".copy";
          escribirArchivo(nombreCopia, texto, (error) => {
            if (error) {
              callback(error);
            } else {
              callback(null);
            }
          });
        }
      });
    }
  });
};

// *********************************** PROMESAS .THEN y .CATCH *********************************** */
//Estado de una promesa
// pending = PENDIENTE
// Fulfilled o Resolved = RESUELTA
// Rejected = RECHAZADA

// Creamos una promesa
const dividir = (dividiendo, divisor) => {
  return new Promise((resolve, reject) => {
    if (divisor != 0) {
      resolve(dividiendo / divisor);
    } else {
      reject("No se puede dividir entre cero");
    }
  });
};

// llamamos a la funcion
dividir(500, 5)
  // Ejecutamos la promesa
  .then((resultado) => {
    console.log(`El resultado de la division es: ${resultado}`);
  })
  .catch((error) => {
    console.log(`a ocurrido un error, ${error}`);
  });

// Resultado = El resultado de la division es: 100

// ********************************* ENCADENAMIENTO DE PROMESAS ******************************* */

// Siempre que coloquemos un return dentro de un .then,  automáticamente el resultado se convierte en otra promesa y puede ser encadenada con otro .then, y así sucesivamente hasta finalizar el proceso.

// Si en alguno de los .then algo llegara a salir mal, sólo se necesita un catch para atraparlo.

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
})
  .then((result) => {
    console.log(result);
    return result * 2; // resultado = 1
  })
  .then((result) => {
    console.log(result);
    return result * 2; // resultado = 2
  })
  .then((result) => {
    console.log(result);
    return result * 2; // resultado = 4
  });

// ********************************* SINCRONISMO vs ASINCRONISMO ******************************* */

// SINCRONISMO = Hace algunos ayeres, cuando se te enseñó a programar, entendiste que las instrucciones se ejecutaban en cascada, es decir, que la tarea 1 debía finalizar para que pudiera comenzar la ejecución de la tarea 2, y la tarea 2 finalizar para ejecutar la tarea 3, etc.

// EJEMPLO SINCRONICO

function funA() {
  console.log(1);
  funB();
  console.log(2);
}
function funB() {
  console.log(3);
  funC();
  console.log(4);
}
function funC() {
  console.log(5);
}
funA();

// Asincronismo = Si lo que buscamos es que las tareas trabajen “en paralelo”, entonces debemos buscar la manera de programar instrucciones asíncronas, lo cual significa que cada una seguirá el hilo de resolución que considere su ritmo.

// Hay que ser cautelosos al utilizarlas, ya que:
// No controlamos cuándo terminará, sólo cuándo comienza.
// Si una tarea depende del resultado de otra, habrá problemas, pues esperará su ejecución en paralelo

// EJEMPLO ASINCRONICO

// const escribirArchivo = require("./escrArch.js");
// console.log("inicio el programa");

// escribirArchivo("hola mundo", () => {
//   console.log("Termine de escribir el archivo");
// });

// console.log("fin del programa");

// *********************************** PROMESAS ASYNC / AWAIT *********************************** */

// Cuando necesitamos más que sólo una operación para poder ejecutar algo asíncrono, no basta con el uso de una promesa solamente, sino que necesitamos un entorno completo para poder ejecutar dichas operaciones .then en este caso sólo nos sirve para encadenar las promesas y obtener sus resultados, pero no nos permite un entorno completo asíncrono para trabajar, por lo cual nos obliga a trabajar TODO dentro de ese scope

// Además, el principal problema de los .then y .catch son su encapsulamiento excesivo, impidiendo o limitando que podamos acceder a los recursos de algunos resultados, variables, etc.

// Async / Await

// Surge entonces en Javascript el soporte para Async - Await, unas palabras reservadas que, trabajando juntas, permiten gestionar un entorno asíncrono, resolviendo las limitantes del .then y .catch

// async se colocará al inicio de una función, indicando que todo el cuerpo de esa función deberá ejecutarse de manera asíncrona

// await servirá (como indica su nombre) para esperar por el resultado de la promesa y extraer su resultado.

// Al ser operaciones que podrían salir bien, PERO TAMBIÉN MAL, es importante encerrar el cuerpo en un bloque try {} catch {}

// EJEMPLO Async / Await

//Creamos una promesa
const dividir2 = (dividiendo, divisor) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (divisor != 0) {
        resolve(`El resultado final es: ${dividiendo / divisor}`);
      } else {
        reject("No se puede hacer divisiones entre cero");
      }
    }, 5000);
  });
};

// Creamos una funcion para ejecutar nuestra promesa
const funcionAsincronica = async () => {
  try {
    let resultado = await dividir2(5000, 10);
    console.log(resultado);
  } catch (error) {
    //El bloque catch es obligatorio despues de un bloque try y funciona igual que el .catch, para atrapar errores
    console.log(`Hubo un error: ${error}`);
  }
};
funcionAsincronica(); // Ya que el entorno de ejecucion asincrono vive dentro de una funcion, hay que ejecutarlo al final.

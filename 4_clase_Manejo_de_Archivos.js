// ******************************** SETTIMEOUT ********************************************* //

// Ejemplo de operacion sincronica

// console.log("Iniciando tarea");
// console.log("Realizando operacion");
// console.log("Continuando operacion");
// console.log("Tarea finalizada");

// Ejemplo de operacion Asincronica con setTimeout() y la llamada de un callback

// // Creamos funcion
// const temporizador = (callback) => {
//   setTimeout(() => {
//     callback();
//   }, 5000);
// };

// let operacion = () => console.log("Realizando operacion");

// console.log("iniciando operacion");
// temporizador(operacion); // metemos la operacion del temporizador
// console.log("Tarea finalizada");

// ******************************** SETINTERVAL ********************************************* //

// Ejemplo de operacion sincronica

// console.log("Iniciando tarea");
// console.log("Realizando operacion");
// for (let contador = 1; contador <= 5; contador++) {
//   console.log(contador);
// }

// console.log("Tarea finalizada");

// Ejemplo de operacion Asincronica con setInterval()

// let contador = () => {
//   let counter = 1;
//   console.log("Antes de finalizar la tarea");
//   let timer = setInterval(() => {
//     console.log("Realizando la operacion");
//     console.log(counter++);
//     if (counter > 5) {
//       clearInterval(timer);
//     }
//   }, 5000);
// };
// console.log("Iniciando tarea");
// contador();
// console.log("Tarea finalizada");

// ******************************** fs en NODE.JS ********************************************* //

// Las principales operaciones con fs sincrono son:
// writeFileSync = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
// readFileSync = Para obtener el contenido de un archivo.
// appendFileSync = Para añadir contenido a un archivo. ¡No se sobreescribe!
// unlinkSync = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido
// existsSync = Corrobora que un archivo exista!

// Ejemplo de fs de manera sincronica

// const fs = require("fs");
// // fs nos permitira acceder a las operaciones de los archivos

// fs.writeFileSync("./ejemplo.txt", "Dios es mi pastor con el nada me faltara,");
// // Prfiemra operacion: para escribir un archivo, el primer argumento/parametro de la ruta donde quedara el archivo y el nombre,
// // El segundo argumento es el contenido del archivo

// if (fs.existsSync) {
//   // readFileSync = Para obtener el contenido de un archivo, importante en el segundo parametro colocar el tipo de codificacion en este caso utf-8
//   let contenido = fs.readFileSync("./ejemplo.txt", "utf-8");
//   console.log(contenido); // El resultado sera lo que contenga el archivo
//   // appendFileSync = Para añadir contenido a un archivo. ¡No se sobreescribe! en caso de no encontrarlo tambnien crea uno nuevo
//   fs, fs.appendFileSync("./ejemplo.txt", " Sin DIOS no somos nada");
//   // Volvemos a llamar al archivo y imprimimos
//   contenido = fs.readFileSync("./ejemplo.txt", "utf-8");
//   console.log(contenido);

//   // Para eliminar todo el archivo utilizamos
//   //   fs.unlinkSync('./ejemplo.txt')
// }

// Ejemplo de fs con callbacks

// Las principales operaciones que podemos hacer con fs con callbacks son:
// writeFile = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe. Al sólo escribir, su callback sólo maneja: (error)=>
// readFile = Para obtener el contenido de un archivo. Como pide información, su callback es de la forma: (error, resultado)=>
// appendFile = Para añadir contenido a un archivo. ¡No se sobreescribe!, al sólo ser escritura, su callback sólo maneja: (error)=>
// unlink = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido. Al no retornar contenido, su callback sólo es (error)=>

// const fs = require("fs");

// fs.writeFile("./ejemploCallback.txt", "Hola desde el callback", (error) => {
//   if (error) return console.log("Error al escribir el archivo");
//   fs.readFile("./ejemploCallback.txt", "utf-8", (error, resultado) => {
//     if (error) return console.log("Error al leeer el archivo");
//     console.log(resultado);
//     fs.appendFile(
//       "./ejemploCallback.txt",
//       ", mas contenido para el callback",
//       (error) => {
//         if (error)
//           return console.log(
//             "Error al actualizar el archivo despues de agragar info"
//           );
//         fs.readFile("./ejemploCallback.txt", "utf-8", (error, resultado) => {
//           if (error) return console.log("Error al leer el archivo");
//           console.log(resultado);
//           // Para borar el archivo utilizariamos unlink()
//           //   fs.unlink("./ejemploCallback.txt",(error)=>{
//           //     if(error) return console.log('No se puede eliminar el rachivo');
//           //   })
//         });
//       }
//     );
//   });
// });

// **************************** ACTIVIDAD EN CLASE ********************************* //
// Almacenar fecha y hora
// Realizar un programa que cree un archivo en el cual escriba la fecha y la hora actual. Posteriormente leer el archivo y mostrar el contenido por consola.
// Utilizar el módulo fs y sus operaciones de tipo callback.

// const fs = require("fs");

// // Obtener la hora actual
// const fechaHoraActual = new Date().toLocaleString();

// // Nombre del archivo a crear
// const nombreArchivo = "./fecha_hora.txt";

// // Escribir la fecha y hora actual en el archivo
// fs.writeFile(nombreArchivo, fechaHoraActual, (error) => {
//   if (error) {
//     console.log("Error al escribir en el archivo:", error);
//   } else {
//     console.log("Se ha escrito la fecha y hora actual en el archivo");
//   }
// });

// // Leer el contenido del archivo
// fs.readFile(nombreArchivo, "utf-8", (error, data) => {
//   if (error) {
//     return console.log("Error al leer el archivo");
//   } else {
//     return console.log(`El contenido del archivo es: ${data}`);
//   }
// });

// Ejemplo de fs utilizando promesas

// Las principales operaciones que podemos hacer con fs con promesas son:
// fs.promises.writeFile = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
// fs.promises.readFile  = Para obtener el contenido de un archivo.
// fs.promises.appendFile = Para añadir contenido a un archivo. ¡No se sobreescribe!
// fs.promises.unlink= Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.

// const fs = require("fs");

// const nombreArchivo = "./ejemploPromesa.txt";

// const operacionesAsincronicas = async () => {
//   try {
//     // Creamos el archivo
//     await fs.promises.writeFile(
//       nombreArchivo,
//       "Hola de nuevo DIOS esta contigo"
//     );
//     // Leeamos el archivo
//     let resultado = await fs.promises.readFile(nombreArchivo, "utf-8");
//     console.log(resultado);
//     // Modifiquemos el archivo
//     await fs.promises.appendFile(
//       nombreArchivo,
//       " y si estas con el nada te faltara"
//     );
//     // Volvemos a reeler el archivo para verificar lo agregadp
//     resultado = await fs.promises.readFile(nombreArchivo, "utf-8");
//     console.log(resultado);
//     // Finalmente borraremos el archivo
//     fs.promises.unlink(nombreArchivo);
//   } catch (error) {
//     console.log("Error al leer el archivo");
//   }
// };
// Aca llamamos la funcion para que se ejecute
// operacionesAsincronicas();

// De esta forma tenemos un codigo mucho mas limpio, mucho mas simple y mucho mas entendible.

// **************************** MANEJO DE DATOS COMPLEJOS JSON.stingify() - JSON.parse() ********************************* //

// JSON.stringify

// Una vez que tenemos el objeto que queremos guardar en el archivo, tenemos que recordar que éste no puede guardarse sólo incrustándolo. Necesitamos convertirlo a formato json, el cual es un formato estándar de guardado y envío de archivos.
// La sintaxis para hacer la conversión es: JSON.stringify(objetoAConvertir,replacer,'\t')

// Ejemplo de objeto con JSON.stringi?fy

// Definimos un objeto JavaScript
// const persona = {
//   nombre: "Juan",
//   edad: 30,
//   ciudad: "Madrid",
// };

// // Convertimos el objeto en una cadena JSON
// const personaJSON = JSON.stringify(persona);

// console.log(personaJSON);

// // Esto nos devolvera un objeto JSON = {"nombre":"Juan","edad":30,"ciudad":"Madrid"}

// // JSON.parse
// //Ahora que entendemos cómo se convierte un objeto a un JSON, es claro mencionar que JSON.parse representa la operación contraria. Cuando leemos un archivo, el contenido no es manipulable, así que, para recuperar el objeto que había guardado y no sólo una string representativa de él, entonces hay que transformarlo de vuelta, esto se hace con JSON.parse
// // su sintaxis es: JSON.parse(json_que_quiero_transformar_a_objeto)

// const jsonATransformar = JSON.parse(personaJSON);
// console.log(jsonATransformar);

// ACTIVIDAD DOS EN CLASE

// Escribir un programa ejecutable bajo node.js que realice las siguientes acciones:
// Abra una terminal en el directorio del archivo y ejecute la instrucción: npm init -y.
// Esto creará un archivo especial (lo veremos más adelante) de nombre package.json

const fs = require("fs");
const path = require("path");

const leerPackageJson = "./package.json";
const infoJsonFile = "./info.json";

const asincroPackageJson = async () => {
  try {
    const data = await fs.promises.readFile(leerPackageJson, "utf-8");
    //console.log(data);

    const contenidoObj = JSON.parse(data); // pasamos el contenido a objeto Js
    const size = Buffer.from(data).length; // Obtener el tamaño del archivo en bytes

    const info = {
      contenidoStr: data,
      contenidoObj: contenidoObj,
      size: size,
    };
    //console.log("La informacion que contiene el Obj info es:", info);

    // Vamos a crear y guardar la ruta del nuevo archivo
    const infoJsonPath = path.join(__dirname, infoJsonFile);

    // Usamos JSON.stringify para convertir info en una cadena JSON
    await fs.promises.writeFile(
      infoJsonPath,
      JSON.stringify(info, null, 2),
      "utf-8"
    );
    //console.log(`El archivo infoJsonFile se ha guardado correctamente `);

    // Ahora, leemos el archivo JSON y lo convertimos de nuevo a un objeto
    const infoJsonData = await fs.promises.readFile(infoJsonPath, "utf-8");
    const infoObj = JSON.parse(infoJsonData);
    console.log("La información que contiene el objeto infoObj es:", infoObj);
  } catch (error) {
    // Manejo de errores: Lanzar una nueva excepción con throw new Error
    throw new Error("Ha ocurrido un error al procesar el archivo.");
  }
};

asincroPackageJson().catch((error) => {
  console.error(error.message);
});

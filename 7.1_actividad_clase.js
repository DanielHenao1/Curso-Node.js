// // Importa el módulo Express
// import express from "express";

// // Crea una instancia de Express
// const app = express();

// // Habilita el uso de JSON en las solicitudes
// app.use(express.json());

// // Define el puerto en el que se ejecutará el servidor
// const port = 8080;

// // Inicializa una variable 'frase' con un valor inicial
// let frase = "Frase inicial";

// // Configura una ruta para manejar solicitudes GET a '/api/frase'
// app.get("/api/frase", (req, res) => {
//   // Devuelve un JSON con la variable 'frase'
//   res.json({ frase });
// });

// // Configura una ruta para manejar solicitudes GET a '/api/palabras/:pos'
// app.get("/api/palabras/:pos", (req, res) => {
//   // Obtiene el parámetro 'pos' de la solicitud y lo convierte en un número entero
//   const pos = parseInt(req.params.pos);

//   // Divide la variable 'frase' en palabras
//   const palabras = frase.split(" ");

//   // Verifica si 'pos' está dentro de los límites válidos
//   if (pos >= 1 && pos <= palabras.length) {
//     // Obtiene la palabra en la posición 'pos'
//     const buscada = palabras[pos - 1];
//     // Devuelve un JSON con la palabra buscada
//     res.json({ buscada });
//   } else {
//     // Si 'pos' no es válido, devuelve un error 404
//     res.status(404).json({ error: "La posición especificada no es válida." });
//   }
// });

// // Configura una ruta para manejar solicitudes POST a '/api/palabras'
// app.post("/api/palabras", (req, res) => {
//   // Obtiene el valor de 'palabra' desde el cuerpo de la solicitud
//   const { palabra } = req.body;

//   // Verifica si se proporciona una palabra en la solicitud
//   if (palabra) {
//     // Agrega la palabra a la variable 'frase'
//     frase += ` ${palabra}`;
//     // Divide la variable 'frase' en palabras nuevamente
//     const palabras = frase.split(" ");
//     // Obtiene la posición de la palabra recién agregada
//     const pos = palabras.length;
//     // Devuelve un JSON con la palabra agregada y su posición
//     res.json({ agregada: palabra, pos });
//   } else {
//     // Si no se proporciona una palabra, devuelve un error 400
//     res
//       .status(400)
//       .json({ error: "El campo 'palabra' es requerido en la solicitud." });
//   }
// });

// // Configura una ruta para manejar solicitudes PUT a '/api/palabras/:pos'
// app.put("/api/palabras/:pos", (req, res) => {
//   // Obtiene el parámetro 'pos' de la solicitud y lo convierte en un número entero
//   const pos = parseInt(req.params.pos);
//   // Obtiene el valor de 'palabra' desde el cuerpo de la solicitud
//   const { palabra } = req.body;
//   // Divide la variable 'frase' en palabras
//   const palabras = frase.split(" ");

//   // Verifica si 'pos' está dentro de los límites válidos y si se proporciona una palabra
//   if (pos >= 1 && pos <= palabras.length && palabra) {
//     // Obtiene la palabra en la posición 'pos' antes de la actualización
//     const anterior = palabras[pos - 1];
//     // Actualiza la palabra en la posición 'pos'
//     palabras[pos - 1] = palabra;
//     // Reemplaza la variable 'frase' con la nueva frase actualizada
//     frase = palabras.join(" ");
//     // Devuelve un JSON con la palabra actualizada y la anterior
//     res.json({ actualizada: palabra, anterior });
//   } else {
//     // Si 'pos' no es válido o no se proporciona una palabra, devuelve un error 400
//     res.status(400).json({
//       error:
//         "La posición especificada no es válida o falta la palabra en la solicitud.",
//     });
//   }
// });

// // Configura una ruta para manejar solicitudes DELETE a '/api/palabras/:pos'
// app.delete("/api/palabras/:pos", (req, res) => {
//   // Obtiene el parámetro 'pos' de la solicitud y lo convierte en un número entero
//   const pos = parseInt(req.params.pos);
//   // Divide la variable 'frase' en caracteres individuales
//   const palabras = frase.split("");

//   // Verifica si 'pos' está dentro de los límites válidos
//   if (pos >= 1 && pos <= palabras.length) {
//     // Elimina la palabra en la posición 'pos' y obtiene la palabra eliminada
//     const eliminada = palabras.splice(pos - 1, 1);
//     // Reemplaza la variable 'frase' con la nueva frase sin la palabra eliminada
//     frase = palabras.join(" ");
//     // Devuelve un JSON con la palabra eliminada
//     res.json({ eliminada: eliminada[0] });
//   } else {
//     // Si 'pos' no es válido, devuelve un error 404
//     res.status(404).json({ error: "La posición especificada no es válida." });
//   }
// });

// // Escucha en el puerto especificado y muestra un mensaje en la consola
// app.listen(port, () =>
//   console.log(`El servidor está escuchando en el puerto ${port}`)
// );

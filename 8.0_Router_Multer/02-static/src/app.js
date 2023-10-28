import express from "express";
import { __dirname } from "./utils.js"; // Importa el objeto __dirname de un módulo personalizado.

const app = express(); // Crea una instancia de Express.
const port = 8080; // Define el puerto en el que se ejecutará el servidor.

app.use(express.json()); // Habilita el middleware para analizar datos JSON en las solicitudes HTTP.
app.use(express.urlencoded({ extended: true })); // Habilita el middleware para analizar datos codificados en las solicitudes HTTP (datos de formularios).

app.use(express.static(__dirname + "/public")); // Sirve archivos estáticos desde la carpeta "public" en la ubicación actual del archivo.

app.listen(port, () => {
  console.log(`El servidor esta escuchando por el puerto: ...... ${port}`); // Inicia el servidor y muestra un mensaje indicando el puerto en el que está escuchando.
});

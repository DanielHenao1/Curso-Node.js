// Ejercicio 1

// import express from "express";

// const app = express();
// const port = 8080;

// // Ruta de ejemplo
// app.get("/saludo", (req, res) => {
//   res.send("¡Hola, a todos pero desde express!");
// });

// // Iniciar el servidor
// app.listen(port, () => {
//   console.log(`El servidor Express está escuchando en el puerto ${port}`);
// });

// Ejercicio 2

// import express from "express";
// const app = express();

// const PORT = 8080;

// app.get("/bienvenida", (req, res) => {
//   const bienvenidaHTML =
//     '<html><body style="color: blue;">¡Bienvenido!</body></html>';
//   res.send(bienvenidaHTML);
// });

// app.get("/usuario", (req, res) => {
//   const usuario = {
//     nombre: "John",
//     apellido: "Doe",
//     edad: 30,
//     correo: "john.doe@example.com",
//   };
//   // Retornamos la respuesta al endpoint en formato Json
//   res.json(usuario);

//   // Retornamos la respuesta al endpoint en formato String
//   // const respuestaUsuario = `Nombre: ${usuario.nombre}, Apellido: ${usuario.apellido}, Edad: ${usuario.edad}, Correo: ${usuario.correo}`;
//   // res.send(respuestaUsuario);
// });

// app.listen(PORT, () => {
//   console.log(`Servidor Express escuchando en el puerto ${PORT}`);
// });

// Objeto request

// El objeto req cuenta con tres propiedades principales: req.query, req.params, req.body.

// req.params
// Se utiliza cuando necesitamos obtener elementos dinámicos desde la ruta que está llamando el cliente.
// para poder definir un “parámetro” dentro de la ruta a trabajar, basta con colocar el símbolo de dos puntos : antes del parámetro, de esta manera, express reconoce que queremos que ese elemento sea dinámico.

// // Importa la biblioteca Express
// import express from "express";

// // Crea una instancia de la aplicación Express
// const app = express();

// // Define el puerto en el que el servidor escuchará las solicitudes
// const PORT = 8080;

// // Ruta con un parámetro en la URL
// app.get("/unparametro/:nombre", (req, res) => {
//   console.log(req.params.nombre);
//   res.send(`¡bienbenid@, ${req.params.nombre}`);
// });

// // Ruta con dos parámetros en la URL
// app.get("/dosparametros/:nombre/:apellido", (req, res) => {
//   res.send(`El nombre completo es ${req.params.nombre} ${req.params.apellido}`);
// });

// // Inicia el servidor Express y comienza a escuchar en el puerto definido
// app.listen(PORT, () => {
//   console.log(`Servidor Express escuchando en el puerto ${PORT}`);
// });

// // Ejemplo en vivo: Caso práctico de uso de params

// import express from "express";

// const app = express();

// const PORT = 8080;

// const usuarios = [
//   {id: 1, nombre: "Juan", apellido: "Perez", edad: 30},
//   {id: 2, nombre: "Maria", apellido: "Gomez", edad: 25},
//   {id: 3, nombre: "Pedro", apellido: "Rodriguez", edad: 35},
// ]

// app.get("/", (req, res) => {
//   res.send({usuarios})
// })

// app.get('/:idUsuario', (req, res) => {
//   let idUsuario = req.params.idUsuario;
//   let usuario = usuarios.find(usuario => usuario.id == idUsuario);
//   if(!usuario) return res.send({error: "Usuario no encontrado"})
//   res.send({usuario})

// })

// app.listen(PORT, () => {
//   console.log(`Servidor Express escuchando en el puerto ${PORT}`);
// });


// req.query
// Como su nombre lo indica, query refiere a las múltiples consultas que se pueden hacer a un determinado endpoint, basta conque en la url coloquemos el símbolo ? , entonces express reconocerá que hay que meter información al objeto req.query para poder utilizarlo en el endpoint.
// Cuando buscamos algo en nuestro navegador, llamamos a un endpoint haciendo un determinado query.

// ejerecicio req.query

// import express from "express";

// const app = express();

// const PORT = 8080;

// app.get("/ejemploQueries", (req, res) => {
//   let consultas = req.query;
//   let { nombre, apellido, edad } = req.query;
//   res.send(consultas);
// });

// app.listen(PORT, () => {
//   console.log(`Servidor Express escuchando en el puerto ${PORT}`);
// });

// Si llamamos el endpoint sin query, notamos que el objeto req.query viene vacío.

// Si llamamos el mismo endpoint, ahora con el símbolo ? para definir un query param, notamos cómo ahora aparece en el objeto.
// http://localhost:8080/ejemploQueries?name=Mauricio

// Finalmente, podemos poner tantos queries queramos utilizando el símbolo & Y notamos cómo ahora el objeto req.query cuenta con más de un query param para poder ser utilizado.
// http://localhost:8080/ejemploQueries?name=Mauricio&age=25&express=yes


// Ejemplo en vivo: Caso práctico de uso de req.query
// Dado un arreglo de objetos de tipo usuario, vamos a hacer un filtro por género
// La ruta raíz ‘/’ debe devolver todos los usuarios, pero ahora colocaremos un query param con ?, indicando que queremos un género específico. en caso de enviarlo sin query, debe devolver a todos los usuarios.

// Importa la biblioteca Express para crear una aplicación web.
import express from "express";

// Crea una instancia de la aplicación Express.
const app = express();

// Define el puerto en el que se ejecutará el servidor.
const PORT = 8080;

// Habilita el middleware para analizar datos codificados en URL.
app.use(express.urlencoded({ extended: true }));

// Array que almacena una lista de usuarios con datos de prueba.
const usuarios = [
  { id: 1, nombre: "Juan", apellido: "Perez", genero: "M" },
  { id: 2, nombre: "Maria", apellido: "Gomez", genero: "F" },
  { id: 3, nombre: "Pedro", apellido: "Rodriguez", genero: "M" },
  { id: 4, nombre: "Ana", apellido: "Garcia", genero: "F" },
  { id: 5, nombre: "Luis", apellido: "Martinez", genero: "M" },
  { id: 6, nombre: "Marta", apellido: "Lopez", genero: "F" },
];

// Define una ruta raíz y una función de manejo de solicitudes GET.
app.get("/", (req, res) => {
  // Obtiene el parámetro 'genero' de la consulta (si existe).
  let genero = req.query.genero;

  // Si no se proporciona el parámetro 'genero' o si es diferente de "M" o "F", devuelve la lista completa de usuarios.
  if (!genero || (genero !== "M" && genero !== "F")) {
    return res.send({ usuarios });
  }

  // Filtra los usuarios por género según el valor del parámetro 'genero' y envía la lista filtrada como respuesta.
  let usuariosFiltrados = usuarios.filter(
    (usuario) => usuario.genero === genero
  );
  res.send({ usuarios: usuariosFiltrados });
});

// Inicia el servidor Express en el puerto definido y muestra un mensaje en la consola cuando se inicia.
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

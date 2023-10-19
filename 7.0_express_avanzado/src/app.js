// Importa el módulo Express
import express from "express";
import fs from "fs";
import { users } from "./users.js";

// Crea una instancia de la aplicación Express
const app = express();

// Habilita el middleware para analizar JSON en las solicitudes
app.use(express.json());

// Habilita el middleware para analizar datos codificados en las solicitudes
app.use(express.urlencoded({ extended: true }));

// Define el número de puerto en el que se ejecutará el servidor
const port = 8080;

// Encuentra el ID más alto entre los usuarios existentes
let currentId =
  users.length > 0 ? Math.max(...users.map((user) => user.id)) : 0;

// Función para generar un nuevo ID de usuario
const generateUserId = () => {
  return ++currentId;
};

// Ruta para crear un nuevo usuario a través de una solicitud POST
app.post("/api/user", (req, res) => {
  let user = req.body;

  if (!user.firstName || !user.lastName || !user.email || !user.password) {
    return res.status(400).send({ status: "error", message: "Faltan datos" });
  } else {
    // Genera un nuevo ID
    user.id = generateUserId();

    users.push(user);

    // Actualiza el archivo "users.js" con la lista de usuarios actualizada
    fs.writeFileSync(
      "./src/users.js",
      `export const users = ${JSON.stringify(users)};`,
      "utf-8"
    );

    res.status(200).send({ status: "success", message: "Usuario creado" });
  }
});

// Ruta para obtener todos los usuarios a través de una solicitud GET
app.get("/api/users", (req, res) => {
  // Envía una respuesta exitosa con código 200 y la lista de usuarios
  res.status(200).send(users);
});

// Ruta para actualizar un usuario a través de una solicitud PUT
app.put("/api/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const updatedUserData = req.body;

  // Busca el usuario por su ID
  const userToUpdate = users.find((user) => user.id == userId);

  // Si el usuario no se encuentra, envía una respuesta de error con código 404
  if (!userToUpdate) {
    return res
      .status(404)
      .send({ status: "error", message: "Usuario no encontrado" });
  }

  // Actualiza los campos del usuario si se proporcionan en la solicitud
  if (updatedUserData.firstName) {
    userToUpdate.firstName = updatedUserData.firstName;
  }
  if (updatedUserData.lastName) {
    userToUpdate.lastName = updatedUserData.lastName;
  }
  if (updatedUserData.email) {
    userToUpdate.email = updatedUserData.email;
  }
  if (updatedUserData.password) {
    userToUpdate.password = updatedUserData.password;
  }

  // Actualiza el archivo "users.js" con la lista de usuarios actualizada
  fs.writeFileSync(
    "./src/users.js",
    `export const users = ${JSON.stringify(users)};`,
    "utf-8"
  );

  // Envía una respuesta exitosa con código 200
  res.status(200).send({ status: "success", message: "Usuario actualizado" });
});

// Ruta para eliminar un usuario a través de una solicitud DELETE
app.delete("/api/users/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);

  // Busca el índice del usuario en el array
  const userIndex = users.findIndex((user) => user.id === userId);

  // Si el usuario no se encuentra, envía una respuesta de error con código 404
  if (userIndex === -1) {
    return res
      .status(404)
      .send({ status: "error", message: "Usuario no encontrado" });
  }

  // Elimina el usuario del array
  users.splice(userIndex, 1);

  // Actualiza el archivo "users.js" con la lista de usuarios actualizada
  fs.writeFileSync(
    "./src/users.js",
    `export const users = ${JSON.stringify(users)};`,
    "utf-8"
  );

  // Envía una respuesta exitosa con código 200
  res.status(200).send({ status: "success", message: "Usuario eliminado" });
});

// Inicia el servidor y escucha en el puerto definido
app.listen(port, () => {
  console.log(`El servidor está escuchando por el puerto: ${port}`);
});

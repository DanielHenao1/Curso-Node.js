// Importa el módulo Express
import express from "express";

// Crea una instancia de la aplicación Express
const app = express();

// Habilita el middleware para analizar JSON en las solicitudes
app.use(express.json());

// Habilita el middleware para analizar datos codificados en las solicitudes
app.use(express.urlencoded({ extended: true }));

// Define el número de puerto en el que se ejecutará el servidor
const port = 8080;

// Inicializa un arreglo vacío para almacenar usuarios
let users = [];

// Ruta para crear un nuevo usuario a través de una solicitud POST
app.post("/api/user", (req, res) => {
  // Obtiene los datos del usuario desde la solicitud
  let user = req.body;

  // Verifica si se proporcionan todos los campos requeridos
  if (
    !user.id ||
    !user.firstName ||
    !user.lastName ||
    !user.email ||
    !user.password
  ) {
    // En caso de faltar datos, envía una respuesta de error con código 400
    return res.status(400).send({ status: "error", message: "Faltan datos" });
  } else {
    // Agrega el usuario al arreglo de usuarios
    users.push(user);
    // Envía una respuesta exitosa con código 200
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
  const userToUpdate = users.find((user) => user.id === userId);

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

  // Envía una respuesta exitosa con código 200
  res.status(200).send({ status: "success", message: "Usuario actualizado" });
});

// Ruta para eliminar un usuario a través de una solicitud DELETE
app.delete("/api/users/:userId", (req, res) => {
  const userId = req.params.userId;

  // Busca el usuario por su ID
  const userToDelete = users.find((user) => user.id === userId);

  // Si el usuario no se encuentra, envía una respuesta de error con código 404
  if (!userToDelete) {
    return res
      .status(404)
      .send({ status: "error", message: "Usuario no encontrado" });
  }

  // Elimina el usuario del arreglo
  users = users.filter((user) => user.id !== userId);

  // Envía una respuesta exitosa con código 200
  res.status(200).send({ status: "success", message: "Usuario eliminado" });
});

// Inicia el servidor y escucha en el puerto definido
app.listen(port, () => {
  console.log(`El servidor está escuchando por el puerto: ${port}`);
});

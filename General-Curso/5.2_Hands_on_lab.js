// Importa las bibliotecas necesarias
const fs = require("fs"); // Módulo de sistema de archivos
const crypto = require("crypto"); // Módulo de criptografía

// Clase que gestiona usuarios
class UserManager {
  constructor() {
    this.users = []; // Almacena los datos de los usuarios en memoria
    this.userFile = "Usuarios.json"; // Ruta del archivo donde se guardarán los usuarios
  }

  // Método asincrónico para crear un nuevo usuario
  async createUser(userObject) {
    try {
      const { nombre, apellido, username, password } = userObject;
      const hashedPassword = this.hashPassword(password);

      const newUser = {
        nombre,
        apellido,
        username,
        password: hashedPassword,
      };

      this.users.push(newUser); // Agrega el nuevo usuario a la lista en memoria
      await this.saveUsersToFile(); // Guarda la lista actualizada en el archivo
    } catch (error) {
      throw error;
    }
  }

  // Método asincrónico para validar un usuario al iniciar sesión
  async validateUser(username, password) {
    try {
      const user = this.users.find((user) => user.username === username);
      if (!user) {
        return "Usuario no encontrado";
      }

      const hashedPassword = this.hashPassword(password);
      if (user.password === hashedPassword) {
        return "Logueado";
      } else {
        return "Contraseña incorrecta";
      }
    } catch (error) {
      throw error;
    }
  }

  // Método asincrónico para guardar los usuarios en el archivo
  async saveUsersToFile() {
    const usersJSON = JSON.stringify(this.users, null, 2);
    try {
      await fs.promises.writeFile(this.userFile, usersJSON, "utf8"); // Escribe los usuarios en el archivo
    } catch (error) {
      throw error;
    }
  }

  // Método para hashear una contraseña utilizando el algoritmo SHA-256
  hashPassword(password) {
    const hash = crypto.createHash("sha256");
    hash.update(password);
    return hash.digest("hex");
  }

  // Método asincrónico para cargar usuarios desde el archivo
  async loadUsersFromFile() {
    try {
      const data = await fs.promises.readFile(this.userFile, "utf8"); // Lee los usuarios desde el archivo
      this.users = JSON.parse(data);
    } catch (err) {
      // Si el archivo no existe o hay errores, no se realiza ninguna acción.
    }
  }
}

// Función que muestra el uso de la clase UserManager
const demonstrateUserManager = async () => {
  const userManager = new UserManager(); // Crea una instancia de UserManager
  await userManager.loadUsersFromFile(); // Carga los usuarios desde el archivo si existe

  try {
    await userManager.createUser({
      nombre: "Daniel",
      apellido: "Henao",
      username: "DHenao",
      password: "password124",
    }); // Crea un nuevo usuario

    const result1 = await userManager.validateUser("DHenao", "password124"); // Valida el usuario al iniciar sesión
    console.log(result1); // Imprime el resultado en la consola

    await userManager.createUser({
      nombre: "Alice",
      apellido: "Smith",
      username: "alicesmith",
      password: "mysecurepassword",
    }); // Crea otro nuevo usuario

    const result2 = await userManager.validateUser(
      "alicesmith",
      "mysecurepassword"
    ); // Valida el usuario al iniciar sesión
    console.log(result2); // Imprime el resultado en la consola

    await userManager.createUser({
      nombre: "Bob",
      apellido: "Johnson",
      username: "bjohnson",
      password: "strongpassword",
    }); // Crea un tercer nuevo usuario

    const result3 = await userManager.validateUser(
      "bjohnson",
      "strongpassword"
    ); // Valida el usuario al iniciar sesión
    console.log(result3); // Imprime el resultado en la consola
  } catch (error) {
    console.error("Error:", error); // Maneja errores si ocurren
  }
};

// Llama a la función para demostrar el uso de UserManager
demonstrateUserManager();

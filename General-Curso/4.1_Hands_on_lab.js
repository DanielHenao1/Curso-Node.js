const fs = require("fs");

class usersManager {
  constructor() {
    this.path = "./users.json";
  }
  async getUsers() {
    try {
      if (fs.existsSync(this.path)) {
        const usersJSON = await fs.promises.readFile(this.path, "utf-8");
        const usersJS = JSON.parse(usersJSON);
        return usersJS;
      } else {
        return [];
      }
    } catch (error) {}
  }
  async createUser(user) {
    try {
      const users = await this.getUsers();
      users.push(user);
      await fs.promises.writeFile(this.path, JSON.stringify(users, null, 2));
    } catch (error) {
      console.log(error);
    }
  }
}

const usuariosManager = new usersManager();

const usuario1 = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 25,
}

const usuario2 = {
  nombre: "Juanito",
  apellido: "Peritos",
  edad: 45,
}

const test2 = async () => {
  console.log('Primera consulta', await usuariosManager.getUsers())
  await usuariosManager.createUser(usuario1)
  console.log('Segunda consulta', await usuariosManager.getUsers())
  await usuariosManager.createUser(usuario2)
}
test2()



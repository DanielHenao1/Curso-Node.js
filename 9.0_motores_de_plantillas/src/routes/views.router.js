import { Router } from "express";
import fs from "fs";
const router = Router();

const path = "./users.json";

router.get("/vista1", (req, res) => {
  res.render("vista1");
});

router.get("/vista2", (req, res) => {
  res.render("vista2");
});

router.get("/vista3", (req, res) => {
  const user = {
    firstName: "Daniel",
    lastName: "Henao",
  };
  res.render("vista3", { user });
});

// en este punto vamos a realizar la actividad de la clase.

const users = [
  {
    firsName: "Daniel",
    lastName: "Henao",
    mail: "daniel@example.com",
    phone: "123-456-7890",
  },
  {
    firsName: "Samuel",
    lastName: "Henao",
    mail: "ejemplo@example.com",
    phone: "987-654-3210",
  },
  {
    firsName: "Daniela",
    lastName: "Henao",
    mail: "otro@example.com",
    phone: "555-555-5555",
  },
  {
    firsName: "Diana",
    lastName: "Quevedo",
    mail: "final@example.com",
    phone: "111-222-3333",
  },
];

router.get("/actividad", (req, res) => {
  const ramdon = Math.floor(Math.random() * 4);
  const user = users[ramdon];
  res.render("actividad", user);
});

router.get("/list", (req, res) => {
  res.render("list", { users });
});

// Aca agregamos el renderizado del formulario

router.get("/form", (req, res) => {
  res.render("formulario");
});

router.get("/users", async (req, res) => {
  let userJSON = await fs.promises.readFile(path, "utf-8");
  let users = JSON.parse(userJSON);
  res.render("users", { users });
});

export default router;

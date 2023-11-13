import express from "express";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import { __dirname } from "./utils.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// Settiamos el motor de plantilla
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("websocket");
});

// Con esto creamos el servidor http express
const httpServer = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Con esto creamos el servidor socket
const socketServer = new Server(httpServer);

// Con esto creamos un array vacio
const products = [];

// Con esto optenemos los elementos del HTML
socketServer.on("connection", (socket) => {
  console.log(`Usuario conectado ${socket.id}`);
  socket.on("disconnect", () => {
    console.log("Usuario desconectado");
  });

  // Con esto enviamos un mensaje al cliente
  socket.emit("SaludoDesdeBack", "Bienvenido a websocket");

  // Con esto optenemos los elementos del HTML
  socket.on("SaludoDesdeFront", (msg) => {
    console.log(msg);
  });
  socket.on("newProduct", (product) => {
    products.push(product);
    socketServer.emit("arrayProducts", products);
  });
});



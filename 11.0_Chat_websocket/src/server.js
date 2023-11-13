import express from "express";
import { __dirname } from "./utils.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import viewsRouter from "./routes/views.router.js";
import MessagesManager from "./managers/messages.manager.js";
const msgManager = new MessagesManager(__dirname + "/db/messages.json");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.use("/chat", viewsRouter);

app.use(errorHandler);

const port = 8080;
const httpServer = app.listen(port, () => {
  // para poner emojics utilizamos la tecla windows + la tecla punto
  console.log(`🚀 Server is running on port ${port}`);
});

const socketServer = new Server(httpServer);

socketServer.on("connection", async (socket) => {
  console.log(`🟢 ¡new connection!`, socket.id);

  socket.emit("messages", await msgManager.getAll());

  socket.on("disconnect", () => console.log(`🔴 connection closed`, socket.id));
  socket.on("newUser", (user) => console.log(`${user} inicio sesion`));

  socket.on("chat:message", async (msg) => {
    await msgManager.createMsg(msg);
    socket.emit("messages", await msgManager.getAll());
  });

  socket.on("newUser", (user) => {
    socket.broadcast.emit("newUser", user);
  });

  socket.on("chat:typing", (data) => {
    socket.broadcast.emit("chat:typing", data);
  });
});

// Quedamos en el minuto 1:28:21

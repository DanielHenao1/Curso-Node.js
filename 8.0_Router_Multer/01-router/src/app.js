// import express from "express";
// import productsRouter from "./routes/products.router.js";
// import cartsRouter from "./routes/carts.router.js";

// const app = express();
// const port = 8080;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/api/products", productsRouter);
// app.use("/api/carts", cartsRouter);

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

import express from "express";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";

const app = express();
const port = 8080;

app.use(express.json()); // Habilita el uso de JSON en las solicitudes HTTP.
app.use(express.urlencoded({ extended: true })); // Habilita el análisis de datos codificados en las solicitudes HTTP.

// Rutas para la gestión de productos y carritos
app.use("/api/products", productsRouter); // Asocia el enrutador de productos a la ruta "/api/products".
app.use("/api/carts", cartsRouter); // Asocia el enrutador de carritos a la ruta "/api/carts".

app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // Inicia el servidor y muestra un mensaje cuando está escuchando en el puerto especificado.
});

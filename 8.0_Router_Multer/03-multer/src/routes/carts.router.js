// import { Router } from "express";
// import CartsManager from "../classes/cartsManager.js";

// const router = Router();

// const cartsFile = "./src/data/carrito.json";
// const productsFile = "./src/data/productos.json";

// const cartsManager = new CartsManager(cartsFile, productsFile);

// (async () => {
//   try {
//     await cartsManager.initialize();
//   } catch (error) {
//     console.error(error);
//   }
// })();

// router.post("/", async (req, res) => {
//   try {
//     const newCart = await cartsManager.createCart();
//     res.json(newCart);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// router.get("/:cid", async (req, res) => {
//   const cartId = req.params.cid;
//   try {
//     const cart = await cartsManager.getCart(cartId);
//     res.json(cart);
//   } catch (error) {
//     res.status(404).json({ error: error.message });
//   }
// });

// router.post("/:cid/product/:pid", async (req, res) => {
//   const cartId = req.params.cid;
//   const productId = req.params.pid;
//   const { quantity } = req.body;

//   try {
//     const cart = await cartsManager.addProductToCart(
//       cartId,
//       productId,
//       quantity
//     );
//     res.json(cart);
//   } catch (error) {
//     res.status(404).json({ error: error.message });
//   }
// });

// export default router;

import { Router } from "express";
import CartsManager from "../classes/cartsManager.js";

const router = Router();

// Rutas de los archivos de carritos y productos
const cartsFile = "./src/data/carrito.json";
const productsFile = "./src/data/productos.json";

// Instancia de CartsManager para gestionar carritos
const cartsManager = new CartsManager(cartsFile, productsFile);

// Inicializa CartsManager al arrancar la aplicación
(async () => {
  try {
    await cartsManager.initialize();
  } catch (error) {
    console.error(error);
  }
})();

// Ruta para crear un nuevo carrito
router.post("/", async (req, res) => {
  try {
    const newCart = await cartsManager.createCart(); // Crea un nuevo carrito utilizando CartsManager.
    res.json(newCart); // Devuelve el nuevo carrito en formato JSON.
  } catch (error) {
    res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay un problema.
  }
});

// Ruta para obtener el contenido de un carrito por su ID
router.get("/:cid", async (req, res) => {
  const cartId = req.params.cid; // Obtiene el ID del carrito desde los parámetros de la URL.
  try {
    const cart = await cartsManager.getCart(cartId); // Obtiene el contenido del carrito con el ID especificado.
    res.json(cart); // Devuelve el contenido del carrito en formato JSON.
  } catch (error) {
    res.status(404).json({ error: error.message }); // Devuelve un error 404 si el carrito no se encuentra.
  }
});

// Ruta para agregar un producto a un carrito
router.post("/:cid/product/:pid", async (req, res) => {
  const cartId = req.params.cid; // Obtiene el ID del carrito desde los parámetros de la URL.
  const productId = req.params.pid; // Obtiene el ID del producto desde los parámetros de la URL.
  const { quantity } = req.body; // Obtiene la cantidad del producto desde el cuerpo de la solicitud.

  try {
    const cart = await cartsManager.addProductToCart(
      cartId,
      productId,
      quantity
    ); // Agrega el producto al carrito utilizando CartsManager.
    res.json(cart); // Devuelve el carrito actualizado en formato JSON.
  } catch (error) {
    res.status(404).json({ error: error.message }); // Devuelve un error 404 si hay un problema.
  }
});

export default router;

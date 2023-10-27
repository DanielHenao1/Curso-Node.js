// import { Router } from "express";
// import ProductManager from "../classes/productManager.js";

// const router = Router();
// const productsFile = "./src/data/productos.json";
// const productManager = new ProductManager(productsFile);

// // Inicializar el administrador de productos
// productManager.initialize();

// router.get("/", async (req, res) => {
//   try {
//     const limit = req.query.limit;
//     const products = await productManager.getProducts(limit);
//     res.json(products);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al listar los productos" });
//   }
// });

// router.get("/:id", async (req, res) => {
//   try {
//     const productId = req.params.id;
//     const product = await productManager.getProductById(productId);
//     res.json(product);
//   } catch (error) {
//     console.error(error);
//     res.status(404).json({ error: "Producto no encontrado" });
//   }
// });

// router.post("/", async (req, res) => {
//   try {
//     const newProductData = req.body;
//     const newProduct = await productManager.addProduct(newProductData);
//     res.json(newProduct);
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ error: "Faltan campos obligatorios o el # code ya existe" });
//   }
// });

// router.put("/:id", async (req, res) => {
//   try {
//     const productId = req.params.id;
//     const updatedProductData = req.body;
//     const updatedProduct = await productManager.updateProduct(productId, updatedProductData);
//     res.json(updatedProduct);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al actualizar el producto" });
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     const productId = req.params.id;
//     await productManager.deleteProduct(productId);
//     res.json({ message: "Producto eliminado correctamente" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error al eliminar el producto" });
//   }
// });

// export default router;

import { Router } from "express";
import ProductManager from "../classes/productManager.js";

const router = Router();

// Ruta del archivo de productos
const productsFile = "./src/data/productos.json";

// Instancia de ProductManager para gestionar productos
const productManager = new ProductManager(productsFile);

// Inicializa ProductManager al arrancar la aplicación
productManager.initialize();

// Ruta para obtener una lista de productos
router.get("/", async (req, res) => {
  try {
    const limit = req.query.limit; // Obtiene el límite de productos desde los parámetros de la URL.
    const products = await productManager.getProducts(limit); // Obtiene la lista de productos utilizando ProductManager.
    res.json(products); // Devuelve la lista de productos en formato JSON.
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al listar los productos" }); // Devuelve un error 500 si hay un problema.
  }
});

// Ruta para obtener un producto por su ID
router.get("/:id", async (req, res) => {
  try {
    const productId = req.params.id; // Obtiene el ID del producto desde los parámetros de la URL.
    const product = await productManager.getProductById(productId); // Obtiene un producto por su ID utilizando ProductManager.
    res.json(product); // Devuelve el producto en formato JSON.
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "Producto no encontrado" }); // Devuelve un error 404 si el producto no se encuentra.
  }
});

// Ruta para agregar un nuevo producto
router.post("/", async (req, res) => {
  try {
    const newProductData = req.body; // Obtiene los datos del nuevo producto desde el cuerpo de la solicitud.
    const newProduct = await productManager.addProduct(newProductData); // Agrega un nuevo producto utilizando ProductManager.
    res.json(newProduct); // Devuelve el nuevo producto en formato JSON.
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ error: "Faltan campos obligatorios o el # code ya existe" }); // Devuelve un error 400 si hay un problema o campos faltantes.
  }
});

// Ruta para actualizar un producto por su ID
router.put("/:id", async (req, res) => {
  try {
    const productId = req.params.id; // Obtiene el ID del producto desde los parámetros de la URL.
    const updatedProductData = req.body; // Obtiene los datos actualizados del producto desde el cuerpo de la solicitud.
    const updatedProduct = await productManager.updateProduct(
      productId,
      updatedProductData
    ); // Actualiza un producto utilizando ProductManager.
    res.json(updatedProduct); // Devuelve el producto actualizado en formato JSON.
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el producto" }); // Devuelve un error 500 si hay un problema.
  }
});

// Ruta para eliminar un producto por su ID
router.delete("/:id", async (req, res) => {
  try {
    const productId = req.params.id; // Obtiene el ID del producto desde los parámetros de la URL.
    await productManager.deleteProduct(productId); // Elimina un producto utilizando ProductManager.
    res.json({ message: "Producto eliminado correctamente" }); // Devuelve un mensaje de éxito.
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el producto" }); // Devuelve un error 500 si hay un problema.
  }
});

export default router;

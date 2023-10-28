// import fs from "fs/promises";

// class CartsManager {
//   constructor(cartsFile, productsFile) {
//     this.cartsFile = cartsFile;
//     this.productsFile = productsFile;
//   }

//   async initialize() {
//     try {
//       await fs.access(this.cartsFile);
//     } catch (error) {
//       await fs.writeFile(this.cartsFile, "[]", "utf8");
//     }
//   }

//   generateUniqueCartId(carts) {
//     let uniqueId;
//     let isDuplicate;

//     do {
//       uniqueId = Math.floor(Math.random() * 1000000).toString();
//       isDuplicate = carts.some((cart) => cart.id === uniqueId);
//     } while (isDuplicate);

//     return uniqueId;
//   }

//   async createCart() {
//     try {
//       const data = await fs.readFile(this.cartsFile, "utf8");
//       const carts = JSON.parse(data);

//       const newCartId = this.generateUniqueCartId(carts);

//       const newCart = {
//         id: newCartId,
//         products: [],
//       };

//       carts.push(newCart);

//       await fs.writeFile(
//         this.cartsFile,
//         JSON.stringify(carts, null, 2),
//         "utf8"
//       );

//       return newCart;
//     } catch (error) {
//       throw new Error("Error al crear el carrito");
//     }
//   }

//   async getCart(cartId) {
//     try {
//       const data = await fs.readFile(this.cartsFile, "utf8");
//       const carts = JSON.parse(data);

//       const cart = carts.find((c) => c.id === cartId);

//       if (cart) {
//         return cart.products;
//       } else {
//         throw new Error("Carrito no encontrado");
//       }
//     } catch (error) {
//       throw new Error("Error al obtener el carrito");
//     }
//   }

//   async addProductToCart(cartId, productId, quantity) {
//     try {
//       const data = await fs.readFile(this.cartsFile, "utf8");
//       const carts = JSON.parse(data);

//       const cart = carts.find((c) => c.id === cartId);

//       if (cart) {
//         const productsData = await fs.readFile(this.productsFile, "utf8");
//         const products = JSON.parse(productsData);

//         const product = products.find((p) => p.id == productId);

//         if (product) {
//           const existingProduct = cart.products.find(
//             (p) => p.product === productId
//           );

//           if (existingProduct) {
//             existingProduct.quantity += quantity;
//           } else {
//             cart.products.push({
//               title: product.title,
//               product: productId,
//               quantity: quantity,
//             });
//           }

//           await fs.writeFile(
//             this.cartsFile,
//             JSON.stringify(carts, null, 2),
//             "utf8"
//           );

//           return cart;
//         } else {
//           throw new Error("Producto no encontrado");
//         }
//       } else {
//         throw new Error("Carrito no encontrado");
//       }
//     } catch (error) {
//       throw new Error("Error al agregar el producto al carrito");
//     }
//   }
// }

// export default CartsManager;

import fs from "fs/promises";

class CartsManager {
  constructor(cartsFile, productsFile) {
    this.cartsFile = cartsFile; // Almacena la ruta del archivo de carritos.
    this.productsFile = productsFile; // Almacena la ruta del archivo de productos.
  }

  // Inicializa el administrador de carritos. Crea el archivo de carritos si no existe.
  async initialize() {
    try {
      await fs.access(this.cartsFile); // Verifica si el archivo de carritos ya existe.
    } catch (error) {
      await fs.writeFile(this.cartsFile, "[]", "utf8"); // Si no existe, crea un archivo de carritos vacío.
    }
  }

  // Genera un identificador de carrito único.
  generateUniqueCartId(carts) {
    let uniqueId;
    let isDuplicate;

    do {
      uniqueId = Math.floor(Math.random() * 1000000).toString(); // Genera un ID aleatorio.
      isDuplicate = carts.some((cart) => cart.id === uniqueId); // Verifica si el ID ya existe en la lista de carritos.
    } while (isDuplicate);

    return uniqueId; // Devuelve un ID único.
  }

  // Crea un nuevo carrito vacío y lo guarda en el archivo de carritos.
  async createCart() {
    try {
      const data = await fs.readFile(this.cartsFile, "utf8"); // Lee el contenido del archivo de carritos.
      const carts = JSON.parse(data); // Convierte el contenido en un array de carritos.

      const newCartId = this.generateUniqueCartId(carts); // Genera un ID único para el nuevo carrito.

      const newCart = {
        id: newCartId,
        products: [],
      }; // Crea un nuevo carrito con un ID único y una lista de productos vacía.

      carts.push(newCart); // Agrega el nuevo carrito a la lista de carritos.

      await fs.writeFile(
        this.cartsFile,
        JSON.stringify(carts, null, 2),
        "utf8"
      ); // Guarda la lista actualizada en el archivo de carritos.

      return newCart; // Devuelve el nuevo carrito.
    } catch (error) {
      throw new Error("Error al crear el carrito");
    }
  }

  // Obtiene el contenido de un carrito por su ID.
  async getCart(cartId) {
    try {
      const data = await fs.readFile(this.cartsFile, "utf8"); // Lee el contenido del archivo de carritos.
      const carts = JSON.parse(data); // Convierte el contenido en un array de carritos.

      const cart = carts.find((c) => c.id === cartId); // Busca el carrito con el ID especificado.

      if (cart) {
        return cart.products; // Devuelve la lista de productos del carrito.
      } else {
        throw new Error("Carrito no encontrado");
      }
    } catch (error) {
      throw new Error("Error al obtener el carrito");
    }
  }

  // Agrega un producto a un carrito por su ID y guarda los cambios en el archivo de carritos.
  async addProductToCart(cartId, productId, quantity) {
    try {
      const data = await fs.readFile(this.cartsFile, "utf8"); // Lee el contenido del archivo de carritos.
      const carts = JSON.parse(data); // Convierte el contenido en un array de carritos.

      const cart = carts.find((c) => c.id === cartId); // Busca el carrito con el ID especificado.

      if (cart) {
        const productsData = await fs.readFile(this.productsFile, "utf8"); // Lee el contenido del archivo de productos.
        const products = JSON.parse(productsData); // Convierte el contenido en un array de productos.

        const product = products.find((p) => p.id == productId); // Busca el producto con el ID especificado.

        if (product) {
          const existingProduct = cart.products.find(
            (p) => p.product === productId
          ); // Busca si el producto ya existe en el carrito.

          if (existingProduct) {
            existingProduct.quantity += quantity; // Si existe, aumenta la cantidad.
          } else {
            cart.products.push({
              title: product.title,
              product: productId,
              quantity: quantity,
            }); // Si no existe, agrega el producto al carrito.
          }

          await fs.writeFile(
            this.cartsFile,
            JSON.stringify(carts, null, 2),
            "utf8"
          ); // Guarda la lista de carritos actualizada en el archivo.

          return cart; // Devuelve el carrito actualizado.
        } else {
          throw new Error("Producto no encontrado");
        }
      } else {
        throw new Error("Carrito no encontrado");
      }
    } catch (error) {
      throw new Error("Error al agregar el producto al carrito");
    }
  }
}

export default CartsManager;

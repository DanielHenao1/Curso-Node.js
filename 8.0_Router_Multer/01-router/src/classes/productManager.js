// import fs from "fs/promises";

// class ProductManager {
//   constructor(productsFile) {
//     this.productsFile = productsFile;
//   }

//   async initialize() {
//     try {
//       await fs.access(this.productsFile);
//     } catch (error) {
//       await fs.writeFile(this.productsFile, "[]", "utf8");
//     }
//   }

//   async getProducts(limit) {
//     const data = await fs.readFile(this.productsFile, "utf8");
//     const products = JSON.parse(data);

//     if (limit) {
//       return products.slice(0, parseInt(limit, 10));
//     } else {
//       return products;
//     }
//   }

//   async getProductById(id) {
//     const data = await fs.readFile(this.productsFile, "utf8");
//     const products = JSON.parse(data);

//     const product = products.find((p) => p.id == id);

//     if (product) {
//       return product;
//     } else {
//       throw new Error("Producto no encontrado");
//     }
//   }

//   async isProductCodeUnique(code) {
//     const data = await fs.readFile(this.productsFile, "utf8");
//     const products = JSON.parse(data);

//     return !products.some((product) => product.code === code);
//   }

//   async addProduct(newProductData) {
//     const data = await fs.readFile(this.productsFile, "utf8");
//     const products = JSON.parse(data);

//     // Verificar si el código es único
//     if (await this.isProductCodeUnique(newProductData.code)) {
//       const newProductId = products.length + 1;
//       const newProduct = {
//         id: newProductId,
//         ...newProductData,
//       };

//       products.push(newProduct);

//       await fs.writeFile(
//         this.productsFile,
//         JSON.stringify(products, null, 2),
//         "utf8"
//       );

//       return newProduct;
//     } else {
//       throw new Error("El código de producto ya existe.");
//     }
//   }

//   async updateProduct(id, updatedProductData) {
//     const data = await fs.readFile(this.productsFile, "utf8");
//     const products = JSON.parse(data);

//     const productIndex = products.findIndex((p) => p.id == id);

//     if (productIndex === -1) {
//       throw new Error("Producto no encontrado");
//     }

//     updatedProductData.id = id;

//     products[productIndex] = updatedProductData;

//     await fs.writeFile(
//       this.productsFile,
//       JSON.stringify(products, null, 2),
//       "utf8"
//     );

//     return updatedProductData;
//   }

//   async deleteProduct(id) {
//     const data = await fs.readFile(this.productsFile, "utf8");
//     const products = JSON.parse(data);

//     const productIndex = products.findIndex((p) => p.id == id);

//     if (productIndex === -1) {
//       throw new Error("Producto no encontrado");
//     }

//     products.splice(productIndex, 1);

//     await fs.writeFile(
//       this.productsFile,
//       JSON.stringify(products, null, 2),
//       "utf8"
//     );
//   }
// }

// export default ProductManager;

import fs from "fs/promises";

class ProductManager {
  constructor(productsFile) {
    this.productsFile = productsFile; // Almacena la ruta del archivo de productos.
  }

  // Inicializa el administrador de productos. Crea el archivo de productos si no existe.
  async initialize() {
    try {
      await fs.access(this.productsFile); // Verifica si el archivo de productos ya existe.
    } catch (error) {
      await fs.writeFile(this.productsFile, "[]", "utf8"); // Si no existe, crea un archivo de productos vacío.
    }
  }

  // Obtiene una lista de productos con una limitación opcional.
  async getProducts(limit) {
    const data = await fs.readFile(this.productsFile, "utf8"); // Lee el contenido del archivo de productos.
    const products = JSON.parse(data); // Convierte el contenido en un array de productos.

    if (limit) {
      return products.slice(0, parseInt(limit, 10)); // Devuelve una lista limitada de productos si se especifica un límite.
    } else {
      return products; // Devuelve todos los productos si no se especifica un límite.
    }
  }

  // Obtiene un producto por su ID.
  async getProductById(id) {
    const data = await fs.readFile(this.productsFile, "utf8"); // Lee el contenido del archivo de productos.
    const products = JSON.parse(data); // Convierte el contenido en un array de productos.

    const product = products.find((p) => p.id == id); // Busca el producto con el ID especificado.

    if (product) {
      return product; // Devuelve el producto encontrado.
    } else {
      throw new Error("Producto no encontrado");
    }
  }

  // Verifica si un código de producto es único.
  async isProductCodeUnique(code) {
    const data = await fs.readFile(this.productsFile, "utf8"); // Lee el contenido del archivo de productos.
    const products = JSON.parse(data); // Convierte el contenido en un array de productos.

    return !products.some((product) => product.code === code); // Devuelve true si el código es único, false si ya existe.
  }

  // Agrega un nuevo producto y lo guarda en el archivo de productos.
  async addProduct(newProductData) {
    const data = await fs.readFile(this.productsFile, "utf8"); // Lee el contenido del archivo de productos.
    const products = JSON.parse(data); // Convierte el contenido en un array de productos.

    // Verifica si el código es único
    if (await this.isProductCodeUnique(newProductData.code)) {
      const newProductId = products.length + 1;
      const newProduct = {
        id: newProductId,
        ...newProductData,
      }; // Crea un nuevo producto con un ID único y los datos proporcionados.

      products.push(newProduct); // Agrega el nuevo producto a la lista de productos.

      await fs.writeFile(
        this.productsFile,
        JSON.stringify(products, null, 2),
        "utf8"
      ); // Guarda la lista de productos actualizada en el archivo.

      return newProduct; // Devuelve el nuevo producto.
    } else {
      throw new Error("El código de producto ya existe.");
    }
  }

  // Actualiza un producto por su ID y guarda los cambios en el archivo de productos.
  async updateProduct(id, updatedProductData) {
    const data = await fs.readFile(this.productsFile, "utf8"); // Lee el contenido del archivo de productos.
    const products = JSON.parse(data); // Convierte el contenido en un array de productos.

    const productIndex = products.findIndex((p) => p.id == id); // Busca el índice del producto con el ID especificado.

    if (productIndex === -1) {
      throw new Error("Producto no encontrado");
    }

    updatedProductData.id = id; // Asigna el ID al objeto actualizado.

    products[productIndex] = updatedProductData; // Reemplaza el producto existente con los datos actualizados.

    await fs.writeFile(
      this.productsFile,
      JSON.stringify(products, null, 2),
      "utf8"
    ); // Guarda la lista de productos actualizada en el archivo.

    return updatedProductData; // Devuelve los datos del producto actualizado.
  }

  // Elimina un producto por su ID y guarda los cambios en el archivo de productos.
  async deleteProduct(id) {
    const data = await fs.readFile(this.productsFile, "utf8"); // Lee el contenido del archivo de productos.
    const products = JSON.parse(data); // Convierte el contenido en un array de productos.

    const productIndex = products.findIndex((p) => p.id == id); // Busca el índice del producto con el ID especificado.

    if (productIndex === -1) {
      throw new Error("Producto no encontrado");
    }

    products.splice(productIndex, 1); // Elimina el producto de la lista.

    await fs.writeFile(
      this.productsFile,
      JSON.stringify(products, null, 2),
      "utf8"
    ); // Guarda la lista de productos actualizada en el archivo.
  }
}

export default ProductManager;

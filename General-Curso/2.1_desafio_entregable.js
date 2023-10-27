class ProductManager {
  constructor() {
    this.products = [];
    this.nextProductId = 1;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    // Validar que todos los campos sean obligatorios
    if (
      !title ||
      !description ||
      !price ||
      !thumbnail ||
      !code ||
      stock === undefined
    ) {
      console.error("Todos los campos son obligatorios.");
      return;
    }

    // Validar que el código no esté repetido
    if (this.products.some((product) => product.code === code)) {
      console.error(`El producto con código ${code} ya existe.`);
      return;
    }

    // Agregar el producto con un id autoincrementable
    const newProduct = {
      id: this.nextProductId++,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products.push(newProduct);
    console.log(`Producto con código ${code} agregado correctamente.`);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      return product;
    } else {
      console.error("Producto no encontrado.");
    }
  }
}

// Ejemplo de uso
const productManager = new ProductManager();

productManager.addProduct(
  "Laptop",
  "Laptop de última generación",
  999.99,
  "laptop.jpg",
  "LPT001",
  10
);
productManager.addProduct(
  "Impresora",
  "Laptop de última generación",
  599.99,
  "Impresora.jpg",
  "IMP001",
  100
);
productManager.addProduct(
  "Smartphone",
  "Smartphone avanzado",
  599.99,
  "smartphone.jpg",
  "SPH001",
  15
);

const allProducts = productManager.getProducts();
console.log("Todos los productos:", allProducts);

const productById = productManager.getProductById(); // Cambiar el ID según corresponda
if (productById) {
  console.log("Producto por ID:", productById);
}

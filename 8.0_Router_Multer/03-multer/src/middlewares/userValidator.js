// Ejemplo de un middleware que lo vamos a utilizar en la Ruta products.router.js / Endpoint POST
export const userValidator = (req, res, next) => {
  const user = req.body;
};

// Tener en cuenta que la logica no esta programada, es solo un ejemplo de como se utilizaria el middleware

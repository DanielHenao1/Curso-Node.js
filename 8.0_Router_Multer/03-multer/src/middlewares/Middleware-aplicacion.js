export const middlewareAplicacion = (req, res, next) => {
    console.log(req.method);
    console.log(req.url);
    console.log(new Date().toLocaleDateString());
    next();
  }
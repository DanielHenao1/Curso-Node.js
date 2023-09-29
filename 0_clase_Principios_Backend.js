// ------------------------------ PRINCIPIOS DE PROGRAMACION BACKEND ---------------------------------- //

// Hacemos pruebas con diferentes console()

console.warn("Ojo esto es una alerta no puedes hacer eso");
console.error("Has cometido un error terrible");
// console.clear()
console.log("Daniel");
console.log(1);
console.log(true);
console.log(null);
console.log(undefined);
console.log([10, 20, "Henao", 50, "niño"]);
console.log({ nombre: "Daniel", apellido: "Henao", edad: 40 });

// Declaramos variables para almacenar datos
let nombre = "Pepe";
let apellido = "Perez";
let edad = 20;
let seriesPeliculas = ["Stranger Things", " Inception", " Breaking Bad"];
let precio = 99.99;

// Definimos variable para almacenar películas favoritas:
let misPeliculasFavoritas = [
  {
    nombre: "Inception",
    anioEstreno: 2010,
    protagonistas: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
  },
  {
    nombre: "The Shawshank Redemption",
    anioEstreno: 1994,
    protagonistas: ["Tim Robbins", "Morgan Freeman"],
  },
  {
    nombre: "The Dark Knight",
    añoEstreno: 2008,
    protagonistas: ["Christian Bale", "Heath Ledger", "Gary Oldman"],
  },
];

// Imprimimos los valores por consola
console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(seriesPeliculas);
console.log(precio);

// Mostramos detalles de las películas por consola
for (let i = 0; i < misPeliculasFavoritas.length; i++) {
  let pelicula = misPeliculasFavoritas[i];
  console.log(
    `Pelicula: ${pelicula.nombre}, \naño de estreno: ${pelicula.añoEstreno}, \nProtagonista: ${pelicula.protagonistas}`
  );
  console.log("\n");
}

// Incrementamos la edad en 1
edad++;

// Creamos una nueva variable con un valor "string" y lo agragamos a la lista con el metodo push()
let nuevaSerie = " the fall of the white hawk.";
seriesPeliculas.push(nuevaSerie);

// Imprimimos los valores actualizados por consola
console.log("\nDespues de los cambios\n");
console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(seriesPeliculas);
console.log(precio);

// Imprimiendo los valores concatenados
console.log(`Su nombre es: ${nombre} ${apellido} y tiene ${edad} años, tiene una store de venta de 
películas, en el momento disponibles: ${seriesPeliculas} los precios comiensan desde: $${precio} USD`);

// ------------------------------ PRINCIPIOS BASICOS DE JAVASCRIPT ---------------------------------- //

// Creamos un array con 4 objetos
let people = [
  { id: 1, first_name: "Daniel", last_name: "Henao", age: 40, gender: "M" },
  { id: 2, first_name: "Samuel", last_name: "Henao", age: 9, gender: "M" },
  { id: 3, first_name: "Diana", last_name: "Quevedo", age: 39, gender: "F" },
  { id: 4, first_name: "Andres", last_name: "Henao", age: 31, gender: "M" },
];

// Declaramos una variable person donde almacenamos la iteracion del array people y lo recorremos con el metodo find()
// El cual recibe un callback con un parametro persona.
let person = people.find((e) => {
  // Creamos una variable anonima local test
  let test;
  // En la variable test
  test = e.id === 2;
  // Para poder mostrar la busqueda por find retornamos la variable test
  return test;
});
console.log(person);

// -------------------------- EJEMPLOS DE VARIABLES LET GLOBALES Y LOCALES ------------------------------ //

// Ejemplo 1

// Declaramos una variable global
let i = 0;

// declaramos una funcion flecha
let count = () => {
  // Reasignamos la variable global i
  i = 1;
  // Declaramos una variable local j
  let j = 2;
  // Utilizamos el loop if y imprimimos la por consola()
  if (true) {
    console.log(i); // 1
    console.log(j); // 2
  }
};
// Llamamos a la funcion
count();

// Ejemplo 2

let count2 = () => {
  let i = 0;
  if (true) {
    let i = 1;
    console.log(i); // Resultado por que esta dentro del bloque de if
  }
  console.log(i); // Resulatado va ser 0 por que se encuentra dentro del bloque global de count2
};
count2();

// Ejemplo 3

let count3 = () => {
  if (true) {
    let i = 1;
  }
  console.log(i); // Esto no arriojaria un error por la variable esta definida solo dentro del bloque if
};
count3();

// -------------------------- EJEMPLOS DE VARIABLES LET GLOBALES Y LOCALES ------------------------------ //

// EJEMPLO 1

// Lo siguiente no se puede hacer generaria error por que no se puede reasignar valores a una constante

// Declaramos la constante
const e = 0;
// Le reasignamos el valor, lo que nos generaria error
// e = 1;

// -------------------------- EJEMPLO 1 EN VIVO ------------------------------ //

const cadena = "Daniel Henao";
console.log(cadena);

// cadena = "Orlando"  // Esto arrojaria error

// No se puede reasignar el valor de una constante, solo se podria cambiar si fuera de la siguiente manera

// -------------------------- EJEMPLO 2 CON UN OBJETO ------------------------------ //

// Declaramos una constante con un objeto
const cadena2 = { nombre: "Daniel" };
// Creamos una variable donde almacenamos la modificacion del nombre
let cadena2_modificada = (cadena2.nombre = "Orlando");
// imprimos con el cambio
console.log(cadena2_modificada);

// -------------------------- EJEMPLO 3 CON UN ARRAY DE NUMEROS ------------------------------ //

// Declaramos el array
const array = [10, 20, 30, 40, 50, 100];
// Modificamos los valores de cada elemento, llamandolos por su indice
array[0] = 5;
array[5] = 1;
// Imprimimos con los respectivos cambios
console.log(array); // [5, 20, 30, 40, 50, 1]

// -------------------------- EJEMPLO 4 CON UNA FUNCION ------------------------------ //

// Forma uno asignando los valores dentro de la funcion
function sumar() {
  let numero1 = 100;
  let numero2 = 100;
  let resultado = numero1 + numero2;
  return resultado;
}
let resultado1 = sumar();
console.log(resultado1);

// Forma dos asignando los valores por parametro

function sumar2(a, b) {
  let resultado = a + b;
  return resultado;
}

let resultado2 = sumar2(100, 100);
console.log(resultado2);

// Forma 3 con funcion flecha y los valores dentro de la funcion

const sumar3 = () => {
  let num1 = 100;
  let num2 = 100;
  let resultado = num1 + num2;
  return resultado;
};

let resultado3 = sumar3();
console.log(resultado3);

// Forma 4 con funcion flecha y los valores por parametro

const sumar4 = (a, b) => {
  return a + b;
};

let resultado4 = sumar4(100, 100);
console.log(resultado4);

// Forma 5 con funcion flecha y los valores por parametro y con RETURN IMPLICITO

const sumar5 = (a, b) => a + b;

let resultado5 = sumar5(100, 100);
console.log(resultado5);

// -------------------------- EJEMPLO 5 SCOPE VALIDO ------------------------------ //

const x = "DIOS es tu pastor";

const cadena3 = () => {
  console.log(x);
};
cadena3();
console.log(`Si tienes claro que ${x} nada te faltara....\n`);

// -------------------------- HANDS ON LAB FUNCIONES ------------------------------ //

const mostrarLista = (lista) => {
  if (lista.length === 0) {
    console.log("La lista está vacía\n");
  } else {
    lista.forEach((elemento, indice) => {
      console.log(`Elemento ${indice + 1}: ${elemento}`);
    });
  }

  return `Longitud de la lista: ${lista.length}\n`;
};

// Casos de prueba
const listaVacia = [];
const listaConElementos = ["Manzana", "Banana", "Naranja"];

// Forma uno de imprimirla sin almacenarla en una variable
console.log(mostrarLista(listaVacia));
console.log(mostrarLista(listaConElementos));

// Forma dos almacenando el resultado en una variable
let listaVacia2 = mostrarLista(listaVacia);
console.log(listaVacia2);

let listaConElementos2 = mostrarLista(listaConElementos);
console.log(listaConElementos2);

// -------------------------- DECLARACION DE CLASES ------------------------------ //

// Ejemplo de una estructura de clases con metodos y variables //

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  static especie = "Humano";

  saludar = () => console.log(`¡Hola, soy ${this.nombre}, mucho gusto`);

  getEspecie = () =>
    console.log(`Aunque no lo creas, soy un ${Persona.especie}`);
}

let persona1 = new Persona("Daniel");
let persona2 = new Persona("Orlando");
persona1.saludar(); /* Imprime Hola Daniel */
persona2.saludar(); /* Imprime Hola Orlando */
persona1.getEspecie(); /* Aunque no lo creas, soy un Humano*/
persona2.getEspecie(); /* Aunque no lo creas, soy un Humano*/

// -------------------------- HANDS ON LAB CON CLASES ------------------------------ //

// Declaramos la clase contador
class Contador {
  constructor(nombre) {
    this.responsable = nombre;
    this.cuentaIndividual = 0;
    Contador.contadorGlobal = 0; // Variable estática para el contador global
  }

  // Metodo 1
  getResponsable = () => this.responsable;

  // Metodo 2
  contar = () => {
    this.cuentaIndividual++;
    Contador.contadorGlobal++;
  };

  // Metodo 3
  getCuentaIndividual = () => this.cuentaIndividual;

  // Metodo 4 static
  static getCuentaGlobal = () => Contador.contadorGlobal;
}

// Creación de instancias de la clase Contador
const contador1 = new Contador("Pedro");
const contador2 = new Contador("Juan");

// Utilización de los métodos
contador1.contar(); // 1
contador1.contar(); // 1 + 1 = 2
contador2.contar(); // 1

// Imprimiendo por consola los resultados
console.log(
  `Cuenta individual del contador ${contador1.getResponsable()} es: ${contador1.getCuentaIndividual()}`
); // 2
console.log(
  `Cuenta individual del contador ${contador2.getResponsable()} es: ${contador2.getCuentaIndividual()}`
); // 1
console.log(`Contador global: ${Contador.getCuentaGlobal()}`); // 3

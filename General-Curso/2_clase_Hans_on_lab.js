class TicketManager {
  constructor() {
    this.eventos = [];
    this.precioBaseDeGanancia = 0;
  }

  getEventos() {
    return this.eventos;
  }

  agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    // Calculamos el precio final con el 15% de aumento
    const precioConAumento = precio * 1.15;

    // Creamos un nuevo evento con un id autoincrementable
    const evento = {
      id: this.eventos.length + 1,
      nombre,
      lugar,
      precio: precioConAumento,
      capacidad,
      fecha,
      participantes: [],
    };

    // Agregamos el evento al arreglo de eventos
    this.eventos.push(evento);

    return evento;
  }

  agregarUsuario(idEvento, idUsuario) {
    const evento = this.eventos.find((e) => e.id === idEvento);

    if (!evento) {
      throw new Error("El evento no existe.");
    }

    if (evento.participantes.includes(idUsuario)) {
      throw new Error("El usuario ya está registrado en este evento.");
    }

    evento.participantes.push(idUsuario);
  }

  ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
    const eventoExistente = this.eventos.find((e) => e.id === idEvento);

    if (!eventoExistente) {
      throw new Error("El evento no existe.");
    }

    // Creamos una copia del evento con las nuevas propiedades
    const nuevoEvento = {
      ...eventoExistente,
      id: this.eventos.length + 1, // Nuevo id autoincrementable
      lugar: nuevaLocalidad,
      fecha: nuevaFecha,
      participantes: [], // Participantes vacío en el nuevo evento
    };

    this.eventos.push(nuevoEvento);

    return nuevoEvento;
  }
}

// Ejemplo de uso:
// Creamos una instancia
const ticketManager = new TicketManager();

// Para el evento1, proporciona todos los parámetros requeridos
const evento1 = ticketManager.agregarEvento(
  "Concierto",
  "Estadio",
  100,
  50,
  new Date()
);

ticketManager.agregarUsuario(evento1.id, 1);
ticketManager.agregarUsuario(evento1.id, 2);
ticketManager.agregarUsuario(evento1.id, 3);
ticketManager.agregarUsuario(evento1.id, 4);

// Para el evento2, proporciona todos los parámetros requeridos
const evento2 = ticketManager.agregarEvento(
  "Teatro",
  "Teatro Municipal",
  50,
  30,
  new Date()
);

ticketManager.agregarUsuario(evento2.id, 3);

const nuevoEvento = ticketManager.ponerEventoEnGira(
  evento1.id,
  "Otro Estadio",
  new Date("2023-12-01")
);
ticketManager.agregarUsuario(nuevoEvento.id, 5);

console.log(ticketManager.getEventos());

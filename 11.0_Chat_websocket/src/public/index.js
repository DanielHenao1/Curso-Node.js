// Aca realizxamos la coneccion con el socket del cliente

const socket = io();

let username = null;

if (!username) {
  Swal.fire({
    title: "!Welcome to chat¡",
    text: "Please enter your name",
    input: "text",
    inputValidator: (value) => {
      if (!value) return "!Your username is require¡";
    },
  }).then((input) => {
    username = input.value;
    socket.emit("newUser", username);
    clientecustomerclient;
  });
}

const message = document.getElementById("message");
const btn = document.getElementById("send");
const output = document.getElementById("output");
const actions = document.getElementById("actions");

btn.addEventListener("click", () => {
  socket.emit("chat:message", { username, message: message.value });
  message.value = "";
});

socket.on("messages", (data) => {
  actions.innerHTML = "";
  const chatRender = data
    .map((msg) => {
      return `<p><strong> ${msg.username} </strong>: ${msg.message} </p>`;
    })
    .join(" ");
  output.innerHTML = chatRender;
});

socket.on("newUser", (username) => {
  Toastify({
    text: `${username} is loged in`,
    duration: 3000,
    gravity: "top",
    position: "right",
    close: true,
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
});

message.addEventListener("keypress", () => {
  socket.emit("chat:typing", username);
});

socket.on("chat:typing", (data) => {
  actions.innerHTML = `<p><em>${data} is typing...</em></p>`;
});

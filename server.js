// import app from "express";
const app = require("express")();
// do not need to npm install, it is already in NodeJS
const http = require("http").Server(app);
const io = require("socket.io")(http);

const PATH = process.env.PORT || 3000;

// store users
let users = [];
// store messages
let messages = [];
let index = 0;

io.on("connection", socket => {
  socket.emit("loggedIn", {
    users: users.map(s => s.username),
    messages: messages
  });
  socket.on("newuser", username => {
    console.log(`${username} has arrived at the party.`);
    socket.username = username;
    users.push(socket);

    io.emit("userOnline", socket.username);
  });

  socket.on("msg", msg => {
    let message = {
      index: index,
      username: socket.username,
      msg: msg
    };

    messages.push(message);

    io.emit("msg", message);

    index++;
  });

  // Disconnect
  socket.on("disconnect", () => {
    console.log(`${socket.username} has left the party.`);
    io.emit("userLeft", socket.username);
    users.splice(users.indexOf(socket), 1);
  });
});

http.listen(PATH, () => {
  console.log("Listening on port %s", PATH);
});

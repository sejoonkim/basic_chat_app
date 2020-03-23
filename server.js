// import app from "express";
const app = require("express")();
// do not need to npm install, it is already in NodeJS
const http = require("http").Server(app);
const io = require("socket.io")(http);

const PATH = process.env.PORT || 3000;

http.listen(PATH, () => {
  console.log("Listening on port %s", PATH);
});

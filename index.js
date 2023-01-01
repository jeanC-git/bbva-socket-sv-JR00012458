const cors = require("cors");
const express = require("express");
const path = require("path");
require("dotenv").config();
// App express
const app = express();

app.use(
  cors({
    origin: ["*"],
  })
);
// NodeServer
const server = require("http").createServer(app);
module.exports.io = require("socket.io")(server, { cors: { origin: "*" } });

require("./sockets/socket");

// Path público
const publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);

  console.log("Servidor corriendo en puerto ::", process.env.PORT);
});

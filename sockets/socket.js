const { io } = require("../index");

let qty_connected = 0;


io.on("connection", (client) => {
  qty_connected++;
//   console.log(`Cliente ${qty_connected} conectado ${client.id ?? undefined}`);

  client.on("disconnect", () => {
    // console.log("Cliente desconectado");
    qty_connected--;
  });

//   client.on("mensaje", (payload) => {
//     console.log("Mensaje", payload);

//     io.emit("nuevo-mensaje", { admin: "Nuevo mensaje" });
//   });

  client.on(
    `server-update-balance`,
    ({ new_bbva_balance, new_external_balance }) => {

      io.emit("update-balance", {
        new_bbva_balance,
        new_external_balance,
      });

    }
  );
});

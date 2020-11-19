const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
// modulos creados
const usuario = require("./routes/usuario");
const empusuario = require("./routes/empusuario");
const auth = require("./routes/auth");
const ciudad = require("./routes/ciudad");
const categoria = require("./routes/categoria")
//app
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/usuario/", usuario);
app.use("/api/empusuario/", empusuario);
app.use("/api/auth/", auth);
app.use("/api/ciudad/", ciudad);
app.use("/api/categoria/",categoria)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("ejecutando en puerto: ", port);
});
//registro en Mongo
mongoose
  .connect("mongodb://localhost/finapp", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("conexion con mongo: on");
  })
  .catch((error) => {
    console.log("conexion con mongo: off");
  });

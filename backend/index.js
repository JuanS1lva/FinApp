const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
// modulos creados
const usuario = require("./routes/usuario");
const empusuario = require("./routes/empusuario");
const auth = require("./routes/auth");
const departamento = require("./routes/departamento");
const ciudad = require("./routes/ciudad");
const categoria = require("./routes/categoria")
const sede = require("./routes/sede");
const gasto = require("./routes/gasto");
const presupuesto = require("./routes/presupuesto");
//app
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/usuario/", usuario);
app.use("/api/empusuario/", empusuario);
app.use("/api/auth/", auth);
app.use("/api/departamento/", departamento);
app.use("/api/ciudad/", ciudad);
app.use("/api/categoria/",categoria)
app.use("/api/sede/", sede);
app.use("/api/gasto/", gasto);
app.use("/api/presupuesto/", presupuesto);

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

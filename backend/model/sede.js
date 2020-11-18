//modulos internos
const mongoose = require("mongoose");

const esquemaSede = new mongoose.Schema({
  idUsuario: String,
  nombre: String,
  descripcion: String,
  idUsuarioResponsable: String,
  idCategoria: String,
  habilitado: String,
  fechaRegistro: {
    type: Date,
    default: Date.now,
  },
});
//Creamos los exports
const Sede = mongoose.model("sede", esquemaSede);
module.exports = Sede;
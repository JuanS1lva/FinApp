//modulos internos
const mongoose = require("mongoose");
//esquema
const esquemaEmpresa = new mongoose.Schema({
  naturaleza: {
    type: String,
  },
  tipoDocumento: {
    type: String,
  },
  numeroDocumento: {
    type: String,
  },
  razonSocial: {
    type: String,
  },
  direccion: {
    type: String,
  },
  idDepartamento: {
    type: String,
  },
  idCiudad: {
    type: String,
  },
  habilitado: {
    type: Boolean,
  },
  fechaRegistro: {
    type: Date,
    default: Date.now,
  },
});
//crear los exports
const Empresa = mongoose.model("empresa", esquemaEmpresa);
module.exports = Empresa;

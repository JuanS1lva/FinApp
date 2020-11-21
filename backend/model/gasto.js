//modulos internos
const mongoose = require("mongoose");
// esquema
const esquemaGasto = new mongoose.Schema({
  idUsuario: String,
  idEmpresa: String,
  numeroReferencia: String,
  fecha: Date,
  idSede: String,
  idUsuarioResponsable: String,
  proveedor: String,
  montoGasto: Number,
  descripcion: String,
  idcategoria: String,
  fechaRegistro: {
    type: Date,
    default: Date.now,
  },
});
//Creamos los exports
const Gasto = mongoose.model("gasto", esquemaGasto);
module.exports = Gasto;

//modulos internos
const mongoose = require("mongoose");
// esquema
const esquemaGasto = new mongoose.Schema({
  idUsuario: String,
  idEmpresa: String,
  numeroReferencia: String,
  sede: String,
  usuarioResponsable: String,
  proveedor: String,
  monto: Number,
  descripcion: String,
  categoria: String,
  subCategorias:String,
  fechaRegistro: {
    type: Date,
    default: Date.now,
  },
});
//Creamos los exports
const Gasto = mongoose.model("gasto", esquemaGasto);
module.exports = Gasto;

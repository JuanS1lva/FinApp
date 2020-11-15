//modulos internos
const mongoose = require("mongoose");

//esquema
const esquemaDepartamento = new mongoose.Schema({
  nombre: {
    type: String,
  },
  codigo: {
    type: String,
  },
});
//crear los exports
const Departamento = mongoose.model("departamento", esquemaDepartamento);
module.exports = Departamento;

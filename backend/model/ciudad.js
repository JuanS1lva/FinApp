//modulos internos
const mongoose = require("mongoose");

//esquema
const esquemaCiudad = new mongoose.Schema({
  nombre: {
    type: String,
  },
  codigo: {
    type: String,
  },
});
//crear los exports
const Ciudad = mongoose.model("ciudad", esquemaCiudad);
module.exports = Ciudad;

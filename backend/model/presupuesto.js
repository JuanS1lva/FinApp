
const mongoose = require('mongoose')
const esquemaPresupuesto = new mongoose.Schema({
  idEmpresa: {
    type:String
  },
  presupuesto: {
    type: Number
  },
  presupuestoCategorias: {
    type: Array
  },
  descripcion: {
    type:String
  },
  fecha:{
    type:Date,
    default: Date.now
  }
})
//Creamos los exports
const Presupuesto = mongoose.model("presupuesto", esquemaPresupuesto)
module.exports = Presupuesto
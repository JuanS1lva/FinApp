
const mongoose = require('mongoose')
const esquemaCategoria = new mongoose.Schema({
  idEmpresa: {
    type:String
  },
  nombreCategoria: {
    type:String
  },
  subCategorias: {
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
const Categoria = mongoose.model("categoria", esquemaCategoria)
module.exports = Categoria
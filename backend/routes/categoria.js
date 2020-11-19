//modulos de node
const express = require("express")
const router = express.Router()
//
const Categoria = require("../model/Categoria")
const {Usuario} = require("../model/usuario")
const auth = require("../middleware/auth")
const { Mongoose } = require("mongoose")


// Listar - Obtener
router.get('/listaCategorias',auth,async(req,res)=>{
  const usuario = await Usuario.findById(req.usuario._id)
  if(!usuario) return res.status(401).send("usuario no existe en DB")
  const categoria = await Categoria.find({"idEmpresa":req.usuario.idEmpresa})
  res.send(categoria)
})


//Actualizar
router.put('/',auth,async(req,res)=>{
  const usuario = await Usuario.findById(req.usuario._id)
  if(!usuario) return res.status(401).send("el usuario no existe")
  const categoria = await Categoria.findByIdAndUpdate(
    req.body._id,
    {
      nombreCategoria:req.body.nombreCategoria,
      subCategorias:req.body.subCategorias,
      descripcion: req.body.descripcion,
    },
    {
      new: true
    }
  )
  if(!categoria){
    return  res.status(401).send("no hay actividad asignada")
  }
  res.status(200).send(categoria)
})


//Borrar
router.delete("/:_id", auth, async (req, res) => {
  // Buscamos el usuario
  const usuario = await Usuario.findById(req.usuario._id);
  // Si no existe el usuario
  if (!usuario) return res.status(401).send("No existe usuario en bd");
  // Eliminamos actividad asignada al usuario
  const categoria = await Categoria.findByIdAndDelete(req.params._id);
  // si no existe la actividad
  if (!categoria) return res.status(401).send("No hoy categoria con ese ID");
  // Si se encuentra la actividad
  res.status(200).send({ message: "Categoria eliminada" });
});



//Crear
router.post('/', auth ,async(req,res)=>{
  const usuario = await Usuario.findById(req.usuario._id) 
  if(!usuario) return res.status(401).send("el usuario no existe")
  const categoria = new Categoria({
    idEmpresa: usuario.idEmpresa,
    nombreCategoria:req.body.nombreCategoria,
    subCategorias:req.body.subCategorias,
    descripcion: req.body.descripcion,
  })
  const result = await categoria.save()
  res.status(200).send(result)
})


module.exports = router
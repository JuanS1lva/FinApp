//modulos de node
const express = require("express")
const router = express.Router()
//
const Presupuesto = require("../model/Presupuesto")
const {Usuario} = require("../model/usuario")
const auth = require("../middleware/auth")
const { Mongoose } = require("mongoose")


// Listar - Obtener
router.get('/listaPresupuestos',auth,async(req,res)=>{
  const usuario = await Usuario.findById(req.usuario._id)
  if(!usuario) return res.status(401).send("usuario no existe en DB")
  const presupuesto = await Presupuesto.find({"idEmpresa":req.usuario.idEmpresa})
  res.send(presupuesto)
})


//Actualizar
router.put('/',auth,async(req,res)=>{
  const usuario = await Usuario.findById(req.usuario._id)
  if(!usuario) return res.status(401).send("el usuario no existe")
  const presupuesto = await Presupuesto.findByIdAndUpdate(
    req.body._id,
    {
      presupuesto:req.body.presupuesto,
      presupuestoCategorias:req.body.presupuestoCategorias,
      descripcion: req.body.descripcion,
    },
    {
      new: true
    }
  )
  if(!presupuesto){
    return  res.status(401).send("no hay actividad asignada")
  }
  res.status(200).send(presupuesto)
})


//Borrar
router.delete("/:_id", auth, async (req, res) => {
  // Buscamos el usuario
  const usuario = await Usuario.findById(req.usuario._id);
  // Si no existe el usuario
  if (!usuario) return res.status(401).send("No existe usuario en bd");
  // Eliminamos actividad asignada al usuario
  const presupuesto = await Presupuesto.findByIdAndDelete(req.params._id);
  // si no existe la actividad
  if (!presupuesto) return res.status(401).send("No hoy presupuesto con ese ID");
  // Si se encuentra la actividad
  res.status(200).send({ message: "Presupuesto eliminada" });
});



//Crear
router.post('/', auth ,async(req,res)=>{
  const usuario = await Usuario.findById(req.usuario._id) 
  if(!usuario) return res.status(401).send("el usuario no existe")
  const presupuesto = new Presupuesto({
    idEmpresa: usuario.idEmpresa,
    presupuesto:req.body.presupuesto,
    presupuestoCategorias:req.body.presupuestoCategorias,
    descripcion: req.body.descripcion,
  })
  const result = await presupuesto.save()
  res.status(200).send(result)
})


module.exports = router
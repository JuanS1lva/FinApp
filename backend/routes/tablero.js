// Ejemplo para hacer el crud



// //modulos de node
// const express = require("express")
// const router = express.Router()
// //
// const Tablero = require("../model/tablero")
// const {Usuario} = require("../model/usuario")
// const auth = require("../middleware/auth")
// const { Mongoose } = require("mongoose")
// const cargarArchivo = require("../middleware/file")

// router.get('/lista',auth,async(req,res)=>{
//   const usuario = await Usuario.findById(req.usuario._id)
//   if(!usuario) return res.status(401).send("usuario no existe en DB")
//   const tablero = await Tablero.find({"idUsuario":req.usuario._id})
//   res.send(tablero)
// })

// router.put('/',auth,async(req,res)=>{
//   const usuario = await Usuario.findById(req.usuario._id)
//   if(!usuario) return res.status(401).send("el usuario no existe")
//   const tablero = await Tablero.findByIdAndUpdate(
//     req.body._id,
//     {
//       idUsuario: usuario._id,
//       nombre: req.body.nombre,
//       descripcion: req.body.descripcion,
//       estado: req.body.estado
//     },
//     {
//       new: true
//     }
//   )
//   if(!tablero){
//     return  res.status(401).send("no hay actividad asignada")
//   }
//   res.status(200).send(tablero)
// })

// router.delete("/:_id", auth, async (req, res) => {
//   // Buscamos el usuario
//   const usuario = await Usuario.findById(req.usuario._id);
//   // Si no existe el usuario
//   if (!usuario) return res.status(401).send("No existe usuario en bd");
//   // Eliminamos actividad asignada al usuario
//   const tablero = await Tablero.findByIdAndDelete(req.params._id);
//   // si no existe la actividad
//   if (!tablero) return res.status(401).send("No hoy actividad con ese ID");
//   // Si se encuentra la actividad
//   res.status(200).send({ message: "Actividad eliminada" });
// });

// //registrar act con img
// router.post("/cargarArchivo",cargarArchivo.single("sticker"),auth,async(req,res)=>{
//   const url = req.protocol+ "://" + req.get("host")
//   const usuario = await Usuario.findById(req.usuario._id)
//   if (!usuario) {
//     return res.status(401).send("no existe el usuario en db")
//   }
//   let rutaImagen  = null
//   if (req.file.filename) {
//     rutaImagen = url + "/public/" +req.file.filename
//   } else {
//     rutaImagen = null
//   }
//   const tablero = new Tablero({
//     idUsuario:usuario._id,
//     nombre:req.body.nombre,
//     descripcion:req.body.descripcion,
//     sticker:rutaImagen,
//     estado:req.body.estado
//   })
//   const result = await tablero.save()
//   res.status(200).send(result)
// })
// //
// router.post('/', auth ,async(req,res)=>{
//   const usuario = await Usuario.findById(req.usuario._id) 
//   if(!usuario) return res.status(401).send("el usuario no existe")
//   const tablero = new Tablero({
//     idUsuario: usuario._id,
//     nombre:req.body.nombre,
//     descripcion: req.body.descripcion,
//     estado: req.body.estado
//   })
//   const result = await tablero.save()
//   res.status(200).send(result)
// })


// module.exports = router
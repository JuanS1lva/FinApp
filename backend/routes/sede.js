//modulos de node
const express = require("express");
const router = express.Router();
//modulos internos
const Sede = require("../model/sede");
const { Usuario } = require("../model/usuario");
const auth = require("../middleware/auth");
// listar sede
router.get("/lista", auth, async (req, res) => {
  const usuario = await Usuario.findById(req.usuario._id);
  if (!usuario) return res.status(401).send("usuario no existe en DB");
  const sede = await Sede.find({ idUsuario: req.usuario._id, habilitado: true });
  res.send(sede);
});
// actualizar sede
router.put("/", auth, async (req, res) => {
  const usuario = await Usuario.findById(req.usuario._id);
  if (!usuario) return res.status(401).send("el usuario no existe");
  const sede = await Sede.findByIdAndUpdate(
    req.body._id,
    {
      idUsuario: usuario._id,
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      idUsuarioResponsable: req.body.idUsuarioResponsable,
      idCategoria: req.body.idCategoria,
      habilitado: req.body.habilitado,
    },
    {
      new: true,
    }
  );
  if (!sede) {
    return res.status(401).send("no hay sede asociada");
  }
  res.status(200).send(sede);
});
// eliminar sede
router.delete("/:_id", auth, async (req, res) => {
  // Buscamos el usuario
  const usuario = await Usuario.findById(req.usuario._id);
  // Si no existe el usuario
  if (!usuario) return res.status(401).send("No existe usuario en BD");
  // Eliminamos sede asociada al usuario
  const sede = await Sede.findByIdAndDelete(req.params._id);
  // si no existe la sede
  if (!sede) return res.status(401).send("No hay sede con ese ID");
  // Si se encuentra la actividad
  res.status(200).send({ message: "Sede eliminada correctamente!" });
});
// crear sede
router.post("/", auth, async (req, res) => {
  const usuario = await Usuario.findById(req.usuario._id);
  if (!usuario) return res.status(401).send("el usuario no existe");

  // si existe el usuario procedemos a crear la sede

  // Validar si existe una sede con el mismo nombre y asociado al usuario en BD
  let sede = await Sede.findOne({
    idUsuario: usuario._id,
    nombre: req.body.nombre,
  });
  // si la sede existe en bd con el mismo nombre
  if (sede) return res.status(400).send("La sede ya se encuentra registrada");
  // si sede no existe
  sede = new Sede({
    idUsuario: usuario._id,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    idUsuarioResponsable: req.body.idUsuarioResponsable,
    idCategoria: req.body.idCategoria,
    habilitado: req.body.habilitado,
  });
  const result = await sede.save();
  res.status(200).send(result);
});

module.exports = router;

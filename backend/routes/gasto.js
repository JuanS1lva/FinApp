//modulos de node
const express = require("express");
const router = express.Router();
//modulos internos
const Gasto = require("../model/gasto");
const { Usuario } = require("../model/usuario");
const auth = require("../middleware/auth");
// listar gasto por usuario
router.get("/lista", auth, async (req, res) => {
  const usuario = await Usuario.findById(req.usuario._id);
  if (!usuario) return res.status(401).send("usuario no existe en DB");
  const gasto = await Gasto.find({ idUsuario: req.usuario._id });
  res.send(gasto);
});
// listar gasto por empresa
router.get("/listaemp", auth, async (req, res) => {
  const usuario = await Usuario.findById(req.usuario._id);
  if (!usuario) return res.status(401).send("usuario no existe en DB");
  const gasto = await Gasto.find({ idEmpresa: req.usuario.idEmpresa });
  res.send(gasto);
});
// actualizar gasto
router.put("/", auth, async (req, res) => {
  const usuario = await Usuario.findById(req.usuario._id);
  if (!usuario) return res.status(401).send("el usuario no existe");
  const gasto = await Gasto.findByIdAndUpdate(
    req.body._id,
    {
      idUsuario: usuario._id,
      idEmpresa: usuario.idEmpresa,
      numeroReferencia: req.body.numeroReferencia,
      fecha: req.body.fecha,
      idSede: req.body.idSede,
      idUsuarioResponsable: req.body.idUsuarioResponsable,
      proveedor: req.body.proveedor,
      montoGasto: req.body.montoGasto,
      descripcion: req.body.descripcion,
      idcategoria: req.body.idcategoria,
    },
    {
      new: true,
    }
  );
  if (!gasto) {
    return res
      .status(401)
      .send("no fue posible actualizar el registro de gasto");
  }
  res.status(200).send(gasto);
});
// eliminar gasto
router.delete("/:_id", auth, async (req, res) => {
  // Buscamos el usuario
  const usuario = await Usuario.findById(req.usuario._id);
  // Si no existe el usuario
  if (!usuario) return res.status(401).send("No existe usuario en BD");
  // Eliminamos gasto asociado al usuario
  const gasto = await Gasto.findByIdAndDelete(req.params._id);
  // si falla la acción
  if (!gasto)
    return res.status(401).send("No fue posible eliminar el registro de gasto");
  // Si se encuentra la actividad
  res.status(200).send({ message: "Gasto eliminado correctamente!" });
});
// crear gasto
router.post("/", auth, async (req, res) => {
  const usuario = await Usuario.findById(req.usuario._id);
  if (!usuario) return res.status(401).send("el usuario no existe");

  // si existe el usuario procedemos a crear el gasto

  // Validar si existe un registro de gasto con la misma referencia en BD
  let gasto = await Gasto.findOne({
    idUsuario: usuario._id,
    numeroReferencia: req.body.numeroReferencia,
  });
  // si el gasto existe asociado al usuario en bd
  if (gasto)
    return res
      .status(400)
      .send(
        "Ya existe un gasto creado con el número de referencia: " +
          req.body.numeroReferencia
      );
  // si gasto no existe
  gasto = new Gasto({
    idUsuario: usuario._id,
    idEmpresa: usuario.idEmpresa,
    numeroReferencia: req.body.numeroReferencia,
    fecha: req.body.fecha,
    idSede: req.body.idSede,
    idUsuarioResponsable: req.body.idUsuarioResponsable,
    proveedor: req.body.proveedor,
    montoGasto: req.body.montoGasto,
    descripcion: req.body.descripcion,
    idcategoria: req.body.idcategoria,
  });
  const result = await gasto.save();
  res.status(200).send(result);
});

module.exports = router;

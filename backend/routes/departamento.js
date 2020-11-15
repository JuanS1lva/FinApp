//modulos de node
const express = require("express");
const router = express.Router();

const Departamento = require("../model/departamento");
const { Usuario } = require("../model/usuario");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  const usuario = await Usuario.findById(req.usuario._id);
  if (!usuario) return res.status(401).send("el usuario no existe");
  const departamento = new Departamento({
    nombre: req.body.nombre,
    codigo: req.body.descripcion,
  });
  const result = await departamento.save();
  res.status(200).send(result);
});

module.exports = router;

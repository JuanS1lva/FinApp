const express = require("express");
const router = express.Router();
//modulos creados
const { Usuario } = require("../model/usuario");
const auth = require("../middleware/auth");
//ruta
router.post("/", auth, async (req, res) => {
  let usuario = await Usuario.findOne({ correo: req.body.correo });
  if (usuario) return res.status(400).send("El usuario ya existe en DB");

  usuario = new Usuario({
    idEmpresa: req.usuario.idEmpresa,
    nombreApellido: req.body.nombreApellido,
    tipoDocumento: req.body.tipoDocumento,
    numeroDocumento: req.body.numeroDocumento,
    cargo: req.body.cargo,
    habilitado: true,
    correo: req.body.correo,
    pass: req.body.pass,
    esUsuarioPrincipal: false,
  });

  //guardar el usuario en DB
  const result = await usuario.save();
  const jwtToken = usuario.generateJWT();
  res.status(200).send({ jwtToken });
});
module.exports = router;

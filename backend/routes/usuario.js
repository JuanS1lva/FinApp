const express = require("express");
const router = express.Router();
//modulos creados
const { usuario, Usuario } = require("../model/usuario");
const Empresa = require("../model/empresa");
//ruta
router.post("/", async (req, res) => {
  let usuario = await Usuario.findOne({ correo: req.body.correo });
  if (usuario) return res.status(400).send("El usuario ya existe en DB");

  // crear empresa
  let empresa = new Empresa({
    naturaleza: req.body.naturaleza,
    tipoDocumento: req.body.tipoDocumento,
    numeroDocumento: req.body.numeroDocumento,
    razonSocial: req.body.razonSocial,
    direccion: req.body.direccion,
    idDepartamento: req.body.idDepartamento,
    idCiudad: req.body.idCiudad,
    habilitado: true,
  });
  //guardar la empresa en DB
  const resultEmp = await empresa.save();

  // validar que empresa se haya creado
  if (!resultEmp)
    return res
      .status(400)
      .send("No fue posible crear el usuario, intente de nuevo.");

  usuario = new Usuario({
    idEmpresa: resultEmp._id,
    nombreApellido: req.body.razonSocial,
    tipoDocumento: req.body.tipoDocumento,
    numeroDocumento: req.body.numeroDocumento,
    cargo: "SuperAdmin",
    habilitado: true,
    correo: req.body.correo,
    pass: req.body.pass,
    esUsuarioPrincipal: true,
  });

  //guardar el usuario en DB
  const result = await usuario.save();
  const jwtToken = usuario.generateJWT();
  res.status(200).send({ jwtToken });
});
module.exports = router;

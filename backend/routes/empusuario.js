const express = require("express");
const router = express.Router();
//modulos creados
const { Usuario } = require("../model/usuario");
const Empresa = require("../model/empresa");
const auth = require("../middleware/auth");

// listar usuario con información de empresa
router.get("/lista", auth, async (req, res) => {
  const usuario = await Usuario.findById(req.usuario._id);
  if (!usuario) return res.status(401).send("usuario no existe en DB");

  // obtener todos los usuarios por empresa
  const lstUsuario = await Usuario.find({
    idEmpresa: req.usuario.idEmpresa,
    habilitado: true,
  });

  // obtener datos de empresa
  const empresa = await Empresa.findOne({
    _id: req.usuario.idEmpresa,
  });

  let listaEmpresaUsu = [];
  lstUsuario.forEach((item) => {
    const empresaUsu = {
      _id: item._id,
      nombre: item.nombreApellido,
      cargo: item.cargo,
      tipoDocumento: item.tipoDocumento,
      numeroDocumento: item.numeroDocumento,
      correo: item.correo,
      habilitado: item.habilitado ? "SI" : "NO",
      esUsuarioPrincipal: item.esUsuarioPrincipal
    };
    listaEmpresaUsu.push(empresaUsu);
  });

  const lstEmpresaUsu = {
    empresa: empresa.razonSocial + ' / ' + empresa.naturaleza,
    direccion: empresa.direccion,
    nombreUsuario: usuario.nombreApellido,
    cargoUsuario: usuario.cargo,
    listaUsuarios: listaEmpresaUsu,
  };

  res.send(lstEmpresaUsu);
});

// listar usuario para control en front
router.get("/listacontrol", auth, async (req, res) => {
  const usuario = await Usuario.findById(req.usuario._id);
  if (!usuario) return res.status(401).send("usuario no existe en DB");

  // obtener todos los usuarios
  const lstUsuario = await Usuario.find({
    idEmpresa: req.usuario.idEmpresa,
    habilitado: true,
  });

  let listaUsuario = [];
  lstUsuario.forEach((item) => {
    const usuario = {
      _id: item._id,
      nombre: item.nombreApellido,
    };
    listaUsuario.push(usuario);
  });

  res.send(listaUsuario);
});

//ruta para crear
router.post("/", auth, async (req, res) => {
  let usuario = await Usuario.findOne({
    correo: req.body.correo,
  });
  if (usuario) return res.status(400).send("El usuario ya existe en DB");

  usuario = new Usuario({
    idEmpresa: req.usuario.idEmpresa,
    nombreApellido: req.body.nombreApellido,
    tipoDocumento: req.body.tipoDocumento,
    numeroDocumento: req.body.numeroDocumento,
    rol: [req.body.rol],
    cargo: req.body.cargo,
    habilitado: true,
    correo: req.body.correo,
    pass: req.body.pass,
    esUsuarioPrincipal: false,
  });

  //guardar el usuario en DB
  const result = await usuario.save();
  const jwtToken = usuario.generateJWT();
  res.status(200).send({
    jwtToken,
  });
});
module.exports = router;

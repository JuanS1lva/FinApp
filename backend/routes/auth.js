//modulos node
const express = require("express");
const router = express.Router();
// modulos internos
const { Usuario } = require("../model/usuario");
const auth = require("../middleware/auth");
//ruta
router.post("/", async (req, res) => {
  const usuario = await Usuario.findOne({ correo: req.body.correo });
  const psw = req.body.pass;
  if (!usuario) {
    return res.status(400).send("Correo o contraseña no son validos");
  }
  // dar formato a la clave recuperada
  const hashpass = auth.hashpsw(psw).hex();
  if (usuario.pass !== hashpass) {
    return res.status(400).send("Correo o contraseña no son validos");
  }
  //Generamos JWT
  const jwtToken = usuario.generateJWT();
  res.status(200).send({ jwtToken });
});
module.exports = router;

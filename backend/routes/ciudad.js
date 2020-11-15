//modulos de node
const express = require("express");
const router = express.Router();

const Ciudad = require("../model/ciudad");
const { Usuario } = require("../model/usuario");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  const usuario = await Usuario.findById(req.usuario._id);
  if (!usuario) return res.status(401).send("el usuario no existe");
  const ciudad = new Ciudad({
    nombre: "Achi",
    codigo: "13006",
  });
  const result = await ciudad.save();
  res.status(200).send(result);
});

module.exports = router;

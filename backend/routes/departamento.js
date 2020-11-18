//modulos de node
const express = require("express");
const router = express.Router();

const Departamento = require("../model/departamento");
const { Usuario } = require("../model/usuario");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  const usuario = await Usuario.findById(req.usuario._id);
  if (!usuario) return res.status(401).send("el usuario no existe");
  const cantDepartamento = await Departamento.find().countDocuments();
  if (cantDepartamento > 0)
    return res.status(401).send("ya estan creados los dep");
  const arrayDepartamento = [
    {
      nombre: "Antioquia",
      codigo: "5",
    },
    {
      nombre: "Atlantico",
      codigo: "8",
    },
    {
      nombre: "Bogota",
      codigo: "11",
    },
    {
      nombre: "Bolivar",
      codigo: "13",
    },
    {
      nombre: "Boyaca",
      codigo: "15",
    },
    {
      nombre: "Caldas",
      codigo: "17",
    },
    {
      nombre: "Caqueta",
      codigo: "18",
    },
    {
      nombre: "Cauca",
      codigo: "19",
    },
    {
      nombre: "Cesar",
      codigo: "20",
    },
    {
      nombre: "Cordoba",
      codigo: "23",
    },
    {
      nombre: "Cundinamarca",
      codigo: "25",
    },
    {
      nombre: "Choco",
      codigo: "27",
    },
    {
      nombre: "Huila",
      codigo: "41",
    },
    {
      nombre: "La Guajira",
      codigo: "44",
    },
    {
      nombre: "Magdalena",
      codigo: "47",
    },
    {
      nombre: "Meta",
      codigo: "50",
    },
    {
      nombre: "Nariño",
      codigo: "52",
    },
    {
      nombre: "Norte de Santander",
      codigo: "54",
    },
    {
      nombre: "Quindio",
      codigo: "63",
    },
    {
      nombre: "Risaralda",
      codigo: "66",
    },
    {
      nombre: "Santander",
      codigo: "68",
    },
    {
      nombre: "Sucre",
      codigo: "70",
    },
    {
      nombre: "Tolima",
      codigo: "73",
    },
    {
      nombre: "Valle del Cauca",
      codigo: "76",
    },
    {
      nombre: "Arauca",
      codigo: "81",
    },
    {
      nombre: "Casanare",
      codigo: "85",
    },
    {
      nombre: "Putumayo",
      codigo: "86",
    },
    {
      nombre: "Archipielago de San Andres, Providiencia y Santa Catalina",
      codigo: "88",
    },
    {
      nombre: "Amazonas",
      codigo: "91",
    },
    {
      nombre: "Guainia",
      codigo: "94",
    },
    {
      nombre: "Guaviare",
      codigo: "95",
    },
    {
      nombre: "Vaupes",
      codigo: "97",
    },
    {
      nombre: "Vichada",
      codigo: "99",
    },
  ];
  let arrayResult = [];
  arrayDepartamento.forEach(async (item) => {
    const departamento = new Departamento({
      nombre: item.nombre,
      codigo: item.codigo,
    });
    const result = await departamento.save();
    arrayResult.push(result);
  });
  res.status(200).send({ arrayResult });
});

module.exports = router;

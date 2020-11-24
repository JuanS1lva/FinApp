//modulos de node
const express = require("express");
const router = express.Router();

const Departamento = require("../model/departamento");
const { Usuario } = require("../model/usuario");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  const usuario = await Usuario.findById(req.usuario._id);
  if (!usuario) return res.status(401).send("el usuario no existe");

  // validar si departamentos ya estan creados
  const cantDto = await Departamento.find().countDocuments();
  if (cantDto > 0) return res.status(401).send("Los departamentos ya se encuentran creados");

    const departamento = [
      {
        nombre: "Antioquia",
        codigo: "05",
      },
      {
        nombre: "Atlántico",
        codigo: "08",
      },
      {
        nombre: "Bogotá, D.C.",
        codigo: "11",
      },
      {
        nombre: "Bolívar",
        codigo: "13",
      },
      {
        nombre: "Boyacá",
        codigo: "15",
      },
      {
        nombre: "Caldas",
        codigo: "17",
      },
      {
        nombre: "Caquetá",
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
        nombre: "Córdoba",
        codigo: "23",
      },
      {
        nombre: "Cundinamarca",
        codigo: "25",
      },
      {
        nombre: "Chocó",
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
        nombre: "Archipielago de San Ándres, Providencia y Santa Catalina",
        codigo: "88",
      },
      {
        nombre: "Amazonas",
        codigo: "91",
      },
      {
        nombre: "Guainía",
        codigo: "94",
      },
      {
        nombre: "Guaviare",
        codigo: "95",
      },
      {
        nombre: "Vaupés",
        codigo: "97",
      },
      {
        nombre: "Vichada",
        codigo: "99",
      },
    ];

    let arrayDepartamento = [];
    departamento.forEach(async (item) => {
      const departamento = new Departamento({
        nombre: item.nombre,
        codigo: item.codigo,
      });
      const result = await departamento.save();
      arrayDepartamento.push(result);
    });
    res.status(200).send(arrayDepartamento);
  
});
module.exports = router;

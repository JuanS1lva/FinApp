//modulos internos
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const sha256 = require("js-sha256");
//esquema
const esquemaUsuario = new mongoose.Schema({
  idEmpresa: {
    type: String,
  },
  nombreApellido: {
    type: String,
  },
  tipoDocumento: {
    type: String,
  },
  numeroDocumento: {
    type: String,
  },
  cargo: {
    type: String,
  },
  rol: {
    type: Array,
    default:["Reader"]
  },
  habilitado: {
    type: Boolean,
  },
  correo: {
    type: String,
  },
  pass: {
    type: String,
  },
  esUsuarioPrincipal: {
    type: Boolean,
  },
  fechaRegistro: {
    type: Date,
    default: Date.now,
  },
});
//generamos JWT
esquemaUsuario.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      nombreApellido: this.nombreApellido,
      idEmpresa: this.idEmpresa,
      correo: this.correo,
    },
    "FinApp"
  );
};
// Protección de clave de usuario
esquemaUsuario.pre("save", function (next) {
  const usuario = this;
  if (!usuario.isModified("pass")) {
    return next;
  }
  let hash = sha256.create();
  hash.update(usuario.pass);
  // almacenar contrasenha cifrada en BD
  usuario.pass = hash.hex();
  next();
});
//crear los exports
const Usuario = mongoose.model("usuario", esquemaUsuario);
module.exports.Usuario = Usuario;
module.exports.esquemaUsuario = esquemaUsuario;

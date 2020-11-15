const jwt = require("jsonwebtoken");
const sha256 = require("js-sha256"). sha256;

function auth(req, res, next) {
  let jwtToken = req.header("Authorization");
  jwtToken = jwtToken.split(" ")[1];
  if (!jwtToken) return res.status(401).send("no hay token para validar");
  try {
    const payload = jwt.verify(jwtToken, "FinApp");
    req.usuario = payload;
    next();
  } catch (error) {
    res.status(401).send("token no valido, no auth");
  }
}
// obtener hash de clave de usuario
function hashpsw(psw){
  let hash = sha256.create();
  hash.update(psw);
  return hash;
}
//crear los exports
module.exports = auth;
module.exports.hashpsw = hashpsw;

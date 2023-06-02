import jwt from 'jsonwebtoken';

const secretKey = 'marmotech'; 

export default function encryptParameter(req, res) {
  // Crea el token JWT utilizando el parámetro y la clave secreta
  const parametro = req.body.params
  const token = jwt.sign({ parametro }, secretKey);

  return res.status(200).json({token});
}

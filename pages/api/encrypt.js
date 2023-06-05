import jwt from 'jsonwebtoken';
import {encriptarParametro, desencriptarParametro} from "../../utils/webtoken"



const secretKey = 'marmotech'; 

export default function encryptParameter(req, res) {
  // Crea el token JWT utilizando el parámetro y la clave secreta
 
  const parametro = req.body
  const token = jwt.sign({ parametro }, secretKey);  
  const decript = desencriptarParametro(token)

  return res.status(200).json({token});
}

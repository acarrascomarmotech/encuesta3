import jwt from 'jsonwebtoken';
import {desencriptarParametro} from "../../utils/webtoken"
import {decryptId} from "../../utils/encrypt"

const secretKey = "marmotech";

export default function encryptParameter(req, res) {
  // Crea el token JWT utilizando el parámetro y la clave secreta
  const parametro = req.body
  // const parametro = req.body.data
  console.log(`parametro: ${parametro}`);

  const token = jwt.sign({ parametro }, secretKey);

  // const parametroDesencriptado = desencriptarParametro(token)
  // const token2 = decryptId(parametroDesencriptado)
  // console.log(token);


	return res.status(200).json(token);
}

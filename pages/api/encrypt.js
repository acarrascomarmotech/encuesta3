import jwt from 'jsonwebtoken';

const secretKey = "marmotech";

export default function encryptParameter(req, res) {
  const parametro = req.body
  console.log(`api: ${parametro}`);
  const token = jwt.sign({ parametro }, secretKey);
  console.log(`token: ${token}`);

  // const parametroDesencriptado = desencriptarParametro(token)
  // const token2 = decryptId(parametroDesencriptado)
  // console.log(token);


	return res.status(200).json({token});
}

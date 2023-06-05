import {encriptarParametro, desencriptarParametro} from "../../utils/webtoken"

export default function handler(req, res) {

    const {data} = req.body;
    // Realiza las operaciones necesarias con los datos recibidos
    // y envía la respuesta utilizando res.json()
    return res.status(200).json({data});
  
  }
  
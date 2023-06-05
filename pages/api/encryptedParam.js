// Ejemplo de archivo encryptedParam.js en la carpeta API
export default function handler(req, res) {
    const  encryptedParam  = req.query;
    
    // Aquí puedes realizar cualquier lógica adicional utilizando el parámetro desencriptado
    
    // Devuelve el parámetro encriptado como respuesta en la API
    res.status(200).json({ encryptedParam });
  }
import { useState } from "react"

import { encryptId } from "../../utils/encrypt"

const convert = () => {
    const [id, setId] = useState();

    return (
        <div>
            <input type="text" placeholder="Numero de cotizacion" onChange={(e) => setId(encryptId(e.target.value))} />
            <br />
            <p>Result: {id}</p>
        </div>
    )
}

export default convert
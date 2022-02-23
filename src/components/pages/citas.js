import React from "react";
import { useParams } from "react-router-dom";



const CitasMascota = () => {
    const {nombre} = useParams()
    return (
        <div>
            <h2>Citas de {nombre}</h2>
        </div>
    )
}

export default CitasMascota
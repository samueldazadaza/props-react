import React from "react";

const Bienvenida = (props) => {
    console.log(props)
    const {nombre, apellido} = props //object destructuring para acceder a la propiedad NOMBRE
    return (
        <div>
            <h2>Bienvenido {nombre} !! {apellido} </h2>
        </div>
    )
}

export default Bienvenida
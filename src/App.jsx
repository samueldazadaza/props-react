import React from "react"
import Bienvenida from "./components/Bienvenida";

function App() {
  return (
    <div>
      <h1>Propiedades de los componentes</h1>
      <Bienvenida nombre="Carlos" apellido="Perez"/>
      <Bienvenida nombre="Santiago" apellido="Sanchez"/>
      <Bienvenida nombre="Antonio" apellido="Luna"/>
      <Bienvenida nombre="Maria" apellido="Vargas"/>
    </div>
  )
}

export default App;

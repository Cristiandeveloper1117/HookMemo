import React from "react";
import { useState } from "react";
import { Empleados } from "./Empleados";

export default function Gestion() {



const [nombre, setNombre] = useState('');
const [pagina, setPagina] = useState(1)




const asignarGestor = e => {
setNombre(e.target.value)
}


console.log("Vista gestion actualizada")




  return (

    <div>
      <h1>Nombre del gestor:{nombre}</h1>
      <input type="text"  onChange={asignarGestor} placeholder="introduce tu nombre"/>
      <h2>Listado de empleados:</h2>
      <p>Los usuarios son gestionados por {nombre} vienen de jsonplaceholder....</p>
    <Empleados pagina={pagina}/>
    <button onClick={() => {setPagina(1)}}>Pagina 1</button>
    <button onClick={() => {setPagina(2)}}>Pagina 2 </button>

    </div>
  
  );
}

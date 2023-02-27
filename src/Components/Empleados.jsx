import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const Empleados = React.memo(
({pagina}) => {

const [empleados, setEmpleados] = useState([]);

useEffect(() => {
conseguirEmpleados(pagina);
}, [pagina]);

  const conseguirEmpleados = async (p) => {
    const url = "https://reqres.in/api/users?page="+p;
    const peticion = await fetch(url);
    const { data: empleados } = await peticion.json();

    setEmpleados(empleados);
};

  console.log("Se ha vuelto a renderizar");

  return (
    <div>
        <p>mOSTRAR LA PAGINA: {pagina} </p>
      <ul className="empleados">
        {/* {empleados.length >= 1 && empleados[0].email} */}
        {empleados.length >= 1 && 
        empleados.map(empleado => {
            return <li key={empleado.id}> {empleado.first_name + " " + empleado.last_name}</li>
        })}
      </ul>
    </div>
  );
  
    }
    )



//la funcion memo memoriza todo lo que devuelve el componente
//la funcion memo hace que no se ejecute
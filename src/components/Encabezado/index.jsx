import React from 'react'

function Encabezado  ({data}) {
    const hasUsers = data.users.length > 0;
  return (
    <div>
        <h1 style={{color:"black"}}> FarmManager</h1>
        {hasUsers ? <p> Usuarios Cargados: {data.users.length}</p> : <p> No hay Usuarios</p>}
        {data.animals.length > 0 && <p>Animales: {data.animals.length}</p> }
        </div>
  )
}

export default Encabezado
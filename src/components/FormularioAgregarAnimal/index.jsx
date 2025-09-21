import React, { useState } from 'react'

function Index({setAnimals})  {
    const [tipos, setTipos] =useState('');
    const [raza, setRaza] =useState('');
    const [color, setColor] =useState('');
    const [ubicacion, setUbicacion] =useState('');
    const [peso, setPeso] =useState('');

   const handleSubmit =(e)=>{
        e.preventDefault();
        const newAnimal ={
            id: Date.now(),
            type: tipos, 
            characteristics:{    
                breed: raza,
                color: color,
                location: ubicacion,
            },
            weight: parseFloat(peso)|| 0,
            treatments:[]
        };
        setAnimals((prev)=> [...prev,newAnimal])
        setTipos("");
        setRaza("");
        setColor("");
        setUbicacion("");
        setPeso("");
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={tipos} onChange={(e)=> setTipos(e.target.value)}
        placeholder='Tipo de Animal'></input>
         <input value={color} onChange={(e)=> setColor(e.target.value)}
        placeholder='Color del Animal'></input>
         <input value={ubicacion} onChange={(e)=> setUbicacion(e.target.value)}
        placeholder='Ubicacion del Animal'></input>
         <input value={peso} onChange={(e)=> setPeso(e.target.value)}
        placeholder='Peso del Animal'></input>
        <button type='submit' style={{color:"blue", border:"2px", display:"flex"}}>
            Agregar Animal
        </button>

      </form>
    </div>
  )
}

export default Index

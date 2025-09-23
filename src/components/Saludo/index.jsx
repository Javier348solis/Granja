import React from 'react'
import '../../Styles/Saludo.css';

const index = () => {
  return (
    <div className='saludo-container'>
      <h1 style={{display:"flex", justifyContent:"center"}}>Farm Manager: Gestión para la granja</h1>
      <p style={{fontSize: '18px', color: 'white', display:"flex", justifyContent:"center"}}>App para gestionar animales y usuarios</p>    
    </div>
  )
}

export default index

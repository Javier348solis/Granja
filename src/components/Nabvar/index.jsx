import React from 'react';
import { Link } from "react-router-dom";

const index = () => {
    const isDemo = true; 
  return (
    <nav style ={{backgroundColor:"black", padding: "10px", color:"white"}}>
      <Link to="/" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>
        Inicio
      </Link>
      <Link to="/Animales" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>
        Animales
      </Link>
    </nav>
  )
}

export default index
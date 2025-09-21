import React, { useState } from 'react'
import Encabezado from "../../components/Encabezado/index";
import data from "../../components/json/animales.json";
import FichaAnimal from "../../components/FichaAnimal/index";
import FormularioAgregarAnimal from "../../components/FormularioAgregarAnimal/index";
const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animals, setAnimals] = useState(data.animals)
  const handleNext = () => {
    console.log("datos base", animals[currentIndex])
    if (currentIndex < animals.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
 const handleDelete =(id) => {
  console.log(id)
  setAnimals((prev) => prev.filter((animal)=>animal.id !==id))
  if(currentIndex >- animals.length -1){
    setCurrentIndex(0)
  }
 }
 const handleRefresh = () =>{
  setAnimals(data.animals)
 }
  return (
    <div>
      <Encabezado data={data} />

      {animals && animals.length > 0 ? ( //AQUI uitlizo el punto length para que recorra los espacios del arreglo del json y verfique si tengo datos,
      //entonces al poner length y no encontrar datos (suposicion) nos tirara el mensjae que bno hay datos
        
        <>
          <FichaAnimal data={animals[currentIndex]} />
          <button onClick={handleNext} style={{ marginTop: "20px" }}>
            Siguiente
          </button>
          <button onClick={()=> handleDelete(animals[currentIndex].id)}>Eliminar</button>
          <button onClick={handleRefresh}>Refrescar</button>
          <FormularioAgregarAnimal setAnimals={setAnimals}/>
        </>
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          No hay datos por mostrar
        </p>
      )}
    </div>
  )
}

export default Index

import React, { useState, useEffect } from "react";
import Encabezado from "../../components/Encabezado/index";
import data from "../../components/json/animales.json";
import FichaAnimal from "../../components/FichaAnimal/index";
import FormularioAgregarAnimal from "../../components/FormularioAgregarAnimal/index";

const Index = () => {
  // Cargar primero desde localStorage o usar el JSON si no hay nada guardado
  const [animals, setAnimals] = useState(() => {
    const saved = localStorage.getItem("animals");
    return saved ? JSON.parse(saved) : data.animals;
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cada vez que cambien los animales, actualizamos el localStorage
  useEffect(() => {
    localStorage.setItem("animals", JSON.stringify(animals));
  }, [animals]);

  const handleNext = () => {
    if (currentIndex < animals.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleDelete = (id) => {
    setAnimals((prev) => prev.filter((animal) => animal.id !== id));
    setCurrentIndex(0);
  };

  const handleRefresh = () => {
    // Restaurar desde el JSON original
    setAnimals(data.animals);
    setCurrentIndex(0);
  };

  return (
    <div>
      <Encabezado data={data} />

      {animals && animals.length > 0 ? (
        <>
          <FichaAnimal data={animals[currentIndex]} />
          <button onClick={handleNext} style={{ marginTop: "20px" }}>
            Siguiente
          </button>
          <button onClick={() => handleDelete(animals[currentIndex].id)}>
            Eliminar
          </button>
          <button onClick={handleRefresh}>Refrescar</button>
        </>
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          No hay datos por mostrar
        </p>
      )}

      {/* Aqui lo quie se hace es que se muestre el form inclusi si la lista esta vacia */}
      <FormularioAgregarAnimal setAnimals={setAnimals} />
    </div>
  );
};

export default Index;

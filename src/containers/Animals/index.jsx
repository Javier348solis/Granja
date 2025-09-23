import React, { useState, useEffect } from "react";
import "../../Styles/Animals.css";
import data from "../../components/json/animales.json";
import FichaAnimal from "../../components/FichaAnimal/index";
import FormEditar from "../../components/FormEditar/index";

const Animals = () => {
  const [animals, setAnimals] = useState(() => {
    const saved = localStorage.getItem("animals");
    return saved ? JSON.parse(saved) : data.animals;
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [editing, setEditing] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < animals.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [animals.length]);

  useEffect(() => {
    localStorage.setItem("animals", JSON.stringify(animals));
  }, [animals]);

  const handleEdit = (animal) => {
    setSelectedAnimal(animal);
    setEditing(true);
  };

  const handleCloseForm = () => {
    setEditing(false);
    setSelectedAnimal(null);
  };

  return (
    <div className="animals-container">
      <h1>Animales</h1>

      {animals && animals.length > 0 ? (
        <div className="carousel">
          <FichaAnimal
            data={animals[currentIndex]}
            animals={animals}
            setAnimals={setAnimals}
            onEdit={() => handleEdit(animals[currentIndex])}
          />
        </div>
      ) : (
        <p>No hay animales para mostrar</p>
      )}

      {editing && selectedAnimal && (
        <FormEditar
          animal={selectedAnimal}
          animals={animals}
          setAnimals={setAnimals}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
};

export default Animals;

import React, { useState, useEffect } from "react";
import "../../Styles/Animals.css";
import FichaAnimal from "../../components/FichaAnimal";
import FormEditar from "../../components/FormEditar";

const Animals = () => {
  const [animals, setAnimals] = useState(() => {
    const saved = localStorage.getItem("animals");
    return saved ? JSON.parse(saved) : [];
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [editing, setEditing] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        animals.length > 0 ? (prevIndex + 3) % animals.length : 0
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

  const handleDelete = (id) => {
    const updatedAnimals = animals.filter((animal) => animal.id !== id);
    setAnimals(updatedAnimals);
    localStorage.setItem("animals", JSON.stringify(updatedAnimals));
  };

  const visibleAnimals =
    animals.length > 0
      ? Array.from({ length: Math.min(3, animals.length) }, (_, i) => {
          const index = (currentIndex + i) % animals.length;
          return animals[index];
        })
      : [];

  return (
    <div className="animals-container">
      <h1 className="animals-title">Animales</h1>
      <p className="animals-subtitle">Datos de los animales agregados</p>
      {animals.length > 0 ? (
        <div className="carousel">
          {visibleAnimals.map((animal) => (
            <FichaAnimal
              key={animal.id}
              data={animal}
              onEdit={() => handleEdit(animal)}
              onDelete={() => handleDelete(animal.id)}
            />
          ))}
        </div>
      ) : (
        <p className="no-animals">No hay animales para mostrar</p>
      )}
      {editing && selectedAnimal && (
        <FormEditar
          animal={selectedAnimal}
          animals={animals}
          setAnimals={setAnimals}
          onClose={() => {
            setEditing(false);
            setSelectedAnimal(null);
          }}
        />
      )}
    </div>
  );
};

export default Animals;
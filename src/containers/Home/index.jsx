import React, { useState, useEffect } from "react";
import FormularioAgregarAnimal from "../../components/FormularioAgregarAnimal/index";
import FormEditar from "../../components/FormEditar/index"; // para edición
import data from "../../components/json/animales.json";
import Saludo from "../../components/Saludo";
import '../../Styles/Home.css'

const Home = () => {
  // Cargar primero desde localStorage o usar el JSON si no hay nada guardado
  const [animals, setAnimals] = useState(() => {
    const saved = localStorage.getItem("animals");
    return saved ? JSON.parse(saved) : data.animals;
  });

  // Estado para edición
  const [editing, setEditing] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  // Guardar cambios automáticamente en localStorage
  useEffect(() => {
    localStorage.setItem("animals", JSON.stringify(animals));
  }, [animals]);

  return (
    <div className="home-container">
  <Saludo/>
  <h1 style={{ display:"flex", justifyContent:"center" }}>Panel de Administración</h1>

  {/* Formulario para agregar un animal */}
  <FormularioAgregarAnimal setAnimals={setAnimals} />

  {/* Formulario de edición */}
  {editing && selectedAnimal && (
    <FormEditar
      animal={selectedAnimal}
      animals={animals}
      setAnimals={setAnimals}
      onClose={() => setEditing(false)}
    />
  )}
</div>
  );
};

export default Home;

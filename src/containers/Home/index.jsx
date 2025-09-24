import React, { useState, useEffect } from "react";
import FormularioAgregarAnimal from "../../components/FormularioAgregarAnimal/index";
import data from "../../components/json/animales.json";
import Saludo from "../../components/Saludo";
import '../../Styles/Home.css'

const Home = () => {
  // Cargar primero desde localStorage o usar el JSON si no hay nada guardado
  const [animals, setAnimals] = useState(() => {
    const saved = localStorage.getItem("animals");
    return saved ? JSON.parse(saved) : data.animals;
  });

  // Guardar cambios automáticamente en localStorage
  useEffect(() => {
    localStorage.setItem("animals", JSON.stringify(animals));
  }, [animals]);

  return (
    <div className="home-container">
      <Saludo/>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Panel de Administración</h1>

      {/* Formulario para agregar un animal */}
      <FormularioAgregarAnimal setAnimals={setAnimals} />
    </div>
  );
};

export default Home;
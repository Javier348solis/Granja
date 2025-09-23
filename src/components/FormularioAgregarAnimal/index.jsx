import React, { useState, useEffect } from "react";
import "../../Styles/FormAddAnimal.css";

function Index({ setAnimals }) {
  const tiposAnimales = ["Vaca", "Cerdo", "Gallina", "Oveja"];
  const ubicaciones = ["Establo A", "Corral B", "Gallinero C"];

  const [tipos, setTipos] = useState("");
  const [raza, setRaza] = useState("");
  const [color, setColor] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [peso, setPeso] = useState("");
  const [alimentacionHorario, setAlimentacionHorario] = useState("");
  const [alimentacionCantidad, setAlimentacionCantidad] = useState("");
  const [hidratacion, setHidratacion] = useState("");
  const [vacunas, setVacunas] = useState([]);
  const [vacunaNombre, setVacunaNombre] = useState("");
  const [vacunaFecha, setVacunaFecha] = useState("");
  const [tratamientos, setTratamientos] = useState([]);
  const [tratNombre, setTratNombre] = useState("");
  const [tratDesc, setTratDesc] = useState("");
  const [reproduccion, setReproduccion] = useState(false);
  const [fechaApareo, setFechaApareo] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [numPartos, setNumPartos] = useState("");
  const [numCrias, setNumCrias] = useState("");
  const [imagenSeleccionada, setImagenSeleccionada] = useState("");

  //Se argar animales desde localStorage al iniciar
  useEffect(() => {
    const storedAnimals = localStorage.getItem("animals");
    if (storedAnimals) {
      setAnimals(JSON.parse(storedAnimals));
    }
  }, [setAnimals]);

  // Guardar en localStorage cada vez que cambien los animales
  const saveToLocalStorage = (animals) => {
    localStorage.setItem("animals", JSON.stringify(animals));
  };

  // Agregar vacuna a la lista temporal
  const addVacuna = () => {
    if (vacunaNombre && vacunaFecha) {
      setVacunas((prev) => [...prev, { name: vacunaNombre, date: vacunaFecha }]);
      setVacunaNombre("");
      setVacunaFecha("");
    }
  };

  // Agregar tratamiento a la lista temporal
  const addTratamiento = () => {
    if (tratNombre && tratDesc) {
      setTratamientos((prev) => [
        ...prev,
        { name: tratNombre, description: tratDesc, vaccines: [], diseases: [] },
      ]);
      setTratNombre("");
      setTratDesc("");
    }
  };
const handleSubmit = (e) => {
  e.preventDefault();
  alert("Animal agregado correctamente!");
  const newAnimal = {
    id: Date.now(),
    type: tipos,
    image: imagenSeleccionada,
    characteristics: {
      breed: raza,
      color: color,
      location: ubicacion,
    },
    feeding: {
      schedule: alimentacionHorario,
      amount: alimentacionCantidad,
    },
    hydration: {
      dailyLevel: hidratacion,
    },
    weight: parseFloat(peso) || 0,
    vaccines: vacunas,
    treatments: tratamientos,
    breeding: {
      mated: reproduccion,
      mateDate: reproduccion ? fechaApareo : null,
    },
    birthDate: fechaNacimiento,
    numberOfBirths: parseInt(numPartos) || 0,
    offspringCount: parseInt(numCrias) || 0,
  };

  setAnimals((prev) => {
    const updated = [...prev, newAnimal];
    saveToLocalStorage(updated); // Guardar en localStorage

    // 🔎 Mostrar en consola lo que se guardó
    console.log("Animales en localStorage:", JSON.parse(localStorage.getItem("animals")));

    return updated;
  });

  // limpiar formulario
  setTipos("");
  setRaza("");
  setColor("");
  setUbicacion("");
  setPeso("");
  setAlimentacionHorario("");
  setAlimentacionCantidad("");
  setHidratacion("");
  setVacunas([]);
  setTratamientos([]);
  setReproduccion(false);
  setFechaApareo("");
  setFechaNacimiento("");
  setNumPartos("");
  setNumCrias("");
  setImagenSeleccionada("");
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Tipo */}
        <select value={tipos} onChange={(e) => setTipos(e.target.value)}>
          <option value="">Seleccionar tipo</option>
          {tiposAnimales.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        {/* Raza, color, ubicación */}
        <input
          value={raza}
          onChange={(e) => setRaza(e.target.value)}
          placeholder="Raza"
        />
        <input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Color"
        />
        <select
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
        >
          <option value="">Seleccionar ubicación</option>
          {ubicaciones.map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>

        {/* Peso */}
        <input
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Peso (kg)"
        />

        {/* Alimentación */}
        <input
          value={alimentacionHorario}
          onChange={(e) => setAlimentacionHorario(e.target.value)}
          placeholder="Horario alimentación"
        />
        <input
          value={alimentacionCantidad}
          onChange={(e) => setAlimentacionCantidad(e.target.value)}
          placeholder="Cantidad alimentación"
        />

        {/* Hidratación */}
        <input
          value={hidratacion}
          onChange={(e) => setHidratacion(e.target.value)}
          placeholder="Hidratación diaria"
        />

        {/* Vacunas */}
        <div>
          <input
            value={vacunaNombre}
            onChange={(e) => setVacunaNombre(e.target.value)}
            placeholder="Vacuna"
          />
          <input
            type="date"
            value={vacunaFecha}
            onChange={(e) => setVacunaFecha(e.target.value)}
          />
          <button type="button" onClick={addVacuna}>
            Agregar vacuna
          </button>
        </div>
        <ul>
          {vacunas.map((v, i) => (
            <li key={i}>
              {v.name} - {v.date}
            </li>
          ))}
        </ul>

        {/* Tratamientos */}
        <div>
          <input
            value={tratNombre}
            onChange={(e) => setTratNombre(e.target.value)}
            placeholder="Tratamiento"
          />
          <input
            value={tratDesc}
            onChange={(e) => setTratDesc(e.target.value)}
            placeholder="Descripción"
          />
          <button type="button" onClick={addTratamiento}>
            Agregar tratamiento
          </button>
        </div>
        <ul>
          {tratamientos.map((t, i) => (
            <li key={i}>
              {t.name} - {t.description}
            </li>
          ))}
        </ul>

        {/* Reproducción */}
        <label>
          <input
            type="checkbox"
            checked={reproduccion}
            onChange={() => setReproduccion(!reproduccion)}
          />
          Apareado
        </label>
        {reproduccion && (
          <input
            type="date"
            value={fechaApareo}
            onChange={(e) => setFechaApareo(e.target.value)}
          />
        )}

        {/* Fechas y reproducción */}
        <input
          type="date"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
          placeholder="Fecha nacimiento"
        />
        <input
          value={numPartos}
          onChange={(e) => setNumPartos(e.target.value)}
          placeholder="Número partos"
        />
        <input
          value={numCrias}
          onChange={(e) => setNumCrias(e.target.value)}
          placeholder="Cantidad crías"
        />

        {/* Imagen desde dispositivo */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setImagenSeleccionada(reader.result);
              };
              reader.readAsDataURL(file);
            }
          }}
        />
        {imagenSeleccionada && (
          <div>
            <img src={imagenSeleccionada} alt="preview" width="120" />
          </div>
        )}

        <button
          type="submit"
          style={{ color: "white", border: "2px solid", display: "flex" }}
        >
          Agregar Animal
        </button>
      </form>
    </div>
  );
}

export default Index;

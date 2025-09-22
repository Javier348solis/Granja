import React from "react";
import "../../Styles/FichaAnimal.css";

function index({ data, animals, setAnimals, onEdit }) {
  console.log("Datos recibidos en FichaAnimal:", data);

  // Si todavía no hay animal seleccionado
  if (!data) {
    return <p>No hay datos disponibles</p>;
  }

  return (
    <div
      className="ficha-data"
      style={{
        border: "3px solid blue",
        padding: "15px",
        borderRadius: "10px",
        width: "280px",
        background: "#f9fafb",
        margin: "10px",
      }}
    >
      <h2>{data.type}</h2>
      <p>
        <strong>Raza:</strong> {data.characteristics?.breed}
      </p>
      <p>
        <strong>Color:</strong> {data.characteristics?.color}
      </p>
      <p>
        <strong>Ubicación:</strong> {data.characteristics?.location}
      </p>
      <p>
        <strong>Peso:</strong> {data.weight} kg
      </p>


      {data.image && (
        <img
          src={data.image}
          alt={data.type}
          style={{ width: "100%", borderRadius: "8px" }}
        />
      )}

     
      {data.vaccines?.length > 0 && (
        <div>
          <strong>Vacunas:</strong>
          <ul>
            {data.vaccines.map((v, i) => (
              <li key={i}>
                {v.name} ({v.date})
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tratamientos */}
      {data.treatments?.length > 0 && (
        <div>
          <strong>Tratamientos:</strong>
          <ul>
            {data.treatments.map((t, i) => (
              <li key={i}>
                {t.name} - {t.description}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Reproducción */}
      {data.breeding && (
        <div>
          <strong>Reproducción:</strong>
          <p>
            <strong>Apareado:</strong> {data.breeding.mated ? "Sí" : "No"}
          </p>
          {data.breeding.mated && (
            <p>
              <strong>Fecha de apareamiento:</strong> {data.breeding.mateDate}
            </p>
          )}
        </div>
      )}

      {/* Fecha de nacimiento */}
      {data.birthDate && (
        <p>
          <strong>Fecha de nacimiento:</strong> {data.birthDate}
        </p>
      )}

      {/* Número de partos */}
      {data.numberOfBirths !== undefined && (
        <p>
          <strong>Número de partos:</strong> {data.numberOfBirths}
        </p>
      )}

      {/* Cantidad de crías */}
      {data.offspringCount !== undefined && (
        <p>
          <strong>Cantidad de crías:</strong> {data.offspringCount}
        </p>
      )}

      {/* Botón Editar */}
      <button
        onClick={onEdit}
        style={{ marginTop: "10px", color: "white", background: "blue" }}
      >
        Editar
      </button>
    </div>
  );
}

export default index;

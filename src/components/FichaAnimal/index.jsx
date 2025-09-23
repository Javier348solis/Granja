import React from "react";
import "../../Styles/FichaAnimal.css";

function FichaAnimal({ data, onEdit }) {
  if (!data) return <p>No hay datos disponibles</p>;

  return (
    <div className="ficha-card">
      <div className="ficha-header">
        <h2>{data.type}</h2>
        {data.image && <img src={data.image} alt={data.type} className="ficha-image" />}
      </div>

      <div className="ficha-body">
        <p><strong>Raza:</strong> {data.characteristics?.breed}</p>
        <p><strong>Color:</strong> {data.characteristics?.color}</p>
        <p><strong>Ubicación:</strong> {data.characteristics?.location}</p>
        <p><strong>Peso:</strong> {data.weight} kg</p>

        {data.vaccines?.length > 0 && (
          <div>
            <strong>Vacunas:</strong>
            <ul>
              {data.vaccines.map((v, i) => (
                <li key={i}>{v.name} ({v.date})</li>
              ))}
            </ul>
          </div>
        )}

        {data.treatments?.length > 0 && (
          <div>
            <strong>Tratamientos:</strong>
            <ul>
              {data.treatments.map((t, i) => (
                <li key={i}>{t.name} - {t.description}</li>
              ))}
            </ul>
          </div>
        )}

        {data.breeding && (
          <div>
            <strong>Reproducción:</strong>
            <p><strong>Apareado:</strong> {data.breeding.mated ? "Sí" : "No"}</p>
            {data.breeding.mated && <p><strong>Fecha de apareamiento:</strong> {data.breeding.mateDate}</p>}
          </div>
        )}

        {data.birthDate && <p><strong>Fecha de nacimiento:</strong> {data.birthDate}</p>}
        {data.numberOfBirths !== undefined && <p><strong>Número de partos:</strong> {data.numberOfBirths}</p>}
        {data.offspringCount !== undefined && <p><strong>Cantidad de crías:</strong> {data.offspringCount}</p>}
      </div>

      <button className="ficha-edit-btn" onClick={onEdit}>Editar</button>
    </div>
  );
}

export default FichaAnimal;

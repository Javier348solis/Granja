import React, { useState } from "react";

function FormEditar({ animal, animals, setAnimals, onClose }) {
  const [type, setType] = useState(animal.type || "");
  const [breed, setBreed] = useState(animal.characteristics?.breed || "");
  const [color, setColor] = useState(animal.characteristics?.color || "");
  const [location, setLocation] = useState(animal.characteristics?.location || "");
  const [weight, setWeight] = useState(animal.weight || "");
  const [image] = useState(animal.image || "");
  const [fileImage, setFileImage] = useState(null);
  const [birthDate, setBirthDate] = useState(animal.birthDate || "");
  const [numberOfBirths, setNumberOfBirths] = useState(animal.numberOfBirths || "");
  const [offspringCount, setOffspringCount] = useState(animal.offspringCount || "");
  const [breeding, setBreeding] = useState(animal.breeding?.mated || false);
  const [mateDate, setMateDate] = useState(animal.breeding?.mateDate || "");

  // NUEVO: Vacunas y tratamientos
  const [vaccines, setVaccines] = useState(animal.vaccines || []);
  const [treatments, setTreatments] = useState(animal.treatments || []);

  // Funciones para manejar arrays dinámicos
  const addVaccine = () => setVaccines([...vaccines, { name: "", date: "" }]);
  const updateVaccine = (index, field, value) => {
    const newVaccines = [...vaccines];
    newVaccines[index][field] = value;
    setVaccines(newVaccines);
  };
  const removeVaccine = (index) => setVaccines(vaccines.filter((_, i) => i !== index));

  const addTreatment = () => setTreatments([...treatments, { name: "", description: "" }]);
  const updateTreatment = (index, field, value) => {
    const newTreatments = [...treatments];
    newTreatments[index][field] = value;
    setTreatments(newTreatments);
  };
  const removeTreatment = (index) => setTreatments(treatments.filter((_, i) => i !== index));

  const handleSave = (e) => {
    e.preventDefault();
    const updatedAnimal = {
      ...animal,
      type,
      characteristics: { breed, color, location },
      weight: parseFloat(weight) || 0,
      image: fileImage ? URL.createObjectURL(fileImage) : image,
      birthDate,
      numberOfBirths: parseInt(numberOfBirths) || 0,
      offspringCount: parseInt(offspringCount) || 0,
      breeding: { mated: breeding, mateDate: breeding ? mateDate : null },
      vaccines,
      treatments
    };

    const updatedAnimals = animals.map((a) =>
      a.id === animal.id ? updatedAnimal : a
    );

    setAnimals(updatedAnimals);
    localStorage.setItem("animals", JSON.stringify(updatedAnimals));
    alert("Animal actualizado correctamente");
    onClose();
  };

  return (
    <form onSubmit={handleSave} style={{ border: "2px solid gray", padding: "10px", margin: "10px" }}>
      <h3>Editar Animal</h3>
      <input value={type} onChange={(e) => setType(e.target.value)} placeholder="Tipo" />
      <input value={breed} onChange={(e) => setBreed(e.target.value)} placeholder="Raza" />
      <input value={color} onChange={(e) => setColor(e.target.value)} placeholder="Color" />
      <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Ubicación" />
      <input value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Peso" type="number" />

      <input type="file" accept="image/*" onChange={(e) => setFileImage(e.target.files[0])} />
      {(fileImage || image) && (
        <img
          src={fileImage ? URL.createObjectURL(fileImage) : image}
          alt="Preview"
          style={{ width: "120px", marginTop: "10px" }}
        />
      )}

      <label>
        <input type="checkbox" checked={breeding} onChange={() => setBreeding(!breeding)} />
        Apareado
      </label>
      {breeding && <input type="date" value={mateDate} onChange={(e) => setMateDate(e.target.value)} />}

      <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
      <input type="number" value={numberOfBirths} onChange={(e) => setNumberOfBirths(e.target.value)} placeholder="Número de partos" />
      <input type="number" value={offspringCount} onChange={(e) => setOffspringCount(e.target.value)} placeholder="Cantidad de crías" />

      {/* VACUNAS */}
      <h4>Vacunas</h4>
      {vaccines.map((v, i) => (
        <div key={i} style={{ marginBottom: "5px" }}>
          <input
            value={v.name}
            onChange={(e) => updateVaccine(i, "name", e.target.value)}
            placeholder="Nombre vacuna"
          />
          <input
            type="date"
            value={v.date}
            onChange={(e) => updateVaccine(i, "date", e.target.value)}
          />
          <button type="button" onClick={() => removeVaccine(i)}>Eliminar</button>
        </div>
      ))}
      <button type="button" onClick={addVaccine}>Agregar Vacuna</button>

      {/* TRATAMIENTOS */}
      <h4>Tratamientos</h4>
      {treatments.map((t, i) => (
        <div key={i} style={{ marginBottom: "5px" }}>
          <input
            value={t.name}
            onChange={(e) => updateTreatment(i, "name", e.target.value)}
            placeholder="Nombre tratamiento"
          />
          <input
            value={t.description}
            onChange={(e) => updateTreatment(i, "description", e.target.value)}
            placeholder="Descripción"
          />
          <button type="button" onClick={() => removeTreatment(i)}>Eliminar</button>
        </div>
      ))}
      <button type="button" onClick={addTreatment}>Agregar Tratamiento</button>

      <br />
      <button type="submit" style={{ marginTop: "10px" }}>Guardar</button>
      <button type="button" onClick={onClose} style={{ marginLeft: "10px" }}>Cancelar</button>
    </form>
  );
}

export default FormEditar;

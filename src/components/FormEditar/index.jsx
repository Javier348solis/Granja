import React, { useState } from "react";

function FormEditar({ animal, animals, setAnimals, onClose }) {
  const [type, setType] = useState(animal.type || "");
  const [breed, setBreed] = useState(animal.characteristics?.breed || "");
  const [color, setColor] = useState(animal.characteristics?.color || "");
  const [location, setLocation] = useState(animal.characteristics?.location || "");
  const [weight, setWeight] = useState(animal.weight || "");
  const [image, setImage] = useState(animal.image || "");
  const [fileImage, setFileImage] = useState(null); // Nuevo estado para file
  const [birthDate, setBirthDate] = useState(animal.birthDate || "");
  const [numberOfBirths, setNumberOfBirths] = useState(animal.numberOfBirths || "");
  const [offspringCount, setOffspringCount] = useState(animal.offspringCount || "");
  const [breeding, setBreeding] = useState(animal.breeding?.mated || false);
  const [mateDate, setMateDate] = useState(animal.breeding?.mateDate || "");

  const handleSave = (e) => {
    e.preventDefault();
    const updatedAnimal = {
      ...animal,
      type,
      characteristics: { breed, color, location },
      weight: parseFloat(weight) || 0,
      image: fileImage ? URL.createObjectURL(fileImage) : image, // Usar file si hay
      birthDate,
      numberOfBirths: parseInt(numberOfBirths) || 0,
      offspringCount: parseInt(offspringCount) || 0,
      breeding: { mated: breeding, mateDate: breeding ? mateDate : null },
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
    <form
      onSubmit={handleSave}
      style={{ border: "2px solid gray", padding: "10px", margin: "10px" }}
    >
      <h3>Editar Animal</h3>
      <input value={type} onChange={(e) => setType(e.target.value)} placeholder="Tipo" />
      <input value={breed} onChange={(e) => setBreed(e.target.value)} placeholder="Raza" />
      <input value={color} onChange={(e) => setColor(e.target.value)} placeholder="Color" />
      <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Ubicación" />
      <input value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Peso" type="number" />

      {/* Input tipo file para imagen */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFileImage(e.target.files[0])}
      />
      {/* Preview de la imagen */}
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

      <button type="submit" style={{ marginTop: "10px" }}>Guardar</button>
      <button type="button" onClick={onClose} style={{ marginLeft: "10px" }}>Cancelar</button>
    </form>
  );
}

export default FormEditar;

import React, { useState, useEffect } from "react";
import "../../Styles/FormAddAnimal.css";

function Index({ setAnimals }) {
  const tiposAnimales = ["Vaca", "Cerdo", "Gallina", "Oveja"];
  const ubicaciones = ["Establo A", "Corral B", "Gallinero C"];
 const imagenes = {
  Vaca: "https://www.google.com/imgres?q=imagenes%20vaca&imgurl=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F205233%2Fisolated%2Fpreview%2F95a902f2eeb23abf8ea7b1cbd89a8773-ilustracion-del-lado-de-la-vaca.png&imgrefurl=https%3A%2F%2Fes.vexels.com%2Fpng-svg%2Fvista-previa%2F205233%2Filustracion-del-lado-de-la-vaca&docid=69PmeVoYQYIXMM&tbnid=cyLtgWD5ZRyaRM&vet=12ahUKEwiXh-vgpeuPAxVxsoQIHVmtAKsQM3oECHEQAA..i&w=512&h=512&hcb=2&ved=2ahUKEwiXh-vgpeuPAxVxsoQIHVmtAKsQM3oECHEQAA", 
  Cerdo: "https://www.google.com/imgres?q=IMAGENES%20CERDOS&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F140462837%2Fes%2Ffoto%2Flinda-cerdo-apoyarse-sobre-la-baranda-de-la-cuna.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3Ds5JWs0NPQiqyVCT1u5qBSYwLDkKzMCXAwtkqakCB8Lc%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fes%2Ffotos%2Fcerdo&docid=MpXRUCHtNlL1eM&tbnid=57OIgoPlMzHe5M&vet=12ahUKEwjLgtGUqOuPAxVUmbAFHQjMANUQM3oECCYQAA..i&w=612&h=408&hcb=2&ved=2ahUKEwjLgtGUqOuPAxVUmbAFHQjMANUQM3oECCYQAA",
  Gallina: "https://www.google.com/imgres?q=IMAGENES%20GALLINAS&imgurl=https%3A%2F%2Fwww.intagri.com%2Fassets%2Fimages%2Farticulos%2Fcategoria1%2Fganaderia%2Fart102-razas-de-gallinas%2Fgallina-raza.jpg&imgrefurl=https%3A%2F%2Fwww.intagri.com%2Farticulos%2Fganaderia%2Fconoce-las-razas-de-gallina-de-postura&docid=5UGHgutiLIakJM&tbnid=tWaTvwJ3R15i8M&vet=12ahUKEwj_3pimqOuPAxVrVzABHQRGAk8QM3oECBQQAA..i&w=447&h=540&hcb=2&ved=2ahUKEwj_3pimqOuPAxVrVzABHQRGAk8QM3oECBQQAA",
  Oveja: "https://www.google.com/imgres?q=IMAGENESOVEJAS&imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fovejas-aisladas-en-el-fondo-blanco-360476135.jpg&imgrefurl=https%3A%2F%2Fes.dreamstime.com%2Fovejas-aisladas-en-fondo-blanco-negras-image239517963&docid=LpAU30jzM6tAFM&tbnid=vsWcQQnyxOPulM&vet=12ahUKEwi2kOyyqOuPAxXsQzABHUdSAP4QM3oECB4QAA..i&w=800&h=800&hcb=2&ved=2ahUKEwi2kOyyqOuPAxXsQzABHUdSAP4QM3oECB4QAA",
};



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

  // Cargar animales desde localStorage al iniciar
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
  };

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

        {/* Imagen */}
        <select
          value={imagenSeleccionada}
          onChange={(e) => setImagenSeleccionada(e.target.value)}
        >
          <option value="">Seleccionar imagen</option>
          {Object.entries(imagenes).map(([tipo, url]) => (
            <option key={tipo} value={url}>
              {tipo}
            </option>
          ))}
        </select>
        {imagenSeleccionada && (
          <div>
            <img src={imagenSeleccionada} alt="animal" width="120" />
          </div>
        )}

        <button
          type="submit"
          style={{ color: "blue", border: "2px solid", display: "flex" }}
        >
          Agregar Animal
        </button>
      </form>
    </div>
  );
}

export default Index;

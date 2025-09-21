import React from "react";


function index({data}) {
    console.log("Datos", data)
//   const datas = data.datas; //Aqui como estoy utilizano una funcion normal de js que me devuelve react entonces cree esta constante 
 // solo me recorra en el json los datos que voy a necesitar que en este caso son de dataes

  return (
    <div>  
      <h1>Lista de dataes</h1>
      <div style={{display:"flex", gap:"20px"}}>
      {/* {datas.map((data) => ( //Utilce map para recorra uno por uno y me devuelva los datos que voy a necesitra */}
        <div key={data.id} className="ficha-data" style={{border:"5px solid blue", padding:"10px", display: "flex", flexWrap:"wrap", gap:"10px", margin:"10px"}}>
          <h2>{data.type}</h2>
          <p><strong>Raza:</strong> {data.characteristics.breed}</p>
          <p><strong>Color:</strong> {data.characteristics.color}</p>
          <p><strong>Ubicación:</strong> {data.characteristics.location}</p>
          <p><strong>Peso:</strong> {data.weight} kg</p>
          {/* <p><strong>Vacunas:</strong> {data.vaccines.map(v => v.name).join(", ")}</p> */}
        </div>
      {/* ))} */}
      </div>
    </div>
  );
}

export default index;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

function App() {
  const cientificos = [
    {
      nombre: "Maria Skłodowska-Curie",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Marie_Curie_%281900%29.jpg/330px-Marie_Curie_%281900%29.jpg",
      profesion: "Física y química",
      premios: "4 (Nobel de Física, Nobel de Química, Medalla Davy, Medalla Matteucci)",
      descubrio: "Polonio y radio"
    },
    {
      nombre: "Albert Einstein",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
      profesion: "Físico teórico",
      premios: "Premio Nobel de Física (1921)",
      descubrio: "Teoría de la relatividad"
    },
  ];

  return (
    <div className="contenedor">
      {cientificos.map((c, index) => (
        <Card
          key={index}
          nombre={c.nombre}
          imagen={c.imagen}
          profesion={c.profesion}
          premios={c.premios}
          descubrio={c.descubrio}
        />
      ))}
    </div>
  );
}

export default App;


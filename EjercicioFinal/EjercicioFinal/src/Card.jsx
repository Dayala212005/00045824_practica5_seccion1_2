import "./App.css";

function Card({ nombre, imagen, profesion, premios, descubrio }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={imagen} alt={nombre} />
        <h2>{nombre}</h2>
      </div>

      <div className="info">
        <b>Profesión:</b>
        <span>{profesion}</span>
      </div>

      <div className="info">
        <b>Premios:</b>
        <span>{premios}</span>
      </div>

      <div className="info">
        <b>Descubrió:</b>
        <span>{descubrio}</span>
      </div>
    </div>
  );
}

export default Card;

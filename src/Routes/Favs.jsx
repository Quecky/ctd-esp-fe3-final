import React, { useEffect,useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = ({state}) => {
  const themeClass = state.theme === 'light' ? 'light-favs' : 'dark-favs';

  return (
    <div className={`favs-container ${themeClass}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {state.favorites.length > 0 ? (
        state.favorites.map((dentist) => (
          <Card key={dentist.id} id={dentist.id} name={dentist.name} username={dentist.username} />
        ))
      ) : (
        <p>No hay favoritos.</p>
      )}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;

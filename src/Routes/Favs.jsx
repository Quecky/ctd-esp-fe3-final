import React, { useEffect,useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavs(savedFavs);
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {favs.map((fav)=>(
          <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id} />
        ))

        }
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;

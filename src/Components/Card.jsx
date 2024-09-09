import React from 'react';

import { Link } from 'react-router-dom'

const Card = ({ name, username, id }) => {



  const getFavorites = () => {
    return JSON.parse(localStorage.getItem('favs')) || [];
  };



  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  
    const favs = getFavorites();
    if (!favs.some((fav) => fav.id === id)) { 
    const newFav = { id, name, username };
    const updatedFavs = [...favs, newFav];
    localStorage.setItem('favs', JSON.stringify(updatedFavs));

    alert('Añadido a favoritos');
  } else {
    alert('Este dentista ya está en favoritos');
  }
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <h3>{name} </h3>
        <h4>{username}</h4>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
     
       <Link to={"/dentista/"+id} ><h4>Detalle del dentista</h4></Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;

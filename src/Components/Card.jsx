import React, { useContext } from 'react';

import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';

const Card = ({ name, username, id }) => {

  const { state, addFavorite, removeFavorite } = useContext(ContextGlobal);

  const isFavorite = state.favorites.some((fav) => fav.id === id);


  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  
    if (isFavorite) {
      removeFavorite({ id, name, username });
    alert('Dentista removido de favoritos');
    
  } else {
    addFavorite({ id, name, username });
    alert('Añadido a favoritos');
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
        <button onClick={addFav} className="favButton"> {isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}</button>
    </div>
  );
};

export default Card;

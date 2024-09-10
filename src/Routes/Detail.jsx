import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = ({state}) => {
  const [dentista,setDentista]=useState({});
  const params = useParams();
  const url =
  `https://jsonplaceholder.typicode.com/users/${params.id}`;

  const getDentista = async()=>
  {
    const res = await fetch(url)
    const data = await res.json()
    setDentista(data);
  }
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(()=>{
  getDentista();
  }, []);
  const themeClass = state.theme === 'light' ? 'light-detail' : 'dark-detail';
  return (
    <div className={`detail-container ${themeClass}`}>
      <h1>Detail Dentist {params.id} </h1>
      <h3>{dentista.name}</h3>
      <h3>{dentista.email}</h3>
      <h3>{dentista.phone}</h3>
      <h3>{dentista.website}</h3>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail
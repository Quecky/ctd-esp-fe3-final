import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios';
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = ({state}) => {
 
  const themeClass = state.theme === 'light' ? 'light-home' : 'dark-home';
  return (
    <main className={`home-container ${themeClass}`} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.data.map((dentist)=>(
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
        ))

        }
      </div>
    </main>
  )
}

export default Home
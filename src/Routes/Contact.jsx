import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = ({state}) => {
  const themeClass = state.theme === 'light' ? 'light-contact' : 'dark-contact';
  return (
    <div className={`contact-container ${themeClass}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact
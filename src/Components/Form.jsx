import React, { useState } from "react";
import styles from "./form.module.css";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [contacto, setContacto] = useState({
    nombre: "",
    email: "",
  });
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChangeName = (event) => {
    setContacto({ ...contacto, nombre: event.target.value });
  };
  const handleChangeEmail = (event) => {
    setContacto({ ...contacto, email: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      contacto.nombre.length > 5 &&
      contacto.email.trim() &&
      emailPattern.test(contacto.email)
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>Nombre completo: </label>
        <input
          className={styles.input}
          type="text"
          value={contacto.nombre}
          onChange={handleChangeName}
        />
        <label className={styles.label}>Email: </label>
        <input
          className={styles.input}
          type="email"
          value={contacto.email}
          onChange={handleChangeEmail}
        />

        <button>Enviar</button>
      </form>
      {error ? (
        <>
          <h4 style={{ color: "red" }}>
            Por favor verifique su información nuevamente
          </h4>
        </>
      ) : null}

      {show ? (
        <>
          <h4 style={{ color: "green" }}>
            {" "}
            Gracias {contacto.nombre}, te contactaremos cuando antes vía mail
          </h4>
        </>
      ) : null}
    </div>
  );
};

export default Form;

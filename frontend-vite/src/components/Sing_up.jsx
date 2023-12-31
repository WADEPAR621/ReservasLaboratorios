import React, { useState } from "react";

import { Link } from "react-router-dom";
import '../styles/Sing_up.css';
import imagenes1 from '../images/loginimagen.png';
import irlogin from "../components/Login";

const SignUp = () => {
  const [newStudent, setNewStudent] = useState({
    NOM_USE: "",
    APE_USE: "",
    COR_USE: "",
    SEC_USE_digest: "",
    CAR_USE: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleAddEstudiante = async (e) => {
    e.preventDefault();
  
    try {
      console.log("Nuevo estudiante:", newEstudiante);
  
      const response = await fetch("http://localhost:3000/estudiantes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newEstudiante)
      });
  
      if (response.ok) {
        console.log("Estudiante creado con éxito");
      } else {
        console.error("Error al crear el estudiante:", response.statusText);
      }
  
      setNewEstudiante({
        NOM_USE: "",
        APE_USE: "",
        COR_USE: "",
        SEC_USE_digest: "",
        CAR_USE: ""
      });
    } catch (error) {
      console.error("Error al crear el estudiante:", error);
    }
  };
  

  return (
    <>
    <head>
    <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    </head>

<body>
      

      <div className="form-group__LOGIN">
        <h1 className="titulo1">Cree su Cuenta</h1>
        <div className="inputbox">
          <input
            className="inputbox__input"
            type="text"
            required
            value={newStudent.usuario}
            onChange={(e) => setNewStudent({ ...newStudent, usuario: e.target.value })}
          />
          <label className="inputbox__label" htmlFor="">
            Nombre
          </label>
        </div>

        <div className="inputbox">
          <input
            className="inputbox__input"
            type="text"
            required
            value={newStudent.correoElectronico}
            onChange={(e) => setNewStudent({ ...newStudent, correoElectronico: e.target.value })}
          />
          <label className="inputbox__label" htmlFor="">
            Correo Electrónico
          </label>
        </div>

        <div className="inputbox">
          <input
            className="inputbox__input"
            type="password"
            required
            value={newStudent.contrasena}
            onChange={(e) => setNewStudent({ ...newStudent, contrasena: e.target.value })}
          />
          <label className="inputbox__label" htmlFor="">
            Contraseña
          </label>
        </div>

        <br />
        <button id="boton" className="boton" onClick={handleAddEstudiante}>
          Crear Cuenta
        </button>
        <br />
        <button id="boton2" className="boton2" onClick={handleAddEstudiante}>
          Continue with Microsoft 365
        </button>
        <br />
        <p>
          ¿Ya tienes una cuenta? <button onClick={irlogin}>Inicia sesión</button>
        </p>
      </div>

      <div className="Imagen1">
        <img src={imagenes1} className="Imagen1" alt="loginimagen" />
      </div>
      </body>
    </>
  );
};

export default SignUp;

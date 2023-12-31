import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
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
      <div className="">
        <img src={imagenes1} className="Imagen1" alt="loginimagen" />
      </div>
      <div className="form-group__LOGIN">
        <h1 className="titulo1">Cree su Cuenta</h1>

        <div className="inputbox">
          <input
            className="inputbox__input"
            type="text"
            required
            value={newCuenta.usuario}
            onChange={(e) => setNewCuenta({ ...newCuenta, usuario: e.target.value })}
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
            value={newCuenta.correoElectronico}
            onChange={(e) => setNewCuenta({ ...newCuenta, correoElectronico: e.target.value })}
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
            value={newCuenta.contrasena}
            onChange={(e) => setNewCuenta({ ...newCuenta, contrasena: e.target.value })}
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
        <button id="boton2" className="boton2" onClick={handleAddCuenta}>
          Continue with Microsoft 365
        </button>
        <br />
        <p>
          ¿Ya tienes una cuenta? <button onClick={irlogin}>Inicia sesión</button>
        </p>
      </div>
    </>
  );
};

export default SignUp;

import React from "react";
import { IonIcon } from "@ionic/react";
import { Link, redirect } from "react-router-dom";
import '../styles/Sing_up.css'
import imagenes1 from '../images/loginimagen.png';
import { useState } from "react";
import { useEffect } from "react";
import irlogin from "../components/Login.tsx";


interface Cuenta {
    usuario: string;
    correoElectronico: string;
    contrasena: string;
  }
  
  const SignUp: React.FC = () => {
    const [newCuenta, setNewCuenta] = useState<Cuenta>({
      usuario: "",
      correoElectronico: "",
      contrasena: ""
    });
  
    const handleAddCuenta = async (e: React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
  
      try {
        // Puedes agregar tu lógica de envío a la base de datos aquí
        console.log("Nueva cuenta:", newCuenta);
  
        // Limpia el estado después de agregar la cuenta
        setNewCuenta({
          usuario: "",
          correoElectronico: "",
          contrasena: ""
        });
        
      } catch (error) {
        console.error("Error al crear la cuenta:", error);
      }
    };
    

    return (
      <>
          <div className="">
                <img src={imagenes1} className="Imagen1" />
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
          <button id="boton" className="boton" onClick={handleAddCuenta}>
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
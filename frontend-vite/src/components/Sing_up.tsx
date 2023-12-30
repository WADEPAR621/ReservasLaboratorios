import React from "react";
import { IonIcon } from "@ionic/react"; 
import { Link, redirect } from "react-router-dom";
import '../styles/Sing_up.css'
import imagenes1 from '../images/loginimagen.png';
import { useState } from "react";
import { useEffect } from "react";

interface Cuenta {
  fechaNacimiento: string;
  correoElectronico: string;
  usuario: string;
  ncedula: string;
  contrasena: string;
}

const SignUp: React.FC = () => {
  const [cuentas, setCuentas] = useState<Cuenta[]>([]);
  const [newCuenta, setNewCuenta] = useState<Cuenta>({
    fechaNacimiento: "",
    correoElectronico: "",
    usuario: "",
    ncedula: "",
    contrasena: ""
  });
  const [contrasenaConfirm, setContrasenaConfirm] = useState<string | null>(null);

  const handleAddCuenta = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("COLOCAR BD", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCuenta),
      });
      const data = await response.json();
      setCuentas([...cuentas, data]);
      setNewCuenta({
        fechaNacimiento: "",
        correoElectronico: "",
        usuario: "",
        ncedula: "",
        contrasena: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="containerPrincipal">
      <div className="form-group__SIGNUP">
        <h1>Registrarse con una cuenta</h1>
        <div>
          <div className="inputbox" id="inputbox__Nombre">
            <input
              type="text"
              required
              value={newCuenta.usuario}
              onChange={(e) => setNewCuenta({ ...newCuenta, usuario: e.target.value })}
            />
            <label htmlFor="inputbox__Nombre">Nombre</label>
          </div>
        </div>
        <div className="inputbox">
          <input
            type="number"
            required
            value={newCuenta.ncedula}
            onChange={(e) => setNewCuenta({ ...newCuenta, ncedula: e.target.value })}
          />
          <label htmlFor="">Numero de celular</label>
        </div>
        <div className="inputbox">
          <input
            type="date"
            required
            value={newCuenta.fechaNacimiento}
            onChange={(e) => setNewCuenta({ ...newCuenta, fechaNacimiento: e.target.value })}
          />
          <label htmlFor="inputbox__Date">Dia de Nacimiento</label>
        </div>
        <div className="inputbox">
          <input
            type="text"
            required
            value={newCuenta.correoElectronico}
            onChange={(e) => setNewCuenta({ ...newCuenta, correoElectronico: e.target.value })}
          />
          <label htmlFor="">Correo Electronico</label>
        </div>
        <div className="inputbox">
          <input
            type="password"
            required
            value={newCuenta.contrasena}
            onChange={(e) => setNewCuenta({ ...newCuenta, contrasena: e.target.value })}
          />
          <label htmlFor="">Contraseña</label>
        </div>
        <div className="inputbox">
          <input
            type="password"
            required
          
          />
          <label htmlFor="">Confirmar Contraseña</label>
        </div>
        <br />
        <button id="boton" className="boton" onClick={handleAddCuenta}>
          Crear Cuenta
        </button>
      </div>
    </div>
  );
};

export default SignUp;

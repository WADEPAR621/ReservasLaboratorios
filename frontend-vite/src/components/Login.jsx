import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {

  };

  return (
    <div className="containerPrincipal">
      <img src="..." alt="" className="imagenDerecha" />

      <div className="form-group__LOGIN">
        <h1>Inicia sesión en tu cuenta</h1>

        <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
          <input
            className="inputbox__input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="inputbox__label" htmlFor="">
            Email
          </label>
        </div>

        <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input
            className="inputbox__input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="inputbox__label" htmlFor="">
            Contraseña
          </label>
        </div>

        <button
          id="boton"
          className="boton"
          onClick={login}
        >
          INICIAR SESIÓN
        </button>
      </div>
    </div>
  );
};

export default Login;
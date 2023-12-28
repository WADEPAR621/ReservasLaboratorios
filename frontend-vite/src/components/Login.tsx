import React from "react";
import { IonIcon } from "@ionic/react"; // Asegúrate de ajustar la ruta según tu configuración
import { Link, redirect } from "react-router-dom";
import '../styles/Login.css';
function login(){}
const Login: React.FC = () => {
    return (
        <html>
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            </head>
            <body>
                <div className="containerPrincipal">
                    <IonIcon name="mail-outline"></IonIcon>
                    {/* Puedes ajustar la ruta y el nombre de la imagen según tu configuración */}
                    <img src="..." alt="" className="imagenDerecha" />
                </div>

                <div className="form-group__LOGIN">
                    <h1>Inicia sesión en tu cuenta</h1>
                    <div className="inputbox">
                        <IonIcon name="mail-outline"></IonIcon>
                        <input className="inputbox__input" type="text" />
                        <label className="inputbox__label" htmlFor="">Email</label>
                    </div>

                    <div className="inputbox">
                        <IonIcon name="lock-closed-outline"></IonIcon>
                        <input className="inputbox__input" type="password" />
                        <label className="inputbox__label" htmlFor="">Contraseña</label>
                    </div>
                    <button id="boton" className="boton" onClick={() => login()}>INCIAR SESION</button>
  
              </div>
            </body>
        </html>
    );
}

export default Login;

// Agrega la siguiente línea si aún no tienes una definición para la función login
// function login() {
//   // Implementación de la función login
// }

import React, { useState, useEffect } from "react";

import '../styles/Login.css';
import imagenes1 from '../images/loginimagen.png';
import { createBrowserHistory } from 'history';
import { Link } from 'react-router-dom';

const history = createBrowserHistory();
const Login = () => {



    const [cuenta, setcuenta] = useState([]);
    const [showEntrada, setShowEntrada] = useState(false);
    const [usuarioLo, setUsuario] = useState({
        usuario: "",
        contrasena: ""
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch(``, {
                method: "GET",
            });
            const data = await response.json();
            setcuenta(data);
        } catch (error) {
            console.log(error);
        }
    };

    const login = () => {
        const userLogedo = cuenta.find((user) => user.usuario === usuarioLo.usuario);
        console.log(userLogedo);
        if (userLogedo) {
            if (userLogedo.contrasena === usuarioLo.contrasena) {
                return setShowEntrada(true);
                history.push("/Principal");
            }
            return alert("Contraseña incorrecta");
        }
        return alert("Usuario No detectado");
    };
    const handleContinueClick = () => {
        history.push("/Sing_up");
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
                    <h1>Inicia sesión </h1>
                    <div className="inputbox">

                        <input
                            className="inputbox__input"
                            type="text"
                            required
                            value={usuarioLo.usuario}
                            onChange={(e) => setUsuario({ ...usuarioLo, usuario: e.target.value })}
                        />
                        <label className="inputbox__label" htmlFor="">
                            Email
                        </label>
                    </div>
                    <div className="inputbox">

                        <input
                            className="inputbox__input"
                            type="password"
                            required
                            value={usuarioLo.contrasena}
                            onChange={(e) => setUsuario({ ...usuarioLo, contrasena: e.target.value })}
                        />
                        <label className="inputbox__label" htmlFor="">
                            Contraseña
                        </label>
                    </div>
                    <button id="boton" className="boton" onClick={() => login()}>
                        INCIAR SESION
                    </button>
                    <br />

                   
                        <button id="boton2" className="boton2" onClick={handleContinueClick}>
                            Continue with Microsoft 365
                        </button>
                  

                    <br />
                    <p>
                        ¿No tienes una cuenta? <Link to="/Sing_up">Regístrate</Link>
                    </p>
                </div>
                <div className="">
                    <img src={imagenes1} className="Imagen1" alt="loginimagen" />
                </div>

            </body>
        </>
    );
};

export default Login;

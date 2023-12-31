import React from "react";
import { IonIcon } from "@ionic/react";
import { Link, redirect } from "react-router-dom";
import '../styles/Login.css'
import irlogin from "../components/Login.tsx";
import imagenes1 from '../images/loginimagen.png';
import { useState } from "react";
import { useEffect } from "react";

interface User {
    usuario: string;
    contrasena: string;
}
const Login: React.FC = () => {

    const [cuenta, setcuenta] = useState<User[]>([]);
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
            setcuenta(data)
        } catch (error) {
            console.log(error);
        }
    };

    const login = () => {
        const userLogedo = cuenta.find((user) => user.usuario === usuarioLo.usuario)
        console.log(userLogedo)
        if (userLogedo) {
            if (userLogedo.contrasena == usuarioLo.contrasena) {
                return setShowEntrada(true);
            }
            return alert("Contraseña incorrecta")
        }
        return alert("Usuario No detectado")
    }

    return (
        <>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

    
                <div className="">
                    <img src={imagenes1} className="Imagen1" />
                </div>

                <div className="form-group__LOGIN">
                    <h1>Inicia sesión en tu cuenta</h1>
                    <div className="inputbox">
                        <IonIcon name="mail-outline"></IonIcon>
                        <input className="inputbox__input" type="text" required value={usuarioLo.usuario} onChange={(e) => setUsuario({ ...usuarioLo, usuario: e.target.value })} />
                        <label className="inputbox__label" htmlFor="">Email</label>
                    </div>
                    <div className="inputbox">
                        <IonIcon name="lock-closed-outline"></IonIcon>
                        <input className="inputbox__input" type="password" required value={usuarioLo.contrasena} onChange={(e) => setUsuario({ ...usuarioLo, contrasena: e.target.value })} />
                        <label className="inputbox__label" htmlFor="">Contraseña</label>
                    </div>
                    <button id="boton" className="boton" onClick={() => login()}>INCIAR SESION</button>
                    <br />
                <button id="boton2" className="boton2" >
                    Continue with Microsoft 365
                </button>
                <br />
                <p>
                    ¿No tienes una cuenta? <button onClick={irlogin}>Registrate</button>
                </p>
                </div>
              

           
        </>
    );
}

export default Login;



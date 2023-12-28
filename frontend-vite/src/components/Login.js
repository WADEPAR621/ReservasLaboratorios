import { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom"
import '../styles/Login.css';

const Login = () => {




    return (
        <>
            <html>
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                </head>
                <body>

                    <div class="containerPrincipal">
                        <img src="..." alt="" className="imagenDerecha" />
                    </div>

                    <div class="form-group__LOGIN">
                        
                        <h1>Inicia sesión en tu cuenta</h1>
                        <div class="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input class= "inputbox__input" type="text"  />
                            <label class= "inputbox__label" for="" >Email</label>
                        </div>

                        <div class="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input class="inputbox__input" type="password"  />
                            <label class="inputbox__label" for="">Contraseña</label>

                         
                        </div>
                        <button id="boton" class="boton" onclick="login()" onClick="">INCIAR SESION</button>
                    </div>



                </body>
            </html>



        </>
    );
}
export default Login;
import React, { useState, useEffect } from "react";

import '../../styles/Login.css';
import imagenes1 from '../../images/loginimagen.png';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ usuarioLo, setUsuario }) => {

    const [students, setstudents] = useState([]);
    const [admin, setadmin] = useState([]);


    const navigate = useNavigate()

    useEffect(() => {
        fetchStudents();
        fetchTechnicians();
    }, []);



    const validateTecnico = () => {
        const adminLogedo = admin.find((admin) => admin.NOM_USER_TEC === usuarioLo.usuario);
        if (adminLogedo) {
            if (adminLogedo.CON_TEC == usuarioLo.contrasena) {
                setUsuario({ ...usuarioLo, isAuth: true, rol: "admin" });
                navigate("/Admin");
                return true;
            }
            alert("Contraseña o Usuario incorrectos")
            return false;
        }
        return false;
    }
    //VALIDACION ESTUDIANTES
    const validatestudent = () => {
        const studentsLogedo = students.find((students) => students.COR_USE === usuarioLo.usuario);
        console.log(studentsLogedo)
        if (studentsLogedo) {
            if (studentsLogedo.SEC_USE_digest == usuarioLo.contrasena) {
                console.log("entro")
                setUsuario({ ...usuarioLo, isAuth: true, rol: "students" });
                navigate("/MapaPisos");
                return true;
            }
            alert("Usuario o Contraseña incorrectos")
            return false;
        }
        return false;
    }

    const fetchStudents = async () => {
        try {
            const response = await fetch(`http://localhost:3000/students`, {
                method: "GET",
            });
            const data = await response.json();
            setstudents(data);
        } catch (error) {
            console.log(error);
        }
    };
    const fetchTechnicians = async () => {
        try {
            const response = await fetch(`http://localhost:3000/tecnicos`, {
                method: "GET",
            });
            const data = await response.json();
            setadmin(data);
        } catch (error) {
            console.log(error);
        }
    };

    const login = () => {
        const validation = validateTecnico();
        if (!validation) {
            validatestudent()
        }
    };
   

    return (
        <div className="principalLogin">
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
                    <label className="inputbox__label_Login" htmlFor="">
                        Nombre de Usuario
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
                    <label className="inputbox__label_Login" htmlFor="">
                        Contraseña
                    </label>
                </div>
                <button id="boton" className="boton" onClick={() => login()}>
                    
                    INCIAR SESION
                </button>
                <br />

                <button id="boton2" className="boton2" >
                <Link className="boton2" to='/ManualUsuario'>Manual de Usuario</Link>
                </button>


                <br />
                <p>
                    ¿No tienes una cuenta? <Link to="/Sing_up">Regístrate</Link>
                </p>
            </div>
            <div className="">
                <img src={imagenes1} className="Imagen1" alt="loginimagen" />
            </div>
        </div>
    );
};

export default Login;

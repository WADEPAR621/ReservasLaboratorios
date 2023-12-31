import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

import '../../styles/MisReservas.css';
import NavBar from "../NavbarMenu";
const MisReservas = () => {
    //CODIGO JAVASCRIPT
    
    //HTML QUE RETORNA
    return (
        <div className="principal">
            <NavBar />
            <div className="containerEst">
                <div className="container_imgEst">
                    <h1>Perfil</h1>
                    <i>Pagina de la FISEI</i>
                    <i>Reserva Rapida</i>
                    <img className="imagenEst"
                        src="https://i.ibb.co/bv0RVMb/Captura-de-pantalla-2023-11-22-230109.png" />
                        <button>
                            Cerrar Sesion
                        </button>
                </div>
                <div className="container_table">
                    <h1>HORARIOS EN CURSO:</h1>
                    <div className="container_list">
                        <div className="reserva">
                            <i>Laboratorio 2</i>
                            <text>10h00AM - 11h00am</text>
                        </div>
                        <div className="reserva">
                            <i>Laboratorio 2</i>
                            <text>10h00AM - 11h00am</text>
                        </div>
                        <div className="reserva">
                            <i>Laboratorio 2</i>
                            <text>10h00AM - 11h00am</text>
                        </div>
                        <div className="reserva">
                            <i>Laboratorio 2</i>
                            <text>10h00AM - 11h00am</text>
                        </div>
                    </div>
                    <button>
                        Volver al Mapa
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MisReservas;
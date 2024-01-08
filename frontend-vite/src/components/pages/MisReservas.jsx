import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import '../../styles/MisReservas.css';
import NavBar from "../NavbarMenu";

const MisReservas = () => {
    //CODIGO JAVASCRIPT

    useEffect(() => {
        fetchGetReservas(1);
    }, []);

    //CONSULTAS GET A LA BASE DE DATOS
    //CONSULTA DE RECOGER LAS RESERVAS DEL ESTUDIANTE
    const [reservas, setReservas] = useState([]);
    const fetchGetReservas = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/books/by_user/${id}`, {
                method: "GET"
            });
            if (!response.ok) {
                throw new Error('Fallo al conectar a la base de datos');
            }
            const data = await response.json();
            const updatedReservas = await Promise.all(data.map(async (reserva) => {
                const roomResponse = await fetch(`http://localhost:3000/rooms/${reserva.Room_id}`);
                if (!roomResponse.ok) {
                    throw new Error('Fallo al obtener el nombre de la sala');
                }
                const roomData = await roomResponse.json();
                return {
                    ...reserva,
                    NOM_HAB: roomData.NOM_HAB
                };
            }));
    
            setReservas(updatedReservas);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

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
                    <button className="CerrarSesion">
                        Cerrar Sesion
                    </button>
                </div>
                <div className="container_table">
                    <h1>     HORARIOS EN CURSO:</h1>
                    <div className="container_list">
                        {Object.keys(reservas).map((reservaId) => (
                            <div key={reservaId} className="reserva">
                                <i>{reservas[reservaId].NOM_HAB}</i>
                                reservas[reservaId].HOR_INI_RES;
                                <text>{reservas[reservaId].HOR_INI_RES} - {reservas[reservaId].HOR_FIN_RES}</text>
                                <i>{reservas[reservaId].EST_RES ? 'Aceptado' : 'En Revision'}</i>
                            </div>
                        ))}
                    </div>
                    <button className="VolverButton">
                        Volver al Mapa
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MisReservas;
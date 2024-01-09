import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

import '../../styles/NuevaReserva.css';
import NavBar from "../NavbarMenu";
const NuevaReserva = () => {
    //CODIGO JAVASCRIPT
    const validarCampos = () => {
        if (selectedOption === "DefaultRoom" || selectedOptionTime === "DefaultTime" || !razonReserva.trim()) {
            return false; // Uno o más campos están vacíos
        }
        return true; // Todos los campos tienen datos
    };

    //USEEFFECT
    useEffect(() => {
        fetchHabitacion();
    }, []);
    //Select habitacion
    const [selectedOption, setSelectedOption] = useState("DefaultRoom");

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        console.log("selectedOption");
        console.log(selectedOption);
    };
    //select horario
    const [selectedOptionTime, setSelectedOptionTime] = useState("DefaultTime");
    let today = new Date();
    let horaInicioDate = new Date();
    let horaFinDate = new Date();
    const handleSelectChangeTime = (event) => {
        const selectedValue = event.target.value; // Obtener el valor seleccionado del evento
        setSelectedOptionTime(selectedValue);  // Actualizar el estado con el valor seleccionado

        // Verificar si el valor seleccionado no es "DefaultTime"
        if (selectedValue !== "DefaultTime") {
            const [inicio, fin] = selectedValue.split('-'); // Dividir el valor seleccionado usando el guion como delimitador
            const horaInicio = Number(inicio.trim()); // Convertir a número y obtener la hora de inicio
            const horaFin = Number(fin.trim()); // Convertir a número y obtener la hora de fin

            // Crear objeto Date para la hora de inicio
            horaInicioDate.setHours(horaInicio, 0, 0, 0);

            // Crear objeto Date para la hora de fin
            horaFinDate.setHours(horaFin, 0, 0, 0);

            // Ahora, puedes usar horaInicioDate y horaFinDate como necesites
            console.log("Hora de inicio (Date):", horaInicioDate);
            console.log("Hora de fin (Date):", horaFinDate);
        }
    };
    //OBTENER TEXTO/RAZON DE RESERVA
    const [razonReserva, setRazonReserva] = useState('');
    const handleRazonReservaChange = (event) => {
        setRazonReserva(event.target.value);
    };

    //CONSULTA A LA BASE DE DATOS DONDE TOMARA LAS HABITACIONES DISPONIBLES

    const [rooms, setRooms] = useState([])
    const fetchHabitacion = async () => {
        try {
            const response = await fetch(`http://localhost:3000/rooms/by_disponible`, {
                method: "GET"
            });
            if (!response.ok) {
                throw new Error('Fallo al conectar a la base de datos');
            }
            const dati = await response.json();
            setRooms(dati);
            setRooms(dati);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    //ENVIAR DATOS A LA BASE DE DATOS CON LA UNFO QUE SE OBTUVO EN EL FORMULARIO
    const enviarSolicitud = async () => {
        if (!validarCampos()) {
            const errorMessage = document.getElementById('errorMessage');
            errorMessage.innerText = 'Parametros en Blanco no son permitidos';
            errorMessage.style.display = 'block';

            setTimeout(() => {errorMessage.style.display = 'none';}, 2500);
            return;
        }
        try {
            // Realiza la solicitud a la API para crear un nuevo libro (o reserva)
            const response = await fetch('http://localhost:3000/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Student_id: 2,
                    Tecnico_id: 2, // Reemplaza con el ID del técnico seleccionado
                    Room_id: selectedOption, // Reemplaza con el ID de la habitación seleccionada
                    RAZ_RES: razonReserva, // Reemplaza con el valor del cuadro de texto
                    HOR_INI_RES: horaInicioDate, // Reemplaza con el valor seleccionado
                    HOR_FIN_RES: horaFinDate, // Reemplaza con el valor seleccionado
                    EST_RES: false, // Puedes establecer el estado según tu lógica
                }),
            });

            if (!response.ok) {
                throw new Error('Error al enviar la solicitud');
            }

            // Mostrar el mensaje en la mitad de la pantalla
            const messageDisplay = document.getElementById('messageDisplay');
            messageDisplay.innerText = 'Solicitud enviada con éxito';
            messageDisplay.style.display = 'block';

            // Ocultar el mensaje después de unos segundos (opcional)
            setTimeout(() => {
                messageDisplay.style.display = 'none';
            }, 3000);

        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
    };


    //HTML QUE RETORNA
    return (
        <div className="body">
            <NavBar />
            <div className="containerNew">
                <div className="containerNew_img">
                    <img className="imagen" src="https://i.ibb.co/gzSxjWv/imagen-2023-12-29-023846609.png" />
                    <img className="imagen" src="https://i.ibb.co/pZfxCVr/imagen-2023-12-29-122437848.png" />
                    <img className="imagen" src="https://i.ibb.co/2jXXHq7/imagen-2023-12-29-123457328.png" />
                </div>
                <div className="containerNew_form">
                    <h1>HABITACION:</h1>
                    <select id="container_form_selectLab" value={selectedOption} onChange={handleSelectChange}>
                        <option value="DefaultRoom" disabled selected>Selecciona una opción</option>
                        {Object.keys(rooms).map((roomsId) => (
                            <option value={rooms[roomsId].id}> {rooms[roomsId].NOM_HAB}</option>
                        ))}
                    </select>
                    <h1>HORARIO:</h1>
                    <select id="container_form_selectTime" placeholder="SELECCIONAR" value={selectedOptionTime} onChange={handleSelectChangeTime}>
                        <option value="DefaultTime" disabled selected>Selecciona una opción</option>
                        <option value="7-8">7H00am - 8H00am</option>
                        <option value="8-9">8H00am - 9H00am</option>
                        <option value="9-10">9H00am - 10H00am</option>
                        <option value="10-11">10H00am - 11H00am</option>
                        <option value="11-12">11H00am - 12H00pm</option>
                        <option value="12-13">12H00pm - 13H00pm</option>
                        <option value="13-14">13H00pm - 14H00pm</option>
                        <option value="14-15">14H00pm - 15H00pm</option>
                        <option value="15-16">15H00pm - 16H00pm</option>
                        <option value="16-17">16H00pm - 17H00pm</option>
                        <option value="17-18">17H00pm - 18H00pm</option>
                        <option value="18-19">18H00pm - 19H00pm</option>
                        <option value="19-20">19H00pm - 20H00pm</option>
                    </select>
                    <h1>RAZON:</h1>
                    <textarea
                        placeholder="Explique en breves palabras que desea hacer en esta reserva"
                        value={razonReserva}
                        onChange={handleRazonReservaChange}
                    />
                    <button onClick={enviarSolicitud}>
                        ENVIAR SOLICITUD
                    </button>
                    <div id="messageDisplay"></div>
                    <div id="errorMessage"></div>
                </div>
            </div>
        </div>
    );
}

export default NuevaReserva;
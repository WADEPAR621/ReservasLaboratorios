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
    const [formattedHoraInicio, setFormattedHoraInicio] = useState(null);
    const [formattedHoraFin, setFormattedHoraFin] = useState(null);
    let horaInicioDate = new Date();
    let horaFinDate = new Date();

    const handleSelectChangeTime = (event) => {
        const selectedValue = event.target.value;
        setSelectedOptionTime(selectedValue);
    
        if (selectedValue !== "DefaultTime") {
            const [inicio, fin] = selectedValue.split('-');
            const horaInicio = Number(inicio.trim());
            const horaFin = Number(fin.trim());
    
            horaInicioDate.setHours(horaInicio, 0, 0);
            horaFinDate.setHours(horaFin, 0, 0);
    
            horaInicioDate.setDate(horaInicioDate.getDate() + 1);
            horaFinDate.setDate(horaFinDate.getDate() + 1);
    
            const formattedHoraInicioValue = formatDateTime(horaInicioDate);
            const formattedHoraFinValue = formatDateTime(horaFinDate);
    
            setFormattedHoraInicio(formattedHoraInicioValue);
            setFormattedHoraFin(formattedHoraFinValue);
    
            console.log("Hora de inicio formateada:", formattedHoraInicioValue);  
            console.log("Hora de fin formateada:", formattedHoraFinValue);      
        }
    };
    
    const formatDateTime = (date) => {
        const offset = -date.getTimezoneOffset();
        const offsetHours = Math.floor(offset / 60);
        const offsetMinutes = Math.abs(offset) % 60;
    
        const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        const formattedTime = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}.${String(date.getMilliseconds()).padStart(3, '0')}`;
        const formattedOffset = `${offsetHours > 0 ? '-' : '+'}${String(Math.abs(offsetHours)).padStart(2, '0')}:${String(offsetMinutes).padStart(2, '0')}`;
    
        return `${formattedDate}T${formattedTime}${formattedOffset}`;
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

            setTimeout(() => { errorMessage.style.display = 'none'; }, 2500);
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
                    Tecnico_id: 1,
                    Room_id: selectedOption,
                    RAZ_RES: razonReserva,
                    HOR_INI_RES: formattedHoraInicio,
                    HOR_FIN_RES: formattedHoraFin,
                    EST_RES: false,
                    EST_TIM_RES: ""
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
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

import '../../styles/MapaPisos.css';
import NavBar from "../NavbarMenu";


const MapaPisos = () => {


    useEffect(() => {
        fetchPisos(1);
        fetchHabitaciones(1);
    }, []);

    const [pisos, setPisos] = useState([])
    const fetchPisos = async (id) => {

        try {
            const response = await fetch(`http://localhost:3000/floors/${id}`, {
                method: "GET"
            });
            if (!response.ok) {
                throw new Error('Fallo al conectar a la base de datos');
            }
            const date = await response.json();
            setPisos(date);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    //Consulta de SELECT * FROM ROOMS WHERE Floor_id : (piso seleccionado)
    const [habitaciones, setHabitaciones] = useState([])
    const fetchHabitaciones = async (id) => {
        try {
            console.log(id);
            const response = await fetch(`http://localhost:3000/rooms/by_floor/${id}`, {
                method: "GET"
            });
            if (!response.ok) {
                throw new Error('Fallo al conectar a la base de datos');
            }
            const data = await response.json();
            console.log("DATA");
            console.log(data)
            setHabitaciones(data);
            setHabitaciones(data);
            console.log("HABITACIONES");
            console.log(habitaciones);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Manejador de eventos para cambiar la selección
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        console.log(event.target.value);
        const id = event.target.value;
        fetchPisos(id);
        fetchHabitaciones(id);
    };

    //Comienzo del HTML en React
    return (
        <div className="ReservasScreen">
            <NavBar />
            <div className="containerPisos">
                <div className="container_info">
                    <h3>PISO:</h3>
                    <select id="comboBox" value={selectedOption} onChange={handleSelectChange}>
                        <option value="1">PISO 1:</option>
                        <option value="2">PISO 2:</option>
                        <option value="3">PISO 3:</option>
                    </select>
                    <h3>DESCRIPCION:</h3>
                    <p>{pisos?.DES_PIS}</p>
                    <h3>HABITACIONES EN EL PISO:</h3>
                    <div className="Habitaciones">
                        {Object.keys(habitaciones).map((habitacionId) => (
                            <div key={habitacionId}>
                                <p>NOMBRE: {habitaciones[habitacionId].NOM_HAB}</p>
                                <p> </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="container_image">
                    <img className="Plano_imagen"
                        src={pisos?.IMG_PIS}></img>
                </div>
            </div>
        </div>
    )
}
export default MapaPisos;
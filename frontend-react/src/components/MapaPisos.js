import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

import '../styles/MapaPisos.css';
import NavBar from "./NavbarMenu";
const MapaPisos = () => {
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        fetchPisos();
    }, []);

    //Metodo para obtener todas las reservas dependiendo del usuario

    const [pisos, setPisos]= useState([])
    const fetchPisos = async () => {
        try {
            const response = await fetch("http://localhost:8080/floors", {
                method: "GET",
            });
            const data = await response.json();
            console.log(data);
            setPisos(data);
            console.log(pisos);
        } catch (error) {
            console.log(error);
        }
    };


    // Manejador de eventos para cambiar la selección
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return (
        <div class="ReservasScreen">
            <NavBar />
            <div class="container">
                <div class="container_info">
                    <h3>PISO:</h3>
                    <select id="comboBox" value="{selectedOption}" onchange="{handleSelectChange}">
                        <option value="PISO1">PISO 1:</option>
                        <option value="PISO2">PISO 2:</option>
                        <option value="PISO3">PISO 3:</option>
                    </select>
                    <h3>DESCRIPCION:</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sequi quis natus nesciunt,
                        similique magnam optio molestiae impedit perspiciatis hic quod temporibus ducimus soluta ea, et
                        nisi? Facere, facilis ab!</p>
                    <h3>MAS INFORMACION:</h3>
                    <div class="Habitaciones">
                        {pisos.map((piso) => {
                            return(
                                <p>{piso.DES_PIS}</p>
                            )
                        })}
                    </div>
                </div>
                <div class="container_image">
                    <img class="Plano_imagen"
                        src="https://i.ibb.co/bv0RVMb/Captura-de-pantalla-2023-11-22-230109.png"></img>
                </div>
            </div>
        </div>
    )
}
export default MapaPisos;
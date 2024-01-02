import React, { useEffect, useState } from "react";
import NavBar from "../NavbarMenu";
import AgregarEstudianteForm from "../AgregarEstudiante";
import AgregarEstudianteForm from "../AgregarEstudianteForm";


const AdminCRUD = () => {
    //CODIGO JAVASCRIPT

    useEffect(() => {
        fetchGetReservas(1);
    }, []);

    //CONSULTAS GET A LA BASE DE DATOS
    //CONSULTA DE RECOGER LAS RESERVAS DEL ESTUDIANTE
    const [reservas, setReservas] = useState([]);
    const fetchGetReservas = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/books/by_accepted/${id}`, {
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

// Estado para mostrar u ocultar el formulario
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Función para manejar la adición de estudiantes
  const handleAgregarEstudiante = async (nuevoEstudiante) => {

    try {
        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoEstudiante),
        });
    
        if (!response.ok) {
            throw new Error("Fallo al agregar el estudiante");
        }
    
        const data = await response.json();
        setMostrarFormulario(false);
        console.log("Estudiante agregado:", data);
    } catch (error) {
        console.error("Error:", error);
    }
  };

  const handleAprobarReserva = (reserva) => {
    // Lógica para aprobar la reserva (puedes enviar una solicitud al servidor, etc.)
    console.log("Reserva Aprobada:", reserva);
  };
  
  const handleDenegarReserva = (reserva) => {
    // Lógica para denegar la reserva (puedes enviar una solicitud al servidor, etc.)
    console.log("Reserva Denegada:", reserva);
  };


    //HTML QUE RETORNA
    return (
        <div className="principal">
          <NavBar />
          <div className="containerEst">
            <div className="container_imgEst">
              <h1>Bienvenido administrador</h1>
              <i>¿Qué acciones desea realizar?</i>
              <i>Reserva Rápida</i>
              <button
                className="Agregar_estudiante"
                onClick={() => setMostrarFormulario(true)}
              >
                Agregar Estudiante
              </button>
      
              {mostrarFormulario && (
                <AgregarEstudianteForm
                  onAgregarEstudiante={handleAgregarEstudiante}
                />
              )}
      
              <button className="CerrarSesion">Cerrar Sesión</button>
            </div>
      
            <div className="container_table">
              <h1>HORARIOS EN CURSO:</h1>
              <div className="container_list">
                {Object.keys(reservas).map((reservaId) => (
                  <div key={reservaId} className="reserva">
                    <i>{reservas[reservaId].NOM_HAB}</i>
                    <text>{reservas[reservaId].HOR_INI_RES} - {reservas[reservaId].HOR_FIN_RES}</text>
                    <i>{reservas[reservaId].EST_RES ? 'Aceptado' : 'En Revisión'}</i>
                    
                    {/* Agregar los botones "Aprobar" y "Denegar" */}
                    <button onClick={() => handleAprobarReserva(reservas[reservaId])}>
                      Aprobar
                    </button>
                    <button onClick={() => handleDenegarReserva(reservas[reservaId])}>
                      Denegar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
}

export default AdminCRUD;
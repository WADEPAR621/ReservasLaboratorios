import React, { useEffect, useState } from "react";
import NavBar from "../NavbarMenu";
import { Link } from "react-router-dom";
import '../../styles/Estudiantes.css';

const Estudiantes = () => {
  //CODIGO JAVASCRIPT

  useEffect(() => {
    fetchGetEstudiantes();
  }, []);

  //CONSULTAS GET A LA BASE DE DATOS
  ////CONSULTA DE RECOGER LAS RESERVAS DEL ESTUDIANTE
  const [estudiantes, setEstudiantes] = useState([]);
  const fetchGetEstudiantes = async () => {
    try {
      const response = await fetch(`http://localhost:3000/students`, {
        method: "GET"
      });
      if (!response.ok) {
        throw new Error('Fallo al conectar a la base de datos');
      }
      const data = await response.json();
      console.log(data);
      setEstudiantes(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  ////CONSULTA DE EDITAR EL LABORATORIO
  const [mostrarModalEdicion, setMostrarModalEdicion] = useState(false);

  const [estudianteSeleccionado, setEstudianteSeleccionado] = useState(null);

  const handleEditar = (estudiante) => {
    setEstudianteSeleccionado(estudiante);
    setMostrarModalEdicion(true);
    console.log(estudiante)
  };
  const handleInputChange = (campo, valor) => {
    setEstudianteSeleccionado((prevEstudiante) => ({
      ...prevEstudiante,
      [campo]: valor,
    }));
  };

  const handleSubmitEdicion = async (e) => {
    e.preventDefault();
    console.log(estudianteSeleccionado.id)
    try {
      const response = await fetch(`http://localhost:3000/students/${estudianteSeleccionado.id}`, {
        method: "PUT", // Método para actualizar en lugar de eliminar
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(estudianteSeleccionado),
      });

      if (!response.ok) {
        throw new Error('Fallo al conectar a la base de datos');
      }
      setMostrarModalEdicion(false);
      fetchGetEstudiantes();
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };


  ////CONSULTA DE ELIMINACION PARA EL LABORATORIO
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const handleEliminar = (estudiante) => {
    setMostrarAlerta(true)
    console.log(estudiante);
  }
  const handleConfirmarEliminar = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/students/${id}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        throw new Error('Fallo al conectar a la base de datos');
      }
      fetchGetEstudiantes();
      setMostrarAlerta(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  //HTML QUE RETORNA
  return (
    <div className="principal">

      <h3 className="Bienvenido-h3">
        <button ><Link to="/Admin">Volver Atras</Link></button>
        <b>Bienvenido Administrador</b>
      </h3>
      <div className="containerCRUD">
        <div className="container_tableLab">
          <h1>Estudiantes registrados:</h1>

          <ul className="container_list_AdminLab">
            <li className="container_list_li">
              <i>NOMBRE</i>
              <i>CORO DE LABORATORIO</i>
              <text>CAPACIDAD</text>
              <button className="opciones">EDICION</button>
              <button className="opciones">ELIMINACION</button>
            </li>
            {Object.keys(estudiantes).map((estudianteId) => (
              <li key={estudianteId} className="container_list_li estudiante">
                <i>{estudiantes[estudianteId].NOM_USE}</i>
                <i>{estudiantes[estudianteId].APE_USE}</i>
                <text>{estudiantes[estudianteId].COR_USE}</text>
                <button className="opciones" onClick={() => handleEditar(estudiantes[estudianteId])}>Editar</button>
                <button className="opciones" onClick={() => handleEliminar(estudiantes[estudianteId])}>Eliminar</button>
                {mostrarAlerta && (
                  <div className="alerta-container">
                    <div className="alerta">
                      <p>¿Estás seguro de que quieres eliminar este estudiante?</p>
                      <button onClick={() => handleConfirmarEliminar(estudiantes[estudianteId].id)}>Confirmar</button>
                      <button onClick={() => setMostrarAlerta(false)}>Cancelar</button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        {mostrarModalEdicion && estudianteSeleccionado && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Editar Estudiante</h2>
              <form className="modal_content-formEdicion" onSubmit={handleSubmitEdicion}>
                <label>Nombre:</label>
                <input
                  type="text"
                  value={estudianteSeleccionado.NOM_USE}
                  onChange={(e) => handleInputChange("NOM_USE", e.target.value)}
                />
                <label>Apellido:</label>
                <input
                  type="text"
                  value={estudianteSeleccionado.APE_USE}
                  onChange={(e) => handleInputChange("APE_USE", e.target.value)}
                />
                <label>Correo:</label>
                <input
                  type="text"
                  value={estudianteSeleccionado.COR_USE}
                  onChange={(e) => handleInputChange("COR_USE", e.target.value)}
                />
                <button type="submit">Guardar Cambios</button>
                <button onClick={() => setMostrarModalEdicion(false)}>Cancelar</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Estudiantes;
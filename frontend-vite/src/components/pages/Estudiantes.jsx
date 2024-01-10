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
  const [laboratorios, setEstudiantes] = useState([]);
  const fetchGetEstudiantes = async () => {
    try {
      const response = await fetch(`http://localhost:3000/rooms`, {
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

  const [laboratorioSeleccionado, setLaboratorioSeleccionado] = useState(null);

  const handleEditar = (laboratorio) => {
    setLaboratorioSeleccionado(laboratorio);
    setMostrarModalEdicion(true);
  };
  const handleInputChange = (campo, valor) => {
    setLaboratorioSeleccionado((prevLaboratorio) => ({
      ...prevLaboratorio,
      [campo]: valor,
    }));
  };

  const handleSubmitEdicion = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/rooms/${laboratorioSeleccionado.id}`, {
        method: "PUT", // Método para actualizar en lugar de eliminar
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(laboratorioSeleccionado),
      });

      if (!response.ok) {
        throw new Error('Fallo al conectar a la base de datos');
      }

      // Aquí podrías añadir algún feedback al usuario si lo deseas
      setMostrarFormularioEdicion(false);
      fetchGetEstudiantes();
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };


  ////CONSULTA DE ELIMINACION PARA EL LABORATORIO
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const handleEliminar = (laboratorio) => {
    setMostrarAlerta(true)
    console.log(laboratorio);
  }
  const handleConfirmarEliminar = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/rooms/${id}`, {
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
              <i>TIPO DE LABORATORIO</i>
              <text>CAPACIDAD</text>
              <button className="opciones">EDICION</button>
              <button className="opciones">ELIMINACION</button>
            </li>
            {Object.keys(laboratorios).map((laboratorioId) => (
              <li key={laboratorioId} className="container_list_li laboratorio">
                <i>{laboratorios[laboratorioId].NOM_HAB}</i>
                <i>{laboratorios[laboratorioId].TIP_HAB}</i>
                <text>{laboratorios[laboratorioId].CAP_HAB}</text>
                <button className="opciones" onClick={() => handleEditar(laboratorios[laboratorioId])}>Editar</button>
                <button className="opciones" onClick={() => handleEliminar(laboratorios[laboratorioId])}>Eliminar</button>
                {mostrarAlerta && (
                  <div className="alerta-container">
                    <div className="alerta">
                      <p>¿Estás seguro de que quieres eliminar este laboratorio?</p>
                      <button onClick={() => handleConfirmarEliminar(laboratorios[laboratorioId].id)}>Confirmar</button>
                      <button onClick={() => setMostrarAlerta(false)}>Cancelar</button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        {mostrarModalEdicion && laboratorioSeleccionado && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Editar Laboratorio</h2>
              <form className="modal_content-formEdicion" onSubmit={handleSubmitEdicion}>
                <label>Nombre:</label>
                <input
                  type="text"
                  value={laboratorioSeleccionado.NOM_HAB}
                  onChange={(e) => handleInputChange("NOM_HAB", e.target.value)}
                />
                <label>Tipo:</label>
                <select
                  value={laboratorioSeleccionado.TIP_HAB}
                  onChange={(e) => handleInputChange("TIP_HAB", e.target.value)}
                >
                  <option value="Administracion">Administracion</option>
                  <option value="Laboratorio">Laboratorio</option>
                </select>
                <label>Capacidad:</label>
                <input
                  type="number"
                  value={laboratorioSeleccionado.CAP_HAB}
                  min={0}
                  max={60}
                  onChange={(e) => handleInputChange("CAP_HAB", parseInt(e.target.value))}
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
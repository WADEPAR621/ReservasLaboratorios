import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const AgregarHorarios = () => {

  const [horario, setHorario] = useState([]);
  const [selectedLab, setSelectedLab] = useState("");
  //USE EFFECT
  useEffect(() => {
    fetchGetLaboratorios();
    fetchLaboratorios();
    handleLabChange
  }, [])
  //CONSULTAS GET A LA BASE DE DATOS
  ////CONSULTA DE RECOGER LAS RESERVAS DEL ESTUDIANTE
  const fetchHorario = async (labId) => {
    try {
      const response = await fetch(`http://localhost:3000/rooms/${labId}/horario`);

      if (response.ok) {
        const data = await response.json();
        setHorario(data);
      } else {
        throw new Error(`Error al obtener el horario del laboratorio: ${response.statusText}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLaboratorios = async () => {
    try {
      const response = await fetch(`http://localhost:3000/rooms`, {
        method: "GET"
      });

      if (!response.ok) {
        throw new Error('Fallo al conectar a la base de datos');
      }

      const data = await response.json();
      setLaboratorios(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [laboratorios, setLaboratorios] = useState([]);
  const fetchGetLaboratorios = async () => {
    try {
      const response = await fetch(`http://localhost:3000/rooms`, {
        method: "GET"
      });
      if (!response.ok) {
        throw new Error('Fallo al conectar a la base de datos');
      }
      const data = await response.json();
      console.log(data);
      setLaboratorios(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLabChange = (e) => {
    const labId = e.target.value;
    setSelectedLab(labId);
    fetchHorario(labId);
  };

  return (
    <div className="principal">

      <h3 className="Bienvenido-h3">
        <button ><Link to="/Admin">Volver Atras</Link></button>
        <b>Bienvenido Administrador</b>
      </h3>
      <div className="containerCRUD">
        <div className="container_tableLab">
          <h1>Laboratorios registrados:</h1>

          <select value={selectedLab} onChange={handleLabChange}>
            <option value="" disabled>Selecciona un laboratorio</option>
            {laboratorios.map((lab) => (
              <option key={lab.id} value={lab.id}>
                {lab.NOM_HAB}
              </option>
            ))}
          </select>
          {/* <ul className="container_list_AdminLab">
            <li className="container_list_li">
              <i>HORA</i>
              <i>LUNES</i>
              <i>MARTES</i>
              <i>MIERCOLES</i>
              <i>JUEVES</i>
              <i>VIERNES</i>
            </li>
            {Object.keys(laboratorios).map((laboratorioId) => (
              <li key={laboratorioId} className="container_list_li laboratorio">
                <i>{laboratorios[laboratorioId].NOM_HAB}</i>
                <i>{laboratorios[laboratorioId].TIP_HAB}</i>
                <text>{laboratorios[laboratorioId].CAP_HAB}</text>
                <button className="opciones" onClick={() => handleEditar(laboratorios[laboratorioId])}>Editar</button>
                <button className="opciones" onClick={() => handleEliminar(laboratorios[laboratorioId])}>Eliminar</button>
              </li>
            ))}
          </ul>*/}

          <table>
            <thead>
              <tr>
                <th>Día</th>
                <th>Hora de Inicio</th>
                <th>Hora de Fin</th>
                <th>Evento</th>
              </tr>
            </thead>
            <tbody>
              {horario.map((item, index) => (
                <tr key={index}>
                  <td>{item.dia}</td>
                  <td>{item.horaInicio}</td>
                  <td>{item.horaFin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AgregarHorarios;

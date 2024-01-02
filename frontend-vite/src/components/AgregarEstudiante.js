// components/AgregarEstudianteForm.js
import React, { useState } from "react";

const AgregarEstudianteForm = ({ onAgregarEstudiante }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [seccion, setSeccion] = useState("");
  const [carrera, setCarrera] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar la solicitud para agregar un nuevo estudiante
      const response = await fetch('http://localhost:3000/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          apellido,
          correo,
          seccion,
          carrera,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al agregar el estudiante');
      }

      // Obtener la respuesta del servidor (puede contener el nuevo estudiante con ID, etc.)
      const data = await response.json();

      // Llamar a la función proporcionada para agregar estudiante
      onAgregarEstudiante(data);

      // Limpiar los campos del formulario
      setNombre("");
      setApellido("");
      setCorreo("");
      setSeccion("");
      setCarrera("");

    } catch (error) {
      console.error('Error al agregar el estudiante:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <label>
        Apellido:
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
      </label>
      <label>
        Correo:
        <input
          type="text"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </label>
      <label>
        Sección:
        <input
          type="text"
          value={seccion}
          onChange={(e) => setSeccion(e.target.value)}
        />
      </label>
      <label>
        Carrera:
        <input
          type="text"
          value={carrera}
          onChange={(e) => setCarrera(e.target.value)}
        />
      </label>
      <button type="submit">Agregar Estudiante</button>
    </form>
  );
};

export default AgregarEstudianteForm;

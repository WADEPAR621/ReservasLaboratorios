// components/AgregarEstudianteForm.js
import React, { useState } from "react";

const AgregarEstudianteForm = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [Contrasena, setContrasena] = useState("");

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
          NOM_USE: nombre,
          APE_USE: apellido,
          COR_USE: correo,
          SEC_USE_digest: Contrasena,
          CAR_USE: "Estudiante",
        }),
      });

      if (!response.ok) {
        throw new Error('Error al agregar el estudiante');
      }

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
    <form onSubmit={handleSubmit} className="formNewStudent">
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
        Contraseña:
        <input
          type="text"
          value={Contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit} className="Agregar_estudiante">Confirmar Estudiante</button>
    </form>
  );
};

export default AgregarEstudianteForm;

import React from "react";
import { useEffect, useState } from "react";

const AgregarEstudianteForm = () => {

  useEffect(() => {
  }, []);

  //VARIABLES
  ////NOMBRE
  const [Nombre, setNombre] = useState('');
  const handleNombreChange = (event) => {
    setNombre(event.target.value);
    console.log(Nombre);
  };
  ////APELLIDO
  const [Apellido, setApellido] = useState('');
  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
    console.log(Apellido)
  };
  ////CORREO
  const [Correo, setCorreo] = useState('');
  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
    console.log(Correo)
  };
  ////CONTRASENA
  const [Contra, setContra] = useState('');
  const handleContraChange = (event) => {
    setContra(event.target.value);
    console.log(Contra)
  };
  ////CONTRASENACONFIRM
  const [ContraConfir, setContraConfir] = useState('');
  const handleContraConfirChange = (event) => {
    setContraConfir(event.target.value);
    console.log(ContraConfir)
  };

  const validarCampos = () => {

    if (Contra != ContraConfir) {
      return false;
    }
    if (!Nombre.trim() || !Apellido.trim() || !Correo.trim() || !Contra.trim()) {
      return false; // Uno o más campos están vacíos
    }
    return true; // Todos los campos tienen datos
  };
  // Realiza la solicitud a la API para crear un nuevo libro (o reserva)
  const enviarSolicitud = async () => {
    if (!validarCampos()) {
      const errorMessage = document.getElementById('errorMessage');
      errorMessage.innerText = 'Parametros en Blanco no son permitidos';
      errorMessage.style.display = 'block';
      setTimeout(() => { errorMessage.style.display = 'none'; }, 5000);
      return;
    }
    try {
      // Realiza la solicitud a la API para crear un nuevo libro (o reserva)
      const response = await fetch('http://localhost:3000/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          NOM_USE: Nombre,
          APE_USE: Apellido,
          COR_USE: Correo,
          SEC_USE_digest: Contra,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar la solicitud');
      }
      // Mostrar el mensaje en la mitad de la pantalla
      const messageDisplay = document.getElementById('messageDisplay');
      messageDisplay.innerText = 'Solicitud enviada con éxito';
      messageDisplay.style.display = 'block';
      setTimeout(() => { messageDisplay.style.display = 'none' }, 5000);
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  return (
    <div className="EstudianteForm">
      <h3>Agregar Estudiante</h3>
      <form>
        <div className="AgregarEstudiante">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              placeholder="Nombre"
              onChange={handleNombreChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="apellido">Apellido</label>
            <input
              type="text"
              className="form-control"
              id="apellido"
              placeholder="Apellido"
              onChange={handleApellidoChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="correo">Correo</label>
            <input
              type="email"
              className="form-control"
              id="correo"
              placeholder="Correo"
              onChange={handleCorreoChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contraseña">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="contraseña"
              placeholder="Contraseña"
              onChange={handleContraChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmar-contraseña">Confirmar Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="confirmar-contraseña"
              placeholder="Confirmar Contraseña"
              onChange={handleContraConfirChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rol">Rol</label>
            <select className="form-control" id="rol">
              <option>Estudiante</option>
              <option>Administrador</option>
              <option>Profesor</option>
            </select>
          </div>
          <div className="Agregarbtn">
            <button type="submit" className="btn btn-light" onClick={enviarSolicitud}>
              Agregar Estudiante
            </button>
            <div id="messageDisplay"></div>
          </div>
          <div id="errorMessage"></div>
        </div>
      </form>
    </div>
  );
};

export default AgregarEstudianteForm;

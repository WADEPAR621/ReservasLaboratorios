import React from "react";

const AgregarEstudianteForm = () => {
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="apellido">Apellido</label>
            <input
              type="text"
              className="form-control"
              id="apellido"
              placeholder="Apellido"
            />
          </div>
          <div className="form-group">
            <label htmlFor="correo">Correo</label>
            <input
              type="email"
              className="form-control"
              id="correo"
              placeholder="Correo"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contraseña">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="contraseña"
              placeholder="Contraseña"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmar-contraseña">Confirmar Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="confirmar-contraseña"
              placeholder="Confirmar Contraseña"
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
            <button type="submit" className="btn btn-light">
              Agregar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AgregarEstudianteForm;

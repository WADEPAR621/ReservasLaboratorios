import React from "react";
import { Link } from "react-router-dom";

const AdminCRUD = () => {
  return (
    <div>
      <h3>Bienvenido Administrador</h3>
      <h4>¿Qué acción deseas realizar?</h4>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Agregar Estudiante</h5>
                <p className="card-text">
                  Agrega un estudiante a la base de datos.
                </p>
                <a href="#" className="btn btn-danger">
                  Agregar
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Añadir laboratorio</h5>
                <p className="card-text">
                  Agrega un estudiante a la base de datos.
                </p>
                <a href="#" className="btn btn-danger">
                  Agregar
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Agregar Horarios</h5>
                <p className="card-text">
                  Agrega o elimina horarios de la base de datos.
                </p>
                <a href="#" className="btn btn-danger">
                  Agregar
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Administrar Peticiones</h5>
                <p className="card-text">
                  Aprueba o Deniega las peticiones de los estudiantes.
                </p>
                <a href="#" className="btn btn-danger">
                  Agregar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCRUD;

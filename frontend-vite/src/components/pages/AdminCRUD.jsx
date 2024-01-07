import React from "react";
import { Link } from "react-router-dom";
import Estudiante from "../../images/estudiante.png";
import Laboratorio from "../../images/laboratorios.png";
import Horario from "../../images/horario.png";
import Peticion from "../../images/peticiones.png";
import AdminRoutes from "../../AdminRoutes";


const AdminCRUD = () => {
  return (
    <div>
      <h3 className="Bienvenido-h3">Bienvenido Administrador</h3>
      <h4 className="Accion-h4">¿Qué acción deseas realizar?</h4>
      <div className="Container elecciones-CRUD">
        <div className="row ">
          <div className="col-lg-3 cl1">
            
              <img src={Estudiante} height="200" alt="" />
              <h5>Agregar Estudiante</h5>
           
          </div>

          <div className="col-lg-3 cl2">
            <img src={Laboratorio} height="200" alt="" />
            <h5>Agregar Laboratorio</h5>
          </div>

          <div className="col-lg-3 cl3">
            <img src={Horario} height="200" alt="" />
            <h5>Modificar Horario</h5>
          </div>

          <div className="col-lg-3 cl4">
            <img src={Peticion} height="200" alt="" />
            <h5>Administrar Peticiones</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCRUD;

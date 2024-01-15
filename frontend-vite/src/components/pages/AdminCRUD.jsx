import React from "react";
import { Link, Navigate } from "react-router-dom";
import Estudiante from "../../images/estudiante.png";
import Laboratorio from "../../images/laboratorios.png";
import Horario from "../../images/horario.png";
import Peticion from "../../images/peticiones.png";
import AdminRoutes from "../../AdminRoutes";


const AdminCRUD = () => {


  const handleCerrarSession = () => {
    Navigate("/Login");
  }

  return (
    <div>
      <h3 className="Bienvenido-h3">Bienvenido Administrador</h3>
      <h4 className="Accion-h4">¿Qué acción deseas realizar?</h4>
      <div className="Container elecciones-CRUD">
        <div className="row ">
          <div className="col-lg-3 cl1">
            <Link to={"/Agregar-estudiante"}>
              <img src={Estudiante} height="200" alt="" />
              <h5>Agregar Estudiante</h5>
            </Link>
          </div>

          <div className="col-lg-3 cl2">
            <Link to={"/Agregar-Laboratorios"}>
              <img src={Laboratorio} height="200" alt="" />
              <h5>Agregar Laboratorio</h5>
            </Link>
          </div>

          <div className="col-lg-3 cl3">
            <Link to={"/Agregar-Horarios"}>
              <img src={Horario} height="200" alt="" />
              <h5>Observar Horario de Laboratorios</h5>
            </Link>
          </div>

          <div className="col-lg-3 cl4">
            <Link to={"/Administrar-Peticiones"}>
              <img src={Peticion} height="200" alt="" />
              <h5>Administrar Peticiones</h5>
            </Link>
          </div>
          <div className="col-lg-3 cl4">
            <Link to={"/Estudiantes"}>
              <img src="https://prints.ultracoloringpages.com/ff748ba4371e977296575b11b72624a7.png" height="200" alt="" />
              <h5>Ver Estudiantes registrados</h5>
            </Link>
          </div>
          <div className="col-lg-3 cl4">
            <Link to={"/Laboratorios"}>
              <img src="data:image/png;base64,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" height="200" alt="" />
              <h5>Ver Laboratorios registrados</h5>
            </Link>
          </div>
          <div className="col-lg-3 cl4">
              <Link to={"/Login"} onClick={handleCerrarSession()}>
                <img src="https://cdn-icons-png.flaticon.com/512/3596/3596149.png" height="200" alt="" />
                <h5>Cerrar Sesion</h5>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCRUD;

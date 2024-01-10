import React from "react";

const ManualUsuario = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1 className="text-danger">Manual de Usuario</h1>
          <h2 className="text-danger">¿Cómo usar el sistema?</h2>
          <h3 className="text-danger">Estudiantes</h3>
          <ol className="text-danger">
            <li>Ingresar al sistema con su usuario y contraseña de la UTA.</li>
            <li>Seleccionar el laboratorio que desea reservar.</li>
            <li>Seleccionar el horario que desea reservar.</li>
            <li>Confirmar la reserva.</li>
            <li>Esperar a que el administrador acepte la reserva.</li>
            <li>
              Si el administrador rechaza la reserva, el estudiante deberá
              repetir el proceso.
            </li>
            <li>
              Si el administrador acepta la reserva, el estudiante deberá
              asistir al laboratorio en el horario seleccionado.
            </li>
          </ol>

          <h3 className="text-danger mt-4">Administradores</h3>
          <ol className="text-danger">
            <li>Ingresar al sistema con su usuario y contraseña de la UTA.</li>
            <li>Seleccionar la pestaña de "Administrar Peticiones".</li>
            <li>Seleccionar la reserva que desea aceptar o rechazar.</li>
            <li>
              Si se acepta la reserva, el estudiante podrá asistir al
              laboratorio en el horario seleccionado.
            </li>
            <li>
              Si se rechaza la reserva, el estudiante deberá repetir el proceso.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ManualUsuario;

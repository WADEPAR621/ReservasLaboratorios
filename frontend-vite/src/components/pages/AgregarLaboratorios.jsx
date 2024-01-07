import React from "react";

const AgregarLaboratorios = () => {
  return (
    <div className="FormLab">
      <h3>Agregar Laboratorio</h3>
      <div className="AgregarLaboratorio">
        <form>
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
            <label htmlFor="piso">Piso</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Primer</option>
              <option value="1">Segundo</option>
              <option value="2">Tercer</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="carrera">Carrera</label>
            <input
              type="text"
              className="form-control"
              id="carrera"
              placeholder="Carrera"
            />
          </div>
          <div className="Agregarbtn">
            <button type="submit" className="btn btn-light">
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgregarLaboratorios;

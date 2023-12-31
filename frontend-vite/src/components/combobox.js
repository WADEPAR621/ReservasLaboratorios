import React, { useState, useEffect } from "react";
import LaboratoriesCardF1 from "./laboratories-f1";
import LaboratoriesCardF2 from "./laboratories-f2";
import LaboratoriesCardF3 from "./laboratories-f3";

const Combobox = () => {
  const [selectedOption, setSelectedOption] = useState("1");

  let selectedComponent = null;

  switch (selectedOption) {
    case "1":
      selectedComponent = <LaboratoriesCardF1 />;
      break;
    case "2":
      selectedComponent = <LaboratoriesCardF2 />;
      break;
    case "3":
    selectedComponent = <LaboratoriesCardF3 />;
      break;
    default:

  }

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <div>
      <h3>Selecciona una opción:</h3>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={handleSelectChange}
        value={selectedOption}
      >
        <option value="1">Planta baja</option>
        <option value="2">Piso 1</option>
        <option value="3">Piso 2</option>
      </select>

      {/* Renderizar el componente seleccionado */}
      {selectedComponent}
    </div>
  );
};

export default Combobox;

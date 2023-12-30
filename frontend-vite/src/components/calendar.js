import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendario = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);

  const handleFechaSeleccionada = (date) => {
    setFechaSeleccionada(date);
  };

  return (
    <div>
      <DatePicker
        selected={fechaSeleccionada}
        onChange={handleFechaSeleccionada}
        dateFormat="dd/MM/yyyy"
        placeholderText="Selecciona una fecha"
      />
      <div>
        Fecha seleccionada: {fechaSeleccionada !== null ? fechaSeleccionada.toLocaleDateString() : 'Ninguna'}
      </div>
    </div>
  );
};

export default Calendario;

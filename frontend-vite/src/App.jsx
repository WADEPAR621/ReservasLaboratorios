import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AgregarEstudianteForm from "./components/pages/AgregarEstudiante";
import AgregarLaboratorios from "./components/pages/AgregarLaboratorios";
import MapaPisos from "./components/pages/MapaPisos";
import MisReservas from  "./components/pages/NuevaReserva"
import AdminCRUD from "./components/pages/AdminCRUD";

const App = () => {
  return (
    
      
      <AgregarEstudianteForm />
  );
};

export default App;

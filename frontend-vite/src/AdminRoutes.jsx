import { Route, Routes } from "react-router";
import "./App.css";
import AdministrarPeticiones from "./components/pages/AdministrarPeticiones";
import AgregarEstudianteForm from "./components/pages/AgregarEstudiante";
import AgregarLaboratorios from "./components/pages/AgregarLaboratorios";
import AgregarHorarios from "./components/pages/AgregarHorarios";

function AdminRoutesC() {
  return (
    <Routes>
      <Route path={`/Agregar-estudiante`} element={<AgregarEstudianteForm />} />

      <Route
        path={`/Administrar-Peticiones`}
        element={<AdministrarPeticiones />}
      />
      <Route path={`/Agregar-Horarios`} element={<AgregarHorarios />} />

      <Route path={`/Agregar-Laboratorios`} element={<AgregarLaboratorios />} />
      <Route path={`/*`} element={<Navigate to={"/MapaPisos"} />} />
    </Routes>
  );
}

export default AdminRoutesC;

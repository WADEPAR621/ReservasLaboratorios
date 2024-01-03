import { Route, Routes } from "react-router"
import './App.css';
import MapaPisos from "./components/pages/MapaPisos";
import NuevaReserva from "./components/pages/NuevaReserva";
import MisReservas from "./components/pages/MisReservas";
import { Navigate } from "react-router-dom";

function StudentRoutes() {
  return (
    <Routes>
      <Route
        path={`/MapaPisos`}
        element={<MapaPisos />}
      />

      <Route
        path={`/NuevaReserva`}
        element={<NuevaReserva />}
      />
      <Route
        path={`/MisReservas`}
        element={<MisReservas />}
      />
      <Route
        path={`/*`}
        element={<Navigate to = {"/MapaPisos"} />}
      />
    </Routes>
  );
}

export default StudentRoutes;
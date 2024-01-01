import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MapaPisos from './components/pages/MapaPisos';
import MisReservas from './components/pages/MisReservas';
import NuevaReserva from './components/pages/NuevaReserva'


const ProtectedRoute = ({ element, ...props }) => {
  //CONSTANTES DE PARAMETROS
  const [handlePiso, setEditPiso] = useState([]);

  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ from: props.location }} />
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/*
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute
              element={<MapaPisos />}
            />
          }
        />
        */}
        <Route
          path={`/MapaPisos`}
          element={<MapaPisos/>}
        />

        <Route
          path="/MisReservas"
          element={<MisReservas />}
        />

        <Route
          path="/NuevaReserva"
          element={<NuevaReserva />}
        />
      </Routes>
    </Router>
  );
};

export default App;
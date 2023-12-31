<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MapaPisos from './components/MapaPisos';
import MisReservas from './components/MisReservas';


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
      </Routes>
    </Router>
  );
};

=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MapaPisos from './components/pages/MapaPisos';
import MisReservas from './components/pages/MisReservas';


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
      </Routes>
    </Router>
  );
};

>>>>>>> 0af0c84050f8615628ab0e3b5f4a5cb90ee35b6f
export default App;
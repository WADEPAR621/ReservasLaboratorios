import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/pages/Login';
import SignUp from './components/pages/Sing_up';
import SobreNosotros from './components/pages/SobreNosotros';
import AdminRoutes from './AdminRoutes';
import { useState } from 'react';

const ProtectedRoute = ({ element, ...props }) => {
  //CONSTANTES DE PARAMETROS
  const [handlePiso, setEditPiso] = useState([]);

  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/" replace state={{ from: props.location }} />
  );
};

const App = () => {

  const [usuarioLo, setUsuario] = useState({
    usuario: "",
    contrasena: "",
    rol: "",
    isAuth: false
  });

  return (
    <Router>
      <Routes>
        {usuarioLo.isAuth ? (
          <Route
            path="/*"
            element={<AdminRoutes />}
          />
        ) : (
          <>
            <Route
              path={`/SobreNosotros`}
              element={<SobreNosotros />}
            />
            <Route
              path={`/Sing_up`}
              element={<SignUp />}
            />
            <Route
              path={`/Login`}
              element={<Login usuarioLo={usuarioLo} setUsuario={setUsuario} />}
            />
            <Route
              path={`/*`}
              element={<Navigate to={"/Login"} />}
            />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
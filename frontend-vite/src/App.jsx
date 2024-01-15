import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/pages/Login';
import SobreNosotros from './components/pages/SobreNosotros';
import AdminRoutes from './AdminRoutes';
import { useState, useEffect } from 'react';
import StudentRoutes from './StudentRoutes';
import Inicio from './components/pages/Inicio';
import Laboratorios from './components/pages/Laboratorios';
import Estudiantes from './components/pages/Estudiantes';
import AgregarHorarios from './components/pages/AgregarHorarios';
import ManualUsuario from './components/pages/ManualUsuario'

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

const initState = {
  usuario: "",
  contrasena: "",
  rol: "",
  isAuth: false
}

const App = () => {

  const [usuarioLo, setUsuario] = useState(sessionStorage.getItem("Login") || initState);
  useEffect(() => {
    if (usuarioLo.isAuth && !sessionStorage.getItem("Login")) {
      sessionStorage.setItem("Login", usuarioLo);
    }
    console.log(usuarioLo);
  }, [usuarioLo]);
  return (
    <Router>
      <Routes>
        {usuarioLo.isAuth ? (
          usuarioLo.rol == "admin" ? (
            <Route
              path="/*"
              element={<AdminRoutes />}
            />
          )
            :
            (
              <Route
                path="/*"
                element={<StudentRoutes />}
              />
            )
        ) : (
          <>
            <Route
              path={`/SobreNosotros`}
              element={<SobreNosotros />}
            />
            <Route
              path={`/ManualUsuario`}
              element={<ManualUsuario />}
            />
            <Route
              path={`/Agregar-Horario`}
              element={<AgregarHorarios />}
            />
            <Route
              path={`/Login`}
              element={<Login usuarioLo={usuarioLo} setUsuario={setUsuario} />}
            />
            <Route
              path={`/Inicio`}
              element={<Inicio />}
            />
            <Route
              path={`/*`}
              element={<Navigate to={"/Inicio"} />}
            />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
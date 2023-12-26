import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './components/pages/Inicio';
import SobreNosotros from './components/pages/SobreNosotros';
import Login from './components/pages/IniciarSesion';
import Register from './components/pages/Registrarse';
import AgregarReserva from './components/pages/AgregarReserva';


function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/sobrenosotros" element={<AgregarReserva />} />
                    <Route path="/iniciarsesion" element={<Login />} />
                    <Route path="/registrarse" element={<Register />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

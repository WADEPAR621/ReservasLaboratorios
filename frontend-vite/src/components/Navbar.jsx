import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <Link to='/'>
                    <img src={logo} width='50' alt="Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to='https://servicios.uta.edu.ec/SistemaIntegrado/Cuenta/Login'>Sistema Integrado</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Login'>Inicia Sesion</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='https://www.uta.edu.ec/v4.0/?page=4'>UTA Oficial</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

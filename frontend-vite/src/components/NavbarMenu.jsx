import { useState } from "react";
import { Link } from 'react-router-dom'
import menuHamburguesa from '../images/menuHamburguesa.png';
import '../styles/Navbar.css'
const NavBar = () => {
    /*
        const containerIcons = document.getElementById("container__icons");
        const navlinks = document.getElementById("nav__links");
    
        containerIcons.addEventListener("click", function () {
            navlinks.classList.toggle("nav_links--show")
        });*/
    const [navlinksVisible, setNavlinksVisible] = useState(false);

    const toggleNavLinks = () => {
        setNavlinksVisible(!navlinksVisible);
    };
    return (
        <nav className="navbar">

            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Escudo_de_la_Universidad_T%C3%A9cnica_de_Ambato.png"
                className="navbar_img"></img>
            <div className="navbar_text">
                <h1>UTA</h1>
                <h2>UNIVERSIDAD TECNICA DE AMBATO</h2>
            </div>

            <div className="MENU_RESPONSIVE" id="container__icons" onClick={toggleNavLinks}>
                <img src={menuHamburguesa} />
            </div>
            <div className={`nav_links ${navlinksVisible ? 'nav_links--show' : ''}`}>
                <a href="#"><Link to="/NuevaReserva">AGREGAR RESERVA</Link></a>
                <a href="#"><Link to="/MapaPisos">MAPA DE PISOS</Link></a>
                <a href="#"><Link to="/MisReservas">MIS RESERVAS</Link></a>
                <a href="#" className="perfil">MI PERFIL</a>
            </div>
        </nav>
    );
}
export default NavBar;
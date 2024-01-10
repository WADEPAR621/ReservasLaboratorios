import React from "react";
import Carrousel from '../carrousel';
import Card from '../card';
import c1 from '../../assets/images/c1.jpg'
import c2 from '../../assets/images/c2.jpg'
import c3 from '../../assets/images/c3.jpg'
import Footer from '../footer';
import NavBar from '../Navbar';

const Inicio = () => {
    // Definir los datos que quieres pasar al componente Card

    return (
        <><NavBar />
        
        <div class="inicio">
            
            <h2 className="title-lab">Reservas de laboratorios</h2>

            <div class="Container desc-carrousel">

                <p class="text-carrousel">Los laboratorios de la Universidad Técnica de Ambato se destacan por su excelencia y modernidad, brindando a los estudiantes un entorno propicio para el aprendizaje práctico y la investigación. Equipados con tecnología de punta, estos espacios de trabajo ofrecen una infraestructura avanzada que cumple con los estándares más exigentes.

La calidad de los laboratorios de la Universidad Técnica de Ambato se refleja en la variedad de disciplinas que abarcan, desde ciencias de la salud hasta ingeniería y tecnología. Cada laboratorio está diseñado para proporcionar a los estudiantes una experiencia de aprendizaje enriquecedora, permitiéndoles aplicar los conocimientos teóricos adquiridos en el aula a situaciones prácticas del mundo real.</p>
                <Carrousel />

            </div>


            <div className="Container">
                <h2>Te ofrecemos: </h2>
                <div class="row">
                    <div class="col-lg-4 col-sm-6">

                        <Card
                            title={"Innovación para todos"}
                            description={"Los equipos y materiales de última generación disponibles en estos laboratorios permiten a los estudiantes realizar experimentos de vanguardia, investigaciones innovadoras y proyectos que contribuyen al avance de sus respectivas disciplinas. Además, el compromiso de la universidad con la seguridad y el cumplimiento de normativas garantiza un entorno de trabajo seguro y responsable para todos los usuarios."}
                            img={c1}
                            link={"https://www.uta.edu.ec/"}
                        />
                    </div>

                    <div class="col-lg-4 col-sm-6">

                        <Card
                            title={"Rapidez y Eficiencia"}
                            description={"Las reservas de laboratorios en la Universidad Técnica de Ambato se caracterizan por su enfoque en la rapidez, seguridad y eficiencia, garantizando un proceso fluido y confiable para todos los usuarios. La plataforma de reserva, diseñada con tecnología de vanguardia, permite a los estudiantes y profesores acceder fácilmente a la disponibilidad de los laboratorios y realizar reservas de manera ágil."}
                            img={c2}
                            link={"https://www.uta.edu.ec/"}
                        />
                    </div>

                    <div class="col-lg-4 col-sm-6">

                        <Card
                            title={"Reserva cuando quieras"}
                            description={"La Universidad Técnica de Ambato ha implementado un sistema de horarios para realizar reservas de laboratorios, ofreciendo a estudiantes y profesores una herramienta eficiente y organizada para gestionar el acceso a estos espacios de trabajo especializados. Este sistema busca optimizar la planificación, asegurando la equitativa distribución de recursos y promoviendo la eficiencia en el uso de los laboratorios."}
                            img={c3}
                            link={"https://www.uta.edu.ec/"}
                        />
                    </div>

                </div>

            </div>

            <div>
                <Footer />
            </div>
        </div>
        </>
    );
}

export default Inicio;

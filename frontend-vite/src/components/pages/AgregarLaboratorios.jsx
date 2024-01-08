import React from "react";
import { useEffect, useState } from "react";
import '../../styles/AgregarLaboratorio.css'

const AgregarLaboratorios = () => {

  //VARIABLES
  //VARIABLE DE BARRA DE PROGRESO
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [progress, setProgress] = useState(100);

  const handleCloseModal = () => {
    setShowModal(false);
    setProgress(100); // Reiniciar la barra de progreso
  };

  //VARIABLE TIPO OBJETO DEL NUEVO LABORATORIO
  const [formData, setFormData] = useState({
    edificio: "",
    piso: "",
    nombre: "",
    capacidad: 0,
    tipo: ""
  });
  //USEEFFECT
  useEffect(() => {
    let timer;
    if (showModal) {
      timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress <= 0) {
            clearInterval(timer);
            setShowModal(false);
            return 100;
          }
          return prevProgress - 1;
        });
      }, 30); // La barra de progreso se reduce cada segundo (ajusta según tus necesidades)
    }
    return () => {
      clearInterval(timer);
    };
  }, [showModal]);

  //METODO DE AGREGAR LOS VALORES A LA VARIABLE TIPO OBJETO DEL NUEVO LABORATORIO
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  ////CONTROL DEL SELECT, SI PONE BLOQUE 1 LE SALE PISO 1... Y BLOQUE 2 LE SALE PISO A,B,C...
  let pisosOptions = [];
  if (formData.edificio === "1") {
    pisosOptions = ["Primer", "Segundo", "Tercer"];
  } else if (formData.edificio === "2") {
    pisosOptions = ["Piso A", "Piso B", "Piso C", "Piso D", "Piso E", "Piso F", "Piso G", "Piso H", "Piso I"];
  }

  //ENVIAR A LA BASE DE DATOS
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar si algún campo está vacío o nulo
    if (!formData.edificio || !formData.piso || !formData.nombre || !formData.capacidad) {
      setMessage('No se aceptan valores nulos o vacíos.');
      setShowModal(true);

      setTimeout(() => {
        setMessage("");
        setProgressBarVisible(false);
      }, 5000); // Ocultar mensaje después de 5 segundos
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Floor_id: formData.piso,
          NOM_HAB: formData.nombre,
          TIP_HAB: formData.tipo,
          CAP_HAB: formData.capacidad,
          edificio_id : formData.edificio
        }),
      });

      if (response.ok) {
        setMessage("Laboratorio creado correctamente.");
        setProgressBarVisible(true);

        setTimeout(() => {
          setMessage("");
          setProgressBarVisible(false);
        }, 5000); // Ocultar mensaje después de 5 segundos
      } else {
        setMessage("Error al guardar los datos.");
        setProgressBarVisible(true);

        setTimeout(() => {
          setMessage("");
          setProgressBarVisible(false);
        }, 5000); // Ocultar mensaje después de 5 segundos
      }
    } catch (error) {
      setMessage("Error al enviar la solicitud.");
      setProgressBarVisible(true);

      setTimeout(() => {
        setMessage("");
        setProgressBarVisible(false);
      }, 5000); // Ocultar mensaje después de 5 segundos
    }
  };

  //RETURN DE LA BASE DE DATOS
  return (
    <div className="FormLab">
      <h3>Agregar Laboratorio</h3>
      <div className="AgregarLaboratorio containerNewLab">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Edificio">Edificio</label>
            <select
              className="form-select"
              name="edificio"
              aria-label="Default select example"
              onChange={handleInputChange}
            >
              <option value="DefaultTime" disabled selected>Selecciona una opción</option>
              <option value="1">Primer Bloque</option>
              <option value="2">Segundo Bloque</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Tipo">Tipo</label>
            <select
              className="form-select"
              name="ipo"
              aria-label="Default select example"
              onChange={handleInputChange}
            >
              <option value="DefaultTime" disabled selected>Selecciona una opción</option>
              <option value="Administracion">Administracion</option>
              <option value="Laboratorio">Laboratorio</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              className="form-control"
              id="nombre"
              onChange={handleInputChange}
              placeholder="Nombre"
            />
          </div>
          <div className="form-group">
            <label htmlFor="piso">Piso</label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="piso"
              onChange={handleInputChange}
            >
              <option value="" disabled selected>
                Selecciona una opción
              </option>
              {pisosOptions.map((piso, index) => (
                <option key={index} value={piso}>
                  {piso}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="capacidad">Capacidad</label>
            <input
              type="number"
              name="capacidad"
              min={0}
              max={60}
              className="form-control"
              onChange={handleInputChange}
              id="capacidad"
              placeholder="Capacidad"
            />
          </div>
          <div className="Agregarbtn">
            <button type="submit" className="btn btn-light">
              Agregar
            </button>
          </div>
        </form>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-btn" onClick={handleCloseModal}>
                &times;
              </span>
              <p>{message}</p>
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgregarLaboratorios;

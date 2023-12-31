import React from "react";
import Calendar from './calendar'
import Combobox from "./combobox";

const ReservationCard = () => {
    return (
        <div class="col-lg-6 col-sm-12 add-reservation">
            <h3>Agregar Reserva</h3>
            <Combobox />
            <h3>Seleccione el día</h3>
            <Calendar />
            <button type="button" class="btn btn-success">Agregar Reserva</button>

        </div>
    )
}

export default ReservationCard;
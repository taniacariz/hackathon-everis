import React, { useState } from "react";
import "./booking.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormContext } from "../../context/form-context";
import GoForwardArrow from "../home/Go-foward-arrow";

const DateBooking = ({ dispatch }) => {
  const { next } = React.useContext(FormContext);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="container">
      <div className="date-container">
        <div className="title-workspace">Bienvenido/a a Everis SMM</div>
        <p>Selecciona la fecha en la que quieres realizar tu reserva:</p>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <button className="btn-confirm" onClick={() => dispatch(Date())}>
          Confirmar
        </button>
      </div>
      <div className="arrow-next">
        <GoForwardArrow action={next} />
      </div>
    </div>
  );
};

export default DateBooking;

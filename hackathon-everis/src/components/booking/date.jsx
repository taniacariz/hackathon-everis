import React, { useState } from "react";
import "./booking.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormContext } from "../../context/form-context";
import GoForwardArrow from "../home/Go-foward-arrow";

const DateBooking = ({ dispatch }) => {
  const { next } = React.useContext(FormContext);
  const [startDate, setStartDate] = useState(new Date());
  const date = new Date(startDate);
  const finaldate =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  return (
    <div className="container">
      <div className="date-container">
        <div className="title-booking">Bienvenido/a a Everis SMM</div>
        <p>Ingresa los siguientes datos para realizar tu reserva:</p>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateformat="dd/MM/yyyy"
          minDate={new Date()}
        />
        <button className="btn-confirm" onClick={() => dispatch(finaldate)}>Confirmar</button>
      </div>
      <div className="arrow-next">
        <GoForwardArrow action={next} />
      </div>
    </div>
  );
};

export default DateBooking;

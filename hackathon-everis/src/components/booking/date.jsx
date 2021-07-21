import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./date.css";
import { FormContext } from "../../context/form-context";
import GoForwardArrow from "../home/Go-foward-arrow";

const DateBooking = ({ dispatch }) => {
  const { next } = React.useContext(FormContext);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="dateViewContainer">
      <h1>Bienvenido/a a Everis SMM</h1>
      <p>Ingresa los siguientes datos para realizar tu reserva:</p>

      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateformat='dd/MM/yyyy'
        minDate={new Date()}
      />
      <button onClick={() => dispatch(startDate)}>Confirmar</button>


        <GoForwardArrow action={next} />{" "}

    </div>
  );
};

export default DateBooking;

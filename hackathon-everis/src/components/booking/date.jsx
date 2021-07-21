import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./date.css";
import { FormContext } from "../../context/FormContext";
import GoForwardArrow from "../home/GoFowardArrow";

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
      />
      <button onClick={() => dispatch(Date())}>Confirmar</button>


        <GoForwardArrow action={next} />{" "}

    </div>
  );
};

export default DateBooking;

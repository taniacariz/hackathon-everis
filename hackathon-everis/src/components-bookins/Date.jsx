import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Date.css"

const DateBooking = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className = 'DateBooking'>
      <h>Bienvenido/a a Everis SMM</h>
      <p>Ingresa los siguientes datos para realizar tu reserva:</p>

      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default DateBooking;

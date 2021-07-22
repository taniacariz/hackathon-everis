import React from "react";
import { db } from "../../Firebase.js";
import ReturnArrow from "../home/Return-arrow";
import "./booking.css";

const Confirm = ({ data }) => {
  const data1 = data;
  const addBooking = async () => {
    try {
      const newBooking = {
        area: data1.area,
        date: data1.date,
        quantity: data1.quantity,
        timeblock: data1.timeblock,
      };
      console.log(newBooking);
      const dataBooking = await db.collection("bookings").add(newBooking);
      alert("Su reserva fue realizada con éxito");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="date-container">
        <h1>Verifica los datos de tu visita a continuación:</h1>
        <p>
          Tu reserva de trabajo será programado para el día {data.date}
          en el {data.timeblock} para {data.quantity} personas en el area
          {data.area.area}.
        </p>
        <button onClick={addBooking}>Confirmación</button>
      </div>
      <div className="arrow-back">
        <ReturnArrow />
      </div>
    </div>
  );
};

export default Confirm;

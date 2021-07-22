import React from "react";
import { db } from "../../Firebase.js";
import ReturnArrow from "../home/Return-arrow";
import "./booking.css";

const Confirm = ({ data }) => {
  const {displayName} = JSON.parse(localStorage.getItem("user") || "{}")
  const data1 = data;
  const addBooking = async () => {
    console.log(data1);
    try {
      const newBooking = {
        area: data1.area,
        date: data1.date,
        quantity: data1.quantity,
        timeblock: data1.timeblock,
        userName: displayName
      };
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
        <div className="confirm-text">
          Tu reserva de trabajo fue programada para el día {data.date + " "} 
          durante el {data.timeblock + " "} para {data.quantity + " "} personas en el área de trabajo 
          {" " + data.area.area} .
        </div>
        <button className="btn-confirm" onClick={addBooking}>Confirmación</button>
      </div>
      <div className="arrow-back">
        <ReturnArrow />
      </div>
    </div>
  );
};

export default Confirm;

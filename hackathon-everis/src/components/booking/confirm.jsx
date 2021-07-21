import React from "react";
import { auth } from "../../Firebase.js";
import ReturnArrow from "../home/Return-arrow";

const Confirm = ({ data }) => {
  return (
    <div>
      <h1>Verifica los datos de tu visita a continuación:</h1>
      <p>
        Tu bloque de trabajo será programado para el día {data.date}
        en el horario {data.timeblock} para {data.quantity} persona en el area{" "}
        {data.area.area}
      </p>
      <button onClick={() => console.log(data)}>Confirmar</button>
      <ReturnArrow />
    </div>
  );
};

export default Confirm;

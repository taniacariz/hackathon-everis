import React from "react";
import { auth } from "../../Firebase.js";
import ReturnArrow from "../home/Return-arrow";

const Confirm = ({ data }) => {
  console.log (data.date )
  return (
    <div>
      <h1>Verifica los datos de tu visita a continuación:</h1>
        <p>
          Tu reserva de trabajo será programado para el día {data.date}
        en el {data.timeblock} para {data.quantity} personas en el area {data.area.area}
        
      </p>
      <button onClick={() => console.log(data)}>Confirmar</button>
      <ReturnArrow />
    </div>
  );
};

export default Confirm;

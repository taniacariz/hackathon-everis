import React from "react";
import "./booking.css";
import ReturnArrow from "../home/Return-arrow";

const Confirm = ({ data }) => {
  return (
    <div className="container">
      <div className="date-container">
        <button onClick={() => console.log(data)}>Veo Data</button>
        Estas en confirmacion
      </div>
      <div className="arrow-back">
        <ReturnArrow />
      </div>
    </div>
  );
};

export default Confirm;

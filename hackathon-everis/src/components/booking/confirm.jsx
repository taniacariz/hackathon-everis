import React from "react";
import ReturnArrow from "../home/Return-arrow";


const Confirm = ({ data }) => {
  return (
    <div>
      <button onClick={() => console.log(data)}>Veo Data</button>
      Estas en confirmacion
      <ReturnArrow />
    </div>
  );
};

export default Confirm;

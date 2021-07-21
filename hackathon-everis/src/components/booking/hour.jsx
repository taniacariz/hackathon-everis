import React from "react";
import { FormContext } from "../../context/form-context";
import GoForwardArrow from "../home/Go-foward-arrow";
import ReturnArrow from "../home/Return-arrow";

const Hour = ({ dispatch }) => {
  const { prev, next } = React.useContext(FormContext);
  return (
    <div>
      <button onClick={() => dispatch("12:00")}>Agrego Hora</button>
      Estas en hora
      <ReturnArrow action={prev} />
      <GoForwardArrow action={next} />
    </div>
  );
};

export default Hour;

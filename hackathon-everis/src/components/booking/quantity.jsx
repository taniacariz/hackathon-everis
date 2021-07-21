import React from "react";
import { FormContext } from "../../context/form-context";
import GoForwardArrow from "../home/Go-foward-arrow";
import ReturnArrow from "../home/Return-arrow";

const Quantity = ({ dispatch }) => {
  const { prev, next } = React.useContext(FormContext);
  return (
    <div>
      <button onClick={() => dispatch(2)}>Agrego Cantidad</button>
      Estas en Cantidad
      <ReturnArrow action={prev} />
      <GoForwardArrow action={next} />
    </div>
  );
};

export default Quantity;
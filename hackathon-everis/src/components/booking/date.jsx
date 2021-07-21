import React from "react";
import { FormContext } from "../../context/form-context";
import GoForwardArrow from "../home/Go-foward-arrow";

const Date = ({ dispatch }) => {
  const { next } = React.useContext(FormContext);
  return (
    <div className="dateViewContainer">
      <button onClick={() => dispatch("2021-07-20")}>Agrego Fecha</button>
      estas en fecha
      <GoForwardArrow action={next} />  
    </div>
  );
};

export default Date;

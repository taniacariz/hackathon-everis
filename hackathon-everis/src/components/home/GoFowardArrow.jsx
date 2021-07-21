import React from "react";
import goFowardArrow from "../../images/go-forward.png";

const GoForwardArrow = ({ action }) => {
  return (
    <div>
      <div>
        <span>Siguiente</span>
        <img src={goFowardArrow} alt="Ir adelante" onClick={action} />
      </div>
    </div>
  );
};

export default GoForwardArrow;

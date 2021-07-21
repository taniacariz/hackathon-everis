import React from "react";
import goFowardArrow from "../../images/go-forward.png";

const GoForwardArrow = ({ action }) => {
  return (
    <div className="container-arrow">
      <span>Siguiente</span>
      <img src={goFowardArrow} alt="Adelante" onClick={action} />
    </div>
  );
};

export default GoForwardArrow;

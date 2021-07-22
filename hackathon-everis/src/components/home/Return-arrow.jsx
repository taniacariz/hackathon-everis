import React from "react";
import ArrowImage from "../../images/return.png";

const ReturnArrow = ({ action }) => {
  return (
    <div className="container-arrow-back">
      <img src={ArrowImage} alt="Volver" onClick={action} />
      <span>Atrás</span>
    </div>
  );
};

export default ReturnArrow;

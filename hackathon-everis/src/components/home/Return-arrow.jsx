import React from "react";
import ArrowImage from "../../images/return.png";

const ReturnArrow = ({ action }) => {
  return (
    <div>
      <div>
        <img src={ArrowImage} alt="Ir atras" onClick={action} />
        <span>Atrás</span>
      </div>
    </div>
  );
};

export default ReturnArrow;

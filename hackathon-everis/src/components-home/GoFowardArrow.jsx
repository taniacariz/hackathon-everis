import React from "react";
import goFowardArrow from "../images/go-forward.png";
import stepContext from "../context/stepContext";

const GoForwardArrow = () => {
  const { step, updateStep } = React.useContext(stepContext);
  const forwardStep = () => {
    updateStep(step + 1);
  };

  return (
    <div>
      <div>
        <span>Siguiente</span>
        <img src={goFowardArrow} alt="Ir adelante" onClick={forwardStep} />
      </div>
    </div>
  );
};

export default GoForwardArrow;

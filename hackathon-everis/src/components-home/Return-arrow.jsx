import React from "react";
import returnImg from "../images/return.png";
import stepContext from "../context/stepContext";

const ReturnArrow = () => {
  const { step, updateStep } = React.useContext(stepContext);
  const changeStep = () => {
    if (step === 1) {
      updateStep(1);
    } else {
      updateStep(step - 1);
    }
  };

  return (
    <div>
      <div>
        
        <img src={returnImg} alt="Ir atras" onClick={changeStep} />
        <span>Atrás</span> 
      </div>
    </div>
  );
};

export default ReturnArrow;

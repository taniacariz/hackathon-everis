import { useState } from "react";

 function UseForm() {
  const [step, setStep] = useState(1);

  const prev = () => {
    if (step === 1) {
      setStep(1)
    } else if (step) setStep(step - 1);
  };

  const next = () => {
    setStep(step ? step + 1 : 1);
  };

  const changeStep = (value) => {
    setStep(value)
  };

  return { step, prev, next, changeStep };
}
export default UseForm 
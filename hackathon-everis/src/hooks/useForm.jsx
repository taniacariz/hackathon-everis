import { useState } from "react";

export default function useForm() {
  const [step, setStep] = useState(0);

  const prev = () => {
    if (step) setStep(step - 1);
  };

  const next = () => {
    setStep(step ? step + 1 : 1);
  };

  return { step, prev, next };
}

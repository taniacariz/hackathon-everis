import React, { useContext, useReducer } from "react";
import NavTop from "../components/home/NavTop";
import Date from "../components/booking/date";
import Hour from "../components/booking/hour";
import Workspace from "../components/booking/WorkSpace";
import { FormContext } from "../context/FormContext";
import Confirm from "../components/booking/confirm";


const renderCurrentPage = (step, formData, dispatch) => {
  switch (step) {
    case 1:
      return <Date dispatch={(value) => dispatch({ date: value })} />;
    case 2:
      return (
        <Hour
          dispatch={(value) => dispatch({ timeblock: value })}
          dispatch2={(value) => dispatch({ quantity: value })}
        />
      );
    case 3:
      return <Workspace dispatch={(value) => dispatch({ area: value })} data= {formData} />;
    case 4:
      return <Confirm data={formData} />;
    default:
      return null;
  }
};

const formReducer = (state, action) => ({ ...state, ...action });

export default function Bookings() {
  const { step } = useContext(FormContext);
  const [formData, dispatchForm] = useReducer(formReducer, {});

  return (
    <div className="booking-container">
      <NavTop />
      {renderCurrentPage(step, formData, dispatchForm)}
    </div>
  );
}

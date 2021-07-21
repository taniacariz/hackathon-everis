import React, { useContext, useReducer } from "react";
import GoForwardArrow from "../components/home/Go-foward-arrow";
import NavTop from "../components/home/NavTop";
import Date from "../components/booking/date";
import Hour from "../components/booking/hour";
import Quantity from "../components/booking/quantity";
import Workspace from "../components/booking/work-space";
import Confirm from "../components/booking/confirm";
import { FormContext } from "../context/form-context";
import ReturnArrow from "../components/home/Return-arrow";

const renderCurrentPage = (step, formData, dispatch) => {
  switch (step) {
    case 1:
      return <Date dispatch={(value) => dispatch({ date: value })} />;
    case 2:
      return <Hour dispatch={(value) => dispatch({ timeblock: value })} />;
    case 3:
      return <Quantity dispatch={(value) => dispatch({ quantity: value })} />;
    case 4:
      return <Workspace dispatch={(value) => dispatch({ area: value })} />;
    case 5:
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

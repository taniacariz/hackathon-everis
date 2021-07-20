import React from "react";
import NavTop from "../components-home/NavTop";
import GoForwardArrow from "../components-home/GoFowardArrow";
import ReturnArrow from "../components-home/Return-arrow";
import Date from "../components-bookins/Date"
import Hour from "../components-bookins/Hour"
import Quantity from "../components-bookins/Quantity"
import WorkSpace from "../components-bookins/WorkSpace"
import Confirm from "../components-bookins/Confirm"


const Bookings = (props) => {
 
  const stepNumber = props.action;  
  console.log (stepNumber)
  const changeViewForm = () => {
    if (stepNumber === 1) {
      return <Date />
    } else if (stepNumber === 2){
      return <Hour />
    }else if (stepNumber === 3){
      return <Quantity />
    }else if (stepNumber === 4){
      return <WorkSpace />
    }else if (stepNumber === 5){
      return <Confirm />
    }
  };

  return (
    <div className="booking-container">
      <NavTop />
      {changeViewForm()}
    </div>
  );
};

export default Bookings;

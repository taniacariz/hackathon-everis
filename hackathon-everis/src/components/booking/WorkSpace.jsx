/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./booking.css";
import GoForwardArrow from "../home/GoForwardArrow";
import ReturnArrow from "../home/Return-arrow";
import json from "../../Area.json";
import { FormContext } from "../../context/FormContext";

const WorkSpace = ({ dispatch }) => {
  const { prev, next } = React.useContext(FormContext);
  const [selectedArea, setSelectedArea] = useState("");

  useEffect(() => {
    if (selectedArea) dispatch(json.Work.find(({ id }) => id === selectedArea));
  }, [selectedArea]);

  return (
    <div className="container">
      <div className="date-container">
        <div className="title-booking">Selecciona la zona de trabajo</div>
        <img
          className="container-plano"
          src="https://firebasestorage.googleapis.com/v0/b/reactivegirls.appspot.com/o/Plano.jpg?alt=media&token=f5bdf008-687c-4e20-9373-cf4cf1835f21"
          alt="Plano"
        />
        <div className="container-add">
          <button class="btn-add" onClick={() => dispatch(json.Work[0])}>Agregar</button>
          <select class="bnt-selecttwo" onChange={(e) => setSelectedArea(e.currentTarget.value)}>
            {json.Work.map(({ id, area }) => (
              <option key={id} value={id}>
                {area}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="order-arrow">
        <ReturnArrow action={prev} />
        <GoForwardArrow action={next} />
      </div>
    </div>
  );
};

export default WorkSpace;

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./booking.css";
import { FormContext } from "../../context/form-context";
import GoForwardArrow from "../home/Go-foward-arrow";
import ReturnArrow from "../home/Return-arrow";
import json from "../../Area.json";

const WorkSpace = ({ dispatch }) => {
  const { prev, next } = React.useContext(FormContext);
  const [selectedArea, setSelectedArea] = useState("");

  useEffect(() => {
    if (selectedArea) dispatch(json.Work.find(({ id }) => id === selectedArea));
  }, [selectedArea]);

  return (
    <div className="container">
      <div className="container-workspace">
        <div className="title-workspace">Selecciona la zona de trabajo</div>
        <img
          className="container-plano"
          src="https://firebasestorage.googleapis.com/v0/b/reactivegirls.appspot.com/o/Plano.jpg?alt=media&token=f5bdf008-687c-4e20-9373-cf4cf1835f21"
          alt="Plano"
        />
        <button onClick={() => dispatch(json.Work[0])}>Agregar</button>
        <select onChange={(e) => setSelectedArea(e.currentTarget.value)}>
          {json.Work.map(({ id, area }) => (
            <option key={id} value={id}>
              {area}
            </option>
          ))}
        </select>
        Estas en zona laboral
      </div>
      <div className="order-arrow">
        <ReturnArrow action={prev} />
        <GoForwardArrow action={next} />
      </div>
    </div>
  );
};

export default WorkSpace;
